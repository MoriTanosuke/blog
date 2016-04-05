---
title: 'Keep an Error Journal'
date: "2013-11-15"
tags: 
layout: post
---
Yesterday I listened to the excellent episode [Bugs considered harmful][0] of [Scott Hanselmans podcast *hanselminutes*][1]. (If you're not subscribed to the podcast, stop reading here and [subscribe][2].) Scott talked to [Douglas Crockford][3] about the history of computer science, about our understanding of the history and the missing self-consciousness about predecessors and principles of computers and programming languages.

That in itself makes an interesting podcast, but then the topic came to bugs and how to learn from them. *Douglas Crockford* mentioned an *error journal* that a software developer should write all bugs into, as a reference and as an excercise. The famous example of this is [Donald E. Knuth][5] and his document [The errors of TeX][4]. I'm still searching for the article mentioned in the podcast, where *Donald Knuth* described the usefulness of his error journal. Unfortunately the *hanselminutes* podcast does not have show notes, so there is no direct link to this article... :-(

Anyway, I decided to start my own error journal today, after a colleague discovered a very silly bug that I created by manually copying data from one database to another. I couldn't even remember doing that, but fortunately I created a ticket in JIRA before doing the actual task, so we could rule out a misbehavior of the database and pin the bug down to my human error. Maybe the error journal helps me to prevent such bugs in the future, and I do hope that simply writing it down will help me to remember this in the future.

Do you keep an error journal or something like that? Or do you have another way of remembering the types of bugs that you found, created or fixed?

[0]: http://hanselminutes.com/396/bugs-considered-harmful-with-douglas-crockford
[1]: http://hanselminutes.com/
[2]: http://feeds.feedburner.com/HanselminutesCompleteMP3
[3]: http://www.crockford.com/
[4]: http://www.tug.org/texlive//devsrc/Master/texmf-dist/doc/generic/knuth/errata/errorlog.pdf
[5]: http://en.wikipedia.org/wiki/Donald_Knuth

