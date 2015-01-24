---
title: 'Neues Projekt: Arduino'
date: 2013-01-14 00:00:00 
tags: arduino hardware
layout: post
---
Ich hab ein wenig gestöbert, was man im Moment alles mit den
[Arduinos][0] machen kann. Nach einer Weile hab ich mehrere Projekte
gefunden, die sich mit dem Aufbau eines Herzfrequenzmonitor
beschäftigen. Das interessiert mich natürlich und ich hab auch schon ein
paar kommerzielle Projekte im Netz beobachtet. Ich wollte schon immer
einen permanenten Monitor tragen, um meine Herzfrequenz während des
Trainings oder über einen ganzen Tag zu beobachten und mit meinen Daten
aus [Fitbit][1] zu vergleichen.

Das erste Projekt ist [PulseSensor][2]. Das Prinzip ist relativ einfach:
Ein Licht wird durch den Finger geschickt und wieder aufgezeichnet. Eine
Software wertet dann die Änderungen aus und erkennt daraus die
Herzfrequenz. Eine schöne [Beschreibung des Prinzips][4] findet man im
Blog des Projekts. Ich nutze auf meinem Android schon die App [runtastic 
heart rate pro][3], die nach dem gleichen Prinzip arbeitet - aber man
kann sie nicht während des Sports nutzen.

Jetzt habe ich mir also kurz entschlossen einen [Arduino Starter Kit bei
fritzing][5] bestellt und werde meine eingerosteten Hardware-Kenntnisse
damit auffrischen. Wenn ich dann mit ein paar simplen Projekten zur
Eingewöhnung fertig bin, werde ich mir den [PulseSensor][2] beschaffen
und damit einen batteriebetriebenen Arduino zur kontinuierlichen
Aufzeichnung meiner Herzfrequenz basteln. Das ganze soll relativ einfach
werden: Pulse Sensor ans Ohr klippen, Arduino plus Batterie an die Hüfte
klipsen und einschalten. Der Arduino soll dann die Herzfrequenz
aufzeichnen und abspeichern (erstmal ins Flash, später vielleicht in den
[OpenLog][6]?) und ich will die Daten später auslesen können.

Naja, das ist Zukunftsmusik.

Wenn das gut läuft, versuche ich mich vielleicht noch an der nächsten
Stufe: Anschluss eines Polar Brustgurts mittels [SparkFun Heart Rate
Monitor interface][7]. Das dürfte etwas einfacher für sportliche
Aktivitäten werden als ein Ohrclip... ;-)

[0]: http://arduino.cc/
[1]: http://www.fitbit.com/
[2]: http://pulsesensor.myshopify.com/
[3]: https://play.google.com/store/apps/details?id=com.runtastic.android.heartrate.pro
[4]: http://pulsesensor.myshopify.com/blogs/news/6326816-anatomy-of-the-diy-heart-rate-monitor
[5]: http://shop.fritzing.org/products/fritzing-starter-kit-with-arduino-uno
[6]: https://www.sparkfun.com/products/9530
[7]: https://www.sparkfun.com/products/8661
