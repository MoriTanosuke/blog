---
layout: post
title: JUsenet - Newsreader für Android
---
Diese Woche habe ich angefangen, eine echte Anwendung für mein Android-Telefon zu bauen: [JUsenet][0], ein Newsreader für das Usenet. Die Senioren unter euch werden sich erinnern...

Im Moment bin ich soweit, dass die Anwendung sich beim Server anmelden und die Liste der verfügbaren Gruppen herunterladen kann. Die nächsten Schritte sind das Runterladen der Artikel einer Gruppe, Anzeigen des Artikeltextes und anschliessend das Abonnieren von Gruppen.

Hier ist ein erstes Screenshot:

![Screenshot: List of groups](http://farm8.staticflickr.com/7004/6400333467_20cfb0a97c_o_d.png "Screenshot: List of groups")

Im Hintergrund arbeitet [Apache Commons Net][1] für mich und spricht mit dem NNTP-Server. Die Oberfläche folgt (hoffentlich) allen Android-Standards und ich werde versuchen, keine Sonderlocken einzubauen. Mein aktueller Newsreader [Groundhog][2] gefällt mir in der Hinsicht überhaupt nicht.

Was mich im Moment am stärksten beschäftigt, ist die Aufteilung in *Activities* und *Services* und natürlich die Erstellung der Oberflächen. Das Herunterladen der Gruppen und Artikel war da eher eine Kleinigkeit, das Einbinden eines *ContentProviders* zum Speichern und Laden der Daten in eine [SQLite][3]-Datenbank habe ich dafür immer noch nicht ganz verstanden.

Das ganze dient mal wieder eher dazu, meine Neugier zu befriedigen und nicht, eine vollständige Anwendung zu bauen. Aber wenn ihr auch gerade mit der Entwicklung für Android anfangt, lohnt sich vielleicht [ein Blick in meinen Sourcecode][4].

[0]: https://github.com/MoriTanosuke/jusenet/wiki/Home
[1]: http://commons.apache.org/net/
[2]: https://launchpad.net/groundhog
[3]: http://www.sqlite.org/
[4]: https://github.com/MoriTanosuke/jusenet
