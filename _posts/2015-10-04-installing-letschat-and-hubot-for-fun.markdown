---
layout: post
title: "Installing Lets Chat and Hubot for fun"
---

Today I decided to give [Let's Chat][0] a go (after an installation debacle with [Zulip][1]) and it was a breeze. Then I decided that I want a [Hubot][2] to take my commands, if nobody else is listening to me. That was a bit more complicated, but right now I'm runing my own instance of [Let's Chat][0] with a [Hubot][2] taking commands from my via chat. The bot is not doing something, but I have plans to give it a bit more autonomy. Anyway, here's what I did:

Install Let's Chat via Docker
-----------------------------

This one is simple with the [official Dockerfile][3]. Just run the following commands:

    # first start a mongodb
    docker run --name some-mongo -d mongo
    docker run  --name some-letschat --link some-mongo:mongo -p 8080:8080 -p 5222:5222 -d sdelements/lets-chat

Wait a couple of seconds and open http://localhost:8080, you should see the Login for [Let's Chat][0].

Generate a Hubot instance
-------------------------

I didn't want to pollute my system with all those NodeJS stuff, so I decided to use a pre-built container with [Yeoman][4] to generate my [Hubot][2].

    docker run --rm -it -v $(pwd):/backup pulse00/yeoman bash

Now I was in the yeoman container and could install and run the `generator-hubot`:

    npm install -g generator-hubot
    cd /backup
    yo hubot

I switched to directory */backup* to generate my hubot sources to my real harddrive. [Yeoman][4] asked for some settings and happily generated the bot:

````
# ls -la
total 108
drwxr-xr-x  5 1000 1000 4096 Oct  4 06:09 .
drwxr-xr-x 26 root root 4096 Oct  4 06:09 ..
-rw-r--r--  1 root root  197 Oct 22  2014 .editorconfig
-rw-r--r--  1 root root   39 Dec 19  2014 .gitignore
-rw-r--r--  1 root root   28 Oct  4 06:09 Procfile
-rw-r--r--  1 root root 7811 Oct  4 06:09 README.md
drwxr-xr-x  2 root root 4096 Oct  4 06:09 bin
-rw-r--r--  1 root root  213 Oct  4 06:09 external-scripts.json
-rw-r--r--  1 root root    2 Oct  4 06:09 hubot-scripts.json
drwxr-xr-x 16 root root 4096 Oct  4 06:09 node_modules
-rw-r--r--  1 root root  642 Oct  4 06:10 package.json
drwxr-xr-x  2 root root 4096 Oct  4 06:09 scripts
````

I exited from the container and added the generated hubot to my git repository. Then I created a simple Dockerfile to run the hubot inside a container:

````
FROM	pulse00/yeoman

WORKDIR	/opt/bot

ENV	HUBOT_LCB_TOKEN=my-token-goes-here HUBOT_LCB_ROOMS=room-id-copied-from-URL-goes-here HUBOT_LCB_PROTOCOL=http HUBOT_LCB_HOSTNAME=localhost HUBOT_LCB_PORT=1234  

ADD	src /opt/bot

CMD	["bin/hubot", "-a", "lets-chat"]
````

The *HUBOT_LCB_TOKEN* was taken from the hubot account in my [Let's Chat][0] instance and the *HUBOT_LCB_ROOMS* ID was taken from the URL after joining the room on my instance. After that I can run the container and my hubot instance connects to the chat room.

[0]: https://github.com/sdelements/lets-chat
[1]: https://www.zulip.org/
[2]: https://hubot.github.com/docs/
[3]: https://hub.docker.com/r/sdelements/lets-chat/
[4]: http://yeoman.io/

