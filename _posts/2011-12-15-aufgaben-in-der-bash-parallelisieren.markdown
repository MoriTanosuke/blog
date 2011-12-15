---
layout: post
title: Aufgaben in der BASH parallelisieren
excerpt: 
---
Heute wollte ich in der [Bash][0] (genauer: in der Bash meiner [Cygwin][1]-Installation) mehrere große Logfiles durchsuchen. Mit [grep][2] habe ich nach einer bestimmten Zeichenfolge ausschau gehalten und die Ausgabe sollte pro Datei in einer eigenen Ausgabedatei landen.

Mein erster Ansatz war eine Schleife über die Verzeichnisse mit den Logfiles:

    for i in *;do grep -hE "^[0-9\.]+" $i/access_log* > $i-ips.txt;done

Dabei stellte sich schnell heraus, dass die Logfiles mit mehreren Hundert Megabytes *etwas* zu groß für so eine Herangehensweise waren. Dann ist mir eingefallen, dass ich auf meinem fetten *Intel Core i7 870* mit 8 Kernen sitze. Also lässt sich so eine Aufgabe prima in einzelne Prozesse aufsplitten, damit die CPU auch mal ein wenig ausgelastet wird.

Hier ist mein zweiter Ansatz für die Schleife über alle Verzeichnisse mit Logfiles:

    for i in *;do (grep -hE "^[0-9\.]+" $i/access_log* > $i-ips.txt &);done

Zur Erläuterung: Die Schleife läuft über alle Dateien im aktuellen Verzeichnis (ok, da liegen bei mir nur Verzeichnisse...) und führt anschliessend ein *grep* auf allen *access_log* innerhalb der gefundenen Verzeichnisse. Dieses *grep* wird in einem neuen Prozess gestartet und schreibt die Ausgabe in eine Datei mit dem Verzeichnisnamen als Prefix.

Und schon laufen meine Prozessorkerne auf 80% und schreiben mehrere Hundert Megabyte in 6 unterschiedliche Ausgabedateien. ![;-)](/img/emotes/face-wink.png)

**Update**

Wenn ihr damit noch nicht zufrieden seid, könnt ihr auch diese Variante mit [xarg][3] ausprobieren:

    ls -1| xargs --max-procs=6 -n 1 grep -RhE "^[0-9\.]+" >>ips.txt

[0]: http://tldp.org/LDP/abs/html/
[1]: http://cygwin.com/
[2]: http://linux.die.net/man/1/grep
[3]: http://linux.die.net/man/1/xargs

