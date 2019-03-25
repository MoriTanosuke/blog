---
title: 'Samsung Galaxy S3 (i9300) Sudden Death und andauernde Freezes'
date: 2013-06-02 00:00:00
tags: smartphone technik
layout: post
---
Seit einigen Tagen hatte ich ein sehr nerviges Problem mit meinem [Samsung Galaxy S3][0]:

Das Gerät fror anscheinend zufällig ein und liess sich nicht mehr bedienen.

Seltsam daran war, dass die Beleuchtung der Hardwaretasten immer noch anging, wenn ich den
Bildschirm mit dem Finger berührt habe. Ausserdem passierte das Einfrieren immer zu anderen
Zeitpunkten: Mal beim Starten von Chrome, mal beim Unlocken, mal beim Öffnen einer anderen
App.

Ich hab dann versucht, eine neue und eine alte Firmware zu installieren, ein Full Wipe zu
machen, einen anderen Kernel zu verwenden - nichts hat geholfen. Dann bin ich auf einen
[sehr hilfreichen Thread bei XDA][1] (und [noch ein Thread mit Erläuterung][4]) gestossen,
der eine Erklärung und einen Fix angeboten hat. Erstmal die Erklärung:

> The phone freezes when writing data to an affected eMMC block.
>
> An eMMC block is affected, when it's internal block pararameters (as f.e. write count
> for that block) are in such a state, that these parameters trigger a corrupted block
> without SD-fix (4.1.1) or trigger a freeze with SD-fix (4.1.2).

Ob euer SGS3 betroffen ist, könnt ihr mit der App [eMMC Brickbug Check][6] herausfinden.
Sollte die App den Chip **VTU00M 0XF1** anzeigen, seit ihr vom sog. *Sudden Death Bug*
betroffen. Dadurch kann das Telefon eventuell gebrickt werden, weshalb der Hersteller und
die Custom ROM-Entwickler einen Fix eingebaut haben - der anschliessend den Freeze verursacht.

Und jetzt die Anleitung für den Fix:

1. Eine [Recovery mit Fix][2] installieren
2. Beliebiges ROM installieren
3. [Kernel mit Fix][5] installieren
4. Download des [Dummy File Generator][3]
5. Mehrmaliges Beschreiben des **gesamten** internen Speichers (das soll den Chip in einen anderen Schreibzustand versetzen und den Freeze damit verhindern)
6. Abwarten

Mein Telefon ist mittlerweile 1 Tag ohne Freeze, das ist Rekord in den letzten 7 Tagen. Ich werd
mal abwarten und ggfs. hier noch ein Update schreiben.

Viel Erfolg!

[0]: http://www.samsung.com/de/consumer/mobile-device/mobilephones/smartphones/GT-I9300MBDDBT
[1]: http://forum.xda-developers.com/showthread.php?t=2133401
[2]: http://forum.xda-developers.com/showthread.php?t=2002953
[3]: https://play.google.com/store/apps/details?id=jp.nomunomu.dummy
[4]: http://forum.xda-developers.com/showthread.php?t=2091045
[5]: http://forum.xda-developers.com/showthread.php?t=1709686
[6]: https://play.google.com/store/apps/details?id=net.vinagre.android.emmc_check
