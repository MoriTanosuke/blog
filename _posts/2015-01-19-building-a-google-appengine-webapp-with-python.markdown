---
title: 'Building a Google AppEngine webapp with Python'
date: 2015-01-19 00:00:00 
tags: google-app-engine,development
layout: post
---
Today I wanted to add [ReCAPTCHA][3] to one of my web applications built with [NodeJS][4]. A quick look on my [heroku][5] dashboard showed that the application wasn't even running anymore, and a quick search through the logs showed that I was running into a quota of the connected [Redis to go][6] instance. Before doing any real work I'd have to upgrade the underlying stack, and searching for recaptcha clients for NodeJS did not bring up anything useful for me.

So, I decided to completely switch technology and rebuild the application using [Google AppEngine and Python][1]. :)

I closely followed the python tutorial for the first steps, creating a simple application that could store and display a single Entity of type *Highlight*. I then proceeded to add [jinja2 templates][7]. All of this is pretty straight forward and the application was up and running after two hours.

But then I stumbled upon a strange error: When I tried to read Entities by key from the *Datastore*, I couldn't get the stored Entities back. After researching, I finally found the correct documentation and this code finally let me retrieve stored *Highlight* entities from the *Datastore*:

    # get key via URL parameter 'safeKey'
    # generated via myEntity.key.urlsafe()
    k = ndb.Key(urlsafe = safeKey)
    highlight = k.get()

Previously I used something like this:

    safeKey = myEntity.key.id()
    ...
    Highlight.get_by_id(safeKey)

This did not return any result, although I could verify via the appengine dashboard that there really was an Entity in the *Datastore* with the given ID.

Anyways, you can now store syntax highlighted code at http://perfect-embassy-830.appspot.com/

[0]: https://cloud.google.com/appengine/docs/python/
[1]: https://github.com/MoriTanosuke/highlighty/
[2]: http://perfect-embassy-830.appspot.com/
[3]: https://www.google.com/recaptcha/intro/index.html
[4]: http://nodejs.org/
[5]: https://www.heroku.com/
[6]: http://redistogo.com/
[7]: https://cloud.google.com/appengine/docs/python/gettingstartedpython27/templates

