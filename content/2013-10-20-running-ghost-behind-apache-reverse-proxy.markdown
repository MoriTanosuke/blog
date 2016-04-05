---
title: 'Running Ghost behind Apache Reverse Proxy'
date: "2013-10-20"
tags: 
layout: post
---
After [migrating to Ghost][0] a couple of days ago, I wanted to hide the application behind my [Apache HTTP Server][1]. Because I'm running my blog on a subdomain I already had a *VirtualHost* configured, so the question was how to set up [mod_proxy][4] to forward all requests to *Ghost*.

Here's my apache configuration for the [virtual host][5] on which my blog is hosted on my server:

    <Virtualhost *:80>
      ServerName blog.myserver.tld
      ServerAlias www.myserver.tld blog.myserver.tld
      
      ServerAdmin webmaster@localhost
      
      RewriteEngine On
      RewriteOptions Inherit
      # rewrite jekyll URLs to Ghost URLs
      RewriteRule ^/\d{4}-\d{2}-\d{2}-(.+?)/?$ $1 [R]
      RewriteRule ^/\d{4}/\d{2}/\d{2}/(.+?)/?$ $1 [R]
      # previous feed address to ghost feed
      RewriteRule ^/atom\.xml$ /rss [R]
      
      <ifmodule mod_proxy.c>
        ProxyVia On
        ProxyRequests Off
        ProxyPass / http://www.kopis.de:2368/
        ProxyPassReverse / http://www.kopis.de:2368/
        ProxyPreserveHost on
        <proxy *>
          AllowOverride All
          Order allow,deny
          allow from all
        </proxy>
      </ifmodule>
    </Virtualhost>

You can also see my [RewriteRules][2] here that help me keep old URLs from my *Jekyll* blog and not loose any search results due to broken URLs. That was quite important to me, because I think you shouldn't break URLs when migrating your underlying software. Unfortunately, *Ghost* does not yet provide a mechanism to customize the URLs, so I had to go with this [redirects as suggested by W3C][3].

Additionally, [with real redirects I can instruct Disqus to crawl my website again and auto-fix all comments][6], which are tied to URLs in their system. No more URL mapping spreadsheets to edit! :-)

[0]: /migrating-from-jekyll-to-ghost/
[1]: https://httpd.apache.org/
[2]: https://httpd.apache.org/docs/current/rewrite/remapping.html
[3]: http://www.w3.org/QA/Tips/reback
[4]: https://httpd.apache.org/docs/2.2/mod/mod_proxy.html
[5]: https://httpd.apache.org/docs/2.2/vhosts/
[6]: http://help.disqus.com/customer/portal/articles/912834-redirect-crawler

