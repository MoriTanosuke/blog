---
layout: post
title: First webapp with NodeJS and ExpressJS
date: 2012-01-30 13:17
category: 
- nodejs
- webapp
- dev
---

After installing [Node][0] yesterday I wanted to get my first real web
application running today. I decided to use [ExpressJS][1] as my web
framework, for no special reason. So, how do I get to my first simple
web app?

Assuming [I have *nvm* and *node* installed][2] I can easily install
[npm][3] (the *node package manager*) from here. To get *express* onto
your machine, run this commands:

    curl http://npmjs.org/install.sh | sh #install npm
    npm install -g express

It took me a couple of minutes to figure out that for *express* you need
*node* v0.6.x. I installed v0.7.1, so I had to install v0.6.9 before
trying to install *express*. You can check your installed version with
this command:

    nvm ls

If there is no v0.6.x, install it and then activate it:

    nvm install v0.6.9
    nvm use v0.6.9

Now you can create your first webapp with *express*:

    express my-first-webapp && cd my-first-webapp
    npm install

*express* created a webapp skeleton for you and *npm* installed all the
dependencies. Now you can go ahead and run the webapp:

    node app.js

Open http://localhost:3000 and you'll see a little message that is
generated with *node* and *express*.

[0]: http://nodejs.org/
[1]: http://expressjs.com/
[2]: /2012/01/30/install-nodejs-with-nvm/
[3]: http://npmjs.org/

