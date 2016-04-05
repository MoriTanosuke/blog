---
title: 'Using Vagrant to set up your local dev environment'
date: "2014-03-19"
tags: appengine
layout: post
---
**TL;DR** Get a virtual machine of *Go read* by running this commands:

    sudo apt-get -y install virtualbox vagrant
    git clone https://gist.github.com/9637916.git
    vagrant up

If you want to know a bit more details, keep reading.

Today I wanted to give [Go read][0] a try, an open source replacement/alternative to the late [Google Reader][1]. The setup instructions in the README are simple enough, so I decided this would be a good starting point to create a [vagrant setup for the project][6]. For all of you not knowing what [Vagrant][3] is, here's the marketing slant

> Create and configure lightweight, reproducible, and portable development environments.

But it's not all marketing, it really works. All you need is [VirtualBox][5] and [Vagrant][3] to get started. A lot of projects are already providing a [Vagrantfile][4] so you can set up your local development environment with only one command.

So I created a simple [Vagrantfile][4] for *Go read*, basically the description how to set up the system. The file sets up a new virtual machine running *Ubuntu* and provisions it with all the necessary development tools for *Go read*, namely *git*, *python* and the [Go AppEngine SDK][5].

After running the application in the virtual machine, I decided to deploy it to the AppEngine, so you can now use my installed version of *Go read* at https://extreme-goread-76.appspot.com/ :smile:

[0]: https://www.goread.io/
[1]: http://www.google.com/reader/about/
[2]: https://extreme-goread-76.appspot.com/
[3]: http://www.vagrantup.com/
[4]: https://docs.vagrantup.com/v2/vagrantfile/
[5]: https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Go
[6]: https://gist.github.com/MoriTanosuke/9637916

