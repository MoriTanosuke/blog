---
layout: post
title: 'Universelle Laufzeitumgebung für Container'
---

[Docker gibt die Laufzeitumgebung für Container frei][0]. Aus dem Artikel:

> How we create and reuse infrastructure plumbing is fundamental to the Docker
> project. Our approach boils down to 3 fundamental principles which we call
> "*the Infrastructure Plumbing Manifesto*":
> 
> * Whenever possible, re-use existing plumbing and contribute improvements back.
> 
> * When you need to create new plumbing, make it easy to re-use and contribute improvements back. This grows the common pool of available components, and everyone benefits.
> 
> * Follow the unix principles: several simple components are better than a single, complicated one.
> 
> * Define standard interfaces which can be used to combine many simple components into a more sophisticated system.
> 
> There has been lots of demand for separating this plumbing from the Docker
> platform, so that it can be re-used by other infrastructure plumbers in
> accordance with infrastructure plumbing best practices. Today we are excited
> to announce that we are doing just that!

[Heise hat auch noch eine Zusammenfassung][1]. Das ist ein interessanter Schritt, aber auch gut
nachvollziehbar. In den letzten Jahren hat sich die Softwareindustrie so entwickelt, dass Unternehmen
ein Framework für ihre Dienstleistung gebaut haben, dieses Framework dann freigegeben haben und
anschliessend über ihre Dienste und die Dienstleistung weiter Geld verdient haben. Das Framework
als Open Source freizugeben ist quasi die Geschäftsstrategie, um den Kundenkreis weiter zu
verbreitern, ohne dass sich Kunden an die Dienste des Unternehmens binden müssen. So kann man
kostenlos einsteigen und die Software einsetzen. Wenn die Funktionen passen, wird man irgendwann
an einem Punkt sein, an dem man weiter selbst Zeit und Knowhow investiert oder sich mit dem 
Anbieter der Software als Partner aufstellt.

So etwas wird auch in Zukunft weiter funktionieren, denke ich. Denn auch privat sind die Benutzer
ja an dieses Modell gewöhnt: Dienste werden einfach beim Anbieter genutzt und man akzeptiert die
angebotenen Funktionen bzw. das Nicht-Vorhanden-sein von Funktionen. Wer damit nicht zufrieden ist,
hat oft die Möglichkeit, die Software oder eine kompatible Alternative selbst zu betreiben - aber 
das ist eben aufwändig und mit Einarbeitung verbunden. Also bezahlt man als Nutzer lieber ein
paar Euro, um die Funktionen zu nutzen und sich aber nicht selbst um den Betrieb zu kümmern.

[0]: https://blog.docker.com/2015/06/runc/
[1]: http://www.heise.de/developer/meldung/Docker-stellt-universelle-Laufzeitumgebung-fuer-Container-vor-2726047.html

