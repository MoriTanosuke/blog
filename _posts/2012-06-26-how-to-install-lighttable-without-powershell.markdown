---
layout: post
title: How to install Lighttable without Powershell
description: I wanted to install Lighttable, but couldn't make it work in Windows Powershell. Here you can see how to download and run it yourself.
published: false
---

I am a backer of [the interesting project *Lighttable*][0] that aims to build a new kind of IDE for
software developers. [Recently there was a first release][1] and I wanted to give it a try - to revive my
clojure adventures and to see the progress of the project. But I ran into trouble with the Powershell download commands and I couldn't figure out how to solve it.

So, here is a way to download Lighttable manually and run it:

+ Install [leiningen][2]
+ Open http://app.kodowa.com/latest-version
+ See which version is the most recent
+ Insert it into the URL http://temp2.kodowa.com/playground/releases/{VERSION}.zip, for example http://temp2.kodowa.com/playground/releases/0.0.6.zip
+ Unzip the file into a directory
+ Run *leiningen* in the new directory

[0]: http://www.kickstarter.com/projects/306316578/light-table
[1]: http://app.kodowa.com/playground
[2]: https://github.com/technomancy/leiningen
