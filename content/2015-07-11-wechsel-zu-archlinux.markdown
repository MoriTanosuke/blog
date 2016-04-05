---
layout: post
title: 'Wechsel zu ArchLinux'
---
Was macht *man*, wenn man Urlaub und viel freie Zeit hat? Genau, man wechselt auf dem [Dell XPS 15 Laptop][9] von [Ubuntu][0] zu [ArchLinux][1]. :smile: Eigentlich war ich zufrieden mit Ubutu, aber der Geek in mir wollte schon immer ein etwas nerdiges Linux ausprobieren. Ausserdem passt mein aktueller Window Manager [i3wm][6] nicht so ganz zu Ubuntu und mit einiger [Gnome][7]-Software war ich auch unzufrieden. Ich hatte kurz mit dem Gedanken gespielt, zu [Gentoo][2] zu wechseln, aber ganz so viel Frickelei wollte ich mir nicht antun. Und ArchLinux scheint in den letzten Monaten viel Zuwachs bekommen zu haben. Die Dokumentation sah auch sehr schön aus, ausführlich und trotzdem verständlich.

Also habe ich - nach einem Backup meiner Daten - kurzentschlossen einen [bootbaren USB-Stick mit ArchLinux][3] fertig gemacht und die Installation nach [Installation Guide][4] durchgeführt. Dabei gab es keine Überraschungen, sogar mit dem [EFI][5] kam ArchLinux gut zurecht. Nach nicht mal einer Stunde hatte ich das Grundsystem und die wichtigste Software installiert und konnte eine Runde Minecraft spielen. :thumbsup:

Bei den folgenden Dingen hatte ich ein wenig Bedenken, aber letztendlich hat alles gut funktioniert:

* WLAN
* Sound
* die eingebaute Nvidia-Karte (klappt hervorragend mit [Bumblebee][8])
* HiDPI Display

Die Paketverwaltung mit [pacman][10] funktioniert hervorragend, auch Community-gepflegte Software per [AUR][11] zu installieren klappt reibungslos. Ich bin zufrieden und werde ArchLinux erstmal weiter nutzen.

[0]: http://www.ubuntu.com/
[1]: https://www.archlinux.org
[2]: https://www.gentoo.org/
[3]: https://wiki.archlinux.org/index.php/USB_flash_installation_media
[4]: https://wiki.archlinux.org/index.php/Installation_guide
[5]: https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface#EFI_System_Partition
[6]: http://i3wm.org/
[7]: https://www.gnome.org/
[8]: https://wiki.archlinux.org/index.php/Bumblebee
[9]: http://www.dell.com/de/p/xps-15-l521x/pd
[10]: https://wiki.archlinux.org/index.php/Pacman
[11]: https://wiki.archlinux.org/index.php/Arch_User_Repository
