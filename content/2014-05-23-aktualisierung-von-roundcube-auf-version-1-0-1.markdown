---
title: 'Aktualisierung von Roundcube auf Version 1.0.1'
date: "2014-05-23"
tags: 
layout: post
---
Heute habe ich mit etwas Verspätung gesehen, dass [Roundcube][0] die Version 1.x veröffentlich hat. Mittlerweile gibt es auch schon das erste Update auf v1.0.1 mit einigen Bugfixes.

Die größte/beste/tollste Neuerung ist [das Plugin-Repository von Roundcube][1], das mit Version 1.x aktiv ist. Darüber habe ich sofort [das Plugin *filters*][2] installiert, das endlich client-seitig Mails in Unterordner sortieren kann. Jetzt brauche ich keinen eigenen [Sieve][3]-Server, für den ich auch einen eigenen Mailserver aufsetzen müsste. Und das hab ich mich bis jetzt noch nicht getraut...

Jetzt musste ich meine Installation von Roundcube 0.9.x auf die neuste Version aktualisieren. Dazu geht man wie folgt vor:

1. Backup der Installation
2. Download der neuen Version von http://roundcube.net/download/
3. Entpacken in ein neues Verzeichnis
`tar xzf roundcubemail-1.0.1.tar.gz`
4. Wechseln in das entpackte Verzeichnis
`cd roundcubemail-1.0.1`
5. Ausführen des Upgrade-Skripts
`./bin/installto.sh TARGETFOLDER`
6. Alle Fragen mit *y* beantworten

Die Schritte kann man auch sehr gut in der Datei [UPGRADING][4] im entpackten Verzeichnis nachlesen.

Anschliessend habe ich mit den folgenden Befehlen das neue Plugin installiert:

    php composer.phar selfupdate
    php composer.phar require roundcube/filters
    php composer.phar update

Danach konnt ich über die Weboberfläche bereits die ersten Filter für meine Mailinglisten anlegen und seitdem werden die Mails automatisch in die Unterordner verschoben. :smile:

[0]: http://roundcube.net/news/2014/05/11/update-1.0.1-released/
[1]: http://plugins.roundcube.net/
[2]: http://plugins.roundcube.net/packages/roundcube/filters
[3]: http://sieve.info/
[4]: https://github.com/roundcube/roundcubemail/blob/c94971bc6fe68c777cc066f51a7d88cc1149813f/UPGRADING

