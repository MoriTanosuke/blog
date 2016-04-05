---
title: 'Bash: Kommando für alle Zeilen einer Datei ausführen'
date: "2010-06-07"
layout: post
---
Dieser Einzeiler liest eine Datei und führt ein Kommando für jede Zeile aus:

<pre class="brush: bash">while read file; do git add $file; done</pre>
