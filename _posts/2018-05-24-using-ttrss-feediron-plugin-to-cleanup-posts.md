---
layout: post
title: "Using tt-rss FeedIron plugin to clean up posts"
---
I read a lot of RSS feeds with [tt-rss][0] (after [the death of Google Reader][1] a couple years ago), but not all pages provide a RSS feed for their articles. And even if they do, the feed sometimes is a mess because the content is not really tailored to the feed. Luckily there is a plugin for [tt-rss][0] called "[FeedIron][2]" which takes care of this and allows heavy customization of the article, for example

* clean up of HTML content (getting rid of unnecessary elements in the feed, like comments, social sharing button, extended author information)
* replacing the article with original content from the page
* modification of the content with [regex][3]

I do use this plugin to get full articles from [arstechnica][4] in my feed. Unfortunately, after replacing the original article in the feed with the multi-page content ([get the configuration for that here][5]) from the original page, the images are broken because [ars][4] uses javascript to put images into the article. To fix this, I modified the configuration for the page:

````json
"arstechnica.com": {
    "type": "xpath",
    "multipage": {
        "xpath": "span[@class='numbers']\/a",
        "append": true,
        "recursive": true
    },
    "xpath": [
        "section[@class='article-guts']"
    ],
    "cleanup": [
        "aside",
        "div[@class='article-expander']",
        "nav"
    ],
    "modify": [{
        "type": "regex",
        "pattern": "(data-thumb=\"(.+?)\".*?data-src=\"(.+?)\".*?>)",
        "replace": "><a href=\"$2\"><img src=\"$1\" \/><\/a>"
    }]
}
````

The interesting part here is the **modify** section:

````json
"modify": [{
    "type": "regex",
    "pattern": "(data-thumb=\"(.+?)\".*?data-src=\"(.+?)\".*?>)",
    "replace": "><a href=\"$2\"><img src=\"$1\" \/><\/a>"
}]
````

The configuration has a *regex pattern* which matches on the images, grabs the URLs to the thumbnail and the original image and replaces the javascripty stuff with a regular HTML link and image. This way when I read the feed with [*TTRSS-Reader*, my android client of choice for tt-rss][6] I do see the images even without javascript.


[0]: https://tt-rss.org/
[1]: https://googleblog.blogspot.de/2013/03/a-second-spring-of-cleaning.html
[2]: https://github.com/feediron/ttrss_plugin-feediron
[3]: https://en.wikipedia.org/wiki/Regular_expression
[4]: https://arstechnica.com
[5]: https://github.com/feediron/ttrss_plugin-feediron/blob/master/recipes/arstechnica
[6]: http://www.nilsbraden.de/TTRSS-Reader/
