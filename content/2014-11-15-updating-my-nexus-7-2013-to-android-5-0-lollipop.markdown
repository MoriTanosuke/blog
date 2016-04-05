---
title: 'Updating my Nexus 7 (2013) to Android 5.0 Lollipop'
date: "2014-11-15"
tags: android gadgets root
layout: post
---
Today I decided it's time to jump on the [Android Lollipop][0] wagon. I like flashing brand new stuff to my devices and I rooted and flashed custom firmware to almost all my gadgets. Why not try Android 5.0?

My [Nexus 7 (2013)][1] ran on [OmniROM][2] before and I'm pretty happy with that ROM. It runs stable, updates are coming quickly and it not too far from [AOSP][3]. But it has no Lollipop yet. Time to try something new.

A quick search revealed [SimpleAOSP for Nexus flo][4]. I [downloaded the ROM][6] and [Google Apps for Lollipop][5]. A full wipe is required to install the new ROM, as always when upgrading to a completely new version.

But after rebooting I couldn't download files to my device, I could not connect via USB and drag'n'drop files, I couldn't even see stuff in my sdcard folder. Luckily there was already a solution available on XDA: [/sdcard problems after upgrading Android][7]

The solution is running the following commands in a [Terminal][8]:

    su
    restorecon -FR /data/media/0

Make sure [you have root][9] before doing this. After this I can use the device again. :-)

[0]: http://www.android.com/versions/lollipop-5-0/
[1]: http://www.asus.com/de/Tablets_Mobile/Nexus_7_2013/
[2]: http://omnirom.org/
[3]: https://source.android.com/
[4]: http://forum.xda-developers.com/nexus-7-2013/development/rom-simpleaosp-t2934666
[5]: https://www.androidfilehost.com/?fid=95784891001608382
[6]: http://hubdroid.com/~Gnome/SimpleAOSP/Flo/
[7]: http://forum.xda-developers.com/google-nexus-5/general/sdcard-problems-upgrading-android-t2938749
[8]: https://play.google.com/store/apps/details?id=jackpal.androidterm
[9]: http://download.chainfire.eu/589/SuperSU/UPDATE-SuperSU-v2.16.zip

