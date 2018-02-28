---
title: 'Learning Golang #2, oder Wie erstelle ich eine MD5-Hashsumme?'
date: 2010-03-05 00:00:00 
tags: golang
layout: post
---
Weiter geht's. Diesmal mit der Erstellung einer [MD5-Hashsumme][0]. Diese Funktion brauchte ich für die Validierung einer API-Anfrage. Dort sollte neben der Argumentliste auch eine Hashsumme der Argumente plus einem geheimen Schlüssel übermittelt werden. Nach ein paar erfolglosen Versuchen, aus der [Package Documentation][1] schlau zu werden, [half mir (wieder einmal) Stackoverflow weiter][2].

Das ist übrigens auch der schwierigste Teil von Golang bis jetzt: Herausfinden, welche Funktion man aus einem Package gerade benötigt und vor allem wie man sie aufruft.

````golang
package main

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
}
````

[0]: http://de.wikipedia.org/wiki/Message-Digest_Algorithm_5
[1]: https://golang.org/pkg/crypto/md5/
[2]: https://stackoverflow.com/questions/2377881/how-to-get-a-md5-hash-from-a-string-in-golang
