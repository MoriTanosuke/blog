---
layout: post
title: Ein Rant gegen Copy'n'Paste
---
Heute hatte ich wieder ein Schlüsselerlebnis in einer ca. 2 Jahre alten Codebasis: Eine Klasse hatte die Worte *validate* und *input* im Namen und in meinem jugendlichen Leichtsinn hatte ich erwartet, sie würde eine Benutzereingabe annehmen und validieren. Nach einigen Minuten musste ich aber feststellen, dass sie eigentlich dazu da ist, Daten aus dem Backend zu laden. Und nichts weiter.

Das wäre jetzt keine Aufregung wert (*Refactor, Rename und gut*), aber der ganze Code ist in mieserablem Zustand. Hauptsächlich liegt das daran, dass an allen Ecken und Enden um das eingesetzte Framework herumgearbeitet wird. Fast in allen Modulen kann man die Umrisse von reinkopierten Code-Fetzen erkennen, die anscheinend wahllos kopiert und so lange weiterkopiert und verschoben wurden, bis die Anwendung ungefähr das getan hat, was gewünscht war.

Jetzt habe ich dieses Framework vor einiger Zeit schon einmal eingesetzt und mich damit soweit beschäftigt, dass ich ungefähr weiß, was man machen muss. Ausserdem hab ich mir für ca. 5EUR (ja, das Framework hat schon ein paar Tage hinter sich) ein Buch zugelegt, das als Überschrift eines der ersten Kapitel *Antipatterns* enthält. Und in diesem Kapitel, innerhalb der ersten 50 Seiten, kann man all das finden, was ich jeden Tag sehen muss...

Um das nochmal festzuhalten: ich habe nichts dagegen, wenn man im Projekt lernt. Eigentlich will ich genau das machen, jeden Tag was lernen und was neues machen. Aber ich habe was dagegen, Copy'n'Paste aus irgendwelchen Quellen zu machen, ohne ein Verständnis für den Code zu entwickeln. Und ohne überhaupt zu versuchen, etwas so zu machen, wie es das eingesetzte Framework vorschlägt. Und ich habe etwas dagegen, diesen Code dann genau so weiterzuführen und immer schlechter zu machen, bis alles so verrottet ist, dass keine Änderung mehr ohne neue Fehler gemacht werden kann und alle Schätzungen pure Illusion sind.
