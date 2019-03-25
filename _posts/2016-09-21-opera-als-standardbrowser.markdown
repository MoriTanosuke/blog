---
layout: post
title: "Opera als mein Standardbrowser"
tags: sicherheit privatsphäre
---
Vor ein paar Tagen habe ich zu [Opera][0] als Standardbrowser gewechselt, als Teil meines [anhaltenden][1] [Versuchs][2], Google aus meinem täglichen Gebrauch so weit wie möglich zu verbannen.

Kleine Randnotiz, das hier ist gestern passiert:

<blockquote class="twitter-tweet" data-lang="de"><p lang="de" dir="ltr">Erstmal meine Dateien aus Google Drive gelöscht und in mein Resilio Sync geschoben.</p>&mdash; Carsten 🚀 (@carsten_r) <a href="https://twitter.com/carsten_r/status/778166046058487816">20. September 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Zurück zum Browser. Hier erstmal die Links zu den Extensions, die ich installiert habe:

* [uBlock Origin][3]
* [uMatrix][4]
* [Tampermonkey][5]

Tampermonkey ist eigentlich nur installiert, weil ich hin und wieder selbst ein paar  [Userscripts][6] schreibe, um mir störrische Webapps hinzubiegen. Theoretisch könnte ich auch ohne auskommen, vor allem, weil im Moment eh nur 2 meiner Skripte für die Arbeit laufen.

Völlig unentbehrlich dagegen sind [uBlock Origin][3] und [uMatrix][4]. Während das erste ein völlig unkomplizierter Adblocker auch für Einsteiger ist, sollte [uMatrix][4] nur von erfahrenen Nutzern installiert werden, die wissen, was ein [XHR][6] ist und wieso man manchmal externe Frames auf einer Seite zulassen möchte.

[HTTPS Everywhere][7] hatte ich anfänglich auch installiert, allerdings kann  [uMatrix][4] das gleiche. Dazu einfach in den Optionen von *uMatrix* auf den Tab *Privatsphäre* wechseln und die Option *Nur HTTPS: verbiete gemischte Inhalte.* aktivieren.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/cringe/29792232896/in/dateposted/" title="uMatrix setup to replace HTTPS Everywhere"><img src="https://c1.staticflickr.com/9/8176/29792232896_a60d528487_z.jpg" width="640" height="237" alt="uMatrix setup to replace HTTPS Everywhere"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Eins der Hauptfeatures eines Browser (neben Extensions und Verfügbarkeit auf Linux, Android und Windows) ist für mich die Möglichkeit, meine Einstellungen, den Verlauf, die geöffneten Tabs zu synchronisieren. Da Opera auf Chrome basiert, gibt es diesen Mechanismus - allerdings ist ein Account bei Opera notwendig. 😒 Bis habe ich nur bei [Firefox einen selbst-gehosteten Sync-Service][8] gefunden - allerdings war die Dokumentation damals grottig. Und auch Firefox hat mich nicht so recht überzeugt, vielleicht sollte ich mal wieder einen Blick auf den Browser werfen.

Mein erstes Fazit zu Opera: Guter Browser, auch auf Android. Macht was er soll, ist schnell und die Bedienung ist für einen Chrome-Nutzer keine Überraschung. 👍

[0]: https://www.opera.com/computer
[1]: http://blog.kopis.de/2012/03/27/umstieg-von-google-reader-auf-fever/
[2]: http://blog.kopis.de/2013/07/27/rueckzug-aus-hangouts-und-skype/
[3]: https://addons.opera.com/de/extensions/details/ublock/
[4]: https://addons.opera.com/de/extensions/details/umatrix/
[5]: https://addons.opera.com/de/extensions/details/tampermonkey-beta/
[6]: https://de.wikipedia.org/wiki/XMLHttpRequest
[7]: https://addons.opera.com/de/extensions/details/https-everywhere/
[8]: https://github.com/mozilla-services/syncserver
