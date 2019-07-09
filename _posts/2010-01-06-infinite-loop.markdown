---
title: 'Infinite Loop'
date: 2010-01-06 00:00:00
layout: post
---
Hach, solche Dinge find ich echt schön:

<pre class="brush: java">
while (true) {
  try {
    return;
  } finally {
    continue;
  }
}
</pre>
