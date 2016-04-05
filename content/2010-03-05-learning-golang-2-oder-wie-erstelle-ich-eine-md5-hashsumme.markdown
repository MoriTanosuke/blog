---
title: 'Learning Golang #2, oder Wie erstelle ich eine MD5-Hashsumme?'
date: "2010-03-05"
tags: 
layout: post
---
<p><span class="dropCap">W</span>eiter geht's. Diesmal mit der Erstellung einer <a href="http://de.wikipedia.org/wiki/Message-Digest_Algorithm_5">MD5-Hashsumme</a>. Diese Funktion brauchte ich f&uuml;r die Validierung einer API-Anfrage. Dort sollte neben der Argumentliste auch eine Hashsumme der Argumente plus einem geheimen Schl&uuml;ssel&amp;uuml;bermittelt werden. Nach ein paar erfolglosen Versuchen, aus der <a href="http://golang.org/pkg/crypto/md5/">Package Documentation</a> schlau zu werden, <a href="http://stackoverflow.com/questions/2377881/how-to-get-a-md5-hash-from-a-string-in-golang">half mir (wieder einmal) Stackoverflow weiter</a>.</p>

<p>Das ist übrigens auch der schwierigste Teil von Golang bis jetzt: Herausfinden, welche Funktion man aus einem Package gerade ben&ouml;tigt und vor allem wie man sie aufruft.</p>

<pre>package main

import (
   "fmt"
   "crypto/md5"
   "hash"
)

func main() {
    original :="my string comes here"
    var h hash.Hash = md5.New()
    h.Write([]byte(original))
    fmt.Printf("%s: %xn", original, h.Sum())
}</pre>
