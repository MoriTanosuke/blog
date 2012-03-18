---
layout: post
title: Remove all my tweets with Ruby
date: So 18. Mär 17:46:36 CET 2012
---
Today I decided (in a recent quest to avoid Google for as long as possible) to re-activate [my Twitter account][0]. But I wanted to get rid of all previous tweets first, so I decided to put my recently acquired [ruby][1] skills to play.

After a little search (on [DuckDuckGo][2], not the *Big G*) I found [the twitter gem][3] and wrote this little script:

<script src="https://gist.github.com/2077413.js"> </script>

You need to [register an application][4] and fill in the details in the head of the script to use it.

I tried to obey the rate limiting, but nevertheless Twitter failed on me a lot during the execution of this script. I don't know if that's because of my script or if the twitter API is really that wonky, but I kept running the script and slowly I get rid of all my tweets.

For the rubyers amongst you, I used [peach][5] to destroy the statuses in parallel. **Do you know a better way to do this?**

[0]: http://twitter.com/carsten_r
[1]: http://www.ruby-lang.org/en/
[2]: http://ddg.gg/
[3]: http://twitter.rubyforge.org/
[4]: https://dev.twitter.com/apps/
[5]: http://peach.rubyforge.org/

