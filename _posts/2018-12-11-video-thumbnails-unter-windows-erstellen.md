---
title: "Video Thumbnails unter Windows erstellen"
layout: post
---

Vor ein paar Tagen wollte ich zur Unterscheidung von Video-Duplikaten aus allen Videodateien in 
einem Verzeichnis Thumbnails erstellen. Vorzugsweise aus der Mitte der Videos, damit ich auf 
einen Blick sehen kann, welche Dateien das gleiche Video enthalten. Leider ging das nicht 
einfach aus den Metadaten, deshalb musste ein kleines Skript her:

````
@echo off
for /r %%i in (*.m4v) do "c:\Program Files (x86)\VideoLAN\VLC\vlc.exe" "%%i" --rate=1 ^
  --video-filter=scene --vout=dummy --aout=dummy --start-time=240 --stop-time=241 ^
  --scene-path="%%~pi" --scene-format=png --scene-ratio=24 --scene-prefix="%%~ni" vlc://quit
````

Das Skript verwendet [VLC][0], um einen Thumbnails bei Sekunde 240 zu erstellen. Seltsamerweise
wird auch noch ein Thumbnails bei Sekunde 0 erstellt, der bei jedem Video natürlich schwarz war.

Ein paar Anmerkungen zum Skript:

  * Es werden alle M4V Dateien im Verzeichnis verarbeitet.
  * Der Thumbnail wird mit dem gleichen Namen (wird per `%%~ni` in der Schleife erzeugt) im PNG-Format erstellt.
  * Die Thumbnails werden im gleichen Verzeichnis (per `%%~pi` in der Schleife erzeugt) abgelegt.

Vielleicht hilft das Skript ja dem ein oder anderen bei ähnlichen Aufgaben.

[0]: https://www.videolan.org/
