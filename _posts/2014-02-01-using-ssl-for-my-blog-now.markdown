---
title: 'Using SSL for my blog now'
date: 2014-02-01 00:00:00 
tags: security privacy
layout: post
---
Today I decided to fix the annoying situation that my blog here wasn't running on SSL. To be honest, I was too lazy to fix my [apache configuration][0] after setting up [Ghost][1] initially. Anyway, right now you should be browsing this website via [https][2], which encrypts all communication going from your browser to the server.

The browser will most likely show a red marker next to the lock that indicates an encrypted connection. That's because I'm reusing the certificate from [www.kopis.de][3] for [blog.kopis.de][4]. I'm new to this SSL certificate thing, so before I create another certificate which includes my subdomains, I have to read up on the pros and cons of certificates - and maybe I'll end up with a self signed certificate anyway... we'll see.

[0]: https://blog.kopis.de/running-ghost-behind-apache-reverse-proxy/
[1]: https://ghost.org/
[2]: https://en.wikipedia.org/wiki/HTTP_Secure
[3]: https://www.kopis.de/
[4]: https://blog.kopis.de/

