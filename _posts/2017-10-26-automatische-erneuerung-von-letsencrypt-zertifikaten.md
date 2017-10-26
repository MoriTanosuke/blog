---
layout: post
title: "Automatische Erneuerung von Lets Encrypt Zertifikaten"
---

Die letzten paar Mal habe ich die Zertifikate auf meinen Domains noch per Hand aktualisiert, d.h. 
Einloggen auf der Shell, mit dem [certbot][0] kämpfen, Webserver neustarten.

Aus meinem Setup erledige ich die Verifikation der Zertifikatsanfrage durch das Erstellen von
Dateien in meinem Webroot, also dem Verzeichnis, das durch den Webserver veröffentlicht wird. Es 
gibt noch andere Arten der Verifikation, aber bei meinem Setup mit Docker Containern ist diese
Methode am einfachsten.

Nach der letzten Aktualisierung der Zertifikate habe ich das ganze in einem Skript vereinfacht, das
jede Woche ausgeführt wird und die Zertifikate ggfs. erneuert. Nachdem ich noch ein wenig in 
der Dokumentation des *certbots* gewühlt hab, bin ich bei folgendem Aufruf gelandet:

    certbot-auto certonly -n -d DOMAINNAME --webroot --webroot-path=/pfad/zu/meinem/webroot

Am längsten hat es dabei gedauert, den Parameter *webroot-path* aus der [Dokumentation][1] zu suchen.

Anschliessend wird noch mein Webserver Docker Container neugestartet, der die Zertifikate per Volume mountet.
Das ist aber ein Detail, das für die automatische Erneuerung nicht relevant ist.

[0]: https://certbot.eff.org/docs/
[1]: https://certbot.eff.org/docs/using.html#webroot
