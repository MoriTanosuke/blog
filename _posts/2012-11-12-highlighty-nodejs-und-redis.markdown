---
title: Highlighty - gebaut mit NodeJS und Redis
layout: post
---

Gestern hab ich mich mal hingesetzt und darüber nachgedacht, wie ich
eine Webanwendung zum Abspeichern und Anzeigen von kleinen
Code-Schnippseln aussehen würde. Und weil ich lieber etwas baue als
nur nachzudenken, hab ich mich mit [nodejs][0] und [redis][1] eine
kleine Anwendung gebaut. :-)

Das Ergebnis ist jetzt unter [highlighty.herokuapp.com][2] online und
kann genutzt werden. Wer sich für die einzelnen Schritte der Erstellung
interessiert, kann wie immer im [changelog][3] nachlesen, den Sourcecode
hab ich nämlich wie immer [bei Github abgelegt][4].

Die Anwendung an sich ist eine ziemlich simple NodeJS-Anwendung mit der
[Middleware connect][5], dem [SyntaxHighlighter von Alex Gorbatchev][6]
und [Redistogo][7] als Addon bei [Heroku][8].

Die interessanten Stellen sind [Zeile 18 in *app.js*][9] für die
Anbindung von *Redis* und für die NodeJS-Einsteiger [Zeile 9 ff.][10]
für die Anbindung von *connect* als Middleware. Wie man [in diesem
Commit][11] sieht, habe ich am Anfang alle Funktionen der Middleware
selbst programmiert. Aber ich bin ja faul, und hab quasi meinen gesamten
selbstgestrickten Code durch *connect* ersetzt. :-)

Jetzt kann ich also kleine Codeschnippsel online abspeichern und den
Link an andere verteilen, die sich anschliessend meinen Code inklusive
Syntax Highlighting ansehen können.

[0]: http://nodejs.org
[1]: http://redis.io
[2]: http://highlighty.herokuapp.com/
[3]: https://github.com/MoriTanosuke/highlighty/commits/master
[4]: https://github.com/MoriTanosuke/highlighty
[5]: http://www.senchalabs.org/connect/
[6]: http://alexgorbatchev.com/SyntaxHighlighter/
[7]: http://redistogo.com/
[8]: https://devcenter.heroku.com/articles/redistogo
[9]: https://github.com/MoriTanosuke/highlighty/blob/master/app.js#L18
[10]: https://github.com/MoriTanosuke/highlighty/blob/master/app.js#L9
[11]: https://github.com/MoriTanosuke/highlighty/commit/e2312e8af4652509f96ae1b0177190453dae63f4#app.js

