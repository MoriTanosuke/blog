--- 
wordpress_id: 99
layout: post
title: Open ID auf der eigenen Domain mit Google
wordpress_url: http://blog.kopis.de/?p=99
---

Seit heute kann ich meine eigene Domain <a href="http://www.kopis.de">www.kopis.de</a> als <a href="http://de.wikipedia.org/wiki/OpenID">Open ID</a> verwenden. Das geht überraschend einfach, wenn man schon bei einem Open ID-Provider wie <a href="http://www.google.com/profiles/carsten.ringe">Google</a> (oder <a href="http://me.yahoo.com/carstenringe">Yahoo</a> oder <a href="http://www.aol.de">AOL</a> oder <a href="https://www.myopenid.com/">My Open ID</a>) angemeldet ist. Dann genügen die folgenden Zeilen im Header der eigenen Homepage:

<pre class="brush: xml">
<link href="https://www.google.com/accounts/o8/ud" rel="openid2.provider" />
<link href="https://www.google.com/profiles/PROFILENAME" rel="openid2.local_id" />
<link href="https://www.google.com/accounts/o8/ud" rel="openid.server" />
<link href="https://www.google.com/profiles/PROFILENAME" rel="openid.delegate" />
</pre>

Natürlich muss *PROFILENAME* durch euer eigenes Profil ersetzt werden, in meinem Fall wäre das *carsten.ringe*. Anschliessend kann man als Open ID-Login immer die eigene Domain angeben. :-)
  
