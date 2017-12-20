---
title: "Qutebrowser userscript for TT-RSS"
layout: post
---
After [the recent mishap of Firefox][0] I switched to [qutebrowser][1] on Linux and Windows. As an [i3wm][2] user, I feel right at home - but I do miss the synchronisation between machines and my mobile. But I guess I have to live with that inconvenience for the moment.

One thing I can not live without is a quick bookmark to share articles via my [ttrss][3] installation. If you are interested, you can find [my shared articles as a RSS feed here][4]. I update the feed almost every day when I find something interesting.

Anyway, because *qutebrowser* does not have a quick bookmark toolbar, there is no way to quickly share an interesting URL. But fortunately, one can extend *qutebrowser* via *userscripts* - which are [simple shell scripts receiving a couple variable like URL, title and selected text][5].

```` bash
#!/bin/bash

echo "open -t https://MYHOST/PATH/TO/TTRSS/public.php?op=sharepopup&content=${QUTE_SELECTED_TEXT}&title=${QUTE_TITLE}&url=${QUTE_URL}" >> "$QUTE_FIFO"
````

The userscript can be executed with the following command:

    spawn --userscript ttrss

It will execute the shell script and open a new tab in *qutebrowser* showing the *ttrss* share page. To make it even more convenient, I decided to bind the *userscript* to the key combination `tt` with the following command:

    bind tt spawn --userscript ttrss

Now I can simply press `tt` when I read a nice article and share it to my *ttrss* feed.


[0]: https://blog.mozilla.org/firefox/update-looking-glass-add/
[1]: https://www.qutebrowser.org/
[2]: https://i3wm.org/
[3]: https://tt-rss.org/
[4]: https://www.kopis.de/tt/public.php?op=rss&id=-2&view-mode=all_articles&key=af7d97f5762ec3f4de058ab70e53b30514d88857
[5]: https://github.com/qutebrowser/qutebrowser/blob/master/doc/userscripts.asciidoc
