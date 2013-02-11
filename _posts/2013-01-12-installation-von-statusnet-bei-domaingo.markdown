---
layout: post
title: "Installation von StatusNet 1.1.0 bei domaingo"
---

Heute habe ich versucht, [StatusNet][0] auf meiner eigenen Domain zu installieren. Damit will ich mich weiter unabhängig von den groÃÂen Diensten wie [Facebook][1], [Twitter][2] und [Google+][3] machen. [StatusNet][0] ist eine Mikroblogging-Software, mit der man Statusupdates veröffentlichen kann - aber die Software ist [Open Source][4] und steht unter einer [GNU Affero General Public License][5]. Damit treffen alle Kriterien zu, die ich für eine [Befreiung des Internet][6] anlege.

Zur Installation von [StatusNet][0] braucht man einen eigenen Webspace mit PHP und MySQL. Das ist bei [meinem Webhoster domaingo][7] vorhanden. Ich hab also [StatusNet][0] entpackt und anschliessend den Installer aufgerufen. [Die Installation selbst ist länglich beschrieben][8]. Aber es gab ein kleines Problem: Der Installer meldete immer

    Database error: DB Error: unknown option ssl

Erst war ich etwas ratlos, aber nach ein paar Minuten Recherche im Netz war mir klar, dass dieser Fehler irgendwas mit [PHP pear][9] zu tun haben musste. Das Forum von [StatusNet][0] selbst ist wenig hilfreich. Die meisten Threads sind unerträglich zu lesen und verlaufen nach wenigen Antworten im Sand. Irgendwann bin ich [im Forum von domainfactory][10] auf einen alten Thread gestossen, der auch wieder auf [pear][9] verwies. Ich habe mich also per SSH auf meinem Webspace eingeloggt (mein Tarif erlaubt das) und mit folgenden Kommandos im Installationsverzeichnis von [StatusNet][0] meine Konfiguration aktualisiert:

    wget http://pear.php.net/go-pear.phar
    php5.3.19 ./go-pear.phar

Alle Fragen, die mir bei der Ausführung des Skripts `go-pear.php` gestellt wurden, habe ich mit dem vorgegebenen Standard beantwortet. Anschliessend hatte ich eine Datei `php.ini` mit folgendem Inhalt in meinem Verzeichnis:

    ;***** Added by go-pear
    include_path="/kunden/MEINVERZEICHNIS/pear/share/pear:"
    ;*****

Damit war [pear][9] aktuell für mich verfügbar und die Installation von [StatusNet][0] lief erfolgreich durch. Die Seite war anschliessend bedienbar und ich hab mich gleich dran gemacht, ein eigenes Theme auf Basis von [bootstrap][11] zu erstellen. Wer sich das Ergebnis ansehen möchte, findet es unter [https://kopis.de/statusnet/][12].


[0]: http://status.net/
[1]: http://www.facebook.com/
[2]: http://www.twitter.com/
[3]: http://plus.google.com/
[4]: http://de.wikipedia.org/wiki/Open_Source
[5]: http://de.wikipedia.org/wiki/GNU_Affero_General_Public_License
[6]: /2013/01/12/das-internet-zurueckerobern-projekte-zum-einstieg/
[7]: http://domaingo.de/
[8]: http://gitorious.org/statusnet/mainline/blobs/master/INSTALL
[9]: http://pear.php.net/
[10]: https://www.df.eu/forum/threads/52262-laconica-zum-laufen-bringen
[11]: http://twitter.github.com/bootstrap/
[12]: https://kopis.de/statusnet/
