---
layout: post
title: 'Was ist Software Architektur'
---
Gerade habe ich den Artikel [Is This Architecture?][0] von [Gregor Hohpe][1] gelesen. Er stellt die folgende
Definition von *Software Architecture* vor:

> Design decisions about any system that keep implementors and maintainers from exercising needless creativity

*Needless Creativity* klingt erstmal komisch, stimmt aber schon irgendwie. Designentscheidungen sorgen dafür, 
dass man nicht immer und überall darüber nachdenken muss, wie man Software entwickelt. Sie dienen auch dazu, 
dass man nicht von immer anderen Patterns überrascht wird und gleiche Dinge auch gleich umgesetzt werden.
Diese Begrenzung der Kreativität erlaubt es, sie dort einzusetzen, wo sie gebraucht wird: bei der Beurteilung
von neuen Situationen oder der Lösung von komplexen Problemen.

Deshalb hängt gute Architektur für mich nicht von guter Dokumentation ab. Gute Architektur zeichnet sich
dadurch aus, dass sie verständlich ist und dass sie in der täglichen Arbeit nachvollziehbar und umsetzbar ist.
Natürlich muss Dokumentation sein, schliesslich will auch die neue Mitarbeiterin verstehen können, wieso
ein System so aufgebaut ist, wie sie es vorfindet. Das kann man auch in Gesprächen klären, aber wenn man ein
anschauliches Diagramm aus der Dokumentation zaubern oder auf einer Seite im Wiki die Grundstruktur und die
wichtigsten Enscheidungen nachlesen kann, dann hilft das ganz entscheidend bei schneller Einarbeitung.

*Hohpe* macht eine wichtige Einschränkung:

> Yet, to build such a house I would not want to pay an architect. To me this house is "cookie-cutter",
> meaning I don't see any non-obvious decisions that an architect would have made. Consequently, I would
> not consider this architecture.

Am Ende des Artikels gibt es dann noch ein paar Beispiele, wie solche "cookie-cutter" Entscheidungen aussehen:

> Systems architecture does not have to be something terribly complicated. It must include, however,
> significant decisions that are documented and are based on a clear rationale. The word "significant"
> may be open to some interpretation and depend on the level of sophistication of the organization, but
> "we separate front-end from back-end code", "we use monitoring", or "migrating systems is risky" surely
> have the ring of "my door reaches the ground so people can walk in" or "I put windows in the walls so light
> can enter". Instead, when discussing architectures let's talk about what is not obvious or something that
> involved heavy trade-offs.

Was bei mir klingelt und eine sofortige Assoziation zu früheren und aktuellen Entscheidungen herstellt, ist
der Nebensatz "*something that involved heavy trade-offs*". Das sind genau die Dinge, die dokumentiert werden
sollten: Es wurde eine Entscheidung für oder gegen etwas getroffen, und daraus ergeben sich weitreichende
Folgen.

Ich werde mich jetzt auch um eine Analogie aus dem Hausbau bemühen (obwohl ich überhaupt keine Ahnung vom
Hausbau habe...), z.B eine Entscheidung wie "*Wir verwenden nur Haustüren ohne Schlösser,
weil ...*" - diese Entscheidung hat weitreichende Folgen für die Sicherheit und ist quasi entgegengesetzt zu
allen anderen Häusern. Was hat wohl zu dieser Entscheidung geführt?

[0]: http://www.enterpriseintegrationpatterns.com/ramblings/86_isthisarchitecture.html
[1]: http://www.enterpriseintegrationpatterns.com/gregor.html
