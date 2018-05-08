How to run this blog locally
----------------------------

You can use [Docker][0] to run this blog locally. Just execute the following line:

    docker run --rm -it --label=jekyll --volume=$(pwd):/srv/jekyll --volume blog_bundle:/usr/local/bundle -p 127.0.0.1:4000:4000 jekyll/jekyll bundle update
    docker run --rm -it --label=jekyll --volume=$(pwd):/srv/jekyll --volume blog_bundle:/usr/local/bundle -p 127.0.0.1:4000:4000 jekyll/jekyll jekyll serve --watch

You should see the following output:

````
$ docker run --rm -it --label=jekyll --volume=$(pwd):/srv/jekyll  --volume blog_bundle:/usr/local/bundle -p 127.0.0.1:4000:4000 jekyll/jekyll jekyll serve --watch
Configuration file: /srv/jekyll/_config.yml
            Source: /srv/jekyll
       Destination: /srv/jekyll/_site
      Generating... 
                    done.
 Auto-regeneration: enabled for '/srv/jekyll'
Configuration file: /srv/jekyll/_config.yml
    Server address: http://0.0.0.0:4000/
  Server running... press ctrl-c to stop.
````

Now point your browser to [http://localhost:4000][1] and you should see the blog up and running.

[0]: https://www.docker.com/
[1]: http://localhost:4000
