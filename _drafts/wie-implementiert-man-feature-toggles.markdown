---
layout: post
title: Wie implementiert man Feature Toggles?
excerpt: XXX
---
Seit einigen Tagen geistert mir eine Frage im Kopf herum: Wie startet
man die Implementierung von [Feature Toggles][0] im eigenen Code?

Bei mir handelt es sich natürlich um Java Anwendungen, vorzugsweise
Webapplikationen. Die konkrete Implementierung sollte keine Rolle
spielen, ich suche nach einer generischen Möglichkeit, einzelne Features
ein- und auszuschalten. Damit das möglichst dynamisch passieren kann,
will ich die Schalter in der bereits vorhandenen Datenbank ablegen.

Ich stelle mir das so vor:

# In der Datenbank liegt eine Tabelle *FEATURES*
# Jede Zeile repräsentiert ein Feature (mit Kommentar und 0/1 Schalter)
# Die Webanwendung lädt diese Tabelle in regelmässigen Abständen
# Wird ein Schalter *umgelegt*, zeigt die Anwendung das Feature an

Im Code implementiert man jetzt sein Feature wie immer, aber man drumrum
setzt man erst eine Abfrage auf den Schalter. Das Feature wird nur
eingeschaltet, wenn der Schalter umgelegt ist. Ich stelle mir das so
vor, dass die Schalter z.B. in einem globalen Cache abgelegt werden, der
z.B. alle 5 Minuten aktualisiert wird.

Noch schöner wird es, wenn man den Schaltern Regeln mitgeben kann, z.B.

# alle ungeraden Benutzer-IDs
# alle Mitglieder der Gruppe "*developers*"
# 10% aller Besucher



[0]: http://martinfowler.com/bliki/FeatureToggle.html
