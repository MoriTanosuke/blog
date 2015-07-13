---
layout: post
title: 'Installing Steam 32bit under ArchLinux 64bit'
---
Yesterday I tried to install [Steam][1] on my ArchLinux 64bit installation. I failed without knowing exactly why. I followed the [wiki docs][0] closely, but I couldn't manage to start Steam. It just wouldn't show the main window.

I removed all installed 32bit libraries with this little command:

    pacman -R $(paclist multilib | cut -f1 -d' ')

I had to run it several time and ended up removing most of the libraries manually, because of dependency cycles... I also removed the *multilib* repository from my configuration. Then I made sure that all 64bit stuff is still installed:

    pacman -S gcc-libs base-devel

Today I tried again, by [enabling the multilib repository][2] and adding a custom repository that has a meta package for all 32bit libraries needed by *Steam*:

  nano /etc/pacman.conf

Add the following lines at the end of file:

    [alucryd-multilib]
    Server = http://pkgbuild.com/~alucryd/$repo/x86_64
    SigLevel = Never

After that update *pacman*:

    pacman -Syyu

Now you can install all 32bit libraries:

    pacman -S steam-libs

This time I didn't use the *nvidia* 32bit libraries, but stayed with *mesa*. After all is installed, I re-installed *Steam* and was able to run it fine. The main window opened and I can see my library. :smile: :thumbsup:

[0]: https://wiki.archlinux.org/index.php/Steam#Installation
[1]: http://store.steampowered.com/
[2]: https://wiki.archlinux.org/index.php/Multilib#Enabling
