---
title: 'Wie baut man offline ein Maven-Projekt in Hudson?'
layout: post
---
Diese Frage beschäftigt mich gerade. Auf der Maschine des Entwicklers läuft ein lokales Repository und der Zugriff erfolgt per HTTP. Jetzt soll das Projekt auf den [Hudson][0]-Server umziehen, der aber keinerlei Internetverbindung verfügt.

Wie bekommt man das [Maven][1]-Repository am besten auf den Hudson-Server?

  * Einfach bei der Konfiguration des Projektes draufkopieren?
  * Auf einer VM neben den Server stellen? (im Hinblick auf Nutzung des Repositories in zukünftigen Projekten sicher das beste.)
  * Das Maven-Repository im Subversion verwalten und vor dem Build abholen?

Am einfachsten ist für das erste Projekt bestimmt das manuelle Kopieren des Repositories. Für den weiteren Einsatz lohnt sich das Aufsetzen einer eigenen VM für das Repository.

Hat jemand eine schöne URL zu einem Erfahrungsbericht oder sogar eigene Erfahrungen mit der Einführung von Maven in die *Continuous Integration*?

[0]: https://hudson.dev.java.net/
[1]: http://maven.apache.org/
