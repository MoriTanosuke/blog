---
title: "Import von markierten/geteilten Artikeln von Google Reader in tt-rss"
layout: post
---

Gestern habe ich mich mal drum gekümmert, wie man seine *starred items* und *shared items* von [Google Reader][0]
in [tt-rss][1] importieren kann. Mittlerweile gibt es dazu [ein gutes Plugin][2], aber der Import selbst hat mich
doch noch ein paar Minuten gekostet.

Nachdem ich mit [Google Takeout][3] meine Daten aus Google Reader exportiert hatte, wollte ich sie natürlich gleich
mit dem neuen Plugin in meine Installation von [tt-rss][1] importieren. Mit der Datei *starred.json*, die alle mit
dem Stern markierten Artikel enthält, war das auch kein Problem. Einfach unter *Einstellungen* -> *Feeds* am Ende 
der Seite auf den Import gehen, Datei auswählen, hochladen, fertig.

Danach wollte ich auch meine geteilten Artikel importieren. Die Datei *shared.json* war bei mir aber gute 17MB groß
und anscheinend verschluckt sich der Import über die Weboberfläche an großen Dateien. Also habe ich die Datei auf 
meinen Webspace hochgeladen und eine Kommandozeile aufgemacht.

Als erstes solltet ihr darauf achten, eine **PHP-Version >= 5.3** einzusetzen. Vorher bekam ich ganz seltsame 
Fehlermeldungen über falsch gesetzte Doppel-Doppelpunkte. Die Fehlermeldung war *unexpected T_PAAMAYIM_NEKUDOTAYIM 
in update.php* - also aufpassen.

Anschliessend konnte ich den Import mit folgendem Kommando starten:

<pre class="brush: bash">
php5-53-LATEST-CLI ./update.php --greader_import /full/path/to/my/shared.json
</pre>

Der Aufruf mit `php5-53-LATEST-CLI` liegt an meinem Webhoster. Den Aufruf müsstet ihr wahrscheinlich anpassen.
Der Import fragt anschliessend noch nach dem Benutzernamen für den Import, daher muss eine Möglichkeit zur Eingabe
bestehen. Wenn ihr also keinen Zugriff auf eine Shell habt, müsstet ihr wahrscheinlich noch eine kleine PHP-Datei
basteln, mit der ihr die Ausgaben sehen und Eingaben an den Prozess weiterreichen könnt.

[0]: http://reader.google.com/
[1]: http://tt-rss.org/
[2]: http://tt-rss.org/forum/viewtopic.php?f=1&t=1573
[3]: https://www.google.com/takeout/
