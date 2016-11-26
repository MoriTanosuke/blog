---
layout: post
title: "Java: Bitweises Schieben"
---
Durch das Buch Complete Java 2 Certification Study Guide (siehe hier) aufger�ttelt, habe ich beschlossen, eine kleine Artikelserie �ber die Eigenheiten der Programmiersprache zu schreiben. Dies ist also der erste Artikel, der die manchmal eigenwillige Handhabung von Schiebe-Operationen verdeutlichen soll.

Die Shift-Operatoren >>, << sowie >>> sollten in der Programmiersprache Java nicht unbeachtet und vor allem unbedarft eingesetzt werden. Die Operatoren `>>` und `<<` sind aus der Sprache C/C++ direkt �bernommen worden, der dritte Operator *unsigned right shift* `>>>` ist neu dazugekommen.

Bitweises Schieben ist vor allem in Echtzeit-Anwendungen und Steuerungssystemen weit verbreitet, meist bei Operationen auf I/O-Ports. Es kann auch verwendet werden, um schnelle Multiplikationen oder Divisionen mit dem Faktor 2 durchzuf�hren. In Java kann das bitweise Schieben durch die plattformunabh�ngige Representation der Zahlenwerte mit ruhigem Gewissen durchgef�hrt werden - wenn man sich der m�glichen Fehlerquellen bewu�t ist.

Grundlagen des Schiebens
------------------------

Schieben ist eine sehr einfache Operation. Es wird das Bitmuster (die bin�re Darstellung) einer Zahl genommen und nach rechts oder links verschoben. Der *unsigned shift-Operator* `>>>` f�hrt aber oft zu Verwirrung.

Die Operatoren k�nnen nur auf Argumente aus integralen Typen angewendet werden, genau genommen sollten sie nur auf Argument der Typen `int` oder `long` angewendet werden. Diese Einschr�nkung geht auf die arithmetische Umwandlung von Operanden in Ausdr�cken zur�ck (s.u.).

Als erster Hinweis soll folgendes Beispiel dienen:

Die Zahl 192 wird nach rechts geschoben. Dadurch rutschen ein oder mehrere Bits von links in die Darstellung hinein.


               00000000 00000000 00000000 11000000

               ?0000000 00000000 00000000 01100000

Was passiert mit den Bits, die nach rechts raus geschoben wurden? Welchen Wert nimmt das oberste Bit nun an?

Die erste Frage ist schnell beantwortet: Sie werden verworfen.

Die zweite Frage bringt eine Unterscheidung der Zahlen nach Vorzeichen mit sich. Bei positiven Zahlen oder dem Schieben ohne Vorzeichen mit >>> wandern 0s (Nullen) in die Darstellung, bei negativen Zahl 1s (durch die 2-Komplement-Darstellung der bin�ren Zahlen ist das oberste Bit bei negativen Zahl eine 1). D.h. es wird der Wert des obersten Bits (des most significant bit (MSB)) in die Darstellung geschoben.
Einfache Multiplikationen mit dem Faktor 2 k�nnen also durch ein einfaches Links-Schieben der Zahl erreicht werden. Allerding nur bis die ersten Bits dieser Zahl am linken Ende der Darstellung verworfen werden. Genau genommen sogar nur bis 1 Bit vor diese Position, da ansonsten das Vorzeichen �berschrieben wird.

Wenn man also durch das Links-Schieben eine Zahl verdoppeln kann, sollte man annehmen, dass ein Rechts-Schieben die Zahl halbiert. Wenn eine 0 als MSB steht, ist diese Annahme auch richtig. Wird allerdings eine negative Zahl mit einer 1 als MSB nach links geschoben, stimmt diese Annahme nicht mehr. Wird eine negative Zahl nach rechts geschoben, so werden (nach ihrem MSB) weitere 1s in die Darstellung geschoben. So ist das arithmetische Rechts-Schieben definiert.

K�rzung des rechten Operanden
-----------------------------

Das rechte Argument der Shift-Operatoren wird als Anzahl von Bits verstanden, um die der Wert verschoben werden soll. Um das Schieben ordentlich auszuf�hren, sollte dieser Wert kleiner sein als die L�nge des zu schiebenden Wertes, d.h. beim Typ `int` sollte der rechte Wert kleiner als 32, bei `long` kleiner als 64 sein.

Gr��ere Werte werden aber nicht abgelehnt, sie werden gek�rzt. Der neue Wert wird durch eine Modulo-Operation durch die L�nge des Bitmusters berechnet. Wird also ein `int` um 33 Bits verschoben (das Ergebnis w�re 0), berechnet sich die tats�chlich Anzahl von Stellen nach 33 % 32. Es wird also tats�chlich nur um 1 Bit verschoben und nicht um 33 Bits.

Arithmetische Umwandlung von Operanden
--------------------------------------

Bevor �berhaupt geschoben wird, werden die Operanden umgewandelt, so dass sie zumindest vom Typ `int` sind. Dadurch ergeben sich Konsequenzen f�r den unsigned right shift-Operator f�r Werte kleiner als `int`.

Das folgende Beispiel zeigt die Berechnung f�r die Operation

    -64 >>> 4
    11000000 (Original)
    11111111 11111111 11111111 11000000 (umgewandelt)
    00001111 11111111 11111111 11111100 (geschoben)
    11111100 (als byte)
    00001100 (erwartet)