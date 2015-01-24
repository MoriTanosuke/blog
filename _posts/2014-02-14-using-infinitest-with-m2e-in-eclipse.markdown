---
title: 'Using Infinitest with m2e in Eclipse'
date: 2014-02-14 00:00:00 
tags: testing eclipse
layout: post
---
I'm a huge fan of [Infinitest][0] to have a continuous feedback loop from my unit tests while developing. Recently I noticed that when I'm working with [m2e][1] some of my testcases were red when Inifitest executed them, but were green when I [run the Junit tests via Eclipse][2]. After thinking about it, I figured out that all tests that were using configuration or input files from my `src/test/resources` folder were failing.

[Looks like Eclipse (or rather, *m2e*) is using a different classpath order than Infinitest.][3]

Solution is to put the folder `src/test/resources` to the top of the classpath via the project settings. That way the test resources are loaded before resources from `src/main/resources`. :smile:

<iframe src="https://www.flickr.com/photos/cringe/12515697764/player/34115f1e65" height="262" width="640"  frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

[0]: http://infinitest.github.io/
[1]: https://eclipse.org/m2e/
[2]: http://help.eclipse.org/indigo/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2FgettingStarted%2Fqs-junit.htm
[3]: https://github.com/infinitest/infinitest/issues/53

