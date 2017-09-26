---
layout: post
title: 'Changing volume for the current audio device using pactl'
tags: archlinux linux
---
I'm still in the process of [setting i3wm up][2] for use on my desktop and laptop computers. Today I noticed that my configuration still used a hardcoded value when changing the volume for my audio device. But I'm using a [Xonar][0] soundcard on my desktop, a logitech headset for my gaming needs and regular speakers on both the desktop and the laptop. I had to figure out how to get the current audio device and change the volume for that, instead of "just the first" audio device.

Luckily, the command line has all thing ready for this task and i3 makes it easy to configure it. The command `pactl list short sinks` produces output like this:

    0	alsa_output.pci-0000_01_00.1.hdmi-stereo	module-alsa-card.c	s16le 2ch 44100Hz	SUSPENDED
    1	alsa_output.pci-0000_00_1b.0.analog-stereo	module-alsa-card.c	s16le 2ch 44100Hz	SUSPENDED
    2	alsa_output.usb-ASUS_Xonar_U7-00-U7.analog-stereo	module-alsa-card.c	s16le 2ch 48000HzRUNNING

Now it's easy to get the device currently in use with simple *grep* and *awk* commands:

    pactl list short sinks|grep RUNNING|awk '{print $1}'

This commands return the first row of the above output, i.e. *2* when I'm using my Xonar soundcard. Now I can modify my keybinding for the media keys on my keyboards or the scrollwheel on the Xonar device. Here's the section from my configuration file ([see all in my github repo][1]):

    # Pulse Audio controls
    bindsym XF86AudioRaiseVolume exec pactl set-sink-volume $(pactl list short sinks|grep RUNNING|awk '{print $1}') +5% #increase sound volume
    bindsym XF86AudioLowerVolume exec pactl set-sink-volume $(pactl list short sinks|grep RUNNING|awk '{print $1}') -- -5% #decrease sound volume
    bindsym XF86AudioMute exec pactl set-sink-mute $(pactl list short sinks|grep RUNNING|awk '{print $1}') toggle # mute sound

[0]: https://www.asus.com/Sound/Xonar_U7/ 
[1]: https://github.com/MoriTanosuke/i3wm-config
[2]: {{ site.baseurl }}{% post_url 2015-07-11-wechsel-zu-archlinux %}

