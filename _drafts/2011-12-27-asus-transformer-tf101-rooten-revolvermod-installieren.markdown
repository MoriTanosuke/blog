---
layout: post
title: ASUS Transformer TF101 rooten und RevolverMOD installieren
excerpt: Seit einigen Tagen bin ich stolzer Besitzer eines [ASUS Transformer
TF101][0] und habe es besonders in der letzten Woche intensiv genutzt. Wie
fast immer ging mir aber das *Stock ROM* mit den ganzen vorinstallierten
Anwendungen und den herstellerspezifischen Modifikationen auf die Nerven
und ich wollte ein *Custom ROM* aus der [XDA Developers Community][1]
installieren. Ziemlich schnell bin ich dann bei [RevolverMOD][2]
gelandet, das mit [Prime][3] und [Revolution][4] zu den Standard ROMs für das
ASUS Transformer zählt. Wenn ihr weiterlest, erfahrt ihr, wie ihr das
ASUS Transformer TF101 rooten, [ClockworkMod Recovery][5] installieren
und anschliessend [RevolverMOD 3.9.9][2] installieren könnt.
---
Seit einigen Tagen bin ich stolzer Besitzer eines [ASUS Transformer
TF101][0] und habe es besonders in der letzten Woche intensiv genutzt. Wie
fast immer ging mir aber das *Stock ROM* mit den ganzen vorinstallierten
Anwendungen und den herstellerspezifischen Modifikationen auf die Nerven
und ich wollte ein *Custom ROM* aus der [XDA Developers Community][1]
installieren. Ziemlich schnell bin ich dann bei [RevolverMOD][2]
gelandet, das mit [Prime][3] und [Revolution][4] zu den Standard ROMs für das
ASUS Transformer zählt. Wenn ihr weiterlest, erfahrt ihr, wie ihr das
ASUS Transformer TF101 rooten, [ClockworkMod Recovery][5] installieren
und anschliessend [RevolverMOD 3.9.9][2] installieren könnt.

Rooten
======

Freundlicherweise gibt es einen *One Click Root* namens [Razorclaw][6]
für das ASUS Transformer. Die Anwendung kann man sich im [XDA Forum
runterladen][7] (das sollte sowieso die einzige Anlaufstelle für sowas
sein) und das Rooten läuft so ab:

* Razorclaw installieren
* Anwendung starten
* Button drücken
* Warten
* Fertig

Das ist so einfach, das man kaum weitere Anleitungen bei Google findet. 

Recovery Bootloader installieren
================================

[ClockworkMOD][5] ist wohl die bekannteste Recovery für Android Geräte.
Für das ASUS Transformer kann man sie auch installieren, und das ist
genau so einfach wie das Rooten. Hat man die Recovery Firmware erst
einmal installiert, kann man eigentlich gefahrlos neue Versionen eines
MOD installieren, da man jetzt Backups anlegen und wieder herstellen
kann.

TODO Beschreibung einfügen

RevolverMOD installieren
========================

Jetzt kann endlich [Revolver MOD] installiert werden. Dazu einfach die
vollständige Installationsdatei runterladen und auf der SD-Karte
ablegen. Anschliessend in die Recovery booten (dazu schaltet man das
Gerät ab, hält anschliessend *HOME* und *Volumne Down* gedrückt und
drückt anschliessend *Volumne Up*, wenn der kleine weiße Text auf dem
Boot-Bildschirm erscheint) und den Menüeintrag *Install ZIP from sdcard*
wählen. Wem das zu kompliziert ist, der installiert einfach 

Die Navigation in der Recovery erfolgt über die *Volume*-Tasten und die
Auswahl bestätigt man mit einem Druck auf *Home*.

Wer sicher sein will, ein sauberes System zu haben, der sollte in der
Recovery auch einen *Factory Reset* (auch *Full Wipe* genannt) machen.
Dann wird die komplette Datenpartition gelöscht und alle Anwendungen und
Benutzerdaten sind verschwunden. Ich empfehle vorher ein Backup der
Anwendungen und Daten mit [Titanium Backup][7]. Damit lassen sich
Backups einfach auf der SD-Karte erstellen und wiederholen.

Die Installation von *Revolver MOD* dauerte bei mir ca. 15 Minuten.
Danach muss man aus der Recovery rebooten und schon hat man ein frisches
System ohne ASUS-Krimskrams.

Anschliessend solltet ihr euch [Revolver Parts][8] installieren. Das ist
ein kleines Tool, mit dem ihr OTA-Updates machen und einzelne Teile des
MOD modifizieren könnt. Sehr hilfreich.

[0]: http://www.asus.de/Eee/Eee_Pad/Eee_Pad_Transformer_TF101/
[1]: http://forum.xda-developers.com/
[2]: http://forum.xda-developers.com/showthread.php?t=1173230
[3]: http://forum.xda-developers.com/showthread.php?t=1251044
[4]: http://forum.xda-developers.com/showthread.php?t=1245892
[5]: http://forum.xda-developers.com/showthread.php?t=1213723
[6]: http://forum.xda-developers.com/showthread.php?t=1345049
[7]: https://market.android.com/details?id=com.keramidas.TitaniumBackup
[8]: https://market.android.com/details?id=com.gnufabio.revolver_parts

