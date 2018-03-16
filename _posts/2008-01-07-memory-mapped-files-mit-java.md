---
title: 'Memory-Mapped Files mit Java'
date: 2008-01-07 00:00:00 
layout: post
---
*Das* wußte ich auch noch nicht:

> A region of a file may be [mapped][0] directly into memory; for large files this is 
> often much more efficient than invoking the usual `read` or `write` methods.

Weiterlesen in den [JDK API Docs FileChannel#map(...)][0]. Und aufpassen:

> A mapping, once established, is not dependent upon the file channel that was used to create it.
> Closing the channel, in particular, has no effect upon the validity of the mapping.

Das ist dann wieder so ein Ding, an dem man sich totsucht, wenn man fremden Code übernimmt, oder? 😉

[0]: https://docs.oracle.com/javase/9/docs/api/java/nio/channels/FileChannel.html#map-java.nio.channels.FileChannel.MapMode-long-long-
