---
layout: post
title: "Greasemonkey Script to expand/collapse JIRA code blocks"
---
Recently the company I am working for switched to [JIRA][0] as our issue tracker. In general, I'm very happy with this, because the software we were using before didn't really understand Agile and the Board and various fields felt tacked on and not really integrated. The software was also a bit picky how to let the user do stuff.

But what I was missing is expanding/collapsing code blocks in comments and descriptions. This was very handy when you paste really long stacktraces or XML parts. [In JIRA this is not possible][1] without the help of a plugin ([plugin1][2] for example). So I decided to write a little greasemonkey userscript to do it. And here it is:

<pre>
<code>
function() {
}
</code>
</pre>

[0]: https://www.atlassian.com/software/jira
