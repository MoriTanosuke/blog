---
title: 'Webbasierter Proxy auf der eigenen Domain'
date: "2013-02-21"
tags: 
layout: post
---
Vor ein paar Tagen habe ich mir [Glype][0] auf meiner Domain
installiert. Damit kann ich Webseiten so laden, als würde meine Domain
die Anfrage stellen und nicht der Rechner, den ich gerade nutze. Sowas
ist praktisch, wenn man z.B. dem Zielserver nicht den eigenen Rechner
mitteilen möchte oder wenn man hinter einem sehr restriktiven
Internetzugang sitzt.

Die Installation von [Glype][0] ist ziemlich einfach:

* [Glype runterladen][1]
* Entpacken
* Auf euren Webspace hochladen
* `https://euredomain.org/glype/admin.php` aufrufen

Dort müsst ihr nur noch ein Passwort vergeben und könnt anschliessend
ein paar Einstellungen setzen. Ich habe die Standardkonfiguration
gelassen und nutze die ohne große Änderungen.

Um Missbrauch zu vermeiden habe ich aber eine `.htaccess` in mein
Verzeichnis gelegt und meine Installation von [Glype][0] per Passwort
geschützt.

[0]: http://www.glype.com
[1]: http://www.glype.com/download.php
