---
title: 'Funktion auf alle Elemente einer Hashmap anwenden'
date: 2011-02-26 00:00:00 
tags: 
layout: post
---
<p>Ich habe einige Zeit gebraucht, bis ich das folgende Problem in Clojure lösen konnte:</p>

<blockquote>Ich habe eine <code>map</code> mit einigen key-value-Paaren und möchte eine Funktion auf die <code>keys</code> dieser Elemente anwenden. Die Keys sind ausserdem Clojure <code>keywords</code>.
</blockquote>

<p>Heute bin ich dann auf die Lösung gekommen, <a href="http://stackoverflow.com/questions/1676891/mapping-a-function-on-the-values-of-a-map-in-clojure">mein Dank gilt wie so oft Stackoverflow.com</a>.</p>

<pre>
;; map anlegen
(def m {:foo 'foo, :bar 'bar, :baz 'baz})
;; zipmap erstellt eine neue map aus einer 2 Listen mit Keys und Values
(zipmap (map #(str&amp;quot;key=&quot; %) (keys m)) (vals m))
;; =&gt; {&quot;key=:baz&quot; baz,&amp;quot;key=:bar&quot; bar,&amp;quot;key=:foo&quot; foo}
</pre>

<p>Nochmal auf Deutsch: Zeile 4 erstellt mit der Funktion <code>zipmap</code> eine neue <code>map</code> aus der Liste der Keys und Values aus meiner <code>map m</code>.</p>

<p>Wer das jetzt nochmal Schritt für Schritt nachvollziehen will, der kann diese Befehle in die REPL kopieren:</p>

<pre>
;; Funktion zipmap mit 2 Listen aufrufen
(zipmap [:foo :bar :baz] ['foo 'bar 'baz])
;; =&gt; {:baz baz, :bar bar, :foo foo}
</pre>

<p>Das ist im Prinzip identisch zu meinem Aufruf, nur dass ich mit <code>(keys m)</code> und <code>(vals m)</code> die Listen aus meiner bereits existierenden <code>map</code> erstelle.</p>

<p>Meine Beispiele könnt ihr meistens kopieren und in eine REPL einfügen. Ich hab alles, was Fehler verursachen kann, mit Kommentaren versehen.</p>
