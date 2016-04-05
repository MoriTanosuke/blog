---
title: 'Endlich - Git unter Android mit Terminal IDE'
date: "2013-03-08"
tags: 
layout: post
---
Endlich ist es soweit: Ich kann [git][0] unter Android nutzen. Und zwar mit [Terminal IDE][1].

Bis heute habe ich es mit [Agit][2], [Github for Android][3] und [AIDE][4] versucht, aber alles war nicht zu meiner
Zufriedenheit. *Agit* kann nicht commiten und pushen, *Github for Android* ist eher was f&uuml;r die 
Bedienung von Github und nicht f&uuml;r *git* und *AIDE* ist ein ziemlicher Usability Albtraum...

Nachdem ich aber den Tipp zu [Terminal IDE][1] bekommen habe, musste ich das nat&uuml;rlich ausprobieren. Die
Installation ist relativ einfach, aber zus&auml;tzlich zu der Installation der App muss man in der App noch
ein Basissystem installieren. F&uuml;hlt sich an wie ein *chroot* oder eine virtuelle Maschine mit einem 
Linuxsystem.

Wie auch immer, die Installation verlief ohne Probleme. Beim ersten *git clone* des [Repositories f&uuml;r
meinen Blog][5] kam noch ein kleiner R&uuml;ckschlag; eine Fehlermeldung. Ein paar Suchen sp&auml;ter aber die 
Erleichterung: [ssh-git in Terminal IDE einrichten][6].

Anschliessend konnte ich mein Repository clonen und dieser Blogpost entstand mittels [Terminl IDE][1] auf
meinem ASUS Transformer. :-)

[0]: http://git-scm.org/
[1]: https://play.google.com/store/apps/details?id=com.spartacusrex.spartacuside&hl=de
[2]: https://play.google.com/store/apps/details?id=com.madgag.agit
[3]: https://play.google.com/store/apps/details?id=com.github.mobile
[4]: https://play.google.com/store/apps/details?id=com.aide.ui
[5]: https://github.com/MoriTanosuke/moritanosuke.github.com
[6]: http://lox-o-drome.blogspot.de/2012/08/damgit-how-to-painfully-set-up-git-on.html
