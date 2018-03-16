---
title: 'Gutes Build Management'
date: 2009-05-15 00:00:00 
layout: post
---
Heute musste ich leidvoll erfahren, dass ein gutes Build Management für alle Projekte notwendig ist und niemals vernachlässigt werden sollte.

Ich wollte ein altes Projekt in [Hudson][0] integrieren. Dabei musste ich aber feststellen, dass sich mir die Reihenfolge der Ant-Targets nicht mehr erschloss. Es gab kein Target *dist*, dass alle notwendigen Schritte ausführt. Das default Target war zwar abhängig von 2 anderen Targets, konnte aber den Build nicht allein erstellen. Nach ein wenig Ausprobieren und Editieren musste ich auch feststellen, dass einige Bibliotheken im Classpath fehlten. Sowohl beim Kompilieren als auch im Classpath von Ant selbst.

Und genau da liegt auch ein Vorteil von Buildsystemen: Es werden verschluderte Abhängigkeiten von Entwicklerrechnern aufgedeckt. Aus der IDE heraus (so wie das betroffene Projekt immer gebaut wurde) lief alles glatt. Jetzt - mit einem frischen Rechner und ohne die Bibliotheken in der Umgebung - schlägt der Build fehl. Wie aufwändig es jetzt wird, dieses Projekt wieder buildfähig zu machen, kann ich nur schätzen. Eventuell lag es heute abend nur an der fortgeschrittenen Zeit und an meinem daher schon etwas vernebelten Blick, vielleicht ist morgen nach 5min wieder alles gut.

Aber die Lieferfähigkeit wäre im Zweifelsfall deutlich eingeschränkt. Und da sehe ich eine große Stärke der Buildsysteme, wenn sie von Anfang an konsequent im Projekt eingesetzt werden: Der Build läuft und Fehler werden sofort entdeckt. Und sollte man nach 6, 12 oder 24 Monaten noch einmal an das Projekt heran müsste, würde man einfach das Buildsystem wieder aktivieren (vielleicht würde es nach einem neuen Commit ins Repository ja auch automatisch wieder loslegen...) und hätte eine Lieferversion erzeugt.

Und da soll die Reise hingehen. Wenn's nach mir geht, so schnell wie möglich und mit allen Tools zur Qualitätskontrolle: Checkstyle, FindBugs, StyleCop, Unit Tests...

[0]: https://hudson.dev.java.net/
