---
layout: post
title: "Running Threema Web in Docker"
---
Because I'm currently using [Threema][0] again, but also use multiple devices, I was very happy when the company announced [Threema Web][1]. *Threema Web* is a webapp which you can run and communicate with your contacts - sounds like the same thing [Signal][2] is doing with their [Chrome Extension][3].

But because I'm also a huge fan of [Docker][4], I created a simple *Dockerfile* to run *Threema Web* in a container: [docker-threema][5]. This image is based on *nodejs* 7.5. I didn't use *Threema Web* very much yet and additional pieces like [SaltyRTC][6] and a [STUN Server][7] are missing at the moment. But if you just want to try *Threema Web* and play around, you might find it use full.

Here are the steps to get running:

  * install Docker
  * clone my repository `git clone https://github.com/MoriTanosuke/docker-threema.git`
  * change into the cloned directory and build the image `docker build -t threema .`
  * run the image `docker run --rm -it -p 9966:9966 threema` (the container will be removed after you stopped it!)
  * open your browser at http://localhost:9966/

Here are some screenshots running the Docker container on one of my Windows machines:

![Screenshot von Threema Web](/images/threema1.PNG)
![Screenshot von Threema Web](/images/threema2.PNG)
![Screenshot von Threema Web](/images/threema3.PNG)
![Screenshot von Threema Web](/images/threema4.PNG)


[0]: https://threema.ch/
[1]: https://threema.ch/de/blog/posts/threema-web-ist-da
[2]: https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=de
[3]: https://whispersystems.org/blog/signal-desktop/
[4]: https://www.docker.com/
[5]: https://hub.docker.com/r/moritanosuke/docker-threema/
[6]: https://saltyrtc.org/
[7]: https://en.wikipedia.org/wiki/STUN
