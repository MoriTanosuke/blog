---
title: 'Sourcecode-Analyse mit Frama-C'
date: 2009-07-31 00:00:00 
tags: 
layout: post
---
Seit einigen Tagen interessiere ich mich für die Analyse von Sourcecode mittels <a href="http://frama-c.cea.fr/">Frama-C</a>. Das ganze ist aus der Projektarbeit geboren, bei der ich mit Mathworks Polyspace zu tun habe und mich mit den Meldungen aus der Analyse herumschlagen darf. Leider wieder viel zu spät im inkrementell-iterativen Entwicklungszyklus und daher mit sehr viel Aufwand verbunden. Allerdings scheint es auch <a href="http://stackoverflow.com/questions/881880/open-source-alternative-to-mathworks-polyspace">keine kosteng&uuml;nstige Alternative zu Polyspace</a> zu geben.

Bis ich schliesslich über Frama-C stolperte. Damit kann der Quelltext analysiert werden, um Hinweise auf mö;gliche Probleme zu bekommen. Es gibt z.B. die Value Analysis mit deren Hilfe mögliche Werte und Wertebereiche für Variable bestimmt werden. Ich habe das ganze auf das folgende kleine Programm losgelassen:

<img src="http://posterous.com/getfile/files.posterous.com/import-rzzc/IfGxljotalmBlGBuaHeiAAviqBvHCftsGmBrEncGlCDrxuotusrJfoDelHFa/media_http4bpblogspot_JBpEj.png.scaled500.png" width="200" height="193"/>

Auf dieses kleine Programm habe ich dann Frama-C mit dem folgenden Aufruf losgelassen:

    frama-c -val hello.c

Damit wird Frama-C angewiesen, das <em>Value Analysis Plugin</em> auf die Datei <em>hello.c</em> anzuwenden. Heraus kommt die folgende Ausgabe:

<img src="http://1.bp.blogspot.com/_HK2Lso6JYlw/SnKebz5lvZI/AAAAAAAAAXk/m-lzFzMHKQY/s200/framac-hello2.PNG"/>

Sehr interessantes Ergebnis. Damit wird eine Prüfung der berechneten Werte möglich. Es wird quasi eine Äquivalenzklassenbildung automatisiert und mögliche Wertebereiche zurückgegeben. Frama-C kann noch sehr viel mehr, aber ich befinde mich gerade erst am Anfang der Reise. Ich denke, ich werde mich mit dem Tool noch weiter beschäftigen und prüfen, wie man das ganze in die bestehenden Prozesse integrieren kann. Und an welcher Stelle und für welche Projekte das überhaupt Sinn macht.

*PS:* Falls mir jemand sagen kann, wie man sinnvoll Quelltexte in Blogger einpacken kann, wäre ich sehr dankbar. Anscheinend zerschiessen pre-Tags das ganze Layout und werden von Blogger auch nicht wirklich gut abgespeichert. Nach jedem Speichern verschwinden Zeilen, werden Umbrüche zerstört... ☹
