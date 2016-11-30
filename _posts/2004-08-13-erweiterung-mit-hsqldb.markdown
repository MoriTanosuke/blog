---
layout: post
title: "Erweiterung mit HSQLDB"
---
Vor einiger Zeit (und einigen Neuinstallationen) erwähnte ich schon einmal mein Freizeitprojekt: den Java NNTP-Newsreader JNews. An diesem Newsreader arbeite ich als Usenet-Nutzer in meiner freien Zeit. In den letzten Tagen habe ich mich daran versucht, dem Projekt Datenbankunterstützung angedeihen zu lassen.

Die Datenbank [hsqldb][0] ist eine Datenbank in Java, die im Server- und Stand Alone-Modus gestartet werden kann. Der Stand Alone-Modus integriert die Datenbank in die Applikation, so dass der Benutzer sich nicht die Mühe machen muss, z.B. einen riesigen [MySQL-Server][1] auf seinem Desktop aufzusetzen. Da JNews noch in einem relativ frühen Entwicklungsstadium ist, kann ich die notwendigen Änderungen ohne Schwierigkeiten implementieren.

Zusätzlich bin ich von einem semi-objektorientierten Ansatz der GUI-Programmierung zum Model/View/Controller oder besser: View/Controller-Ansatz umgeschwenkt. Eine [Singleton-Klasse][2] names CoreController kontrolliert dabei die Datensätze und die Funktionalität auf der unteren Ebene, während ein Swing-GUI (aufgepeppt mit [SkinLF][3]) nur die gesammelten Daten darstellt.

Die Performanz der Datenbank-Transaktionen beschert mir allerdings noch einiges Kopfzerbrechen, denn es dauert viel zu lange, um ca. 30 000 Gruppen einzufügen. Die Auslagerung in einen Thread behebt dieses Problem nur zum Teil, allerdings kann die Ausführungsgeschwindigkeit nicht erheblich verbessert werden. Die Gruppen müssen schliesslich über das Internet vom NNTP-Server heruntergeladen werden. Da der Newsreader diese Daten aber nicht bei jedem Start lesen muss, sondern nur auf besonderen Befehl des Benutzers, ist die Wartezeit vertretbar.

[0]: http://hsqldb.sourceforge.net/
[1]: http://www.mysql.com/
[2]: http://www.galileocomputing.de/openbook/java2/kap_10.htm#Xxx853700
[3]: http://www.l2fprod.com/
