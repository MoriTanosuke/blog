---
title: 'USB unter Java'
date: 2011-08-01 00:00:00
tags: linux java
layout: post
---
<p>Am Wochenende habe ich mich kurz zum aktuellen Stand des USB-Zugriffs unter Java umgesehen. Und ich muss sagen: Es sieht gar nicht gut aus.</p>
<p><a href="https://launchpad.net/libusb4j">libusb4j</a> ist bereits <em>on hold</em>, der Fork <a href="http://kenai.com/projects/libusb4j">libusb4j auf Project Kenai</a> sieht auch tot aus. Ausserdem kann man nach dem Auschecken so gut wie gar nichts damit anfangen... Das letzte Release von <a href="http://javax-usb.org/">javax-usb</a> ist auch schon von 2008 - kein gutes Zeichen, schliesslich haben wir mittlerweile USB3.0 und ich vermute, da gibt es auch noch ein paar &Auml;nderungen, die man in so eine Bibliothek einfliessen lassen kann.</p>
<p>Ich habe mich noch ein wenig auf <a href="https://github.com/search?type=Everything&language=Java&q=usb&repo=&langOverride=&x=20&y=14&start_value=1">Github</a> umgesehen und auch da findet man diverse USB-Schnittstellen, die aber allesamt eher nach interner Entwicklung aussehen. Jedenfalls hat mich bei keiner ein <em>Juhu-das-will-ein-ausprobieren-Gef&uuml;hl</em> &uuml;berkommen.</p>
<p>Da ich aber unbedingt auf ein USB-Ger&auml;t zugreifen m&ouml;chte, f&uuml;r das es keine geeignete Software f&uuml;r mich - aber eine Umsetzung in Python gibt, muss ich wohl oder &uuml;bel meine eigene Bibliothek anfangen. Basierend auf <a href="http://www.jcp.org/en/jsr/detail?id=80">JSR 80</a> und <a href="http://jna.java.net/">JNA</a>, hoffentlich anst&auml;ndig gekapselt f&uuml;r Linux und sp&auml;ter f&uuml;r Windows.</p>
<p>Aber bis ich mich entschlossen habe, werde ich noch weiter suchen und vielleicht mal auf <a href="http://stackoverflow.com">StackOverflow</a> nachfragen.</p>
<p><strong>Update:</strong> Es scheint, als g&auml;be es noch andere versprengte Entwickler: <a href="http://sourceforge.net/mailarchive/forum.php?thread_name=4D51114A.5000401%40ailis.de&forum_name=javax-usb-devel">Auf der Mailing Liste von javax-usb</a> kann man von <a href="https://github.com/trygvis/javax-usb-libusb1">diesem Projekt</a> und <a href="http://www.ailis.de/~k/projects/usb4java/">diesem</a> lesen.</p>
