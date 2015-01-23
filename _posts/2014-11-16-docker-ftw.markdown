---
title: 'Docker FTW!'
date: 2014-11-16 00:00:00 
tags: grafana,docker,statsd
layout: post
---
The past few days I was playing around with [Docker][8] to set up a small testbed with [ActiveMQ][0], [StatsD][1] and [Grafana][2]. I want to test how to collect metrics from [Apache Camel][7] routes and display them via a webfrontend in nice graphcs. That's exactly what *Grafana* is doing best.

I started with running [a few ActiveMQ instances via Docker][4]. Then I created a simple Camel application using `camel-archetype-activemq` and modified it to write a random amount of messages into my already running ActiveMQ instances using the [failover Transport][6].

Now, to the installation of *Grafana*. To avoid jumping through all the hoops, I decided to spin up another *Docker* container using [kamon-ios Grafana image][9]. But I ran into some problems when I tried to add a new dashboard to *Grafana* and add my counters to a panel. I opened [an issue][10], but I already found a workaround for myself: I upgraded the [Dockerfile][11] to use *Grafana* 1.8.1, the latest version and it fixed my problems. If you have similar problems, try to replace the following lines in the *Dockerfile* and rebuild the image:

    # Install & Patch Grafana
    RUN     mkdir /src/grafana &&\
            git clone https://github.com/grafana/grafana.git /src/grafana &&\
            cd /src/grafana &&\
            git checkout v1.8.1
    
    #ADD     ./grafana/correctly-show-urlencoded-metrics.patch /src/grafana/correctly-show-urlencoded-metrics.patch
    #RUN     git apply /src/grafana/correctly-show-urlencoded-metrics.patch --directory=/src/grafana                                         &&\
    RUN        cd /src/grafana &&\
               npm install &&\
               npm install -g grunt-cli &&\
               grunt build 

What I did here is checking out *v1.8.1* of *Grafana* and then *not* applying the patch that tried to fix an issue with urlencoded metrics, that was applied to the sources before building *Grafana*. I hope I get a response on my issue, if this is causing problems - but maybe it's just my local setup...

Anyhow, after working around this little issue, I was able to send metrics into *statsd* from my Camel route. From Zero to having 2 ActiveMQ instances, a *StatsD*-*Graphite*-*Grafana* stack running and my Camel route reporting metrics it took me about 2 hours - not counting the fix to the Dockerfile. That's why I think Docker is here to stay.

Everyone likes screenshots, so here is one of the graph I got on *Grafana*. :)

<center><a href="https://www.flickr.com/photos/cringe/15799269551" title="Camel Route using ActiveMQ and sending Metrics into Statsd, displayed in Grafana by Carsten Ringe, on Flickr"><img src="https://farm8.staticflickr.com/7493/15799269551_b080aa5c1c_z.jpg" width="640" height="281" alt="Camel Route using ActiveMQ and sending Metrics into Statsd, displayed in Grafana"></a></center>

[0]: https://activemq.apache.org/
[1]: https://activemq.apache.org/
[2]: http://grafana.org/
[3]: https://github.com/kamon-io/docker-grafana-graphite
[4]: https://github.com/noelo/amq-docker
[5]: https://camel.apache.org/camel-maven-archetypes.html
[6]: https://activemq.apache.org/failover-transport-reference.html
[7]: https://camel.apache.org/
[8]: https://docker.com/
[9]: https://github.com/kamon-io/docker-grafana-graphite
[10]: https://github.com/kamon-io/docker-grafana-graphite/issues/11
[11]: http://docs.docker.com/reference/builder/

