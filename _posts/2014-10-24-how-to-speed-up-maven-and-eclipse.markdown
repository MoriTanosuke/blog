---
title: 'How to speed up Maven and Eclipse?'
date: 2014-10-24 00:00:00 
tags: eclipse maven
layout: post
---
At work I am constantly bugged by modal dialogs in my [Eclipse][0] whenever the [m2e plugin][1] starts any kind of long-running [Maven][2] action, like downloading artifacts from our company repository. It startet to get really annoying a couple of weeks ago when almost every single one of our own artifacts downloaded only with a few *kB/s*. So I started to investigate some of the usual suspects:

* network speed
* proxy speed
* maven settings
* [Nexus repository][4] settings

To test *network speed* I did regular [HTTP Get][3] requests and tried downloading our artifacts from different computers around the network. All downloads were much faster than the downloads inside my Eclipse installation.

Then I removed all proxy settings from my set up, although I already had exclude rules for our Nexus repository. No improvement.

My Maven settings are pretty bare from the start, but I tried to strip everything from old projects and only kept my custom repository location and some other stuff related to my local set up. I also upgraded to [Maven 3.2.3][5], just to have to latest version. No improvement.

Then I took another look at the Nexus repository and tried to add a [custom routing][6] for our artifacts. Instead of looking into all configured repositories (or whatever Nexus decided to route based on internal automatic routing rules...) I added the first to elements of our company *groupId* to a custom routing and let Nexus only look in the hosted *snapshot* and *release* repositories.

Finally, that seems to bring an improvement and now download speed and overall maven performance in Eclipse is much, much higher. I'm not quite sure that the annoying modal dialogs will not pop up in my face anymore, but at least I feel like I am not constantly waiting for Eclipse anymore...

[0]: https://eclipse.org/
[1]: https://www.eclipse.org/m2e/
[2]: https://maven.apache.org/
[3]: https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP_GET
[4]: http://www.sonatype.com/nexus
[5]: https://maven.apache.org/docs/3.2.3/release-notes.html
[6]: http://books.sonatype.com/nexus-book/reference/confignx-sect-managing-routes.html

