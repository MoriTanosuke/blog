---
title: 'Unit Tests in Clojure (und Leiningen)'
date: 2011-03-01 00:00:00 
tags: clojure
layout: post
---
<p>Damit es hier nicht zu weichspülerartig mit Videos weiter geht, kommt noch was für die Clojure-Leute. :-) Ich will langsam mit den Unit Tests für Clojure anfangen und hab dazu 3 sehr einfache Funktionen definiert. Dazu eine Datei mit einigen einfachen Unit Tests. Das ganze kann man mit <a href="https://github.com/technomancy/leiningen">Leiningen</a> sehr einfach ausführen:</p>

<pre>
$ lein test
Testing clj-testtest.test.core
Ran 7 tests containing 7 assertions.
0 failures, 0 errors.
</pre>

<p>Hier ist der Code:</p>

<p><strong>src/core.clj</strong></p>

<pre>
(ns clj-testtest.core)

(defn foo
  [a b] (str a&amp;quot;:&quot; b))

(defmacro mfoo
  [a b] `(str ~a&amp;quot;:&quot; ~b))

(defn gen-foo
  [a b c] (defn a [b c] (str b&amp;quot;:&quot; c)))
</pre>

<p><strong>test/core.clj</strong></p>

<pre>
(ns clj-testtest.test.core
  (:use [clj-testtest.core] :reload)
  (:use [clojure.test]))

(deftest test-simple
  (is (not (= 5 (+ 2 2)))))

(deftest test-foo
  (is (=&amp;quot;a:b&quot; (foo 'a 'b))))
(deftest test-foo-numbers
  (is (=&amp;quot;5:7&quot; (foo 5 7))))
(deftest test-foo-strings
  (is (=&amp;quot;eins:zwei&quot; (foo&amp;quot;eins&quot;&amp;quot;zwei&quot;))))
(deftest test-foo-broken
  (is (not (=&amp;quot;eins:zwei&quot; (foo&amp;quot;eins&quot; 7)))))

(deftest test-mfoo
  (is (=&amp;quot;a:b&quot; (mfoo 'a 'b))))

(deftest test-genfoo
  (is (= (foo 'a 'b) ((gen-foo 'foo 'a 'b) 'a 'b))))
</pre>

<p>Die Funktion <code>test-simple</code> in Zeile 5 hab ich nur zum Test eingebaut, weil ich mir erst nicht sicher war, wie sich die Unit Tests verhalten. Aber nachdem ich die ersten Unsicherheiten mit <code>(is (not (usw usf)))</code> überwunden hatte, war der Rest ein Kinderspiel... oder so ähnlich. :-)</p>

<p>Der interessante Test ist in Zeile 21 zu sehen: Ich teste, ob die Funktion <code>gen-foo</code> eine Funktion zurückgibt, die eine Ausgabe identisch zur vorher definierten und getesten Funktion <code>foo</code> liefert.</p>

<p>Und es klappt. Jetzt: Bett. ;-)</p>

<p><strong>PS</strong>: <a href="https://gist.github.com/849749">Alle Quelltexte könnt ihr als Gist runterladen oder clonen.</a></p>

<p><strong>PPS</strong>: Ausserdem gibt es jetzt ein ganzes Repository mit meinen <a href="https://github.com/MoriTanosuke/clj-tests">Beispielen zu Unit Tests in Clojure</a>.</p>
