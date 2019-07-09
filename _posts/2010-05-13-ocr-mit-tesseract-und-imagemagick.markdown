---
title: 'OCR mit Tesseract und ImageMagick'
date: 2010-05-13 00:00:00
layout: post
---
Vor ein paar Tagen habe ich mir <a href="http://code.google.com/p/tesseract-ocr/">Googles Tesseract</a> <a href="http://www.macosxhints.com/article.php?story=2010021805585497">unter Mac OS X installiert</a> und will damit meinen gescannten Briefe und Rechnungen einen Volltextindex verpassen. Ich scanne allerdings gerne als PNG und Tesseract versteht nur TIFF. Daher müssen die Dateien mit <a href="http://www.imagemagick.org/script/binary-releases.php?ImageMagick=atphnn81to8g8ku2tqbvbgejf5#macosx">ImageMagick</a> konvertiert werden:

<pre class="brush: bash">
convert -compress none -density 150x150 /PFAD/ZUM/BILD.png /PFAD/ZUM/TEMPBILD.tif
</pre>

Anschliessend kann man die Datei mit Tesseract durchleuchten lassen und erhält eine Textdatei:

<pre class="brush: bash">
tesseract /PFAD/ZUM/TEMPBILD.tif /PFAD/ZUR/TEXTAUSGABE
</pre>

Tesseract hängt die Endung <code>.txt</code> selbst an.
