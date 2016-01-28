---
layout: post
title: 'Updating my ELK stack with GELF appender'
tags: docker
---

A couple of days ago I wrote about [setting up an ELK stack with *docker-compose*][0]. I did some small changes to the set up, so I thought it's worth an update.

First change is in the *docker-compose.yml* to enable [logstashs gelf input][1], move the *Log4j* socket to port 12202 and add an UDP port forwarding for docker on port 12201:

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
  - 12201:12201/udp
  - 12202:12202
  command: logstash agent -e 'input { gelf { port => "12201" } log4j { mode => "server" port => "12202"} } output { elasticsearch { hosts => ["elasticsearch"] } }'
kibana:
  image: kibana
  links:
  - elasticsearch:elasticsearch
  ports:
  - 5601:5601
  environment:
  - ELASTICSEARCH_URL=http://elasticsearch:9200
</pre>

This way, logstash will listen to ports 12201 with the *gelf* input and port 12202 with the *Log4j* socket input.

Now I modified the *log4j.properties* for my application and replaced the *Log4j* `SocketAppender` with a `biz.paluch.logging.gelf.log4j.GelfLogAppender`:

<pre>
log4j.appender.gelf=biz.paluch.logging.gelf.log4j.GelfLogAppender
log4j.appender.gelf.Threshold=INFO
log4j.appender.gelf.Host=udp:127.0.0.1
log4j.appender.gelf.Port=12201
#log4j.appender.gelf.Version=1.1
#log4j.appender.gelf.Facility=java-test
log4j.appender.gelf.ExtractStackTrace=true
log4j.appender.gelf.FilterStackTrace=true
log4j.appender.gelf.MdcProfiling=true
log4j.appender.gelf.TimestampPattern=yyyy-MM-dd HH:mm:ss,SSSS
log4j.appender.gelf.MaximumMessageSize=8192

# This are static fields
log4j.appender.gelf.AdditionalFields=environment=local
</pre>

The *gelf* appender is much more configurable and the search abilities in logstash are now a bit more useful to me. But I have to add another dependency to my application now:

<pre>
<dependency>
    <groupId>biz.paluch.logging</groupId>
    <artifactId>logstash-gelf</artifactId>
    <version>1.8.0</version>
</dependency>
</pre>

You can find the documentation at [https://github.com/mp911de/logstash-gelf][2].

[0]: {% post_url 2016-01-26-building-an-elk-stack-with-docker-compose %}
[1]: https://www.elastic.co/guide/en/logstash/current/plugins-inputs-gelf.html
[2]: https://github.com/mp911de/logstash-gelf
