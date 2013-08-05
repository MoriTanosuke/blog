--- 
wordpress_id: 23
layout: post
title: "Installation der USB-Treiber für die serielle Konsole des SheevaPlug unter Windows 7"
wordpress_url: http://blog.kopis.de/?p=23
---

Heute nachmittag wollte ich meinem <a href="http://de.wikipedia.org/wiki/SheevaPlug">SheevaPlug</a> noch einmal auf den Zahn fühlen. Seit ein paar Tagen kann ich mich nicht mehr per SSH einloggen, obwohl er ansonsten wie erwartet funktioniert. Ich wollte mich also über die serielle Konsole per USB-Port einloggen - aber leider werden die Treiber nicht korrekt unter Windows 7 installiert.

Man muss nach dem Download die Dateien entpacken und anschliessend die ftdibus.inf und ftdiport.inf editieren und mehrere Zeilen einfügen. <a href="http://www.georg-stich.de/index.php?option=com_content&amp;view=article&amp;id=54:ftdi-change&amp;catid=34:soft&amp;Itemid=61">Bei Georg Stich hab ich schliesslich einen Artikel gefunden, in dem der Vorgang erklärt ist</a>. Ich poste hier nochmal die Änderungen, damit sie nicht verloren gehen:

FTDIBUS.INF
-----------

<pre class="brush: bash">
[FtdiHw]
%USBVID_9E88&PID_9E8F&MI_00.DeviceDesc%=FtdiBus.NT,USBVID_9E88&PID_9E8F&MI_00
%USBVID_9E88&PID_9E8F&MI_01.DeviceDesc%=FtdiBus.NT,USBVID_9E88&PID_9E8F&MI_01

[FtdiHw.NTamd64]
%USBVID_9E88&PID_9E8F&MI_00.DeviceDesc%=FtdiBus.NTamd64,USBVID_9E88&PID_9E8F&MI_00
%USBVID_9E88&PID_9E8F&MI_01.DeviceDesc%=FtdiBus.NTamd64,USBVID_9E88&PID_9E8F&MI_01

[Strings]
USBVID_9E88&PID_9E8F.DeviceDesc="SheevaPlug JTAGKey FT2232D B"
USBVID_9E88&PID_9E8F&MI_00.DeviceDesc="SheevaPlug JTAGKey FT2232D B Port A"
USBVID_9E88&PID_9E8F&MI_01.DeviceDesc="SheevaPlug JTAGKey FT2232D B Port B"
</pre>

FTDIPORT.INF
------------

<pre class="brush: bash">
[FtdiHw]
%VID_9E88&PID_9E8F.DeviceDesc%=FtdiPort2232.NT,FTDIBUSCOMPORT&VID_9E88&PID_9E8F

[FtdiHw.NTamd64]
%VID_9E88&PID_9E8F.DeviceDesc%=FtdiPort2232.NTamd64,FTDIBUSCOMPORT&VID_9E88&PID_9E8F

[Strings]
VID_9E88&PID_9E8F.DeviceDesc="SheevaPlug JTAGKey FT2232D B Serial Port"
</pre>

Die fett gedruckten Stellen kann man auch in den Gerätedetails im Gerätemanager nachsehen. Und so soll das ganze anschliessend im Gerätemanager aussehen:

<a href="http://www.flickr.com/photos/cringe/5199003440/" title="SS-2010-11-22_18.24.53 by cringe, on Flickr"><img src="http://farm5.static.flickr.com/4154/5199003440_da8e036ec6.jpg" height="475" alt="SS-2010-11-22_18.24.53" width="412" /></a>

Ist das erledigt, kann man sich z.B. mit Putty auf dem neu erstellten COM-Port (bei mir ist das jetzt COM8) mit folgenden Einstellungen verbinden:

<a href="http://www.flickr.com/photos/cringe/5198410029/" title="SS-2010-11-22_18.25.14 by cringe, on Flickr"><img src="http://farm5.static.flickr.com/4144/5198410029_06b4b4b988.jpg" height="448" alt="SS-2010-11-22_18.25.14" width="466" /></a>

Jetzt ist man auf dem SheevaPlug und kann sich ganz normal einloggen.
