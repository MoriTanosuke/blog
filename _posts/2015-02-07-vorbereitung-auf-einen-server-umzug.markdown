---
title: 'Vorbereitung auf einen Server-Umzug'
layout: post
---
Ich werde mal versuchen, alle Dinge von [kopis.de][0] in Docker Containern unterzubringen. Das ganze dient als Vorbereitung auf einen Umzug zu einem anderen Anbieter.

Was ich also brauche:

- eine SQL Datenbank (MySQL oder PostgreSQL)
- mehrere Wordpress-Installationen
- einen FTP Server
- einen Apache für statische Inhalte
- Mailserver + SpamAssassin

Die Container für [MySQL][1] und [Wordpress][2] sind schnell erledigt. Es gibt offizielle Images für beide und der Export/Import von Wordpress bringt keine großen Probleme, da ich kaum Anpassungen machen muss.

FTP und Apache sollten ähnlich schnell erledigt sein. Der springende Punkt hier ist, dass beide Container auf eine gemeinsame Datenbasis zugreifen sollen, damit ich per FTP Dateien hochladen und per Apache anzeigen kann. Dazu werde ich wohl ein Volume verwenden - oder einen [Data-Only Container][3], das muss ich noch ausprobieren. Hängt von den Backup-Möglichkeiten der Data-Only Container ab.

Der letzte Punkt bereitet mir am meisten Kopfschmerzen. Andererseits habe ich sowohl den Mail-Server als auch den SpamAssassin wieder mit Standardeinstellungen laufen. Einzig die Sieve-Filter in meinem Dovecot muss ich irgendwo ablegen, evtl wieder in einem Volume oder Data-Only Container.

Bin gespannt, ob ich das hinbekomme. Ich fange jetzt an, alle Dienste lokal aufzusetzen und die Imports zu testen.﻿

[0]: http://www.kopis.de/
[1]: https://registry.hub.docker.com/_/mysql/
[2]: https://registry.hub.docker.com/_/wordpress/
[3]: http://docs.docker.com/userguide/dockervolumes/

