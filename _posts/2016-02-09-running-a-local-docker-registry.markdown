---
layout: post
title: 'Running a local Docker registry'
tags: docker
---

When you're using [Docker][0] extensively, you sometimes need to run your own registry in order to push images around in your local network - or even on your local machine. For that you need a [registry][1] where you can *push* and *pull* images. With *Docker* itself, it's easy to set it up. Here is a small *docker-compose.yml* which runs a registry and a simple frontend:

    registry:
      image: registry:2
      volumes:
      - data:/var/lib/registry
      ports:
      - 5000:5000
    frontend:
      image: konradkleine/docker-registry-frontend:v2
      links:
      - registry
      ports:
      - 8080:80
      environment:
      - ENV_DOCKER_REGISTRY_HOST=registry
      - ENV_DOCKER_REGISTRY_PORT=5000

The registry is persisting its data into the directory *data*, so nothing is lost if you throw away and recreate the container.

Save the file as *docker-compose.yml* and start it via `docker-compose up` in the same directory. After that you can open http://localhost:8080 and you see a basic frontend (taken from [kwk/docker-registry-frontend][2]).

<center><a data-flickr-embed="true"  href="https://www.flickr.com/photos/cringe/24285058114/in/dateposted/" title="Docker Registry with Frontend"><img src="https://farm2.staticflickr.com/1651/24285058114_cb2f4c6b07_b.jpg" width="646" height="526" alt="Docker Registry with Frontend"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script></center>

Now when you push an image to your registry with the following command it becomes visible on the frontend:

    docker pull alpine && docker tag alpine localhost:5000/alpine
    docker push localhost:5000/alpine

Refresh the registry frontend and you'll see the new image is available. You can now pull it with the following command:

    docker pull localhost:5000/alpine

Have fun!

[0]: https://www.docker.com/
[1]: https://github.com/docker/distribution/blob/master/docs/deploying.md
[2]: https://github.com/kwk/docker-registry-frontend
