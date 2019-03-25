---
title: "Docker image for Wallabag v2"
layout: post
tags: docker selfhosting
---
Sometimes I want to save articles that I want to read for later, because I don't have the time to read right now. There are a couple of free online services that you can use, like [Instapaper][1] or [Pocket][2]. The services all work the same:

  * you give them a link to a webpage you want to read later
  * they scrape the page and store the text
  * when you got time, you open the service in your browser or a mobile app and read the article
  * you can save, delete, star the article

But with my ongoing quest to avoid services and host my own versions of them, I began using my own installation of [Wallabag][0] a couple weeks ago. Of course I decided to run it in a [Docker][3] container. *Wallabag* provides an [official docker image][4] you can use to get started. It works fine, although [I had an issue when trying to run it behind a reverse proxy][5]. But I worked around that and *Wallabag* in general works good enough that I don't feel the urge to switch back to *Instapaper* every time I use it. The [android app][6] could use some love, but - again - it works good enough that I don't want to hang myself everytime I use it.

Then I had a couple of issues with the docker container on my server. I tried to restart a couple of my container and while checking the process list of the server I noticed a *defunct process* pointing to the [s6][7] and [nginx][8] services in the *Wallabag* container. This lead to a full server reboot, because I couldn't kill the process and I couldn't get rid of the container.

Because I don't like rebooting my server just because I have a stray container running, I build [my own docker image for Wallbag][9] based on [php:apache image][10] and without any kind of additional supervisor. I run a couple other containers based on this image and I never had any issues with them, so I hope there won't be any stray processes on my server anymore.

To use my image, just run the following command on your command line:

    docker run --rm -p 8080:80 -v ./data:/var/www/wallabag/data moritanosuke/wallabag-docker

After the container is up, you can access your *Wallabag* at http://localhost:8080. All data will be stored in the directory *data*, so you should be able to stop/start the container and all your stored articles should still be there. Please note that I use the option `--rm`, so the container will be removed as soon as it is stopped.

Personally I like to run my containers via [docker-compose][13]. Here's an example for your *docker-compose.yml*:

````
version: '2'

services:
  wallabag:
    image: moritanosuke/wallabag-docker
    ports:
    - 8080:80
    volumes:
    - ./data:/var/www/wallabag/data
    environment:
    - SYMFONY_ENV=prod
````

Now you can just run `docker-compose up` and you should be able to access your *Wallabag* at http://localhost:8080 again.

My docker image is slightly bigger, 260MB for an apache image instead of 150MB for the official image based on [Alpine Linux][11] - but I take that if I don't have to reboot my server every couple of weeks.

If you want to try *Wallabag*, please give my image a shot and [report any issues][12] so I can improve it. 👍

[0]: https://www.wallabag.org
[1]: https://www.instapaper.com/
[2]: https://getpocket.com
[3]: https://www.docker.com
[4]: http://doc.wallabag.org/en/master/user/installation.html#installation-with-docker
[5]: https://github.com/wallabag/wallabag/issues/2273
[6]: https://play.google.com/store/apps/details?id=fr.gaulupeau.apps.InThePoche
[7]: http://www.skarnet.org/software/s6/
[8]: http://nginx.org
[9]: https://hub.docker.com/r/moritanosuke/wallabag-docker/
[10]: https://hub.docker.com/_/php/
[11]: http://alpinelinux.org
[12]: https://github.com/MoriTanosuke/wallabag-docker/issues
[13]: https://docs.docker.com/compose/
