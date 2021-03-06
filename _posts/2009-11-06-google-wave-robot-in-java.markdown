---
title: 'Google Wave Robot in Java'
date: 2009-11-06 00:00:00 
tags: 
layout: post
---
<p>Heute ging's mir wieder besser und ich hab mich an meine <a href="http://wave.google.com/">Google Wave</a> gesetzt. (Noch jemand eine Einladung?) Google Wave ist ein Tool zur Online-Zusammenarbeit, mir kommt es im Moment wie ein Gruppenchat mit erweiterter Textverarbeitung vor. Man kann aber auch Gadgets hinzuf&uuml;gen, also Karten, Buchcover-Anzeigen, Youtube-Videos und anderes. Damit kann man wohl ziemlich viele der in der Zusammenarbeit anfallenden Arbeiten erledigen.</p>

<p>Ich wollte jetzt einen Robot schreiben, quasi ein Programm, das als Benutzer mit in der Wave sitzt und Fragen beantworten kann. Als erstes fiel mir da ein IMDB-Robot ein, der Filmtitel aus dem Text der Wave heraussucht und weitere Details anzeigt. Allerdings scheint die <a href="http://www.imdb.de">IMDB</a> keine programmatische Abfrage zu unterst&uuml;tzen (und mir ist auch so, als h&auml;tte es da vor einigen Wochen Aufregung über die automatische Abfrage gegeben). Gl&uuml;cklicherweise gibt es noch Seiten wie <a href="http://www.deanclatworthy.com/imdb/">diese</a>, mit der man Abfragen stellen kann. Mein Plan ist also nicht ganz aus der Welt... ;-)</p>

<p>Los ging's aber erstmal mit einem einfachen <em>Hello World</em>-Robot. Google bietet <a href="http://code.google.com/intl/de/apis/wave/extensions/robots/java-tutorial.html">ein sehr sch&ouml;nes Tutorial zur Wave API</a>. Dort ist auch erkl&auml;rt, wie man sein <a href="http://eclipse.org/">Eclipse</a> zum Deployment in die <a href="https://appengine.google.com/">Google AppEngine</a> einrichtet - dort muss der Robot laufen. Die AppEngine ist ein Cloud-Service, in dem eigene Programme laufen k&ouml;nnen. Der Robot selbst ist quasi ein Servlet, das bestimmte Wave-Event erh&auml;lt und darauf antwortet.</p>

<p>Nachdem das erste <em>Hallo Welt</em> in meiner Wave aufgetaucht war, habe ich den Robot noch ein wenig ver&auml;ndert. Im Moment antwortet er einfach auf <em>Blips</em> mit dem umgekehrten Text.</p>

<p>Der Robot h&ouml;rt bisher auf 2 Events, n&auml;mlich die Anmeldung neuer Benutzer (<code>WAVELET_PARTICIPANTS_CHANGED</code>) und das Erzeugen eines Blips (<code>BLIP_SUBMITTED</code>). Die beiden Events m&uuml;ssen in der <em>capabilities.xml</em> eingetragen sein.</p>

<script src="https://gist.github.com/MoriTanosuke/615441.js"></script>

<p>Was mir noch nicht 100%ig klar ist, ist die Versionierung des Robots. Einmal gibt es die Version der AppEngine, dann die Version des Robots. Der Robot muss zwingend neu versioniert werden, wenn sich die Events ver&auml;ndern, auf die er h&ouml;ren soll. Bei der Versionierung der AppEngine geht es wohl eher um Releases, also ver&auml;nderte Funktionalit&auml;t. Vielleicht finde ich ja dazu noch ein paar sch&ouml;ne Tutorials oder Erkl&auml;rungen. Bei meinem Testrobot werde ich wohl nicht weiter versionieren, nur bei Event&auml;nderungen den Z&auml;hler hochsetzen.  Ich m&uuml;sste mal ausprobieren, ob ich den Robot auch in Groovy schreiben kann, denn damit w&auml;re das Verarbeiten von JSON- oder XML-Antworten der Webservices sehr viel einfacher zu schreiben. Es gibt <a href="http://blog.springsource.com/2009/04/07/write-your-google-app-engine-applications-in-groovy/">eine Anleitung f&uuml;r AppEngine Groovy</a>, die werde ich mich als n&auml;chstes zu Gem&uuml;te f&uuml;hren.</p>
