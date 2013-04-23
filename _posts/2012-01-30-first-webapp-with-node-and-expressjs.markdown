---
layout: post
title: Building a simple blog with NodeJS and Express
tags: nodejs frontpage
---

After [installing NodeJS][0] and [creating a basic web application with
Express][1] I wanted to get deeper into the world of *node* and build
another simple, but useable web app. Because I like to blog, I decided
to build a blog.

You can check out the result at [https://github.com/MoriTanosuke/blode/][10]
and clone it.

I decided to stick with [express][2] and [jade][3] as my templating
engine, because I already now how to use those. But because this blog is
made with [jekyll][4] and I like to think that I can eventually replace
the *jekyll* blog with a *node* blog, I wanted my blog entries written
in [Markdown][5]. Fortunatly, *node* can easily display *markdown* with
[node-markdown][6].

I started with a simple route that walks down into a directory *"blog"*,
gets all files and renders a template when the files are fetched:

    exports.list = function(req, res){
      var walk = require('walk'), fs = require('fs'), options, walker;
      // walk into directory "blog"
      var walker = walk.walk('blog');
      var fs = new Array();
      walker.on("file", function(root,file,next){
        // get the file, but remove file extension
        var f = root + "/" + file['name'].substring(0, file['name'].lastIndexOf('.'));
        // push without /blog prefix
        fs.push(f.substring(f.indexOf('/')));
        next();
      });
      walker.on("end", function() {
        res.render('blog', { title: 'Entries', files: fs })
      });
    };

Then I created a simple view named *'blog'* which displays all the files:

    h1= title
    !=partial('listing', {files: files})

Ok, I cheated a little bit, because the actual file listing is done in a
*partial*, which basically is a reusable part of a view. The partial
*'listing'* isn't complicated either:

    ul
      - each file in files
        li 
          a(href='#{file}') #{file}

As you can probably tell, this *jade* partial will render a simple unordered list with links
to the given files. Ok, so now I have a list of files under directory */blog*. What happens
when I click one of the links?

Another route takes over:

    exports.entry = function(req, res){
      var md = require('node-markdown').Markdown;
      res.render('entry', { content: md('' + require('fs').readFileSync('blog/'
         + req.params.year + "/" + req.params.month + "/" + req.params.day + "/"
         + req.params.title + ".markdown")), title: req.params.title });
    };

Now this route builds a filename from the given parameters, reads its 
content, renders the content as *markdown* and renders the template *'entry'*:

    div.entry !{content}
    
    div.nav
      ul
        li
          a(href='/') back
    
    div.comments
      p Feel free to add your comment system here. 

Again, a very basic template. I simple put all the *markdown* into a 
*div* with class *entry*, add a link to the homepage and another *div*
for a later addition of comments, probably using [disqus][7].

Now I have 2 routes: one route walks through my filesystem and gets a list
of files, another route displays the given content and adds a very basic
navigation. What's missing at this point is the connection between the
routes.

Here is the relevant part from my *app.js* file that connects my routes
with actual URLs the user enters into the browser address bar:

    app.get('/', routes.list);
    app.get('/:year/:month/:day/:title', routes.entry);
    app.get('*', function(req, res){ res.send('Uh, what?', 404); });

The first route shows the homepage with the list of entries. The second
route displays an entry when the user clicked a link. The third route is
an error handler that will display a *very helpful* error message when the
user enters a non-existant URL.

Remember, if you want to check out my code, [clone me from github][10] and run 
the blog on your own machine:

    git clone git@github.com:MoriTanosuke/blode.git
    cd blode
    node app.js

Now you can open http://localhost:3000 and check the blog out.

For my development I used a very nice script, [node-supervisor][8]. It
watches your files and restarts *node* when needed. That way every time I
save a file in my editor, the server restarts and I can reload the page to
see my changes. Just run the application with *supervisor* instead of *node*:

    npm install node-supervisor
    supervisor app.js

I really like my development cycle fast and without manually restarting stuff
every couple of minutes.

The one thing gone awry
-----------------------

When I tried to put a basic stylesheet in place, I noticed that I couldn't
open the stylesheet at http://localhost:3000/stylesheets/style.css. I thought
about this for a couple of minutes and verified that the file is actually 
in the directory */public/stylesheets* in my application.

After searching the internets I found that in my *app.js* the following lines
were present:

    app.configure(function(){
      // ...
      app.use(app.router);
      app.use(express.static(__dirname + '/public'));
    });

If I got the explanation right, this means that my own routes come before
the static assets. So when I tried to open my stylesheet the error handler
kicked in because none of my 2 other rules applied. The solution to this is 
re-ordering the configuration:

    app.configure(function(){
      // ...
      app.use(express.static(__dirname + '/public'));
      app.use(app.router);
    });

Now the static assets are always served before my own routes apply.
Everything works, my stylesheet is in place.

[0]: /2012/01/30/install-nodejs-with-nvm/
[1]: /2012/01/30/first-webapp-with-node-and-expressjs/
[2]: http://expressjs.com/
[3]: http://jade-lang.com/
[4]: http://jekyllrb.com/
[5]: http://daringfireball.net/projects/markdown/
[6]: https://github.com/andris9/node-markdown
[7]: http://disqus.com/
[8]: https://github.com/isaacs/node-supervisor
[10]: https://github.com/MoriTanosuke/blode
