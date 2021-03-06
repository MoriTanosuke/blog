---
title: 'Lesbarer Sourcecode - functional style'
date: 2011-08-16 00:00:00 
tags: 
layout: post
---
<p>Heute hatte ich die Gelegenheit, ein längliches Stück Sourcecode aufzuräumen. Ich habe dabei versucht, meine Erfahrungen aus der funktionalen Programmierung in meine Hauptsprache Java einzubringen.</p>
<p>So ähnlich sah der Code vorher aus:</p>
<p><script src="https://gist.github.com/1149524.js?file=old.java"></script></p>
<p>Und so ungefähr sieht der neue Code aus:</p>
<p><script src="https://gist.github.com/1149524.js?file=new.java"></script></p>
<p>Der echte Code ist noch etwas lesbarer geworden, da ich die komplexe Erstellung der <code>ObjectTuple</code> und die noch längere Berechnung in Hilfsmethoden ausgelagert habe. Vorher musste man mühsam die verschiedenen Werte, die in die Berechnung einflossen, in jeder der <code>if</code>-Abfrage raussuchen und anschliessend noch einmal verstehen, was da aufgerufen wurde. Mit einem sprechenden Methodennamen in der <code>foreach</code>-Schleife sieht man auf einen Blick, was dort für alle Objekte passiert. Vor der Schleife wird eine einfache Liste erstellt, für die ich eine einfache Klasse zum Ablegen der zusammengehörigen Daten eingeführt habe. Ich nenne diese Klassen einfach <em>Tuple</em>, da sie zu nichts ausser dem Festhalten der Beziehung dieser Daten für die folgende Berechnung dient.</p>
<p>Ich bin mittlerweile eh ein groÃÂer Fan von Listen und überlege jetzt immer sehr genau, ob ich ein Objekt oder gleich eine Liste von Objekten zurückgeben soll. Damit erspart man sich auch die meisten Probleme, die man mit <code>null</code> als Rückgabewert von Methoden einhandelt...</p>
<p>Wie auch immer, jedenfalls konnte ich den Sourcecode um einige Zeilen und einige Pfade erleichtern. Die Abdeckung des Codes ist gestiegen, die Lesbarkeit hat sich (jedenfalls nach meiner Meinung) verbessert und sie lebten glücklich bis zur nächsten Anforderungsinflation. ;-)</p>
