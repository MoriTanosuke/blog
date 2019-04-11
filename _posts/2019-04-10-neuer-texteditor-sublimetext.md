---
layout: post
title: "Neuer Texteditor: Sublime Text"
featured_image: /images/sublime1.png
tags: texteditor software
categories: software
---

Ich bin ja öfter mal auf der Suche nach einem neuen Texteditor, mit dem ich die
täglichen Aufgaben erledigen kann, die nicht unbedingt den Start von meinem
[IntelliJ Ultimate][1] erfordern. Die letzten Monate war das oft
[Visual Studio Code][2], das sich seit dem holprigen Start in einen guten
Allround-Editor verwandelt hat. Aber wirklich zufrieden war ich damit nicht und
deshalb hab ich mich nach einer Alternative umgesehen.

![]({{ site.baseurl }}/images/sublime1.png)

Gelandet bin ich bei [Sublime Text][0], ein nicht-freier, kostenpflichtiger
Editor - und nach einigen Wochen habe ich mich auch dazu entschlossen, eine
Lizenz zu kaufen. Mit 80US$ nicht ganz billig, aber ich stehe seit längerem auf
dem Standpunkt, dass man für gute Software auch bezahlen - oder im Fall
von Open Source Software, seine eigenen Zeit für z.B. Pull Requests investieren
kann.

Hier noch eine Liste von *Packages*, die ich verwende:

  * [A File Icon][4]
  * [Color Highlighter][5]
  * [Filter Lines][6]
  * [Git][7]
  * [GitGutter][8]
  * [HighlightWords][9]
  * [PackageControl][3]
  * [SideBarEnhancements][10]
  * [Terminal][11]

Am wichtigsten ist sicher [Package Control][3], mit dem kann man die Pakete
suchen und mit einem Tastendruck auch gleich installieren kann. Integration von
*git* muss natürlich auch sein und [GitGutter][8] ermöglicht über die linke
Seitenleiste des Editors (auf der ich auch immer die Zeilennummer eingeblendet
habe) einen schnellen Blick auf die letzten Änderungen. [Filter Lines][6] ist
wahrscheinlich ein Spezialfall, aber ich habe öfter die Notwendigkeit aus einer
großen Datei bestimmte Zeilen rauszusuchen. Das Handling von sehr großen
Dateien (größer 100000 Zeilen) ist in den meisten Editoren eher unhandlich,
deshalb filtere ich mir die gesuchten Zeilen einfach mit dem Package in ein
neues Editorfenster und mache von dort weiter.

Die [SideBarEnhancements][10] erweitern die Ordner-Ansicht um ein paar
nützliche Aufgaben, wie *Reveal in Sidebar* um eine geöffnete Datei zu finden
oder einfache Dateioperationen wie Löschen, Umbenennen usw. In die gleiche
Richtung geht [A File Icon][4], das die Sidebar einfach um ein paar schöne (und
vor allem schnell zu erkennende) Dateisymbole erweitert. Was ähnliches bietet
[Terminal][11], um schnell per *Command Palette* ein Terminalfenster im
Projektverzeichnis zu öffnen.

Das ganze habe ich auf einem USB Stick installiert, damit ich meine Konfiguration
mitnehmen kann. Ich werde das ganze aber jetzt auf meinen Rechnern installieren,
damit ich von einer SSD laufe. 😊

[0]: https://www.sublimetext.com/
[1]: https://www.jetbrains.com/idea/
[2]: https://code.visualstudio.com/
[3]: https://packagecontrol.io/
[4]: https://packagecontrol.io/packages/A%20File%20Icon
[5]: https://packagecontrol.io/packages/Color%20Highlighter
[6]: https://packagecontrol.io/packages/Filter%20Lines
[7]: https://packagecontrol.io/packages/Git
[8]: https://packagecontrol.io/packages/GitGutter
[9]: https://packagecontrol.io/packages/HighlightWords
[10]: https://packagecontrol.io/packages/SideBarEnhancements
[11]: https://packagecontrol.io/packages/Terminal
