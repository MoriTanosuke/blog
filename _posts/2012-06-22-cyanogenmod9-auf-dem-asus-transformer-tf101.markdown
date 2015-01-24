---
title: 'Cyanogenmod9 auf dem ASUS Transformer TF101'
date: 2012-06-22 00:00:00 
tags: android jailbreak cyanogenmod
layout: post
---
Nachdem ich fast seit dem ersten Tag ein [Custom ROM][1] auf [meinem ASUS Transformer TF101][2] 
installiert habe, bin ich gestern *endlich* auf [Cyanogenmod 9][0] gewechselt. Seit kurzer Zeit gibt es 
nämlich einen [offiziellen (*nightly*) Build direkt von den Servern von CM9][3].

Ihr solltet aber wissen, dass ein *nightly build* keine stabile Version darstellt. Das ist eine Version direkt
aus dem Sourcecode-Repository von Cyanogenmod, es können also Äderungen und Fehler auftreten.
Ich habe aber in den [letzten][4] [Wochen][5] gute Erfahrungen mit den *nightly builds* auf [meinem 
Samsung Galaxy S2 I9100][6] gemacht - sowohl mit Cyanogenmod7 (Android 3.x) als auch mit 
Cyanogenmod9 (Android 4.x).

**Installationsanleitung für CM9**

Ihr findet die [aktuelle Installationsanleitung für CM9 im Wiki][7]. Ich selbst konnte den ersten
Abschnitt überspringen, weil mein Gerät schon gerootet und mit der Recovery Firmware
[ClockworkMod Recovery][8] versehen war. Daher kann ich auch keine Hilfe zur Installation der
APX-Treiber unter *Windows 7* oder *Linux* geben.

Ansonsten verläuft der Update-Vorgang wie immer:

* Mit [TitaniumBackup][11] eure Anwendungsdaten sichern
* ROM runterladen
* Google Apps runterladen
* Beides auf der SD-Karte platzieren
* In die Recovery booten (Ausschalten, *Power+Vol DOWN* gedrückt halten)
* Mit den Volume-Tasten zum Menüpunkt *wipe data/factory reset* navigieren und mit *Power* bestätigen
* Mit den Volume-Tasten zum Menüpunkt *wipe cache partition* navigieren und mit *Power* bestätigen
* Mit den Volume-Tasten zum Menüpunkt *choose ZIP from sdcard* navigieren (in [diesem Thread][10] gibt es [hier][9] ein Bild dazu)
* CM9 ZIP auswählen
* Mit Power-Taste bestätigen
* das ganze nochmal, diesmal *Google Apps* ZIP auswählen
* Mit Power-Taste bestätigen
* Gerät neustarten

Jetzt habt ihr Cyanogenmod9 auf dem ASUS Transformer TF101 installiert. :-)


[0]: http://www.cyanogenmod.com/
[1]: http://www.androidpit.de/de/android/wiki/view/Custom_ROM
[2]: /2011/12/20/asus-transformer-tf101/
[3]: http://get.cm/?device=tf101
[4]: /2011/09/01/cyanogenmod-7-auf-dem-samsung-galaxy-s2/
[5]: /2012/03/18/cyanogenmod-9-ics-auf-samsung-galaxy-s2/
[6]: /2011/06/25/samsung-galaxy-s2-i9100/
[7]: http://wiki.cyanogenmod.com/wiki/Asus_Transformer:_Full_Update_Guide
[8]: http://forum.xda-developers.com/wiki/ClockworkMod_Recovery
[9]: http://www.pocketpc.ch/attachments/samsung-galaxy-s2-root-rom-gt-i9100/72091d1309284511-howto-flashen-via-clockworkmod-rom-ueber-cwm-installieren-2.png
[10]: http://www.pocketpc.ch/samsung-galaxy-s2-root-rom-gt-i9100/134555-howto-flashen-via-clockworkmod-rom-ueber-cwm-installieren.html
[11]: https://play.google.com/store/apps/details?id=com.keramidas.TitaniumBackup
