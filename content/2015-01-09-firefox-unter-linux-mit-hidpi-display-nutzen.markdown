---
title: 'Firefox unter Linux mit HiDPI Display nutzen'
date: "2015-01-09"
tags: tips howto
layout: post
---
Wenn ihr euch auch über die kaputte UI von Firefox unter Linux bei der Nutzung eines Display mit hohen DPI-Werten ärgert, hilft euch evtl. die folgenden Einstellung.

<blockquote class="twitter-tweet" lang="de"><p>Aaaah, wenn man Firefox mit einem HiDPI Display nutzen will, muss man in about:config den Wert layout.css.devPixelsPerPx=2 setzen.</p>&mdash; Carsten (@carsten_r) <a href="https://twitter.com/carsten_r/status/553487571503054848">9. Januar 2015</a></blockquote>
<center><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></center>

1. Gebt in der Adressezeile des Firefox *about:config* ein.
2. Sucht nach *layout.css.devPixelsPerPx*.
3. Setzt den Wert auf mind. *1.5*.

Anschliessend werden auch die Tabs und die Menüs anständig dargestellt. :)
