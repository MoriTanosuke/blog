---
title: 'Chocolatey für einfache Installationen unter Windows'
date: 2014-03-14 00:00:00 
tags: windows tools
layout: post
---
Vor ein paar Wochen bin ich über [Chocolatey][0] gestolpert, in einem [Blogpost von Scott Hanselman mit dem Titel _"Is the Windows user ready for apt-get?"_][1]. Als Debian User bin ich den Komfort von [apt-get][2] natürlich gewohnt und wenn es eine ähnliche Software auch für Windows gibt, will ich das natürlich ausprobieren.

Also hab ich den folgenden Code-Schnippsel in eine _Eingabeaufforderung_ kopiert und damit [Chocolatey][0] installiert:

    @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin

Anschliessend kann man auf der gleichen Eingabeaufforderung direkt das erste Tool installieren:

    cinst f.lux

Damit wird das kleine Tool [f.lux][2] installiert, das die Bildschirmhelligkeit morgens und abends runter regelt, damit man nicht so fies geblendet wird. :smile:

Und so einfach ist eigentlich jede Installation, egal ob man einen SumatraPDF oder VirtualBox installieren möchte. Meistens klappt das so intuitiv, dass man blind `cinst PROGRAMM` eintippen kann. Ansonsten hilft es, eine kleine Suche zu starten:

    choco list 7zip

Damit wird die Liste der verfügbaren Anwendungen durchsucht und die Treffer ausgegeben. Jetzt sucht man sich die richtige Anwendung raus und installiert sie

    choco install 7zip.commandline    

Damit habe ich mir die Kommandozeilen-Variante von 7zip installiert. Ansonsten kann man auch `cinst 7zip` oder `cinst 7zip.install` verwenden.

Ich habe mir in meinem [Wiki eine Liste meiner Tools][3] zusammengestellt, so dass ich nach einer Neuinstallation sofort alles notwendige zusammen habe.

[0]: https://chocolatey.org/
[1]: http://www.hanselman.com/blog/IsTheWindowsUserReadyForAptget.aspx
[2]: http://justgetflux.com/
[3]: https://kopis.de/dokuwiki/doku.php/software:start#automatische_installation

