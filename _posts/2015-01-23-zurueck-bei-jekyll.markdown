---
layout: post
title: 'Zurück bei Jekyll'
tags: blogging
---
Nachdem ich in den letzten Wochen die Blogsoftware [Ghost][0] genutzt habe, bin ich heute morgen wieder zurück zu [Jekyll][1] gewechselt. Dazu haben mich vor allem die fehlenden Features von Ghost bewogen, vor allem die folgenden Dinge haben mich gestört:

* Keine Suchmöglichkeit in der Admin-Oberfläche
* Viele Änderungen an den Themes, so dass mit jedem Ghost-Update Anpassungen am Theme notwendig waren
* Admin-Oberfläche ist auf Mobilgeräten nur schwer zu bedienen

Als langjähriger Linux-Nutzer sind mir Kommandozeilentools am liebsten und Jekyll hat auch durch die [Unterstützung bei Github][2] viel gewonnen. Github hat in den letzten Monaten mehrere Änderungen ausgerollt, um das Editieren im Browser zu erleichtern. Früher konnte man z.B. keine neuen Dateien in einem Repository anlegen, was neue Blogeinträge effektiv verhindert hat, wenn man gerade keinen eigenen Rechner zur Verfügung hatte. Mittlerweile ist das alles möglich und die Oberfläche von Github ist mir so geläufig, dass ich damit sogar besser klar komme, als mit der Admin-Oberfläche von Ghost. Dazu kommt noch, dass die Suchmöglichkeiten bei Github sehr viel besser sind.

Die [Liste der Import-Tools][3] enthält einen Importer für Ghost names [*jekyll_ghost_importer*][4]. Leider kam das Tool bei mir nicht mit einem JSON-File der Ghost-Version 0.5.8 zurecht. Vielleicht antwortet mir der Autor noch auf [meine Frage, ob das Tool noch angepasst wird][5].

In der Zwischenzeit habe ich mir selbst ein kleines Python-Skript erstellt, dass aus dem Ghost-JSON entsprechende Drafts und Posts für Jekyll erstellt. Das Skript ist unter [https://github.com/MoriTanosuke/Ghost-to-Jekyll][6] verfügbar.

Anschliessend blieb noch die Übernahme des Themes. Das hat zwar etwas gedauert und ich könnte wetten, dass jemand mit guten CSS-Kentnissen die Hände über dem Kopf zusammenschlagen wird, aber ich habe bei meinen ersten Tests keine großen Unterschiede bemerkt.

Wenn ihr also diesen Eintrag lest, dann wascht ihr bereits eure Hände in [Jekyll][1] und dem migrierten *Casper*-Theme. :) Ansehen könnt ihr euch das ganze wie zuvor [im Quelltext in meinem Blog-Repository][7].

[0]: https://ghost.org
[1]: http://jekyllrb.org
[2]: https://pages.github.com/
[3]: http://import.jekyllrb.com/docs/ghost/
[4]: https://github.com/eloyesp/jekyll_ghost_importer
[5]: https://github.com/eloyesp/jekyll_ghost_importer/issues/4
[6]: https://github.com/MoriTanosuke/Ghost-to-Jekyll
[7]: https://github.com/MoriTanosuke/moritanosuke.github.com
