---
layout: post
title: Simple Java client for Fitbit API
---
After fiddling around with [fitbit4j][0] again I got so tired of the noisy API
and I decided to build my own simple client. I started with only [scribe-oauth][1] and [json-simple][2] and after a couple of minutes I was already implementing API calls for Fitbit API resources.

I decided to work public from now on and you can watch or fork my repository at [https://github.com/MoriTanosuke/fitbitclient][3]. For my own projects I'll keep it really simple and will create API calls matching all available resources from Fitbit. I won't put any credential cache implementation or multi-user functionality in my fitbitclient, but I will try to make the API clean and the results easy to work with.

Over the last couple of months I'm becoming more and more a friend of Lists and Maps, so you can expect my client to make heavy use of that. I don't know if I will have time to create a maven repository on my github repository, but again - feel free to fork and I'll happily pull in your work.


[0]: https://github.com/Fitbit/fitbit4j
[1]: https://github.com/fernandezpablo85/scribe-java
[2]: http://code.google.com/p/json-simple/
[3]: https://github.com/MoriTanosuke/fitbitclient

