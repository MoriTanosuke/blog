---
title: 'Programm als Administrator mit Sandboxie installieren'
date: 2011-04-10 00:00:00 
tags: 
layout: post
---
<p>Wer von euch &#246;fter Programme installiert und seine Windows-Installation nicht versauen will, der ist bestimmt schon auf <a href="http://www.sandboxie.com">Sandboxie</a> gestossen. Damit werden Programme in einem <a href="http://de.wikipedia.org/wiki/Sandbox">Sandkasten</a> eingeschlossen und k&#246;nnen nur dort Dateien ver&#228;ndern. Ist man mit dem Programm bzw. mit den Funktionen unzufrieden, wird einfach der gesamte Sandkasten geleert und alle &#196;nderungen des Programms sind wieder von eurem Rechner verschwunden. Sehr praktisch.</p>

<p>Ein <strong>Problem unter Windows 7 64-bit</strong> ist aber die Installation von Software. Die Installation fragt n&#228;mlich bei Windows nach erweiterten Rechten, die aber in den Standardeinstellungen von Sandboxie immer verworfen werden. <a href="http://www.sandboxie.com/index.php?SBIE2217">Heraus kommt die Fehlermeldung SBIE2217</a> und die Installation schl&#228;gt fehl.</p>

<p>Wenn ihr also Software in der Sandbox installieren wollt, richtet ihr euch am besten eine neue Sandbox ein und <a href="http://www.sandboxie.com/index.php?RestrictionsSettings#drop">deaktiviert dort das <em>Drop Rights</em></a>. Dazu macht ihr folgendes:</p>

<p>
<ol>
	<li>Doppelklick auf das Sandboxie-Tray Icon</li>
	<li>Men&#252; <em>Sandbox </em>&#246;ffnen</li>
	<li>Als Name <em>AdminBox</em> eingeben</li>
	<li>Rechtsklick auf die neue <em>AdminBox</em>, dann <em>Sandbox Settings</em> anklicken</li>
	<li>Punkt <em>Restrictions</em> ausw&#228;hlen</li>
	<li>Punkt <em>Drop Rights</em> ausw&#228;hlen</li>
	<li>Haken bei <em>Drop rights from Administrators and Power Users groups</em> wegnehmen</li>
</ol>

<p>Die Sandbox hei&#223;t bei mir z.B. "<em>AdminBox</em>" und ist damit sehr deutlich von der Standardbox unterscheidbar.</p>

<p>Wenn das installierte Programm euch gef&#228;llt, k&#246;nnt ihr nat&#252;rlich nach ein paar Probel&#228;ufen auch die Dateien aus der Sandbox in das echte System verschieben. Das werde ich mir nach einem <em>Dell-Download-Ruhezustand-kaputt</em>-Desaster in Zukunft deutlich l&#228;nger &#252;berlegen... :-(</p>
