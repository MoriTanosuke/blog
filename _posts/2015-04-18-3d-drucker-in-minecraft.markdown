---
layout: post
title: "3D-Drucker in Minecraft mit OpenComputers"
---

Auf meinem Server habe ich seit einiger Zeit [Minecraft][0] 1.8 laufen, natürlich mit [Forge][1]. Seit kurzem auch wieder mit einigen Mods. Darunter [OpenComputers][2] (und das [Plant Mega Pack][3], aber das ist für einen anderen Artikel).

Und heute habe ich mal angefangen, einen 3D-Drucker zu betreiben. :smile:

<center>
<a href="https://www.flickr.com/photos/cringe/16567983804" title="OpenComputer Zimmer by Carsten Ringe, on Flickr"><img src="https://farm8.staticflickr.com/7669/16567983804_72ffd5f2ab.jpg" width="500" height="286" alt="OpenComputer Zimmer"></a>
<a href="https://www.flickr.com/photos/cringe/17164484326" title="Couchtisch by Carsten Ringe, on Flickr"><img src="https://farm9.staticflickr.com/8811/17164484326_6fb0cb61fc.jpg" width="500" height="286" alt="Couchtisch"></a>
<a href="https://www.flickr.com/photos/cringe/16982985747" title="Rampe by Carsten Ringe, on Flickr"><img src="https://farm6.staticflickr.com/5450/16982985747_74bd1fc7ff.jpg" width="500" height="286" alt="Rampe"></a>
</center>

Dazu gehören 3D-Modelle, die man per JSON beschreiben kann. Hier ist das Modell für den gezeigten Couchtisch:

<pre>
{
  label = "Couch Table",
  tooltip = "Simple couch table for your living room.",
  emitRedstone = false,
  buttonMode = false,
  shapes = {
    { 0, 0, 0, 1, 6, 1, texture = "planks_oak" },
    { 0, 0, 15, 1, 6, 16, texture = "planks_oak" },
    { 15, 0, 0, 16, 6, 1, texture = "planks_oak" },
    { 15, 0, 15, 16, 6, 16, texture = "planks_oak" },

    { 0, 6, 0, 16, 8, 16, texture = "planks_oak" }
  }
}
</pre>

Wichtig sind vor allem die *shapes*, dort wird das 3D-Modell beschrieben. Die letzte Zeile erstellt z.B. die Tischplatte über die gesamte Länge und Breite des Blocks und einer Dicke von zwei:

<pre>
  { x1, z1, y1, x2, z2, y2, texture = "planks_oak" }
</pre>

Die Koordinaten sind minecraft-üblich in x,z,y angegeben. Das hat bei mir im ersten Druckversuch einen seitlich liegenden Tisch ergeben.

Das Modell für die Rampe sieht wie folgt aus:

<pre>
{
  label = "Ramp #1",
  tooltip = "Simple ramp, half a block.",
  emitRedstone = false,
  buttonMode = false,
  shapes = {
    { 0, 0, 0, 16, 1, 16, texture = "planks_oak" },
    { 1, 1, 0, 16, 2, 16, texture = "planks_oak" },
    { 2, 2, 0, 16, 3, 16, texture = "planks_oak" },
    { 3, 3, 0, 16, 4, 16, texture = "planks_oak" },
    { 4, 4, 0, 16, 5, 16, texture = "planks_oak" },
    { 5, 5, 0, 16, 6, 16, texture = "planks_oak" },
    { 6, 6, 0, 16, 7, 16, texture = "planks_oak" },
    { 7, 7, 0, 16, 8, 16, texture = "planks_oak" },
    { 8, 8, 0, 16, 9, 16, texture = "planks_oak" },
    { 9, 9, 0, 16, 10, 16, texture = "planks_oak" },
    { 10, 10, 0, 16, 11, 16, texture = "planks_oak" },
    { 11, 11, 0, 16, 12, 16, texture = "planks_oak" },
    { 12, 12, 0, 16, 13, 16, texture = "planks_oak" },
    { 13, 13, 0, 16, 14, 16, texture = "planks_oak" },
    { 14, 14, 0, 16, 15, 16, texture = "planks_oak" },
    { 15, 15, 0, 16, 16, 16, texture = "planks_oak" }
  }
}
</pre>

Die Modelle gibt es auch in [einem Git-Repository][4]. Viel Spass! :smile:

[0]: http://minecraft.net/
[1]: http://files.minecraftforge.net/
[2]: http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1293018-opencomputers-v1-5-7
[3]: http://minecraft.curseforge.com/mc-mods/70748-plant-mega-pack
[4]: https://github.com/MoriTanosuke/opencomputers-3dmodels
