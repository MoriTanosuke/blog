---
title: 'Cyanogenmod 7 auf dem Samsung Galaxy S2 (i9100)'
date: "2011-08-17"
tags: 
layout: post
---
<p>Am Wochenende habe ich mein <a href="http://www.samsung.de/de/Privatkunden/Mobil/Mobiltelefone/MultimediaInfotainment/samsunggalaxysii/GT-I9100LKADBT/detail.aspx">Samsung Galaxy S2 (i9100)</a> von der Stock Firmware befreit. Der Grund dafür ist einfach: ich möchte so nah wie möglich am <a href="https://source.android.com/">Original-Android von Google</a> dran sein. Und leider hat auch Samsung einige Modifikationen am Betriebssystem vorgenommen, die ich nicht besonders gut finde.</p>

<script type="text/javascript"><!--
google_ad_client = "ca-pub-1325997557962631";
/* kopis.de smartphone */
google_ad_slot = "6027243291";
google_ad_width = 468;
google_ad_height = 60;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>

<p>Z.B. muss man Updates per Windows-Software einspielen. Was natürlich auf meiner Debian-Maschine etwas schwierig wird... Zum anderen will ich diese ganzen vorinstallierten Anwendungen nicht haben. Wer hat von euch schon den <em>Readers Hub</em> oder den <em>Social Hub</em> benutzt? Ich jedenfalls nicht.</p>

<p>Ich lege auch keinen groÃÂen Wert auf Eyecandy (deshalb ist <a href="http://miuiandroid.com/">MIUI</a>) auch wieder schnell von meinem Telefon verschwunden. Das pure Android ist ausreichend für mich, das jeder Herstellers noch ein eigenes Aussehen drüber legt fällt für mich in die Kategorie <em>Marketing</em>...</p>

<p>Jetzt aber zum Eingemachten: wie installiere ich ClockworkMod Recovery und anschlieÃÂend <a href="http://www.cyanogenmod.com/">Cyanogenmod 7</a> auf dem <em>Samsung Galaxy S2 (i9100)</em>?</p>

<p><a href="http://www1.belboon.de/adtracking/02133208997901d6a80004b9.html" target="_blank"><img src="http://www1.belboon.de/adtracking/02133208997901d6a80004b9.img" border="0" width="728" height="90" alt="" /></a></p>

<p>Hier also die einzelnen Schritte, um <em>Cyanogenmod 7</em> zu installieren:

<ul>
<li><em>heimdall</em> runterladen und entpacken: <a href="http://github.com/downloads/Benjamin-Dobell/Heimdall/heimdall-suite-1.3.0-win32.zip">http://github.com/downloads/Benjamin-Dobell/Heimdall/heimdall-suite-1.3.0-win32.zip</a></li>
<li><strong>Unter Windows:</strong> Galaxy S2 ausschalten, danach <strong>Home + Lautstärke runter</strong> gedrückt halten und gleichzeitig per USB an den Rechner anschliessen. Damit wird der Download-Modus gestartet. Jetzt die <em>zadig.exe</em> im Verzeichnis <code>drivers</code> ausführen. Aus dem Menü <em>Options</em> den Eintrag <em>List all devices</em> auswählen, anschliessend <em>Samsung USB Composite Device or Gadget Serial</em> aus der Auswahlliste wählen. Jetzt nur noch auf <em>Install driver</em> klicken.</li>
<li>Galaxy S2 ausschalten</li>
<li><em>codeworkx's Kernel</em> mit <em>ClockworkMod Recovery</em> 4.0.1.4 runterladen und in das Verzeichnis von Heimdall entpacken: <a href="http://cmw.22aaf3.com/c1/recovery/recovery-clockwork-4.0.1.4-galaxys2.tar">http://cmw.22aaf3.com/c1/recovery/recovery-clockwork-4.0.1.4-galaxys2.tar</a></li>
<li>Ein Terminalfenster öffnen und in das Verzeichnis von Heimdall wechseln (Windows 7: <strong>shift+rechtsklick</strong> auf das Verzeichnis von Heimdall, dann <em>Open command line here</em> auswählen)</li>
<li>Galaxy S2 durch gleichzeitiges gedrückhalten von <strong>Home + Lautstärke runter</strong> einschalten.</li>
<li>Folgenden Befehl eingeben: <code>heimdall flash --kernel zImage</code></li>
<li>Wenn das Geräte neustartet, ist <em>ClockworkMod Recovery</em> installiert</li>
<li>den neusten <em>nightly build</em> von cyanogenmod runterladen: <a href="http://download.cyanogenmod.com/?type=nightly&device=galaxys2http://download.cyanogenmod.com/?type=nightly&device=galaxys2">http://download.cyanogenmod.com/?type=nightly&device=galaxys2</a></li>
<li>die neuste Version der <em>Google Apps</em> runterladen: <a href="http://wiki.cyanogenmod.com/wiki/Latest_Version#Google_Apps">http://wiki.cyanogenmod.com/wiki/Latest_Version#Google_Apps</a> (für cyanogenmod7 gibt es nur noch einen Download und keine Unterscheidung zwischen Tiny/MDPI/Tegra/HDPI)</li>
<li>die ZIP von cyanogenmod7 und den Google Apps auf das Telefon kopieren. Ich habe den internen Speicher benutzt.</li>
<li>Telefon ausschalten und mit <strong>Home + Lautstärke runter + Power</strong> in <em>ClockworkMod Recovery</em> booten.</li>
<li>Mit <strong>Lautstärke hoch/runter</strong> die Option <em>Wipe data/factory reset</em> auswählen und mit <strong>Home</strong> bestätigen.</li>
<li>Anschliessend mit <strong>Lautstärke hoch/runter</strong> die Option <em>Wipe cache partition</em> auswählen und mit <strong>Home</strong> bestätigen.</li>
<li>Anschliessend mit <strong>Lautstärke hoch/runter</strong> die Option <em>Install ZIP from sdcard</em> auswählen und mit <strong>Home</strong> bestätigen. Danach zu dem kopierten ZIP von cyanogenmod7 navigieren (auch über <strong>Lautstärke+Home</strong>) und mit <strong>Home</strong> bestätigen.</li>
<li>Wenn die Installation beendet ist, mit <strong>Power</strong> ins Hauptmenü zurückwechseln und <em>Reboot system</em> auswählen und mit <strong>Home</strong> bestätigen.</li>
</ul>
</p>

<p><a href="http://wiki.cyanogenmod.com/wiki/Samsung_Galaxy_S_II:_Full_Update_Guide">Lest euch auch noch die Wiki-Seite zum Update durch!</a></p>

<p>Ich flashe mittlerweile mit dem <em>ROM Manager</em> die nächsten Updates. Das ist sehr viel einfacher und man kann alles am Telefon machen, ohne überhaupt in die Nähe eines Rechners zu müssen. Vor den Updates erstelle ich Backups des ROMs über <em>ClockworkMod Recovery</em>, ausserdem sichere ich mittlerweile meine Anwendungen und Anwendungseinstellungen mit <em>Titanium Backup</em>.</p>
