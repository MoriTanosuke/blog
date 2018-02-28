---
title: 'Learning Golang #1, oder Wie sortiere ich eine map?'
date: 2010-03-05 00:00:00 
tags: golang
layout: post
---
Gestern habe ich weiter an meiner ersten Applikation in [golang][0] gearbeitet und dabei stellte sich mir die Frage, wie man eine `map[string]string` sortiert. [Stackoverflow hat (wie immer) weiter geholfen][1] nachdem ich ein paar Versuche selbst unternommen hatte.

Ich denke, die folgende Lösung ist nicht das schickste. Sicherlich gibt es eine nette Möglichkeit, eine `map` auch mit `Channels` zu sortieren. Ein [BubbleSort][2] sollte damit schnell erstellt sein. Das werde ich beim nächsten Mal ausprobieren.

````golang
package main

import (
   "fmt"
   "sort"
)

func main() {
    m := map[string]string{"b":"15","z":"123123","x":"sdf","a":"12"}
    mk := make([]string, len(m))
    i := 0
    for k, _ := range m {
        mk[i] = k
        i++
    }
    sort.SortStrings(mk)
    fmt.Println(mk)
}
````

[0]: https://golang.org/
[1]: http://stackoverflow.com/questions/2377881/how-to-get-a-md5-hash-from-a-string-in-golang
[2]: http://de.wikipedia.org/wiki/Bubblesort
