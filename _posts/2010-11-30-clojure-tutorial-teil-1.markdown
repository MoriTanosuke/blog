---
title: 'Clojure Tutorial, Teil 1'
date: 2010-11-30 00:00:00 
tags: clojure
layout: post
---
<em>Dies ist der erste Artikel in einer kleinen Serie, die meine ersten Schritte in der neuen funktionalen Programmiersprache <a href="http://clojure.org/">Clojure</a> dokumentieren soll. Die Artikel werden in unregelmäßigen Abständen hier publiziert.</em>

Ich beschäftige mich im Moment mit <a href="http://clojure.org/">Clojure</a>, einer relativ neuen <a href="http://de.wikipedia.org/wiki/Funktionale_Programmierung">funktionalen Programmiersprache</a>. Dabei will ich vor allem von meinem bisherigen Fokus der <a href="http://de.wikipedia.org/wiki/Objektorientierte_Programmierung">objekt-orientierten Programmierung (OOP)</a> abrücken, um mal wieder ein wenig frischen Wind zu schnuppern. <a href="http://golang.org/">Golang</a> war nicht ganz das richtige, da ich dort auch auf objekt-orientierte Weise entwickelt habe.

Funktionale Programmierung
--------------------------

Im Gegensatz zu der Daten- und Verhaltenssicht der OOP steht bei der <a href="http://de.wikipedia.org/wiki/Funktionale_Programmierung">funktionalen Programmierung</a> das Zusammenschalten von Funktionen im Vordergrund. Ein Programm wird dabei nicht so sehr durch nacheinander abzuarbeitende Befehle, sondern durch ineinander geschachtelte Funktionsaufrufe beschrieben. Dabei stehen die sog. <em>pure functions</em> im Vordergrund, also Funktionen ohne Seiteneffekte. Weiterer wichtiger Bestandteil ist die Rekursion, mit der Probleme elegant gelöst werden können.

Clojure
-------

<a href="http://clojure.org/">Clojure</a> ist ein <a href="http://de.wikipedia.org/wiki/LISP">LISP</a>-Dialekt, läuft auf der <a href="http://www.java.com/de/download/">Java VM</a> und ist <a href="https://github.com/clojure/clojure/tree/1.0.x">seit 2009 verfügbar</a>. Als Einstieg habe ich mir das Buch <a href="http://www.amazon.de/Practical-Clojure-Experts-Voice-Source/dp/1430272317/kopisde-21">Practical Clojure</a> (<a href="http://books.google.de/books?id=4QacPa1vwMUC">Blick ins Buch</a>) gekauft, an dem ich mich nun entlang arbeite.

Die wichtigsten Merkmale von Clojure sind

* <a href="http://clojure.org/data_structures">Datenstrukturen sind unveränderlich</a> (<em>immutable</em>)
* Alles ist eine Liste
* Durch die Java VM hat man Zugriff auf alle Bibliotheken (von <a href="http://java.com">Oracle</a> und anderen)

Explorative Entwicklung
-----------------------

In <a href="http://clojure.org/">Clojure</a> (und anderen Sprache?) hat sich die <a href="http://clojure.org/dynamic">REPL</a> durchgesetzt: <strong>Read Eval Print Loop</strong>. Man startet eine Kommandozeile, in der man direkt Code eingeben und ausführen kann. Damit lässt sich schnell etwas ausprobieren oder sogar ein laufendes Programm verändern. Für die ersten Schritte arbeite ich auch direkt in der REPL und verzichte auf gespeicherte Quelltexte. Natürlich lässt sich jede Clojure-Applikation auch in Dateien organisieren und ausführen.

Download und Start
------------------

<a href="http://clojure.org/">Clojure</a> kann <a href="http://clojure.org/downloads">als ZIP-Archiv heruntergeladen</a> oder <a href="https://github.com/clojure/clojure">direkt von Github gecloned</a> und gebaut werden. Hat manÃÂ <a href="http://clojure.org/">Clojure</a> entpackt bzw. installiert, liegt im Installationsverzeichnis die Datei <em>clojure.jar</em>. Mit folgender Kommandozeile starte ich anschliessend die REPL:

    java -cp clojure.jar clojure.main

Ich werde durch einen Prompt begrüßt und kann sofort Code eingeben:

    $> java -cp clojure.jar clojure.main
    Clojure 1.3.0-alpha3-SNAPSHOT
    user=>

Jetzt kann ich das erste Programm schreiben.

Hallo, Welt!
------------

Als erstes Programm steht natürlich das klassische <a href="http://de.wikipedia.org/wiki/Hallo-Welt-Programm">Hallo Welt</a> auf dem Programm. Die Anwendung soll den String "Hallo, Welt!" ausgeben, nichts weiter.

    (println "Hallo, Welt!")

Die Ausgabe sieht so aus:

    Hallo Welt
    nil
    user=>

Die erste Zeile ist die Ausgabe, die zweite Zeile ist der Rückgabewert der Funktion <em>println</em> und die dritte Zeile ist wieder der Prompt. Die Funktion <em>println</em> ist eine sog. <em><a href="http://clojure.org/special_forms">special form</a></em>, eine Systemfunktion von <a href="http://clojure.org/">Clojure</a>. Die übergebenen Argumente werden durch Leerzeichen getrennt ausgegeben. Ein etwas erweitertes <a href="http://de.wikipedia.org/wiki/Hallo-Welt-Programm">Hallo Welt</a> verwendet eine <em>Var</em> für die auszugebende Nachricht:

    (def msg "Hallo Welt")
    (println msg)

Das war es erstmal für diesen Artikel. In den kommenden Artikeln will ich etwas weiter in die verfügbaren Datenstrukturen einsteigen. Stichwort: Alles ist eine Liste!
