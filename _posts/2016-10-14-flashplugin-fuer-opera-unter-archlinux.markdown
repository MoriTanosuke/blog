---
layout: post
title: "Flashplugin für Opera unter Arch Linux"
tags: linux
---

Auf meinem Desktop läuft seit einigen Monaten [Arch Linux][2] und [seit kurzem als Standardbrowser Opera][3]. Leider muss ich mich seitdem auch wieder mit dem unsäglichen *Flash Plugin* herumschlagen - in Chrome kommt das ja automatisch mit und wird mit Chrome aktualisiert.

Für Opera muss ich noch zwei Pakete nachinstallieren:

    pacaur -S freshplayerplugin-git chromium-pepper-flash

[Pacaur][4] ist ein Hilfprogramm, mit dem sich direkt Pakete aus dem [*A*rch *U*ser *R*epository][5] herunterladen und installieren lassen. Damit sollte man immer vorsichtig sein, da im Prinzip anderer Leute Skripte direkt und u.U. mit Root-Rechten auf dem eigenen Rechner ausgeführt werden. Allerdings kann man mit *Pacaur* sehr einfach in die Skripte gucken und prüfen, was dort gemacht wird.

Egal, zurück zum Flash-Plugin. Nachdem der Befehl von oben erfolgreich ausgeführt ist, muss Opera noch einmal neugestartet werden. Anschliessend sollte das Plugin unter *about:plugins* im Browser gelistet werden. Aktuell ist bei mir die Version *23.0.0.185* installiert.

Vielen Dank an [linuxundich][6] für die Starthilfe! 🙂

[0]: https://linuxundich.de/gnu-linux/zur-situation-von-adbobe-flash-unter-linux/
[1]: https://aur.archlinux.org/packages/freshplayerplugin/
[2]: https://www.archlinux.org
[3]: {% post_url 2016-09-21-opera-als-standardbrowser %}
[4]: https://wiki.archlinux.org/index.php/Pacaur
[5]: https://wiki.archlinux.org/index.php/Aur
[6]: https://linuxundich.de/gnu-linux/zur-situation-von-adbobe-flash-unter-linux/
