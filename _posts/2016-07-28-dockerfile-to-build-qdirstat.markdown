---
layout: post
title: "Dockerfile to build qdirstat"
---

Today I wanted to check how much diskspace I wasted in my home directory. On windows I'd use [WinDirStat][0] and on linux there is the alternative [qdirstat][1]. Unfortunately there is no pre-build binary for my distribution, so I decided to build from source. But I don't want litter my system with [Qt][2] dependencies, so I decided to build it in a docker container. Here's my [Dockerfile][3]:

<script src="https://gist.github.com/MoriTanosuke/e81b49c524ca55f0ed0c738b72bdea7c.js"></script>
<noscript>
See the full Dockerfile at [https://gist.github.com/MoriTanosuke/e81b49c524ca55f0ed0c738b72bdea7c][4].
</noscript>

First you have to create an image from this *Dockerfile*:

<pre>
# copy the Dockerfile into a new directory and run the following command in a terminal in that directory
docker build -t moritanosuke/qdirstat .
</pre>

To use the image *moritanosuke/qdirstat*, you have to clone the sourcecode of *qdirstat* to your PC and mount the *src* directory into the container as a volume.

<pre>
# first clone the project
git clone https://github.com/shundhammer/qdirstat
# go into the cloned directory and add the Dockerfile
cd qdirstat
# run the container
docker run --rm -it -v $(pwd):/usr/src moritanosuke/qdirstat /bin/sh
</pre>

Now you should have the executable in the *src* directory. The owner will be *root*, but you should be able to run it on your local machine now - assuming that you have all dependencies to run Qt applications already installed. The container was removed right after it completed the build, so the only thing left to do is removing the image:

<pre>
docker rmi moritanosuke/qdirstat
</pre>

This is now my preferred way to build random open source projects without messing up my local machine. In earlier times I used full blown VMs with snapshots, but this is even faster.

[0]: http://windirstat.info/
[1]: https://github.com/shundhammer/qdirstat
[2]: https://wiki.qt.io/
[3]: https://docs.docker.com/engine/reference/builder/
[4]: https://gist.github.com/MoriTanosuke/e81b49c524ca55f0ed0c738b72bdea7c

