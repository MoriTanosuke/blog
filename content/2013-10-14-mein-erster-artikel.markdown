---
title: 'Mein erster Artikel'
date: "2013-10-14"
tags: blog
layout: post
---
So, [Ghost ist veröffentlicht][0] und kann runtergeladen werden. Natürlich hab ich das gleich ausprobiert und was Du hier liest, ist der erste Artikel in meiner eigenen Installation. Im Moment ist die [Version 0.3.2][1] veröffentlicht, der Download ist öffentlich verfügbar. ~~Ich konnte noch keinen Link zum Sourcecode entdecken, aber das kommt vielleicht noch.~~ Der Sourcecode ist unter https://github.com/TryGhost/Ghost verfügbar.

Wer schonmal [Nodejs][2] gesehen hat, wird mit *Ghost* kein Problem haben. Nach dem Download wird das Archiv einfach entpackt und anschliessend mit folgenden Befehlen installiert und gestartet:

    unzip ghost-0.3.2.zip -d ghost
    cd ghost
    npm install --production
    npm start --production

Danach läuft unter http://localhost:2368 eine eigene Instanz von Ghost und man kann sich unter http://localhost:2368/ghost anmelden und anschliessend einloggen.

Im Dashboard kann ich noch keine Rechteverwaltung erkennen, d.h. jeder Nutzer kann Artikel erstellen. Ob man auch die Artikel anderer editieren/löschen/veröffentlichen kann, weiß ich noch nicht. Mein Einsatz wird als Einzelnutzer-Installation erfolgen.

Der Online-Editor macht einen stabilen Eindruck. Das Markdown dieses Artikels wird im zweiten Panel sofort gerendert, man sieht also direkt, wie der Artikel später aussehen soll. Die Oberfläche ist minimal, aber für mich genau das richtige. Wer ein Dashboard ala [Wordpress][3] erwartet, wird aber enttäuscht.

Wer sich nicht die Mühe eines eigenen Blogs machen will, der kann auch hosten lassen - aber wer will das heutzutage schon noch? ;-)

[0]: http://blog.ghost.org/public-launch/
[1]: https://en.ghost.org/archives/ghost-0.3.2.zip
[2]: http://nodejs.org/
[3]: http://wordpress.org/

