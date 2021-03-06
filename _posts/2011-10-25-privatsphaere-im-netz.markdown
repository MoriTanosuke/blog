---
title: 'Privatsphäre im Netz ist schwierig'
date: 2011-10-25 00:00:00 
tags: 
layout: post
---
Ich weiß, ihr wollt nichts über Netzwerktechnik hören. Aber wenn man im Internet unterwegs ist, dann ist es manchmal ganz gut, wenn man weiß, wie die Bytes über die Leitung kommen. Und wer dabei alles mitlesen kann.

Dazu hat [Henning Tillmann][0] [ein schönes Beispiel implementiert][1]:

<img src="http://tilli.me/privacyimg/einbild.png" width="400" height="400" style="border:2 px solid black" alt="PrivacyImg - Ein interaktives Beispiel. Konfiguration ueber http://tilli.me/privacyimg" />

Das ist ein Bild, dass ich direkt von [tilli.me][2] einbinde. Und wenn ich das mache, weiß *tilli.me* natürlich auch, wer das Bild haben will. Sonst würden die Bytes ja gar nicht bei mir ankommen. Mit Javascript kann man das ganze z.B. auch so machen:

<div id="testbild"></div>
<script type="text/javascript">//<!--
var img = document.createElement('img');
img.src = 'http://tilli.me/privacyimg/einbild.png';
document.getElementById('testbild').appendChild(img);
//--></script>

Der Code dazu sieht wie folgt aus:

<script src="https://gist.github.com/MoriTanosuke/1312839.js"></script>

Dieses Bild ist jetzt per Javascript eingebunden. Ich war so frei, und hab es *nicht* 1x1 Pixel groß gemacht, so dass ihr es sehen könnt. Wäre ich an euren Bewegungsdaten im Internet interessiert, würde ich es vielleicht unsichtbar einbinden, so dass ihr es gar nicht mitbekommen würdet.

Es ist also nicht nur Facebook, das eure Privatsphäre *bedroht*. Manche Sachen kann man einfach nicht vermeiden, wenn man mit der heutigen Technik sinnvoll etwas anstellen will.

[0]: http://www.henning-tillmann.de/
[1]: http://www.henning-tillmann.de/2011/10/der-facebook-like-button-oder-das-datenschutzproblem-seit-20-jahren-privacyimg/
[2]: http://tilli.me/
