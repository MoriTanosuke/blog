---
layout: post
title: "Aufbau eines Hackintosh"
tags: mac
---
Ich bin ja [schon lange kein Apple-Nutzer mehr][0], aber in den letzten Tagen hat mich ein kleines Projekt gepackt:

> Kann ich auf meinem aktuellen Desktop mit Hardware von Mitte 2012 ein Mac OS installieren?

Grundsätzlich ist Mac OS für mich interessant: Ein Unix-basiertes System mit anständiger GUI. Normalerweise
läuft auf meinen Rechnern ja ein Linux mit [i3wm][1], in der letzten Zeit wieder vermehrt Windows 10 auf Desktop und Laptop.
Wer aber mal versucht hat, Linux auf einem HiDPI Display und auf Laptop-Hardware anständig zum Laufen zu bringen,
der wird meine Schmerzen verstehen.

Daher also der Grundgedanke: Kann ich ein Mac OS bekommen, ohne die Apple-typische Gängelei bei der Hardware? Zugegeben,
die Apple-Hardware funktioniert gut zusammen, allerdings ist der letzte anständige Desktop Rechner uralt und es ist weit und
breit keine neue Hardware zu sehen. Ausserdem bin ich zu sehr Gamer, um auf Windows zu verzichten und möchte bei der
Auswahl von Grafikkarte, Soundkarte und RAM nicht auf die Zwangszuweisung von Apple angewiesen sein.

Ich habe also angefangen, mich in diverse Foren einzulesen, Anleitungen zur Erstellung eines Installationsmediums zu lesen und
schlussendlich habe ich mir aus meiner uralten, aus meiner Macbook-Zeit übriggebliebenen Installations CD einen USB Stick
erstellt, mit dem ich mich an die Installation auf meiner Hardware gewagt habe. Es ging nicht ohne die tatkräftige Hilfe aus
einem Forum, wo meine ersten Installationsversuche noch einmal begutachtet und korrigiert wurden. Unter anderem braucht man

  * das Installationsmedium (aus dem Apple Store oder aus einem Karton mit uralten CDs)
  * den [Clover Installer][3]
  * zusätzliche Kernel Extensions wie [FakeSMC][2]

Die Hardware muss auch in etwa passen, z.B. braucht man ein UEFI Board. Empfohlen werden im Moment Boards von Gigabyte, da die
dort verbauten Chipsätze gut mit Mac OS zusammenspielen. Ich habe aber ein etwas älteres Board von ASRock, das auch funktioniert.

Mittlerweile bin ich also so weit, das sich ein funktionierendes *Mac OS High Sierra* auf meinem Desktop habe. Ich muss zwar
noch vom USB Stick booten und dann erst das Mac OS auf der internen SSD starten, aber das bekomme ich auch noch in den Griff.

Meine Nvidia GTX 970 macht auch schon ein Bild, aber die offiziellen Treiber laufen noch nicht. Audio habe ich noch nicht
probiert, aber da ich eine externe USB Soundkarte von Xonar habe, sollte das auch kein Problem sein.

*Edit* Die Grafikkarte läuft auch.

![Screenshot von Mac OS High Sierra](/images/macos.png)

Einziger Bug: beim Start öffnet sich eins meiner Bluray Laufwerke. 😎 Aber damit kann ich erstmal leben.

[0]: {% post_url 2010-08-28-apple-freie-zone | prepend: site.baseurl %}
[1]: https://i3wm.org/
[2]: https://bitbucket.org/RehabMan/os-x-fakesmc-kozlek
[3]: https://sourceforge.net/projects/cloverefiboot/
