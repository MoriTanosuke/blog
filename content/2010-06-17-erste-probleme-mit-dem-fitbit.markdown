---
title: 'Erste Probleme mit dem Fitbit'
date: "2010-06-17"
tags: 
layout: post
---
Nachdem mein <a href="http://www.fitbit.com/">Fitbit</a> tagsüber schon fleißig mitlief, wollte ich gestern abend die Synchronisation an meinem Macbook (ein <em>4,1</em>er) einrichten. Also hab ich <a href="http://www.fitbit.com/start">die Software installiert</a> und das <em>Account Setup</em> gestartet. Bei der Verbindung zur Basisstation traten dann allerdings die ersten Probleme auf: Keine Verbindung!

Nachdem ich eine Weile herumprobiert und 64bit- und 32bit-Modus ausprobiert habe, musste ich feststellen, dass ich etwas tiefer ran musste. Also habe ich den Fitbit-Daemon im Debugmodus gestartet:

<pre class="brush: bash">sudo launchctl unload -w /Library/LaunchDaemons/com.fitbit.fitbitd.plist
sudo /usr/local/bin/fitbitd -nmb</pre>

Diesen Schritt kann man sich ersparen, wenn man einfach das Zubehörprogramm <em>Konsole</em> öffnet und die Konsolenmeldungen ansieht. Dort habe ich dann folgende Zeile gefunden:

<pre class="brush: bash">Failed to initialize communication [VID: 0x10c4, PID: 0x84c4]. Is the base station plugged in?</pre>

*VID 0x10c4* ist die Vendor ID, *PID 0x84c4* ist die Produkt ID zur Identifikation des Fitbit auf dem USB-Bus. Aber anscheinend wurde dort nichts gefunden. Allerdings wird das Fitbit geladen, wenn es in der Basisstation steckt - ein einfacher Kabelbruch kommt auch durch die Sichtprüfung des Kabels eigentlich nicht in Frage.

Da ich mein Fitbit bei <a href="http://www.ebay.com">Ebay USA</a> gekauft habe, werd ich wohl keine Chance auf Umtausch haben. Früher oder später muss ich die Basisstation wohl aufknacken und nach Hardware-Fehlern suchen. Sollte das keinen Erfolg bringen, muss ich mir irgendwie einen Ersatz organisieren - fährt demnächst jemand in die USA? ;-)
