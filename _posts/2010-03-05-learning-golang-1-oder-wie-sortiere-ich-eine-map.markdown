---
title: 'Learning Golang #1, oder Wie sortiere ich eine map?'
date: 2010-03-05 00:00:00 
tags: 
layout: post
---
<p><span class="dropCap">G</span>estern habe ich weiter an meiner ersten Applikation in <a href="http://golang.org/">golang</a> gearbeitet und dabei stellte sich mir die Frage, wie man eine <code>map[string]string</code> sortiert. <a href="http://stackoverflow.com/questions/2377881/how-to-get-a-md5-hash-from-a-string-in-golang">Stackoverflow hat (wie immer) weiter geholfen</a>, nachdem ich ein paar Versuche selbst unternommen hatte.</p>

<p>Ich denke, die folgende L&ouml;sung ist nicht das schickste. Sicherlich gibt es eine nette M&ouml;glichkeit, eine <code>map</code> auch mit <code>Channels</code> zu sortieren. Ein <a href="http://de.wikipedia.org/wiki/Bubblesort">BubbleSort</a> sollte damit schnell erstellt sein. Das werde ich beim n&auml;chsten Mal ausprobieren.</p>

<pre>package main

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
}</pre>