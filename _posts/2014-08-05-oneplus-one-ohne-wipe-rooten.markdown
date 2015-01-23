---
title: 'OnePlus One ohne Wipe rooten'
date: 2014-08-05 00:00:00 
tags: android,gadgets,root
layout: post
---
Besitzer des [OnePlus One][1] können ihr Telefon ohne Wipe (also ohne Zurücksetzen auf Werkseinstellung und Verlust der Daten) rooten. Dazu musst Du einfach die folgende Anleitung befolgen. :smile:

Folgende Downloads sind notwendig:

1. Minimalversion des Android SDK http://d-h.st/08w
2. TeamWin Recovery Project, kurz *TWRP* http://techerrata.com/browse/twrp2/bacon
3. SuperSU http://download.chainfire.eu/451/SuperSU
4. Universal Windows ADB Driver http://www.koushikdutta.com/post/universal-adb-driver

**Anleitung**

* Alles runterladen, dann die ADB Driver installieren und das Android SDK in `c:\AndroidSDKSlim` entpacken.
* Das TWRP Image in den Ordner `C:\AndroidSDKSlim\android-sdk-windows\platform-tools` verschieben und in *recovery.img* umbenennen.
* SuperSU auf das Telefon kopieren oder einfach dorthin runterladen. Am besten in den Ordner *Download* kopieren, da findet man es sehr einfach wieder. :smile:
* In den *fastboot mode* booten. Dazu das Telefon ausschalten, anschliessend die Tasten *volume up* und *power* gedrückt halten, bis der *fastboot* Bildschirm erscheint. Jetzt das Telefon per USB mit dem Rechner verbinden.
* Kommandozeile auf dem Rechner starten, dazu das Startmenü öffnen und *cmd* in die Suche eingeben. Mit dem Kommando `cd C:\AndroidSDKSlim\android-sdk-windows\platform-tools` in das Verzeichnis wechseln. Mit dem Kommando `adb version` sicherstellen, ob alles funktioniert. Wenn die Ausgabe *"Android Debug Bridge version x.x.xx"* erscheint, hat bis jetzt alles geklappt.
* Kommando `fastboot boot recovery.img` eingeben - damit wird die TWRP Recovery auf das Telefon geflasht.
* Mindestens 30s warten, bis das Telefon rebootet hat.
* Innerhalb von TWRP auf *Install* klicken, das ZIP von *SuperSU* im *Download* Ordner suchen und installieren.
* Backup des Systems in TWRP (NAND) erstellen.
* Reboot.

Jetzt sollte Dein [OnePlus][1] gerootet sein. :smile:

Das englische Original dieser Anleitung findet ihr [im OnePlus Forum][0].

[0]: https://forums.oneplus.net/threads/root-guide-oneplus-one-doesnt-wipe-your-data.66270/page-3#post-3190255
[1]: http://oneplus.net/de/one

