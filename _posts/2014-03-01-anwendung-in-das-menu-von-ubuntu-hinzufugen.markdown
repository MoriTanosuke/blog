---
title: 'Anwendung in das Menü von Ubuntu hinzufügen'
date: 2014-03-01 00:00:00
tags: ubuntu linux
layout: post
---
Ich habe ein paar Anwendungen, die ich manuell aus einem [Tarball][2] installiere und die daher nicht _automatisch_ im [Menü von Ubuntu][3] auftauchen. Trotzdem will ich diese Anwendungen per _Super_-Taste starten können.

Damit man selbst Shortcuts für solche Anwendungen anlegen kann, ist ein zusätzliches Softwarepaket notwendig. Auf der [Kommandozeile][4] (ihr könnt ein Terminal mit der Tastenkombination _STRG+ALT+T_ öffnen) fügt ihr dieses Paket mit dem folgenden Befehl hinzu:

    sudo apt-get install --no-install-recommends gnome-panel

Anschliessend kann man mit dem folgenden Befehl einen neuen Shortcut für eine Anwendung hinzufügen:

    gnome-desktop-item-edit --create-new .local/share/applications/Teamspeak.desktop

Ich habe mir damit einen Link zu [Teamspeak][1] erstellt:

<a href="http://www.flickr.com/photos/cringe/12850775515/" title="Ubuntu - Add shortcut for Teamspeak by cringe, on Flickr"><img src="https://farm8.staticflickr.com/7375/12850775515_ecd4eb138a_o.png" width="495" height="234" alt="Ubuntu - Add shortcut for Teamspeak"></a>

Anschliessend kann ich Teamspeak über das Menü wie jede andere Anwendung starten:

<a href="http://www.flickr.com/photos/cringe/12850894025/" title="Teamspeak Shortcut in Ubuntu menu by cringe, on Flickr"><img src="https://farm3.staticflickr.com/2879/12850894025_6c7260970e_o.png" width="713" height="348" alt="Teamspeak Shortcut in Ubuntu menu"></a>

Weitergeholfen hat mir hierbei [eine gute Antwort auf askubuntu.com][0].


[0]: http://askubuntu.com/a/80024
[1]: http://www.teamspeak.com/
[2]: https://en.wikipedia.org/wiki/Tar_(computing)
[3]: http://wiki.ubuntuusers.de/Unity/Unity_Startmen%C3%BC
[4]: http://wiki.ubuntuusers.de/Terminal

