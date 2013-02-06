--- 
layout: post
title: ""Anwendungen auf Android-Telefonen spionieren die Anwender aus"
wordpress_url: http://blog.kopis.de/?p=71
wordpress_id: 71
---

Mittlerweile ist es sogar schon <a href="http://www.heise.de/newsticker/meldung/Apps-telefonieren-nach-Hause-Update-1047796.html">bei heise aufgeschlagen: Android Apps haben arglose Nutzer ausgespäht.</a> Und mir ist ein etwas zu sorgloser Umgang mit Berechtigungen auch schon aufgefallen. Ich wollte mir z.B.  einen FLAC-Player installieren, und musste erstaunt feststellen, dass der Player meinen Telefonstatus und die Logs auslesen will. Wieso das?

Wahrscheinlich, weil damit Geräteinformationen ausgelesen werden. Evtl für Hacks und Workarounds für spezielle Geräte, evtl um die Geräte noch detaillierter zu identifizieren - oder evtl um die IMEI auszulesen und an chinesische Server zu übertragen... weiß man halt erstmal nicht. Und als Normalnutzer klickt man sich über den Installationsbildschirm sowieso schnell weg, der einen mit detaillierten Berechtigungsinformationen überschüttet.

Wie schützt man sich jetzt vor so einem Diebstahl?

* Man installiert keine Anwendungen.
* Man nutzt Webanwendungen, die nur beschränkten Zugang zu der Telefonhardware haben.
* Man nutzt nur <a href="http://code.google.com/p/andless/source/browse/trunk/src/net/avs234/AndLess.java#945">Open Source-Anwendungen, deren Quelltext man öffentlich einsehen kann</a>.

Ich verstehe sowieso nicht, wieso man für jeden Kleinkram eine Anwendung auf dem Telefon braucht.  Haben wir nicht die <em>always connected smartphones</em>, damit wir sowas nicht brauchen und immer und überall auf das große weite Internet zugreifen können? Und nur wenn ich z.B. eine Navigationssoftware oder einen Schlafmonitor nutzen will, braucht so eine Anwendung wirklich Zugriff auf meine Hardware. Sogar <a href="http://de.wikipedia.org/wiki/Standortbezogene_Dienste">Location Based Services</a> wie Google Maps können mittlerweile vom Browser aus den aktuellen Ort bestimmen. Ausserdem ist das Webdesign mittlerweile durch AJAX und generell durch Javascript so weit, dass Webanwendungen wie Desktop bzw Smartphone anwendungen aussehen und funktionieren.

Die besten Beispiele, die ich täglich nutze:

* Google Reader
* Instapaper
* Wordpress

Wenn ihr noch Beispiele für Schadanwendungen oder zu weit gesetzte Berechtigungen auf Smartphones habt, schreibt doch mal einen Kommentar. Und schreibt auch gleich eure Lieblings-Webanwendung dazu. ;-)
