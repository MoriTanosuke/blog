---
layout: post
title: "Mehr freie Apps auf Mobiltelefonen!"
---

**TL;DR** Ich nutze jetzt wieder [Instapaper][2] mit [Instafetch][3], statt [Pocket][1]. Der Grund dafür
sind die ausufernden Berechtigungen der [Android App von Pocket][0].

Und jetzt die ausführliche Geschichte:

Vor einigen Tagen kam ein neues Update für die [Android App von Pocket][0] rein. Ich nutze [Pocket][1] 
sehr oft, um mir interessante Artikel aus meinen RSS Feeds zu merken und erst später zu lesen. Allerdings
wollte die App jetzt eine neue Berechtigung *Kontakte lesen*. Ich zitiere hier mal aus der Beschreibung
dieser Berechtigung:

> KONTAKTE LESEN
> 
> Ermöglicht der App, auf Ihrem Tablet gespeicherte Daten zu Ihren Kontakten einschließlich 
> der Häufigkeit zu lesen, mit der Sie bestimmte Personen angerufen, an sie eine E-Mail gesendet 
> oder auf andere Weise mit ihnen kommuniziert haben. Diese Berechtigung ermöglicht Apps das 
> Speichern Ihrer Kontaktdaten und schädliche Apps können Kontaktdaten ohne Ihr Wissen weitergeben. 
> Ermöglicht der App, auf Ihrem Telefon gespeicherte Daten zu Ihren Kontakten einschließlich der 
> Häufigkeit zu lesen, mit der Sie bestimmte Personen angerufen, an sie eine E-Mail gesendet oder 
> auf andere Weise mit ihnen kommuniziert haben. Diese Berechtigung ermöglicht Apps das Speichern 
> Ihrer Kontaktdaten und schädliche Apps können Kontaktdaten ohne Ihr Wissen weitergeben.

Stellt sich heraus, die Entwickler haben eine *Teil den Artikel mit Deinen Freunden*-Funktion eingebaut.
Ja, ist sicherlich manchmal hilfreich. Aber bereits früher wurde über das *Share Menu* nicht der
Original-Link geteilt, sondern eine Short-URL auf den Servern von [Pocket][1]. Das allein hat mich
schon so angenervt, dass ich den Artikel immer erst im Browser geöffnet und von dort über die Standard-Funktion
von Android weitergegeben habe.

Und jetzt wird noch eine Berechtigung angefordert, mit der Pocket alle meine Kontakte auslesen kann
statt einfach die Standard-Funktion zum Teilen von Inhalten auf Android-Telefonen zu verwenden. Wieso?
Ich war schon drauf und dran, eine eigene Android App anzufangen, die auf die [API von Pocket][5] zugreift.

Diese App hätte ich nur mit den allernotwendigsten Berechtigungen entwickelt, z.B. 
[WRITE_EXTERNAL_STORAGE][6], um Artikel auf der SD-Karte abzulegen oder [INTERNET][7], um die 
Artikel von Pocket zu laden. Vielleicht noch eine weitere Berechtigung, um einen Hintergrundservice
für die Synchronisation einzurichten. Und das wär's auch schon. Natürlich würde ich diese
Anwendung unter die [GPL][8] stellen, damit alle anderen sie nutzen, den Quelltext lesen und sie
verbessern oder verändern können.

Wie auch immer, ich nutze erstmal wieder [Instapaper][2] und als App nehme ich [Instafetch][3],
wo die Berechtigungen erträglich sind. Am liebsten würde ich auf sowas ganz verzichten, dann muss ich
aber z.B. vor einer Zugfahrt (oder anderen Offline-Zeiten) immer dran denken, die Seite aufzurufen
und drauf hoffen, dass die Entwickler der Seite HTML5 und [local storage][4] nutze.

[0]: https://play.google.com/store/apps/details?id=com.ideashower.readitlater.pro
[1]: http://getpocket.com/
[2]: http://instapaper.com
[3]: https://play.google.com/store/apps/details?id=pl.immortal.instafetchpro.am
[4]: http://diveintohtml5.info/storage.html
[5]: http://getpocket.com/developer/docs/overview
[6]: http://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE
[7]: http://developer.android.com/reference/android/Manifest.permission.html#INTERNET
[8]: http://de.wikipedia.org/wiki/GNU_General_Public_License
