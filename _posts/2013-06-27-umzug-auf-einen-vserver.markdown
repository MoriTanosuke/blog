---
layout: post
title: "Umzug auf einen VServer"
published: false
---

Vor ein paar Jahren hatte ich bereits einen VServer, damals bei [server4you][0]. Jetzt ist es wieder so 
weit: meine Domains laufen auf einem VServer, diesmal aber bei [Hetzner][1]. Den Anbieter habe ich durch
einen Vergleich mit anderen ([1blu][2], [1und1][3], [server4you][4]) und durch Erfahrungsberichte aus 
dem Netz ausgewählt.

Den Umzug habe ich mit [myln.de][5] begonnen, einfach weil ich die Domain am wenigstens nutze und es nicht so
schlimm ist, wenn die bei der Umstellung der Nameserver 1) nicht erreichbar ist und 2) hinterher nicht mehr 
funktioniert. Hat aber alles ganz wunderbar geklappt.

Als erstes habe ich per [scp][6] die Webseiten auf den VServer kopiert, dann einen SQL-Dump erstellt und 
in eine neue Datenbank auf dem VServer importiert. Anschliessend die Verbindungsdaten in der Konfigurationsdatei
von [myln.de][5] angepasst und letztendlich den Nameserver bei meinem bisherigen Hoster [domaingo][7] auf meinen
VServer umgestellt.

Nach ein paar Stunden war die Änderung des DNS im Internet bekannt und die Anfragen kamen bei Hetzner an. [myln.de][5] war erfolgreich umgezogen. :-)

Diesen Vorgang hab ich dann noch ein paar Mal wiederholt: [scp][6], SQL-Dump, Konfiguration, DNS. Mittlerweile laufen fast alle Inhalte von [kopis.de][7] auf dem VServer.

**Wieso mache ich das ganze?**

Ich möchte mehr Kontrolle darüber haben, wer meine Daten und Inhalte in die Finger bekommt. Bisher habe ich viele Cloud-Dienste genutzt, vor allem *Google*, *Dropbox*, *Github* und noch ein paar mehr. Seit ein paar Wochen ([oder sind es schon Monate?][8]) ziehe ich mich davon zurück, nicht nur wegen der letzten Veröffentlichungen, welche Regierung welche Bürger abhört.

[0]: http://www.server4you.de/
[1]: http://www.hetzner.de/
[2]: http://www.1blu.de/server/vserver/
[3]: http://hosting.1und1.de/vserver
[4]: http://www.server4you.de/vserver/
[5]: http://myln.de/
[6]: http://de.wikipedia.org/wiki/Secure_Copy
[7]: http://www.kopis.de/
[8]: {% post_url 2013-01-12-das-internet-zurueckerobern-projekte-zum-einstieg %}
