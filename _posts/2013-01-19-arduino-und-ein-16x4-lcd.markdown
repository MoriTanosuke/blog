---
title: 'Arduino und ein 16x4 LCD'
date: 2013-01-19 00:00:00 
tags: arduino,hardware
layout: post
---
Heute habe ich im Keller meine Kartons durchgewühlt und ein altes [16x4
LCD von Displaytech][0] ausgegraben. Ich war mir nicht sicher, ob es
überhaupt noch funktioniert, aber wofür hab ich im [Arduino Starter
Kit][2] ein [Breadboard][3]? Also, fix eine Steckerleiste ans Display
gelötet und an den Arduino angeschlossen. ;-)

Arduino liefert bereits eine [LiquidCristal Library][1] und damit ist
das Display ruckzuck im Einsatz. Als Test habe ich ein einfaches [Hello
World][4] aus den [Arduino Beispielen][5] genommen:

<pre class="brush: cpp">
...
// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("hello, world!");
}
...
</pre>

Hier ist das Ergebnis:

<a href="http://www.flickr.com/photos/cringe/8394255663/" title="Arduino + 16x4 LCD by cringe, on Flickr"><img src="http://farm9.staticflickr.com/8516/8394255663_38c0f0dd47_n.jpg" width="240" height="320" alt="Arduino + 16x4 LCD"></a>

[0]: http://www.displaytech-us.com/16x4-character-lcd-displays
[1]: http://arduino.cc/en/Reference/LiquidCrystal
[2]: /2013/01/16/erste-schritte-mit-dem-arduino/
[3]: https://de.wikipedia.org/wiki/Steckplatine
[4]: https://de.wikipedia.org/wiki/Hallo-Welt-Programm
[5]: http://arduino.cc/en/Tutorial/HomePage
