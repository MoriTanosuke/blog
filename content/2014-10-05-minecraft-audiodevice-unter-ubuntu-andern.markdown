---
title: 'Minecraft Audiodevice unter Ubuntu ändern'
date: "2014-10-05"
tags: minecraft
layout: post
---
Ich benutze ein [Logitech G430 USB Headset][0] und wenn ich unter Linux das Geräte einstecke, kann ich bis vor kurzem das Audiodevice für [Minecraft][0] nicht mehr ändern. Das ist sehr nervig und muss nicht sein.

Wenn ihr die Datei `~/.alsoftrc` mit folgendem Inhalt anlegt, könnt ihr auch bei Minecraft das Audiodevice nach dem Start noch ändern:

    drivers=pulse
    [pulse]
    allow-moves=true

Wenn ihr jetzt `pavucontrol` aufruft, könnt ihr Minecraft auf das neue Audiodevice verschieben.

[Hier gibt es auch eine entsprechende Antwort bei AskUbuntu.][2]

[0]: http://gaming.logitech.com/de-de/product/g430-7-1-surround-sound-gaming-headset
[1]: https://minecraft.net/
[2]: http://askubuntu.com/a/433460/6968

