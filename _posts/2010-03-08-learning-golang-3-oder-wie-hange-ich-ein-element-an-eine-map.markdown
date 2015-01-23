---
title: 'Learning Golang #3, oder Wie hänge ich ein Element an eine Map?'
date: 2010-03-08 00:00:00 
tags: 
layout: post
---
<p><span class="dropCap">E</span>s mag offensichtlich sein, aber ich will es hier doch noch festhalten: Um ein Element an eine <code>map</code> anzuh&auml;ngen, gen&uuml;gt eine Zuweisung.</p>

<pre>package main

import (
   "fmt"
)

func main() {
    var m = map[string]string{"1":"eins"}
    m["2"] ="zwei"
    fmt.Println(m)
}</pre>

<p>Diese kleine Programm gibt folgende Ausgabe:</p>

<pre>map[1:eins 2:zwei]</pre>

<p>Daraufhin habe ich diese kleine Testanwendung geschrieben, die eine <code>map[string]string</code> nimmt, ein Argument hinzuf&uuml;gt und anschliessend einen String ausgibt, in dem alle Inhalte der <code>map</code> sortiert enthalten sind.</p>

<pre>package main

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
}</pre>

<p>Und ja, brauche ich so f&uuml;r meine erste kleine Anwendung von <a href="http://golang.org">golang</a>. :-)</p>