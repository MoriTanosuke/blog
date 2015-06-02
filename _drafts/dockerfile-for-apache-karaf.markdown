---
title: 'Dockerfile for clustered Apache Karaf'
layout: post
---

Today I wanted to create a [Dockerfile for Apache Karaf][0] because I
want to experiment with the clustering feature.

	FROM	debian:wheezy

	ENV	DEBIAN_FRONTEND noninteractive 
	# cellar clustering
	#EXPOSE	5701
	# expose hazelcast management
	EXPOSE	8080
	# karaf ssh
	EXPOSE	8101
	# webconsole
	EXPOSE	8181
	VOLUME	['/data/karaf-data']

	RUN	apt-get update -y && apt-get install -y wget openjdk-7-jdk
	RUN	mkdir -p /data/karaf-data && cd /data && wget -q http://mirror.tcpdiag.net/apache/karaf/3.0.3/apache-karaf-3.0.3.tar.gz && tar xzf apache-karaf-3.0.3.tar.gz

	COPY	org.apache.karaf.features.cfg /data/apache-karaf-3.0.3/etc/org.apache.karaf.features.cfg
	COPY	system.properties /data/apache-karaf-3.0.3/etc/system.properties
	COPY	hazelcast.xml /data/apache-karaf-3.0.3/etc/hazelcast.xml

	CMD	/data/apache-karaf-3.0.3/bin/karaf server


[0]: https://github.com/MoriTanosuke/karaf-failover/blob/master/karaf/Dockerfile

