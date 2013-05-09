---
layout: post
title: "Do-it-yourself Pulssensor mit Electric Imp"
published: false
---

Vor ein paar Tagen habe ich mir einen [Electric Imp][0] bestellt (bei [EXP Tech][1]), um 
meinen Pulssensor etwas kleiner und praktischer zu bauen. Das [Arduino Board]({% post_url 2013-03-09-pulsfrequenz-mit-dem-arduino-aufzeichnen %})
funktioniert zwar sehr gut und mit dem MicroSD-Shield konnte ich auch offline Daten aufzeichnen.
Allerdings ist das Arduino-Board plus Shield etwas klobig und so viel Rechenleistung brauche
ich für die Abfrage eines einzelnen Sensors auch nicht wirklich.

Der [Electric Imp][0] hingegen ist ein Mikroprozessor mit WLAN-Modul im Format einer SD-Karte.
Damit kann man locker ein paar Sensoren und Aktoren steuern und hat gleichzeitig die Möglichkeit,
über das Internet mit dem Gerät zu kommunizieren - und sogar den Anwendungscode neu zu programmieren.

Nachdem ich auch noch gelesen hab, das man einfache [HTTP POST Requests][2] absenden kann, hab ich das 
Teil bestellt. Damit war klar, dass ich meine Pulsdaten direkt an eine kleine Webanwendung posten kann.

[0]: http://electricimp.com/
[1]: http://exp-tech.de/
[2]: http://devwiki.electricimp.com/doku.php?id=plannerhttprequest
