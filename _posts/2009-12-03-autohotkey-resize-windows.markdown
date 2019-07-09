---
title: 'Autohotkey: Resize windows'
date: 2009-12-03 00:00:00
layout: post
---
I was tired of moving and resizing windows by hand, so I created a small script for [AutoHotKey][0] that allows quick window organization. I added only what I need right now, so you have the following actions:

  * WIN+Up: Maximize current window
  * WIN+Down: Restore current window
  * WIN+Left: Put window to the left side of the screen
  * WIN+Right: Put window to the right side of the screen

The *Left/Right* actions are really useful if you like to work in splitscreen mode. I do that often, so this comes in handy. I think this little script allows for quick modification, so feel free to add any functionality you like to have.

<pre class="brush: js">
#InstallKeybdHook
#Up::WinMaximize A
#Down::WinRestore A
#Left::LeftHalfWindow()
#Right::RightHalfWindow()

LeftHalfWindow()
{
SysGet, area, MonitorWorkArea
w:=((areaRight-areaLeft)/2)
h:=(areaBottom-areaTop)

WinRestore, A
WinMove, A, , 0, 0,%w%,%h%
}

RightHalfWindow()
{
SysGet, area, MonitorWorkArea
w:=((areaRight-areaLeft)/2)
h:=(areaBottom-areaTop)

WinRestore, A
WinMove, A, , w, 0, w, h   ;Middle of screen is same as w.
}
</pre>

[0]: http://www.autohotkey.com/
