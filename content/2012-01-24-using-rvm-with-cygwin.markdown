---
title: 'Using rvm with cygwin'
date: "2012-01-24"
tags: 
layout: post
---
If you want to install [rvm][0] with [cygwin][1] do the following:

* install *cygwin*
* make sure you select *ncurses* and *curl* (if you don't install *ncurses*, you'll get a lot of `tput: command not found`)
* execute this shell `bash -s stable < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer )`
* install ruby with this command `rvm install ruby-1.9.2`

[0]: http://beginrescueend.com/rvm
[1]: http://cygwin.org/
