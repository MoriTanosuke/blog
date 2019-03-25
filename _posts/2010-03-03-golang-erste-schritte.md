---
title: 'golang: Erste Schritte'
date: 2010-03-03 00:00:00
tags: golang
layout: post
---
Ich bin in den letzten Tagen wieder öfter auf [Go][0] gestossen, Googles neue Programmiersprache. Und jetzt habe ich beschlossen, das ganze auch auszuprobieren - obwohl mir die Syntax erstmal nicht gefällt. Zu nah an C, zu viele Pointer... 😉 Aber trotzdem bin ich an neuen Inputs in Sachen Softwareentwicklung interessiert und gerade die Ausrichtung auf Mehrprozessorsysteme und message-basierte Anwendungen hat eine große Anziehungskraft. Also richte ich mir eine kleine Linux-VM ein und installiere alle notwendigen Pakete für [Go][0] (und ab jetzt werde ich mit *golang* auf die Sprache verweisen, denn 2 Buchstaben sind einfach zu wenig für eine Suchmaschine...).

# Mercurial

Als erstes wird [Mercurial][1] installiert, da ich auf die neuste Version von Golang zugreifen möchte. Unter [Debian][2] geht das mit folgendem Kommando:

    $ apt-get install mercurial

# Golang

Seltsamerweise konnte ich nicht zu 100% der [offiziellen Installationsanleitung][3] folgen. Meine Installation von Mercurial wollte das Repository partout nicht über *HTTPS* klonen. Aber *Google Code* liefert [das Golang-Repository auch über HTTP][4] und damit bin ich schliesslich zum Ziel gekommen:

    $ export GOROOT=/pfad/zu/go # Standard ist $HOME/go
    $ export GOARCH=386
    $ export GOOS=linux
    $ hg clone -r release http://go.googlecode.com/hg/ $GOROOT

**Update** Mittlerweile liegen die [Sourcen in einem Git Repository][4].

Um Golang selbst zu bauen, m&uuml;ssen noch ein paar Tools der <a href="http://gcc.gnu.org/">GCC</a> Toolchain installiert werden:

    $ apt-get install bison gcc libc6-dev ed gawk make

Da ich zum Zeitpunkt der Installation hinter einem Proxy sass, musste ich die Testcases für die Pakete *http* und *net* in der Datei `$GOROOT/src/pkg/Makefile` deaktivieren:

    NOTEST =  # nach dieser Zeile einfügen
    http
    net
    ... # hier geht das Original weiter

Anschliessend kann muss das Zielverzeichnis für die Binaries erstellt und Golang gebaut werden:

    $ mkdir $HOME/bin # Standardverzeichnis, umzusetzen über $GOBIN
    $ cd $GOROOT/src
    $ ./all.bash

Wenn alles glatt geht, dann sollte folgende Ausgabe kommen:

    --- cd ../test
    0 known bugs; 0 unexpected bugs

# Hallo Welt

Jetzt folgt das erste Programm, in schöner Tradition natürlich ein *Hello World*. Einfach den Lieblingseditor starten und folgenden Text eingeben:

````golang
package main

import fmt 'fmt'  // Package implementing formatted I/O.

func main() {
    fmt.Printf('Hello, World!')
}
````

Anschliessend wird das Programm kompiliert:

    $ ~/bin/8g helloworld.go
    $ ~/bin/8l helloworld.8
    $ ./8.out
    Hello, World!

[0]: http://golang.org/
[1]: https://www.mercurial-scm.org/
[2]: https://www.debian.org/
[3]: http://golang.org/doc/install.html
[4]: https://go.googlesource.com/go
