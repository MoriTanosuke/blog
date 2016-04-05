---
title: 'Adding Ghost to your init scripts'
date: "2013-12-17"
tags: 
layout: post
---
Yesterday I noticed that my blog was down - again. Judging from the output of the `uptime` command, my server restarted during the night and until now I started the [Ghost][0] process manually.

A quick search revealed the [official installation manuals][1] with a nice [init.d script][2]. Unfortunately the `curl` command in the manual is wrong, and I had to adapt it slightly:

    curl https://raw.github.com/TryGhost/Ghost-Config/master/init.d/ghost -o /etc/init.d/ghost

<del>I don't know if there is an open [issue][3] for this yet, but I'll check later to see if I can open a pull requests on the documentation.</del>

**Update** I opened [pull request 1701][5] to fix the `curl` command in the documentation.<br/>
**Update 2** The [pull request][5] got merged and the [german installation manual][6] now shows the correct `curl` command. :-)

Oh, and while you're at it, [enable GZIP compession in Ghost][4] too.

[0]: http://www.ghost.org/
[1]: http://docs.ghost.org/installation/deploy/
[2]: https://wiki.debian.org/Daemon#A_brief_introduction_to_Debian_init_scripts
[3]: https://github.com/TryGhost/Ghost/issues
[4]: http://codybonney.com/how-to-add-gzip-compression-when-using-ghost-blogging-platform/
[5]: https://github.com/TryGhost/Ghost/pull/1701
[6]: http://docs.ghost.org/de/installation/deploy/

