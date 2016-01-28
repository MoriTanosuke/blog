---
layout: post
title: 'Building an ELK stack with docker-compose'
tags: docker
---
Because I have a hard time searching logfiles during development (I like to run everything on *DEBUG*), I decided to build myself an ELK stack ([elasticsearch][0], [logstash][1] and [kibana][2]) to throw all my logs into and have a nice UI to search for a special log message.

Fortunately there are official [docker][6] images for these tools:

* [https://hub.docker.com/_/elasticsearch/][3]
* [https://hub.docker.com/_/logstash/][4]
* [https://hub.docker.com/_/kibana/][5]

So, everything is easily available, I just needed to figure out how to glue it together.

Because I'm not interested in storing the data over a long period of time, I don't care about the setup of the *elasticsearch* engine. When I'm done developing or debugging things, I want to throw away everything and start with a clean environment. So I don't store anything outside of the docker containers and I don't want to write any *Dockerfiles* myself.

The way to go is a simple *docker-compose.yml* which I can start with a single command and have everything set up to accept log messages from my *java* applications. So, here we go:

<pre>
elasticsearch:
  image: elasticsearch
  ports:
  - 9200:9200
logstash:
  image: logstash:latest
  links:
  - elasticsearch:elasticsearch
  ports:
  - 12201:12201
  command: logstash agent --debug -e 'input { log4j { mode => "server" port => "12201"} } output { elasticsearch { hosts => ["elasticsearch"] } stdout {} }'
kibana:
  image: kibana
  links:
  - elasticsearch:elasticsearch
  ports:
  - 5601:5601
  environment:
  - ELASTICSEARCH_URL=http://elasticsearch:9200
</pre>

As you can see, I only use *image*s - no custom *Dockerfile* needed. I also put the configuration for *logstash* and *kibana* into the *docker-compose.yml*, so when I use another computer (and I do that often) I can just copy this one file, run `docker-compose up`, open http://localhost:5601 and get going.

I also exposed port 12201 on the *logstash* host to be able to send log messages from locally running applications. I modified my *log4j.properties* and added a new appender named *logstash* with the following configuration:

<pre>
log4j.rootLogger=INFO,logstash
...
log4j.appender.logstash=org.apache.log4j.net.SocketAppender
log4j.appender.logstash.port=12201
log4j.appender.logstash.remoteHost=127.0.0.1
</pre>

The `org.apache.log4j.net.SocketAppender` comes from the default *log4j* installation, so no funky external dependencies needed. Just add those lines when deploying locally and the application will log to my *ELK* stack.

I tried to use [docker networks][7], but *logstash* acted up and I think it does not particularly like underscores in the *elasticsearch* hostname. Unfortunately, *docker-compose* will generate hostnames with underscores, so I had to stick with the old way and use [links][8]. If you have any insight how to use a *network*, please get in touch.

[0]: https://www.elastic.co/products/elasticsearch
[1]: https://www.elastic.co/products/logstash
[2]: https://www.elastic.co/products/kibana
[3]: https://hub.docker.com/_/elasticsearch/
[4]: https://hub.docker.com/_/logstash/
[5]: https://hub.docker.com/_/kibana/
[6]: https://docker.com/
[7]: https://docs.docker.com/engine/userguide/networking/dockernetworks/
[8]: https://docs.docker.com/compose/compose-file/#links
