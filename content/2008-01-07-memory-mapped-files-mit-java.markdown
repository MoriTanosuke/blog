---
title: 'Memory-Mapped Files mit Java'
date: "2008-01-07"
tags: 
layout: post
---
<b>Das</b> wußte ich auch noch nicht:

<blockquote>A region of a file may be <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/nio/channels/FileChannel.html#map%28java.nio.channels.FileChannel.MapMode,%20long,%20long%29">mapped</a> directly into memory; for large files this is often much more efficient than invoking the usual <tt>read</tt> or <tt>write</tt> methods.</blockquote>

Weiterlesen in den <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/nio/channels/FileChannel.html#map(java.nio.channels.FileChannel.MapMode,%20long,%20long)">JDK API Docs FileChannel#map(...)</a> und im <a href="http://www.exampledepot.com/egs/java.nio/CreateMemMap.html">Java Almanac e166</a>. Und aufpassen:

<blockquote class="posterous_short_quote"> A mapping, once established, is not dependent upon the file channel that was used to create it. Closing the channel, in particular, has no effect upon the validity of the mapping.</blockquote>

Das ist dann wieder so ein Ding, an dem man sich totsucht, wenn man fremden Code übernimmt, oder? ;-)
