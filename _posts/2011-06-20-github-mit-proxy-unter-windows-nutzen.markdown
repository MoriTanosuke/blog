---
title: 'Github mit Proxy unter Windows nutzen'
date: 2011-06-20 00:00:00 
tags: 
layout: post
---
<p>Falls ihr ein <a href="http://github.com">Github</a>-Repository per HTTPS unter Windows clonen wollt und dazu einen Proxy nutzen müsst, dann hilft euch vielleicht folgender Tipp:</p>

<pre>
git config --global --add http.sslverify false
export http_proxy=http://euer.proxy:1234
export https_proxy=http://euer.proxy:1234
git clone https://euer.host/repo.git
</pre>

<p>Ohne die Variable <em>https_proxy</em> war bei mir kein clonen möglich, ausserdem bekam ich einen Fehler bei der Validierung des Zertifikats - das wird mit dem Config-Eintrag in der ersten Zeile ignoriert.</p>
