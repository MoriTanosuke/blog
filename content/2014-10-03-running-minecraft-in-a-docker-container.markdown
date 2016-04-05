---
title: 'Running Minecraft in a Docker container'
date: "2014-10-03"
tags: minecraft software
layout: post
---
If you ever want to run a minecraft server, but you don't want to add all the Java and minecraft files directly to your servers filesystem, you can use the following [Dockerfile][0]:

    FROM google/debian:wheezy
    RUN apt-get -y update
    RUN apt-get -y install openjdk-7-jre-headless wget
    RUN wget https://s3.amazonaws.com/Minecraft.Download/versions/1.8/minecraft_server.1.8.jar
    EXPOSE 25565
    RUN echo eula=true > eula.txt
    CMD ["java", "-jar", "minecraft_server.1.8.jar"]

You can then build a [Docker][1] container with the following command:

    sudo docker build .

After that, you have a Minecraft 1.8 server running and you can connect to *127.0.0.1:25565* with your Minecraft client. Enjoy!

[0]: https://docs.docker.com/reference/builder/
[1]: https://docker.com/

