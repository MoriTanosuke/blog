---
title: 'Legend Of Grimrock in Dropbox speichern'
date: 2014-11-29 00:00:00 
tags: gaming
layout: post
---
Ich spiele in den letzten Tagen öfter [Legend Of Grimrock][0] auf unterschiedlichen Rechnern. Damit ich nicht verschiedene Spielstände spielen muss, will ich die Savegames bei einem Rechnerwechsel mitnehmen. Ich will aber nicht dauernd dran denken müssen, die Savegames auf meinen USB-Stick zu kopieren.

Für diesen Zweck nutze ich schon länger [Dropbox][1] zur Synchronisation von Dateien auf meinen Rechnern. Damit das auch für *Legend Of Grimrock* funktioniert, muss

* der Ordner für die Savegames in die Dropbox verschoben und
* ein symbolischer Link vom Ursprungsort zum verschobenen Ordner erstellt werden.

Und das ganze geht so:

1. Eine Kommandozeile als Administrator öffnen, in dem ihr die *Windows*-Taste drückt und *cmd* eingebt, anschliessend Rechtsklick mit der Maus auf den Eintrag unter *Programme* und den Menüpunkt *Als Administrator ausführen* anklicken.
<center><a href="https://www.flickr.com/photos/cringe/15904889012" title="Kommandozeile als Administrator ausführen by Carsten Ringe, on Flickr"><img src="https://farm8.staticflickr.com/7466/15904889012_e920cfaed8.jpg" width="392" height="500" alt="Kommandozeile als Administrator ausführen"></a></center>
1. In das Verzeichnis `Eigene Dokumente\Almost Human` wechseln, z.B. `cd C:\Users\Carsten\Documents\Almost Human` - am besten, ihr macht einen *Windows Explorer* auf und klickt euch in den Ordner, anschliessend könnt ihr den Pfad aus der Addressleiste am oberen Rand des Explorers kopieren!
1. Den Ordner `Legend of Grimrock` in den Dropbox Ordner verschieben (Ausschneiden mit `CTRL+X`, Einfügen mit `CTRL+V`)
1. Den Befehl `mklink /d "Legend of Grimrock" PFAD\IN\EURE\DROPBOX\Legend of Grimrock` - ihr müsst natürlich die Angabe `PFAD\IN\EURE\DROPBOX` mit dem Pfad ersetzen, in den ihr im vorherigen Schritt den ausgeschnittenen Ordner wieder eingefügt habt!
1. Spielen, speichern, auf einem anderen Rechner weiterspielen :smile:

Damit hat man auch gleich eine nette kleine Sicherungskopie erstellt, falls mal einer der synchronisierten Rechner kaputt geht.

Ich mache das allerdings nur noch mit Savegames in der Dropbox, nicht mit anderen Dateien. Man muss der NSA ja nicht gleich alles frei Haus schicken...

[0]: http://www.grimrock.net/games/
[1]: https://db.tt/xGxAdiUX

