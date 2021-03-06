---
title: 'Jenkins aus dem Sourcecode selbst bauen'
date: 2011-04-07 00:00:00 
tags: 
layout: post
---
<p>Im <a href="http://johanneslink.net/advtdd/">Advanced TDD-Seminar mit Johannes Link</a> kam auch kurz die Sprache auf <a href="http://gojko.net/2011/04/05/how-is-it-even-possible-code-to-be-this-bad/">Hudson/Jenkins und die Codequalität</a> dieses sehr erfolgreichen Produkts. Neugierig geworden wollte ich mir den Sourcecode selbst ansehen, auch weil ich schon seit längerer Zeit ein groÃÂer Fan von Hudson/Jenkins bin und den Gedanken von <a href="http://continuousdelivery.com/">Continuous Delivery</a> als Ideal anstrebe. Glücklicherweise lebt <a href="https://github.com/jenkinsci">Jenkins auf Github</a> und kann dort einfach gecloned bzw. sogar geforked werden.</p>

<pre>
git clone https://github.com/jenkinsci/jenkins.git
</pre>

<p>Anschliessend kann man <a href="https://wiki.jenkins-ci.org/display/JENKINS/Building+Jenkins">Jenkins mit Hilfe von Maven2 bauen</a> - aber Vorsicht:</p>

<blockquote>The first build will take a while, because it has to download a million jars from all over the world.</blockquote>

<p>Mit DSL16000 bemerkt man diese kleine Verzögerung aber nicht. Vielleicht hatte ich aber auch durch einige Maven-Experimente schon genug Abhängigkeiten in meinem lokalen Repository. Aber man sollte sich auch für die nächsten Schritte auf eine Download-Orgie einstellen und sich nicht ungeduldig an Jenkins heranmachen.</p>

<pre>
cd jenkins
mvn install -Dmaven.test.skip=true
</pre>

<p>Weil ich das ganze Projekt anschliessend in Eclipse importieren möchte, muss ich noch die Abhängigkeiten aktualisieren:</p>

<pre>
mvn eclipse:eclipse
// oder für Download inkl. Sourcecode für besseres Arbeiten mit den Libraries:
mvn -DdownloadSources=true eclipse:eclipse
</pre>

<p>Anschliessend kann man die existierenden Projekte als <em>existierende Maven-Projekte</em> in Eclipse importieren. Leider sind bei mir noch einige Fehler in den Projekten, so dass ich noch nicht zufrieden bin. Aber es ist jetzt spät genug, dass ich mich lieber mit meinem aktuellen Buch <a href="http://www.amazon.com/Mort-ebook/dp/B004APA452/kopisde-21">Mort von Rod Redux</a> ins Bett lege.</p>
