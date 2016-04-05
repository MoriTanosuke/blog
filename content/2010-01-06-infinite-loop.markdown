---
title: 'Infinite Loop'
date: "2010-01-06"
tags: 
layout: post
---
<p>Hach, solche Dinge find ich echt sch&ouml;n:</p>

<pre class="brush: java">while (true) {
  try {
    return;
  } finally {
    continue;
  }
}</pre>
