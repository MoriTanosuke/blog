---
title: 'Destructuring von Parametern in Clojure'
date: 2011-03-01 00:00:00 
tags: 
layout: post
---
<p>In Clojure gibt es ein nettes Sprachmittel, um Parameter -oder generell: Elemente aus Listen- herauszuholen. Am häufigsten wird das sicher bei Funktionsparametern eingesetzt. Hier ist ein einfaches Beispiel:</p>

<pre>
;; Anlegen einer Koordinate
(def coord [3 5])
;; Ausgeben der Koordinaten
(let [[x y] coord]
  (println&amp;quot;x:&quot; x&amp;quot;y:&quot; y))
</pre>

<p>Zeile 2 legt eine Koordinate an, bestehend aus 2 Zahlen. Zeile 4+5 <em>destructures</em> die Koordinate und weist den Parametern <code>x</code> und <code>y</code> die Werte aus <code>coord</code> zu. In der Funktion werden die Parameter dann verwendet und als String ausgegeben.</p>

<p>Den gleichen Mechanismus nutzt man eigentlich bei jeder Funktion. Am deutlichsten wurde mir das, als ich das obige Beispiel für beliebig-dimensionale Koordinaten erweitert habe:</p>

<pre>
;; 3-dimensionale Koordinate anlegen
(def coord [1 2 3])
;; Koordinate ausgeben
(let [[x y&amp;amp; more] coord]
  (println&amp;quot;x:&quot; x&amp;quot;y:&quot; y&amp;quot;others:&quot; more))
;; =&gt; x: 1 y: 2 others: (3)
</pre>

<p>Jetzt werden immer noch die ersten beiden Elemente aus der Koordinate geholt, aber der Rest wird durch <code>&amp; more</code> als Liste weitergegeben. Diesen Mechanismus nutzt man oft bei der definition von eigenen Funktionen in Clojure.</p>
