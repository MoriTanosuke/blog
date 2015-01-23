---
title: 'Know your CRLF in git'
date: 2012-01-29 00:00:00 
tags: 
layout: post
---
Today I wanted to install [nodejs][0] on my [debian][1] machine, and I got stuck with strange errors about *command not found*. I hate to admit it, but it was the fault of strange CRLF and the fix was setting my [git][2] defaults to a sensible value:

    git config --global core.autocrlf false

If you want the reasoning behind this, read [http://code52.org/line-endings.html][4] and then set it. But set it.

After that I could install [nodejs][0] with one simple line of [nvm][3]. I'll write about that soon.

[0]: http://nodejs.org/
[1]: http://debian.org/
[2]: http://git-scm.org/
[3]: https://github.com/creationix/nvm#readme
[4]: http://code52.org/line-endings.html
