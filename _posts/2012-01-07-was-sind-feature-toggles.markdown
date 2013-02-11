---
title: Was sind Feature Toggles?
layout: post
---
Ich hab mich entschlossen, einen [Feature Toggle][0] in eine Anwendung
einzubauen. Das ganze soll dazu dienen, ein Feature zu einem späteren
Zeitpunkt einzuschalten, obwohl der entsprechende Code schon
implementiert ist. Ich habe nur eine einzige Stelle, an der ich diesen
Schalter brauche und er sitzt sehr weit vom Benutzer entfernt im
Backend-Code. Damit will ich schnell auf eine Entscheidung aus dem
Business reagieren, die wir dann ohne groÃÂe Vorlaufzeit durch das
Umsetzen eines Properties in einer Datei umsetzen können.

Damit begebe ich mich auf dünnes Eis und ich muss jetzt zu jeder
passenden und unpassenden Gelegenheit folgende Worte fallen lassen:

> Ein *Feature Toggle* ist ein temporärer Trick, mit dem man Features
> implementieren und testen kann, aber noch nicht freigeben muss.

Und weil andere das schon viel besser gesagt haben, will ich hier noch
ein kurzes Zitat aus [Martin Fowlers Artikel zu *Feature Toggles*][0]
wiedergeben:

> It's very important to retire the toggles once the pending features
> have bedded down in production. This involves removing the definitions
> on the configuration file and all the code that uses them. Otherwise
> you will get a pile of toggles that nobody can remember how to use.

Es ist also wichtig, dass dieser *Feature Toggle* mit dem nächsten
vollständigen Release wieder entfernt wird. Ansonsten findet man sich
schnell mit einer explodierenden Anzahl von Kombinationen der *Toggles*
wieder und niemand weiÃÂ mehr so genau, was die einzelnen Schalter jetzt
ein oder ausschalten. Ausserdem wird der Code schnell unübersichtlich,
weil man die Schalter wahrscheinlich durch IF-Abfragen implementiert hat
und jeder Schalter die Anzahl der Programmpfade erhöht.

[0]: http://martinfowler.com/bliki/FeatureToggle.html

