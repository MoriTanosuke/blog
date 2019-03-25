---
layout: post
title: 'Install fabric8 on ArchLinux'
published: false
tags: archlinux development
---

I recently switched from Ubuntu to ArchLinux, doing a fresh installation on my desktop PC and my laptop. Now I wanted to have [Fabric8][0] on both again. I followed the [official guide for a Vagrant setup][1], but had to tweak it slightly. Here are the steps that I needed to do to have it up and running:

* Install *resolvconf* and *dnsmasq*
````
yaourt -S openresolv dnsmasq
sudo sh -c 'echo "server=/vagrant.dev/127.0.0.1#10053" > /etc/dnsmasq.d/vagrant-landrush'
sudo systemctl enable dnsmasq
````
* Install virtualbox (I'm using [Yaourt][2] btw)
````
yaourt -S linux-headers virtualbox
sudo dkms autoinstall
````
* Clone the installer
````
    git clone https://github.com/fabric8io/fabric8-installer.git
    cd fabric8-installer/vagrant/openshift
````
* Install a vagrant plugin
````
vagrant plugin install vagrant-hostmanager
````
* Start up vagrant and wait a lot...
````
vagrant up
````
* Open [http://fabric8.vagrant.f8/][3]

[0]: http://fabric8.io/
[1]: http://fabric8.io/guide/getStarted/vagrant.html
[2]: https://wiki.archlinux.org/index.php/Yaourt
[3]: http://fabric8.vagrant.f8/
