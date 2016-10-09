---
layout: post
title: "Simple indicator for rslsync and XFCE"
---
I'm running [rslsync][0] on all my computers and I'm constantly checking if it was started to not loose any chances to sync up my documents. But this gets boring quick, so I decided that I want a simple red/green indicator on my [XFCE taskbar][1].

Luckily there is a simple plugin called [xfce4-genmon-plugin][2] which can be used to execute a shell script. The output of the script can be customized to display text, icons and tooltips. So I created a simple script to display a red icon when my sync process is not running and a green icon when the process is running. Here it is:

````
#!/bin/bash
declare -i running
running=$(ps x|grep btsync.conf|grep -v grep|cut -f2 -d" ")
if [ "$running" != "" ]; then
	echo "<img>/usr/share/icons/Vibrancy-Colors-Dark/status/24/stock_dialog-info.png</img><tool>Sync is running with PID $running</tool>"
else
	echo "<img>/usr/share/icons/Vibrancy-Colors-Dark/status/24/stock_dialog-error.png</img><tool>Sync is not running</tool>"
fi
````

The script get's all running processes and check if one of them is using *btsync.conf* as a parameter. I always run my sync process with `--config btsync.conf` so this is sufficient for me. If you run your process otherwise, you probably want to check for the word *rslsync* itself. I also use 2 icons from my current icon set, [Vibrancy Colors Dark][3]. In case I forget what this icon is about, I also add a simple tooltip which includes the process ID.

Now I can just check the taskbar when I start my computer and be sure that everything is syncing as it should. 👍

[0]: https://www.resilio.com
[1]: http://docs.xfce.org/xfce/xfce4-panel/start
[2]: http://goodies.xfce.org/projects/panel-plugins/xfce4-genmon-plugin
[3]: http://www.ravefinity.com/p/vibrancy-colors-gtk-icon-theme.html
