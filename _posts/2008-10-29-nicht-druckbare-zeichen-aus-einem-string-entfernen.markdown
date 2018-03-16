---
title: 'Nicht-druckbare Zeichen aus einem String entfernen'
date: 2008-10-29 00:00:00 
layout: post
---
<p>Ja, ich weiß. Ich poste zu viel *Musik*. Aber das muss sein!  Jetzt kommt aber noch etwas anderes, nämlich das Entfernen von nicht-druckbaren Zeichen aus einem String - in [Java][0]:

````java
String s = new String(new char[] {0x05, 0x03, 'H', 'E', 'L', 0x10, 'L', 'O'});
String clean = s.replaceAll("[^\p{Print}]", "");
System.out.println("'" + s + "'");
System.out.println("'" + clean + "'");
````

Diesmal ist es ein kleines Beispiel. [String#replaceAll][1] verlangt nach einer [Regex][2] und `\p{Print}` trifft alle druckbaren Zeichen. Dementsprechend trifft `[^\p{Print}]` alle nicht-druckbaren Zeichen. Und schon ist man frei von überflüssigem Ballast.  Und wer jetzt bei Regex nur komischen Zeichensalat sieht, der lernt gefälligst [die Grundlagen][3] und besorgt sich einen [anständigen Editor][4], der damit um kann.

[0]: http://www.oracle.com/technetwork/java/index.html
[1]: https://docs.oracle.com/javase/9/docs/api/java/lang/String.html#replaceAll-java.lang.String-java.lang.String-
[2]: https://docs.oracle.com/javase/tutorial/essential/regex/
[3]: https://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck
[4]: https://www.vim.org/
