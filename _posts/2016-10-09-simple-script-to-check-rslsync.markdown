---
layout: post
title: "Simple indicator for rslsync and XFCE"
---
*Update* I added another script which will run *[rslsync][0]* when the taskbar icon is clicked.

I'm running [rslsync][0] on all my computers and I'm constantly checking if it was started to not loose any chances to sync up my documents. But this gets boring quick, so I decided that I want a simple red/green indicator on my [XFCE taskbar][1].

Luckily there is a simple plugin called [xfce4-genmon-plugin][2] which can be used to execute a shell script. The output of the script can be customized to display text, icons and tooltips. So I created a simple script to display a red icon when my sync process is not running and a green icon when the process is running. Here it is:

````
#!/bin/bash
SCRIPT=$HOME/bin/run-sync.sh
declare -i running
running=$(pidof rslsync)
if [ $running -ne 0 ]; then
	echo "<img>/usr/share/icons/Vivacious-Colors-Dark/status/24/stock_dialog-info.png</img><tool>Sync is running with PID $running</tool>"
else
	echo "<img>/usr/share/icons/Vivacious-Colors-Dark/status/24/stock_dialog-error.png</img><tool>Sync is not running</tool><click>$SCRIPT</click>"
fi
````

The script checks if the PID of a process called *rslsync* is something other than zero. I also use 2 icons from my current icon set, [Vibrancy Colors Dark][3]. In case I forget what this icon is about, I also add a simple tooltip which includes the process ID.

*Update* I added the tag `<click>...</click>` to the check script which references another script:

````
#!/bin/bash
SYNC_HOME=$HOME/bin/btsync
SYNC_CONFIG=$SYNC_HOME/btsync.config
if [ "$(pidof rslsync)" != "0" ]; then
	$SYNC_HOME/rslsync --config "$SYNC_CONFIG"
else
	echo Sync already running.
fi
````

This second script will start [rslsync][0] if it is not already running. So if the taskbar icon is red, I can just click it and my sync process wil be started. Now I can just check the taskbar when I start my computer and be sure that everything is syncing as it should. 👍

[0]: https://www.resilio.com
[1]: http://docs.xfce.org/xfce/xfce4-panel/start
[2]: http://goodies.xfce.org/projects/panel-plugins/xfce4-genmon-plugin
[3]: http://www.ravefinity.com/p/vibrancy-colors-gtk-icon-theme.html
