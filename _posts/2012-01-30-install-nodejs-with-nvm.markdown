---
layout: post
title: Install NodeJS with NVM
---
Today I started my first steps into the world of server-side javascript with [nodejs][0]. First thing was installing [NVM][1], the *node version manager*. You can do that with this simple steps:

    git clone git://github.com/creationix/nvm.git ~/.nvm
    . ~/.nvm/nvm.sh

After that you can go ahead and install *nodejs*:

    nvm install v0.7.1

Now you need to download an IDE, a compiler, an enterprise service bus... oh no, wait. Just open your texteditor, paste the following text:

    var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(1337, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');

save it as *simpleserver.js* and then run it with

    node simpleserver.js

Now you can point your browser to *http://127.0.0.1:1337/* and you'll see the response of your first application with *nodejs*.

[0]: http://nodejs.org/
[1]: https://github.com/creationix/nvm#readme

