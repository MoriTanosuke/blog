---
title: 'Upgrade von Hudson auf Jenkins'
date: 2011-02-07 00:00:00 
tags: 
layout: post
---
<h2>Kurzfassung</h2>

<p>ImÃÂ Plugin ManagerÃÂ auf die erweiterten Einstellungen gehen und dort dieÃÂ Update URLÃÂ aufÃÂ <code>http://updates.jenkins-ci.org/update-center.json</code> ändern.</p>

<h2>Langfassung</h2>

<p>Die Community des <a href="http://hudson-ci.org/">Continuous Integration Server Hudson</a> hatte in der letzten Zeit ein kleines Gerangel mit <a href="http://www.sun.com/">Oracle</a>. Dabei ging's hauptsächlich um die unklare <em>Code License Agreements</em> und Namensrechte an <em>Hudson</em>, die bei Oracle liegen. Jetzt vermutete die Community, dass Oracle damit früher oder später einen gewissen Druck auf die Community ausüben würde, um die Entwicklung von Hudson zu steuern.</p>

<p>Ich kenne nicht alle Details, aber der Anteil von Oracle an der Codebasis ist in der Vergangenheit nicht gerade gestiegen. Auf der Mailingliste hab ich gelesen, dass einige Entwickler nicht damit einverstanden sind, dass ein anderes Communitymitglied nur wegen der Namensrechte mehr Einfluss auf die Richtung haben soll als andere. Wer die Details wissen will, der sollte <a href="http://java.net/projects/hudson/lists/users/archive">die Archive der Mailingsliste</a> durchgehen. <a href="http://java.net/projects/hudson/lists/users/archive/2011-02/message/1">Dieser Thread gibt einen guten Einstieg</a>.</p>

<p>Das war jetzt die ultrakurze Zusammenfassung. <a href="http://jenkins-ci.org/">Das Resultat der Anstrengungen ist ein Fork mit den Namen <em>Jenkins</em></a>. Das ist eine kompatible Version des Hudson-Codes, liegt aber vollständig in der Kontrolle der Community. <a href="http://jenkins-ci.org/content/first-governance-meeting-recap">Es gibt jetzt auch ein Governance Board</a>, das über die Weiterentwicklung und die Verwaltungsarbeit berät.</p>

<p>Ich persönliche finde den Fork gut. Wir wissen doch alle, das Oracle eigentlich nur noch die Projekte übrig lässt, die Geld bringen. Ich bin ganz froh, dass die Community sich nicht einwickeln lässt und selbst entscheiden will, wie es weiter geht.</p>

<h2>Wie mache ich jetzt das Upgrade?</h2>

<p>Ich selbst hab heute ein Upgrade von Hudson auf Jenkins vorgenommen. Das ganze ist völlig problemlos und läuft über den bekannten Update-Mechanismus. <a href="http://wiki.jenkins-ci.org/display/JENKINS/Upgrading+from+Hudson+to+Jenkins">Es gibt eine gute Dokumentation dazu</a>, aber in Prinzip muss man nur im <em>Plugin Manager</em> auf die erweiterten Einstellungen gehen und dort die <em>Update URL</em> auf <code>http://updates.jenkins-ci.org/update-center.json</code> ändern.</p>

<blockquote>You can use the built-in upgrade mechanism in Hudson to smoothly migrate to Jenkins. To do so, go to "Manage Hudson"&amp;gt; "Plugin Management"&amp;gt; "Advanced"&amp;gt; "Update Site" and specify "http://updates.jenkins-ci.org/update-center.json"</blockquote>

<p>Ich nutze Hudson/Jenkins schon seit einiger Zeit und bin sehr, sehr zufrieden. Die Plugins machen eigentlich alles möglich, die Konfiguration ist quasi mit verbundenen Augen zu erledigen, die Slave-Funktionalität bietet die Flexibilität, um auch komplexe Buildsysteme aufzusetzen.</p>

<p>Wer sich mit CI beschäftigt, sollte sich unbedingt Jenkins angucken. <a href="http://ci.jenkins-ci.org/view/Hudson%20core/job/jenkins_main_trunk/">Einen ersten Einblick könnt ihr euch auf der Jenkins-Installation holen, die Jenkins selbst baut</a>. ;-)</p>
