---
title: "Simple python script to host an aggregated feed"
layout: post
---
A couple of days ago I thought it would be a nice thing to aggregate [my blog feed][0] with the [feed of my shared article][1]. That way readers can read my articles and also get a glimpse at the articles I read and find interesting. Sure, I could post them to my blog and they would automatically show up in the feed - but I don't want to create a new article for each article I share. Also [tt-rss][2] already has a feature to share articles and the [Android client ttrss-reader-fork][3] provides a way to share articles even from other applications.

So I decided to create a simple python script to aggregate multiple feeds, add an optional prefix to the title of the feed items and host the resulting feed via HTTP again. Here it is:

<pre class="brush: python">
#!/usr/bin/python
import datetime
import feedgenerator
import feedparser
import http.server
import socketserver
import time
import yaml
from os import curdir, sep, path

PORT = 8000

class RssRequestHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.endswith(".xsl"):
            filepath = curdir + sep + self.path
            if path.isfile(filepath):
                self.send_response(200)
                self.send_header('Content-type', 'application/xslt+xml')
                self.end_headers()
                f = open(filepath)
                self.wfile.write(bytearray(f.read(), 'UTF-8'))
                f.close()
            else:
                self.send_response(404)

        elif self.path.endswith(".rss") or self.path.endswith(".xml"):
            all_items = []

            for element in urls:
                feed = feedparser.parse(element["url"])
                for item in feed["items"]:
                    if "prefix" in element:
                        item.title = element["prefix"] + item.title
                    all_items.append(item)

            ordered_items = sorted(all_items, key=lambda entry: entry["date_parsed"])
            ordered_items.reverse()

            # build a new feed with all items in order
            rss = feedgenerator.Rss201rev2Feed(
                title="KOPIS.DE Aggregate feed",
                link="http://www.kopis.de",
                description="Aggregate feed for KOPIS.DE using several sources",
                lastBuildDate=datetime.datetime.now()
            )

            for item in ordered_items:
                rss.add_item(
                    title=item.title,
                    link=item.link,
                    description=item.description,
                    pubdate=datetime.datetime.fromtimestamp(time.mktime(item.date_parsed)),
                    unique_id=item.guid
                )

            self.send_response(200)
            self.send_header('Content-type', 'application/xml')
            self.end_headers()
            # TODO insert XSL after <?xml version="1.0" encoding="utf-8"?>
            #self.wfile.write(bytearray('<?xml-stylesheet type="text/xsl" href="atom-to-html.xsl"?>', 'UTF-8'))
            self.wfile.write(bytearray(rss.writeString('UTF-8'), 'UTF-8'))

        else:
            self.send_response(404)

        return

# load feed configuration from file
stream = open('feeds.yml')
urls = yaml.load(stream)

# serve via HTTP
handler = RssRequestHandler
httpd = socketserver.TCPServer(("", PORT), handler)

print("serving at port", PORT)
httpd.serve_forever()
</pre>

You can find the [whole project on github][4].

The title and the link of the feed are still hardcoded (there is [issue #1][5] though). To configure feeds, you can create the file *feeds.yml* and provide something like this:

<pre>
-
  url: http://blog.kopis.de/feed.xml
-
  url: https://www.kopis.de/tt/public.php?op=rss&id=-2&view-mode=all_articles&key=af7d97f5762ec3f4de058ab70e53b30514d88857
  prefix: "Link: "
</pre>

[0]: http://blog.kopis.de/feed.xml
[1]: https://www.kopis.de/tt/public.php?op=rss&id=-2&view-mode=all_articles&key=af7d97f5762ec3f4de058ab70e53b30514d88857
[2]: https://tt-rss.org/
[3]: https://github.com/nilsbraden/ttrss-reader-fork
[4]: https://github.com/MoriTanosuke/rssmerger
[5]: https://github.com/MoriTanosuke/rssmerger/issues/1

