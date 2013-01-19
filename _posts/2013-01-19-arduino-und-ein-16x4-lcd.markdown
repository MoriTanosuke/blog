---
layout: post
title: "Arduino und ein 16x4 LCD"
published: false
category: hardware
tags: arduino
---
Heute habe ich im Keller meine Kartons durchgewühlt und ein altes [16x4
LCD von Displaytech][0] ausgegraben. Ich war mir nicht sicher, ob es
überhaupt noch funktioniert, aber wofür hab ich im [Arduino Starter
Kit][2] ein [Breadboard][3]? Also, fix eine Steckerleiste ans Display
gelötet und an den Arduino angeschlossen. ;-)

Arduino liefert bereits eine [LiquidCristal Library][1] und damit ist
das Display ruckzuck im Einsatz. Als Test habe ich ein einfaches [Hello
World][4] aus den [Arduino Beispielen][5] genommen:

<pre>
/*
  LiquidCrystal Library - Hello World
 
 Demonstrates the use a 16x2 LCD display.  The LiquidCrystal
 library works with all LCD displays that are compatible with the
 Hitachi HD44780 driver. There are many of them out there, and you
 can usually tell them by the 16-pin interface.
 
 This sketch prints "Hello World!" to the LCD
 and shows the time.
 
  The circuit:
 * LCD RS pin to digital pin 12
 * LCD Enable pin to digital pin 11
 * LCD D4 pin to digital pin 5
 * LCD D5 pin to digital pin 4
 * LCD D6 pin to digital pin 3
 * LCD D7 pin to digital pin 2
 * LCD R/W pin to ground
 * 10K resistor:
 * ends to +5V and ground
 * wiper to LCD VO pin (pin 3)
 
 Library originally added 18 Apr 2008
 by David A. Mellis
 library modified 5 Jul 2009
 by Limor Fried (http://www.ladyada.net)
 example added 9 Jul 2009
 by Tom Igoe
 modified 22 Nov 2010
 by Tom Igoe
 
 This example code is in the public domain.

 http://www.arduino.cc/en/Tutorial/LiquidCrystal
 */

// include the library code:
#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("hello, world!");
}

void loop() {
  // set the cursor to column 0, line 1
  // (note: line 1 is the second row, since counting begins with 0):
  lcd.setCursor(0, 1);
  // print the number of seconds since reset:
  lcd.print(millis()/1000);
}
</pre>

Hier ist das Ergebnis:

<a href="http://www.flickr.com/photos/cringe/8394255663/" title="Arduino + 16x4 LCD by cringe, on Flickr"><img src="http://farm9.staticflickr.com/8516/8394255663_38c0f0dd47_n.jpg" width="240" height="320" alt="Arduino + 16x4 LCD"></a>

[0]: http://www.displaytech-us.com/16x4-character-lcd-displays
[1]: http://arduino.cc/en/Reference/LiquidCrystal
[2]: /2013/01/16/erste-schritte-mit-dem-arduino/
[3]: https://de.wikipedia.org/wiki/Steckplatine
[4]: https://de.wikipedia.org/wiki/Hallo-Welt-Programm
[5]: http://arduino.cc/en/Tutorial/HomePage

