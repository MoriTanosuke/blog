---
title: 'Bash: Kommando fÃ¼r alle Zeilen einer Datei ausfÃ¼hren'
date: 2010-06-07 00:00:00 
tags: 
layout: post
---
Dieser Einzeiler liest eine Datei und führt ein Kommando für jede Zeile aus:

<pre class="brush: bash">while read file; do git add $file; done</pre>
