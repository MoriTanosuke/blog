---
title: 'Learning Golang #3, oder Wie hänge ich ein Element an eine Map?'
date: 2010-03-08 00:00:00 
tags: golang
layout: post
---
Es mag offensichtlich sein, aber ich will es hier doch noch festhalten: Um ein Element an eine `map` anzuhängen, genügt eine Zuweisung.

````golang
package main

import (
   "fmt"
)

func main() {
    var m = map[string]string{"1":"eins"}
    m["2"] ="zwei"
    fmt.Println(m)
}
````

Diese kleine Programm gibt folgende Ausgabe:

    map[1:eins 2:zwei]

Daraufhin habe ich diese kleine Testanwendung geschrieben, die eine `map[string]string` nimmt, ein Argument hinzufügt und anschliessend einen String ausgibt, in dem alle Inhalte der `map` sortiert enthalten sind.

````golang
package main

import (
   "fmt"
   "strings"
   "sort"
)

func gq(m map[string]string) string {
    ma := make([]string, len(m))
    i := 0
    for key,value := range(m) {
        ma[i] = key +"=" + value
        i++
    }
    sort.SortStrings(ma)
    query := strings.Join(ma,"&")
    return query
}

func main() {
    var m = map[string]string{"1":"eins","acht":"8"}
    m["2"] ="zwei"
    query := gq(m)
    fmt.Printf("result: ?%sn", query)
}
````
Und ja, brauche ich so für meine erste kleine Anwendung von *golang*. 😀
