---
layout: post
title: "Java: Access Modifiers"
---
In diesem Artikel möchte ich mich näher mit den Access Modifiers der Programmiersprache Java befassen. Bei meinen Vorbereitungen sind mir einige Fragen in die Finger gefallen, die für mich sehr schwierig zu beantworten waren. Ich möchte also versuchen, die Modifier einfach und leicht merkbar zu erklären.

Es gibt 4 verschiedene Modifiers, die den Zugriff auf Member-Variablen und -Methoden regeln:

private
default
protected
public

Die nächsten Abschnitte werden diese 4 verschiedenen Typen genauer betrachten und die Zugriffsrechte erklären.

private
-------

Der nächste, etwas restriktivere Modifier ist `private`. Klassen des Top-Levels (also keine Inneren Klassen) können nicht als `private` deklariert werden. Eine Variable/Methode, die als `private` deklariert wurde, darf nur von einer Instanz der deklarierenden Klasse verwendet werden.

default
-------

`default` ist kein echter Zugriffsmodifikator, es ist der Name von Klassen/Methoden/Variablen, für die kein Access Modifier angegeben ist. Die `default`-Eigenschaften einer Klasse sind für alle Klassen im gleichen Package verfügbar.

protected
---------

Der Name `protected` bedeutet nicht, dass der Zugriff auf diese Eigenschaften sehr stark eingeschränkt ist. Die ist wohl das häufigste Missverständnis bei der Verwendung von `protected`. Eigenschaften, die als `protected` deklariert sind, sind sogar noch zugänglicher als `default`-Eigenschaften. Nur Variablen und Methoden können als `protected` deklariert werden. Eine Eigenschaft, die als `protected` deklariert wurde, ist für alle Klassen im gleichen Package zugänglich - genau wie `default`-Eigenschaften. Eine `protected`-Eigenschaft ist aber zusätzlich für alle Subklassen verfügbar, sogar wenn die Subklassen in einem anderen Package liegen.

public
------

Der offenste Access Modifier ist `public`. Eine Klasse/Variable/Methode, die `public` deklariert ist, darf in jedem Java-Programm ohne Einschränkungen benutzt werden. Ein Applet ist als `public` deklariert und darf somit von einem Browser instanziiert werden. Eine Applikation deklariert ihre `main`-Methode als `public` , damit diese von dem Java Runtime Environment (kurz: JRE) aufgerufen werden kann.
