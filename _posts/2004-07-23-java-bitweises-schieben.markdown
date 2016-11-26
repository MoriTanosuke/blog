---
layout: post
title: "Java: Bitweises Schieben"
---
Durch das Buch Complete Java 2 Certification Study Guide (siehe hier) aufgerüttelt, habe ich beschlossen, eine kleine Artikelserie über die Eigenheiten der Programmiersprache zu schreiben. Dies ist also der erste Artikel, der die manchmal eigenwillige Handhabung von Schiebe-Operationen verdeutlichen soll.

Die Shift-Operatoren >>, << sowie >>> sollten in der Programmiersprache Java nicht unbeachtet und vor allem unbedarft eingesetzt werden. Die Operatoren `>>` und `<<` sind aus der Sprache C/C++ direkt übernommen worden, der dritte Operator *unsigned right shift* `>>>` ist neu dazugekommen.

Bitweises Schieben ist vor allem in Echtzeit-Anwendungen und Steuerungssystemen weit verbreitet, meist bei Operationen auf I/O-Ports. Es kann auch verwendet werden, um schnelle Multiplikationen oder Divisionen mit dem Faktor 2 durchzuführen. In Java kann das bitweise Schieben durch die plattformunabhängige Representation der Zahlenwerte mit ruhigem Gewissen durchgeführt werden - wenn man sich der möglichen Fehlerquellen bewußt ist.

Grundlagen des Schiebens
------------------------

Schieben ist eine sehr einfache Operation. Es wird das Bitmuster (die binäre Darstellung) einer Zahl genommen und nach rechts oder links verschoben. Der *unsigned shift-Operator* `>>>` führt aber oft zu Verwirrung.

Die Operatoren können nur auf Argumente aus integralen Typen angewendet werden, genau genommen sollten sie nur auf Argument der Typen `int` oder `long` angewendet werden. Diese Einschränkung geht auf die arithmetische Umwandlung von Operanden in Ausdrücken zurück (s.u.).

Als erster Hinweis soll folgendes Beispiel dienen:

Die Zahl 192 wird nach rechts geschoben. Dadurch rutschen ein oder mehrere Bits von links in die Darstellung hinein.


               00000000 00000000 00000000 11000000

               ?0000000 00000000 00000000 01100000

Was passiert mit den Bits, die nach rechts raus geschoben wurden? Welchen Wert nimmt das oberste Bit nun an?

Die erste Frage ist schnell beantwortet: Sie werden verworfen.

Die zweite Frage bringt eine Unterscheidung der Zahlen nach Vorzeichen mit sich. Bei positiven Zahlen oder dem Schieben ohne Vorzeichen mit >>> wandern 0s (Nullen) in die Darstellung, bei negativen Zahl 1s (durch die 2-Komplement-Darstellung der binären Zahlen ist das oberste Bit bei negativen Zahl eine 1). D.h. es wird der Wert des obersten Bits (des most significant bit (MSB)) in die Darstellung geschoben.
Einfache Multiplikationen mit dem Faktor 2 können also durch ein einfaches Links-Schieben der Zahl erreicht werden. Allerding nur bis die ersten Bits dieser Zahl am linken Ende der Darstellung verworfen werden. Genau genommen sogar nur bis 1 Bit vor diese Position, da ansonsten das Vorzeichen überschrieben wird.

Wenn man also durch das Links-Schieben eine Zahl verdoppeln kann, sollte man annehmen, dass ein Rechts-Schieben die Zahl halbiert. Wenn eine 0 als MSB steht, ist diese Annahme auch richtig. Wird allerdings eine negative Zahl mit einer 1 als MSB nach links geschoben, stimmt diese Annahme nicht mehr. Wird eine negative Zahl nach rechts geschoben, so werden (nach ihrem MSB) weitere 1s in die Darstellung geschoben. So ist das arithmetische Rechts-Schieben definiert.

Kürzung des rechten Operanden
-----------------------------

Das rechte Argument der Shift-Operatoren wird als Anzahl von Bits verstanden, um die der Wert verschoben werden soll. Um das Schieben ordentlich auszuführen, sollte dieser Wert kleiner sein als die Länge des zu schiebenden Wertes, d.h. beim Typ `int` sollte der rechte Wert kleiner als 32, bei `long` kleiner als 64 sein.

Größere Werte werden aber nicht abgelehnt, sie werden gekürzt. Der neue Wert wird durch eine Modulo-Operation durch die Länge des Bitmusters berechnet. Wird also ein `int` um 33 Bits verschoben (das Ergebnis wäre 0), berechnet sich die tatsächlich Anzahl von Stellen nach 33 % 32. Es wird also tatsächlich nur um 1 Bit verschoben und nicht um 33 Bits.

Arithmetische Umwandlung von Operanden
--------------------------------------

Bevor überhaupt geschoben wird, werden die Operanden umgewandelt, so dass sie zumindest vom Typ `int` sind. Dadurch ergeben sich Konsequenzen für den unsigned right shift-Operator für Werte kleiner als `int`.

Das folgende Beispiel zeigt die Berechnung für die Operation

    -64 >>> 4
    11000000 (Original)
    11111111 11111111 11111111 11000000 (umgewandelt)
    00001111 11111111 11111111 11111100 (geschoben)
    11111100 (als byte)
    00001100 (erwartet)
