--- 
wordpress_id: 97
layout: post
title: "Bash: Kommando f\xC3\xBCr alle Zeilen einer Datei ausf\xC3\xBChren"
wordpress_url: http://blog.kopis.de/?p=97
---

Dieser Einzeiler liest eine Datei und führt ein Kommando für jede Zeile aus:

<pre class="brush: bash">while read file; do git add $file; done</pre>

