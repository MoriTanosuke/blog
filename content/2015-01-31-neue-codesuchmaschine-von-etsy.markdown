---
layout: post
title: 'Neue Codesuchmaschine von Etsy: Hound'
tags: software
---
Seit dem 27. Januar 2015 gibt es eine neue Codesuchmaschine: [Hound von Etsy][0]. Das Tool durchsucht Code aus verschiedenen Repositories und stellt eine Weboberfläche für die Suche zur Verfügung.

Die erste Version unterstütze nur [Git][2]. Mittlerweile ist auch [Mercurial][3] dazu gekommen. Ich selbst habe an der [Unterstützung für Subversion][1] gearbeitet.

Das Tool ist in [Golang][4] geschrieben und meine Kenntnisse in der Sprache sind doch begrenzt und schon etwas älter. Deshalb bin ich gespannt, welche Kommentare ich noch zu dem Pull Request bekommen werde. Ich hoffe, ich habe nicht zu viele Schnitzer drin und der Code wird wirklich in das Repository gemerged. :)

[0]: https://codeascraft.com/2015/01/27/announcing-hound-a-lightning-fast-code-search-tool/
[1]: https://github.com/etsy/Hound/pull/40
[2]: http://git-scm.com/
[3]: https://github.com/etsy/Hound/pull/39
[4]: http://golang.org/

