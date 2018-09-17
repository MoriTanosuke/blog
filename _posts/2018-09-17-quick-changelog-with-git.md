---
layout: post
title: "Quick changelog with git"
tags: git
---
Whenever I stumble upon a quick command line that I think is re-usable and useful, I'm collecting it in my personal wiki. This way I can spare me the search on Stackoverflow when I need to repeat a mundane task again. And again. And again...

Here's the latest piece: Building a simple changelog between the two most recent tags in git.

````bash
TAG1=$(git describe --abbrev=0 --tags `git rev-list --tags --max-count=2 | sort | head -n 1`)
TAG2=$(git describe --abbrev=0 --tags `git rev-list --tags --max-count=2 | sort -r | head -n 1`)
git log --oneline $TAG1..$TAG2
````

The result should look somewhat like this:

````
...
73ac1fb new post
f576da1 Fix post layout
dff4def Remove picture
47255be Create 2018-07-06-selfmade-phone-wallpaper.md
64259c6 Add link to massdrop
c501c99 Remove disqus from config
1eb82df Disable disqus
...
````

If you're not super diligent with your commits, you might want to clean up the changelog and only keep relevant commits in the list. Nobody wants to read about fixing typos in a changelog... 🤷
