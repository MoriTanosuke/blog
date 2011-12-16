---
layout: post
title: Maven Ant Tasks und Deployment in Nexus Repository
---
In einem *Brownfield* Projekt nutze ich einige Ant-Skripte, die die
Software bauen und auf den Servern installieren. Da neue Projekte aber
[Maven][0] nutzen werden und ich auch die alten Projekte irgendwann
dahin migrieren möchte, war der erste Schritt für mich das Deployment
der gebauten Artefakte in unser zentrales [Nexus Repository][1].

[0]: http://maven.apache.org/
[1]: http://nexus.sonatype.org/
