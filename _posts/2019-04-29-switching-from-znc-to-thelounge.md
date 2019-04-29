---
layout: post
title: "Switching from ZNC to TheLounge"
featured_image: /images/thelounge-screenshot.png
tags: software
categories: software
---
I'm still using [IRC][0] (yes, I'm the one) and previously I installed [Hexchat][1]
on all my machines and [ZNC][2] on my server to connect to my favorite networks and
channels. But it's not always possible to install an application nor run the
portable app from my USB stick. I didn't want to use a hosted service like [irccloud][3]
neither, so I set out to find an alternative.

![]({{ site.baseurl }}/images/thelounge-screenshot.png)

Luckily a user on mastodon called [muesli][4] pointed me to the project [thelounge][5],
which aims to provide an self-hostable application similar to *irccloud*.

Here's a simple [`docker-compose.yml`][7] to start the application up:

````
version: '3'

services:
  thelounge:
    image: thelounge/thelounge:latest
    ports:
      - "9000:9000"
    restart: always
    volumes:
      - thelounge:/var/opt/thelounge # bind lounge config from the host's file system

  volumes:
    thelounge:
````

Personally I don't use the exposed port, because I run everything behind a reverse
proxy on my installation, but if you run this locally, you can now access
*thelounge* at [http://localhost:9000][6].

[0]: https://en.wikipedia.org/wiki/Internet_Relay_Chat
[1]: https://hexchat.github.io/
[2]: https://wiki.znc.in/ZNC
[3]: https://www.irccloud.com/
[4]: https://mastodon.social/@fribbledom
[5]: https://thelounge.chat/
[6]: http://localhost:9000
[7]: https://docs.docker.com/compose/
