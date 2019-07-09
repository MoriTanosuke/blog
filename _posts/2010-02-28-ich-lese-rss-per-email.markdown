---
title: 'Ich lese RSS per eMail'
date: 2010-02-28 00:00:00
layout: post
tags: linux
---
Wieso? Weil ich immer noch großer Fan von eMail bin. Asynchrone Kommunikation, trotzdem Quasi-Echtzeit und kostenlos. Und weil ich auf meine eMail von überall Zugriff habe, Iphone sei Dank.  Nachdem ich schon den Service <a href="http://www.feedmyinbox.com/">FeedMyInbox</a> ausprobiert habe und mit dem <a href="http://www.amazon.com/Kindle-Wireless-Reading-Display-Generation/dp/B0015T963C/kopisde-21">Amazon Kindle</a> einen sinnvollen Endpunkt für so einen Dienst in meiner Reisetasche habe, wollte ich mal sehen, ob ich das ganze nicht auch auf meinen eigenen Rechnern und damit unter meiner Kontrolle aufsetzen kann. Gesagt, getan: <a href="http://www.allthingsrss.com/rss2email/">rss2email</a> erledigt genau diese Aufgabe.  Unter Debian ist das Programm schnell installiert:

<pre class="brush: plain">
    apt-get install rss2email
</pre>

Voraussetzung ist <a href="http://python.org/">Python</a>, aber das ist mittlerweile ja schon fast Pflicht bei einer Linuxinstallation... :-} Danach kann man mit folgenden Befehlen die ersten Feeds hinzufügen:

<pre class="brush: plain">
r2e new email@domain.org
r2e add http://url/fuer/den/feed
r2e run --no-send
</pre>

Damit ist der erste Feed hinzugefügt und der erste Lauf hat den aktuellen Stand des Feeds geholt. Der Parameter `--no-send` verhindert das Versenden aller Feedartikel, erst bei einem Aufruf ohne diesen Parameter werden eMails verschickt. Das sollte man aber einem <a href="http://de.wikipedia.org/wiki/Cron">cronjob</a> überlassen, der zyklisch läuft. Bei mir ist das alle 30 Minuten:

<pre class="brush: plain">
    crontab -l
    */30 * * * * r2e run
</pre>

Ab sofort fliessen also einige Feeds direkt in mein Postfach. Ob ich wirklich die <a href="http://www.amazon.com/gp/help/customer/display.html?nodeId=200375630&#fees">Gebühren für die Mobilfunkübertragung</a> zum <a href="http://www.amazon.com/Kindle-Wireless-Reading-Display-Generation/dp/B0015T963C/kopisde-21">Amazon Kindle</a> bezahlen will, weiß ich noch nicht. Möglich wäre das ganze aber mit rss2email, dafür müsste ich bloss eine neue Feeddatei mit meiner privaten Kindle-eMail anlegen und Feeds hinzufügen.
