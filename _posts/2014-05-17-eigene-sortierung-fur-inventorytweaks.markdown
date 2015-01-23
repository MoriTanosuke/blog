---
title: 'Eigene Sortierung für InventoryTweaks'
date: 2014-05-17 00:00:00 
tags: minecraft
layout: post
---
Einer meiner Standard-MODs für [Minecraft][2] ist [InventoryTweaks][1]. Der Mod sortiert Kisten und das Inventar auf Knopfdruck. Sehr praktisch, um im Lager Ordnung zu halten - aber man kann ihn auch benutzen, um die Hotbar immer gleich einzurichten.

Wenn ihr die Sortierregeln bearbeiten wollt, geht wie folgt vor:

1. Öffnet euer Inventar mit `e`
2. Drückt die 3 kleine Punkte oben rechts, das InventoryTweaks Menü sollte sich öffnen
3. Drückt auf die Schaltfläche `Sortierungsregeln öffnen...`
4. Jetzt sollte ein Texteditor aufgehen und eure Regeln anzeigen

Falls ihr eigene Sortierungseinstellungen bauen möchtet, hier ist meine Konfiguration als Start:

    # hotbar nicht absichern, ich will die 
    # items dort auch sortieren lassen
    #D LOCKED
    # als erstes immer die Waffen!
    D1 sword
    D2 bow
    D3 ironPickaxe
    D4 shovel
    # dann irgendwelche Blöcke
    D5-D6 blocks
    # am ende immer Wassereimer, Essen, Fackeln
    D7 waterBucket
    D8 edibleFood
    D9 torch

Mit dieser Konfiguration habt ihr nach dem Sortieren mit `r` die folgende Hotbar:

<center><a href="https://www.flickr.com/photos/cringe/14200148941" title="Sortierte Hotbar in Minecraft by Carsten Ringe, on Flickr"><img src="https://farm6.staticflickr.com/5560/14200148941_a768254de8_o.png" width="394" height="126" alt="Sortierte Hotbar in Minecraft"></a></center>

[Die vollständige Dokumentation gibt es online][0].

[0]: http://inventory-tweaks.readthedocs.org/en/latest/
[1]: http://www.minecraftforum.net/topic/1720872-172-inventory-tweaks-157-march-14/
[2]: http://minecraft.net/

