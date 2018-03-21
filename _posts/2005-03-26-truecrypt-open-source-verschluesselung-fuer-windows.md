---
layout: post
title: "TrueCrypt - Open Source-Verschlüsselung für Windows"
---
In der letzten ct (Ausgabe 07/05) las ich von einem Tool, dass transparente Verschlüsselung für Windows XP/2000 zur Verfügung stellen soll. [TrueCrypt][0] bietet kostenlose Open-Source On-The-Fly Disk Encryption für Windows XP/2000/2003. Gerade erstellt das Programm ein 2GB großes Image zur Verschlüsselung meiner sensiblen Daten. Ich hoffe, es bindet sich wirklich vollkommen unsichtbar in das Dateisystem ein.

Die Installation gestaltet sich völlig problemlos, nach der Auswahl des Zielverzeichnisses und der optionalen Erstellung von Icons und Dateizuordnungen, ist das Programm startbereit. Anschliessend reicht ein Klick auf *Create Volume* um den *Volume Creation Wizard* zu starten.

Der Wizard fragt nach der Verschlüsselungsart; hier kann zwischen mehreren Möglichkeiten gewählt werden, unter anderem AES, DES und Blowfish. Ein integrierter Benchmark aus dem RAM ermittelt die Schreib- bzw Leseraten und hilft so bei der Entscheidung. Ich habe mich für den bekannten Algorithmus [AES][1] entschieden. Dieser Algorithmus ist zum aktuellen Zeitpunkt nicht in realistischer Zeit zu knacken.

Die Formatierung des erstellen Image dauert naturgemäß etwas länger. Es wird in der vollen Größe erstellt und mit Zufallswerten gefüllt. Auf meinem System lief der Vorgang mit ca. 14MB/s und war trotz anderer Aufgaben innerhalb von 2 Minuten erfolgreich. Ein erstes Mounten gelang ohne Probleme. Wer das Image beim Start automatisch einbinden möchte, der sollte sich eine Batch-Datei für den Ordner Autostart mit folgendem Inhalt anlegen:

````
C:\Programme\TrueCrypt\TrueCrypt.exe /volume imagedatei.tc /auto /quiet
````

Damit wird das Image automatisch beim Anmelden eingebunden. Selbstverständlich muss das Passwort eingegeben werden, allerdings geschieht das durch den Parameter `/quiet` nicht im Hauptfenster von TrueCrypt, sondern in einer Minimalvariante des Programms.

Nachdem nun alle wichtigen Daten im verschlüsselten Image stehen, sollte man niemals vergessen, den Rechner unbeaufsichtigt und zugänglich zu lassen: Solange das Image gemountet ist, steht es unverschlüsselt allen Benutzern des Rechners zur Verfügung! Also nie per Benutzerumschaltung den Benutzer wechseln, ohne vorher das Image entfernt zu haben.

[0]: http://truecrypt.sourceforge.net/
[1]: http://de.wikipedia.org/wiki/Advanced_Encryption_Standard
