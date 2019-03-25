---
layout: post
title: 'Minimal Docker image for DokuWiki'
tags: docker linux selfhosting
---

Yesterday I upgraded my Docker setup from v1.5 to v.10. I had to do a full *apt-get dist-upgrade* as well to bring my system up to [Debian Jessie][0]. On the way I discovered that my backup script wasn't backing up anything from my personal wiki running with [DokuWiki][1]. Another case of *Schroedingers Backup*: _The backup is only there, if it can be successfully restored._ ☹ Anyway, I had only a few snippets from my daily development work and some links to software I tend to use on the wiki, so not that much of a loss. And because I had to set up my wiki again, I decided to build a minimal container instead of re-using [the offical php images][2].

I am already using [Alpine Linux][4] for a couple of images at work and I am switching everything using [busybox][5] to it too. So it was a natural decision to build the minimal wiki container with Alpine as well. Modifying the [Dockerfile][6] was easy, and I also added some [ONBUILD][7] instructions to let users add their own users, access control list and DokuWiki configuration. I probably will provide an image to just run a wiki instance and one with the *ONBUILD* instructions to extend from.

Here's the [README][10]:

Create the files local.php, acl.auth.php and users.auth.php according to [DokuWiki documentation][8]. They will be added when you build your own image. Create a Dockerfile in the same directory as your configuration files:

    FROM moritanosuke/dokuwiki-docker

Build the Dockerfile:

    docker build -t yourname/dokuwiki .

Start your wiki:

    docker run -d --name some-dokuwiki -p 8080:80 yourname/dokuwiki

Now you can access your dokuwiki at http://localhost:8080

You can find the [image *dokuwiki-docker* on Docker Hub][11] and [on github][9]. Here's the current image size:

[![](https://badge.imagelayers.io/moritanosuke/dokuwiki-docker:latest.svg)](https://imagelayers.io/?images=moritanosuke/dokuwiki-docker:latest 'Get your own badge on imagelayers.io')

[0]: https://www.debian.org/releases/jessie/
[1]: https://www.dokuwiki.org
[2]: https://hub.docker.com/_/php/
[3]: https://hub.docker.com/r/moritanosuke/dokuwiki-docker/
[4]: http://alpinelinux.org/
[5]: https://busybox.net/
[6]: https://docs.docker.com/engine/reference/builder/
[7]: https://docs.docker.com/engine/reference/builder/#onbuild
[8]: https://www.dokuwiki.org/config#configuration_options
[9]: https://github.com/MoriTanosuke/dokuwiki-docker
[10]: https://github.com/MoriTanosuke/dokuwiki-docker/blob/master/README.md
[11]: https://hub.docker.com/r/moritanosuke/dokuwiki-docker/

