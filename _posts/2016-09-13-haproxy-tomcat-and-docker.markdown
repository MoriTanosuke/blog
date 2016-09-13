---
title: "Using haproxy to load balance tomcat instances with Docker"
tags: docker
layout: post
---
Today I wanted to set up my local environment with a load balancer for
my tomcats. To get started, I took a look at the
[dockercloud-haproxy][0] image and the provided example configuration
for *docker-compose*:

````
version: '2'
services:
  web:
    image: dockercloud/hello-world
  lb:
    image: dockercloud/haproxy
    links:
      - web
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - 80:80
````

You can run this example right away and open http://localhost to see the
load balance *hello-world* page. To scale the *web* service, use
`docker-compose scale web=2` and reload the page a couple of times. You
should see the hostname changing with each request, as *haproxy* is
using a *roundrobin* load-balancing strategy by default in this image.

To make this a bit more specific to my use case, I decided to replace
the *hello-world* image with the [official *tomcat* image][1]. Because I
like small images, I also decided to use *tomcat:alpine*.

````
version: '2'
services:
  web:
    image: tomcat:alpine
    volumes:
      - ./index.jsp:/usr/local/tomcat/webapps/ROOT/index.jsp:ro
  lb:
    image: dockercloud/haproxy
    links:
      - web
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - 80:80
````

I added a *volume* and a custom JSP to make this example a bit more my
own:

````
<html>
<body>
This is host <strong><%= java.net.InetAddress.getLocalHost().getHostName() %></strong>.
</body>
</html>
````

If you run this example with `docker-compose up -d && docker-compose
scale web=2` you can again reload http://localhost a couple of times and
you should see a message like `This is host 76ce0ef9f152.`.
Congratulations, you now have (very simple) load balanced tomcat setup.
😀

Next steps would be to replace the simple tomcat setup with a [real
cluster][2] to get session replication.

[0]: https://github.com/docker/dockercloud-haproxy
[1]: https://hub.docker.com/_/tomcat/
[2]: https://tomcat.apache.org/tomcat-9.0-doc/cluster-howto.html

