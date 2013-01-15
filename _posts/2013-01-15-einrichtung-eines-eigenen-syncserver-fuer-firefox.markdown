---
layout: post
title: "Einrichtung eines eigenen Sync-Server für Firefox"
published: false
---
Im Zuge meiner [Rückeroberung des Internet][0] habe ich mir heute einen eigenen Server zur Synchronisation
von [Firefox][7]-Inhalten eingerichtet. Damit kann ich meine Einstellungen und Lesezeichen über verschiedene
Rechner bzw. Installationen synchronisieren, ohne meine Daten aus der Hand zu geben.

Das ganze funktioniert leider nicht auf jedem beliebigen Webspace, aber zum Glück hab ich noch einen 
[Sheevaplug][1] im Abstellraum. Darauf ist das benötigte [Python][2], der [lighttpd Server][3] und der 
[Sync Server][3] relativ problemlos eingerichtet.

Die genaue Installation ist [hier][4] sehr schön beschrieben. Mein Server läuft hinter einerm [lighttpd][3]
und auch die Konfiguration ist beschrieben. Ich will hier nur die Stolpersteine auflisten, die mich etwas
aus der Bahn geworfen haben.

Als erstes wäre da die Installation per [mercurial][5]. Damit ist man immer auf dem neusten Stand, aber dafür
schlug der Aufruf von `make build` bei mir fehl, weil ich bereits die Datei `etc/sync.conf` angepasst hatte.
Also reverten und anschliessend die Konfiguration unter `/etc/sync.conf` ablegen. Danach hab ich die Datei
`development.ini` kopiert und in `production.ini` umbenannt. Danach habe ich die Datei `production.ini`
editiert und folgendes eingetragen:

    [server:main]
    use = egg:Flup#fcgi_thread
    host = 0.0.0.0
    port = 5000
    #use_threadpool = True
    #threadpool_workers = 60
    
    [app:main]
    use = egg:SyncServer
    configuration = file:///etc/sync.conf

Damit lädt mein Server jetzt die richtige Konfiguration, die ich verändern  und trotzdem den Server 
irgendwann mittels [mercurial][5] aktualisieren kann.

Danach hab ich erstmal probiert, ob der Server unter der URL `http://MEINSERVER/MEINKONTEXT/user/1.0/a`
eine Null oder Eins ausgibt. Ist das der Fall, ist der Server erreichbar.

Anschliessend hab ich den Sync in Firefox eingerichtet - d.h. ich wollte den Sync einrichten. Als erstes
hat mir Firefox nämlich "*Please enter a valid server URL*" mitgeteilt. Ich hab dann verwirrt rumprobiert, ein
wenig im Internet gesucht und gelesen, mehrmals die URL geändert und irgendwann ging's dann... :-(

Wie auch immer, der Server läuft, ist von draussen erreichbar und ich werde jetzt erstmal meinen 
[Google Chrome][6] zur Seite legen und [Firefox][7] benutzen.

[0]: /2013/01/12/das-internet-zurueckerobern-projekte-zum-einstieg/
[1]: /2010/02/21/erste-erfahrungen-mit-dem-sheevaplug/
[2]: http://www.python.org/
[3]: http://www.lighttpd.net/
[4]: http://docs.services.mozilla.com/howtos/run-sync.html
[5]: http://mercurial.selenic.com/
[6]: http://www.google.de/intl/de/chrome/browser/
[7]: http://www.mozilla.org/de/firefox/new/
