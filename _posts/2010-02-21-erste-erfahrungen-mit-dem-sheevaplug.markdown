---
title: 'Erste Erfahrungen mit dem SheevaPlug'
date: 2010-02-21 00:00:00
tags:
layout: post
---
Seit <a href="http://www.kopis.de/blog/2010/02/19/angekommen-sheevaplug-computer-fur-die-steckdose/">Freitag abend</a> habe ich ein wenig mit dem <a href="http://www.newit.co.uk/">SheevaPlug</a> herumgespielt. Mittlerweile läuft Apache 2, <a href="http://libtorrent.rakshasa.no/">rtorrent</a> (und <a href="http://www.wtorrent-project.org/trac/">wtorrent</a>) und das ganze System ist bereits aktualisiert. Nachdem ich erst einmal die Boot-Parameter kaputtgespielt hatte und der SheevaPlug nicht mehr von der SD-Karte startete, hab ich mir Backup-Images sowohl von der NAND-Partition als auch von der gesamten SD-Karte angelegt, einmal per USB-Stick und einmal per `dd` und `ssh`.

**Backup der NAND-Partition**

Erst einmal solltet ihr ohne SD-Karte starten, damit der SheevaPlug das Ubuntu von der eingebauten NAND-Partition bootet. Anschliessend mountet ihr einen USB-Stick und kopiert anschliessend das Root-Dateisystem auf den Stick.

<pre class="brush: bash">
mount /dev/sda /mnt/usbstick
cp -a / /mnt/usbstick
cp -a /dev /mnt/usbstick
umount /mnt/usbstick
</pre>

Anschliessend steckt ihr den USB-Stick an euren Rechner und zieht mit `dd` ein Image:

<pre class="brush: bash">
dd if=/dev/sda of=sheevaplug-nand.img
</pre>

**Backup der SD-Karte**

Startet wieder von der NAND-Partition und bootet Ubuntu. Sobald ihr den SheevaPlug wieder erreichen könnt, wird per `ssh` und `dd` direkt ein Image der SD-Karte gezogen - auf dem Plug selbst ist natürlich zu wenig Platz für die 8GB der Karte, daher wird alles direkt über SSH auf den lokalen Rechner gezogen.

<pre class="brush: bash">
ssh ZIELADRESSE dd if=/dev/mmcblk0 | dd of=sheevaplug-sdcard.img
</pre>

**Wie geht es jetzt weiter?**

Sobald das Image der SD-Karte fertig ist, werde ich <a href="http://www.twonkyvision.de/">Twonkymedia Server</a> installieren und mit der <a href="http://www.xbox.com">Xbox</a> ausprobieren. Danach wird eine USB-Platte mit <a href="http://truecrypt.org">Truecrypt</a> und einigen Medien angeschlossen und das Streaming per Twonkymedia auf die <a href="http://de.playstation.com/ps3/">PS3</a> und den <a href="http://www.sony.de/hub/bravia-lcd-fernseher">Sony Bravia</a> ausprobiert. 😀
