---
title: "Bessere Lesbarkeit mit TinyTiny RSS 1.7.4"
layout: post
---
Ich teste gerade [tt-rss][0] als RSS Reader, da diese Software für
mehrere Benutzer ausgelegt ist - ein Feature, das [Fever][1] leider
fehlt. Dafür sieht [Fever][1] eindeutig besser aus und die Usability ist
sehr viel besser.

Wie auch immer, die Standardeinstellungen von [tt-rss][0] tragen für
mich leider nicht zur Lesbarkeit bei, aber die Entwickler haben gleich
eine Möglichkeit vorgesehen, das Aussehen über CSS anzupassen. Dazu

* wechselt ihr in die *Preferences* (rechts oben in dem Ausklappmenü *Aktionen...*,
* klickt auf den Knopf *Personalisieren*
* und fügt folgenden Code ein:

<pre class="brush: css">
div.postReply div.postContent {
  font-size: 12pt;
  max-width: 700px;
  text-align: justify;
}
</pre>

Anschliessend sind die Artikeltexte etwas größer und im Blocksatz
gesetzt. Wer Flattersatz bevorzugt, kann die Zeile `text-align:
justify;` weglassen.

[0]: http://tt-rss.org/
[1]: http://feedafever.com/

