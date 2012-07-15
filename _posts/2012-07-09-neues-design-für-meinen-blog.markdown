---
layout: post
title: Neues Design für meinen Blog
published: false
---

Am Wochenende habe ich ich mal wieder hingesetzt und ein neues
Design für meinen Blog erstellt. Das alte Design war ganz ok,
minimal, schnell geladen und auch auf Mobilgeräten ganz gut zu
lesen. Aber ich wollte die Seite für Smartphones und Tablets
noch besser lesbar machen und vor allem auf kleinen Bildschirmen
einige der Elemente wie die Navigationsleiste und die *Sidebar*
verstecken.

Die Änderungen auf kleinen Bildschirmen sind

* Github Ribbon wird versteckt
* Navigation wird zu einfacher Liste
* Artikelindex auf der Startseite wird einspaltig

Das meiste dazu habe ich natürlich wieder abgeguckt, diesmal von
[einem sehr schönen Artikel über HTML5 beim *Smashing Magazine*][0].
Der Rest ist quasi das [html5boilerplate template][1] mit wenigen
Anpassungen.

Ich habe die [Google Webfonts][2] auch wieder rausgeworfen, nachdem
die Schriftarten zumindest auf meinem Tablet etwas seltsam aussahen.
Ich gehe jetzt davon aus, dass die Geräte sinnvoll eingestellte
Standardschriftarten haben... Neben der Optik verringert das auch
die Ladezeit der Seite, da keine zusätzlichen Objekte von Google
geladen werden müssen.

Die Druckansicht sollte auch einigermassen nützlich sein, aber
das liegt hauptsächlich am [html5boiler][1]. ;-)

Was ich jetzt nochmal beobachten muss, ist die Einbindung von
Javascript. Meine Änderungen hab ich einfach an den Stellen gemacht,
an denen das [html5boilerplate template][1] sowieso schon Javascript
lädt. Aber ist das wirklich die beste Stelle? Sollte ich alles im
`<head>` laden oder nach dem Laden der Seite ganz am Ende? Und
brauche ich wirklich das ganze mitgelieferte Javascript oder kann ich
davon die Hälfte rauswerfen?

**Falls jemand von euch hilfreiche Tipps oder Analysetools dafür kennt,
meldet euch einfach in den Kommentaren.**

[0]: 
[1]: 
[2]: 

