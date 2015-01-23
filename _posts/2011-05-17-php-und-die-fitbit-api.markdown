---
title: 'PHP und die Fitbit API'
date: 2011-05-17 00:00:00 
tags: 
layout: post
---
In den letzten Tagen habe ich meine Homepage unter <a href="http://www.kopis.de">www.kopis.de</a> etwas verändert. 
Ja gut, ich habe überhaupt erstmal was draufgeschrieben. Im Moment wird dort also eine Art Social Hub angezeigt, 
in dem ich mehrere Quellen zusammenführe. Einige Daten kommen dabei aus der 
<a href="http://dev.fitbit.com">Fitbit API</a>, die ich diesmal mit <a href="http://de.php.net">PHP</a> 
angesprochen habe. Das liegt hauptsächlich an den Einschränkungen, die mein Webspace mitbringt. Wie auch 
immer, die Abfragen habe ich also per PHP und <a href="http://code.google.com/p/oauth-php/">oauth-php</a> erledigt.

Ein paar Probleme hatte ich dabei schon, was hauptsächlich an der schlechten Dokumentation von *oauth-php* 
liegt. Für alle, die also einen <a href="http://oauth.org">OAuth</a>-Zugriff auf eine API erledigen wollen, 
folgt hier ein kleines Beispiel in PHP. ;-)

Bevor man überhaupt irgendwas sinnvolles mit *oauth-php* erledigen kann, muss man eine Datenbank für die 
Benutzerinformationen anlegen. Man kann die Daten auch in der Session ablegen, aber wer will das schon. 
Also legt man eine Datenbank an und führt anschliessend das SQL-Skript *library/store/mysql/mysql.sql* aus. 
Damit werden Tabellen angelegt, in die *oauth-php* Server-Einstellungen und später Tokens für die Benutzer ablegt.

Dann erfolgt die Authentifizierung des Benutzers. Das ist bei OAuth ein zweistufiger Prozess: erst wird mit 
einem (vorher zu registrierenden) Benutzer und Password ein Request Token erzeugt, danach ein Access Token 
abgefragt und mit diesem Access Token werden alle weiteren Anfragen *unterschrieben*.

Die Erzeugung des Request Tokens seht ihr hier:

<script src="https://gist.github.com/2841424.js?file=index.php"></script>

Hier wird ein Request Token erzeugt und anschliessend wird man zu einer URL bei Fitbit weitergeleitet, auf 
der man sich in seinen Fitbit Account einloggen muss und der Anwendung (also von meiner Homepage mit 
*oauth-php*) den Zugriff auf den Account erlauben muss. Der Request gibt gleichzeitig eine Callback URL an 
Fitbit, die nach erfolgter Authentifizierung wieder bei mir aufgerufen wird. In der PHP-Datei, die hinter 
der Callback URL liegt, wird anschliessend das Request Token in ein Access Token getauscht:

<script src="https://gist.github.com/2841424.js?file=fitbit_cb.php"></script>

Wer aufmerksam gelesen hat, der wird die Variable `$user` bemerkt haben, die hart auf *1* gesetzt ist. 
Das liegt daran, dass ich wirklich nur einen Benutzer mit der API verwende, nämlich mich selbst. ;-) Für 
alle ernsthaften Anwendungen wird man diesen Wert auch in der Datenbank ablegen, um verschiedene Request 
und Access Tokens zu unterstützen.

Nach dem einmal erfolgten Tausch in ein Access Token, hab ich den Aufruf von `OAuthRequester::requestAccessToken` 
auskommentiert und die Variablen nicht mehr aus den `$_REQUEST` gelesen, sondern nur noch aus der Datenbank. 
Bis das Access Token ungültig wird, kann ich jetzt direkt *fitbit_cb.php* aufrufen, statt vorher manuell die 
Authentifizierung zu durchlaufen. OAuth-Tokens sind oft über einen längeren Zeitraum gültig. Ich weiß gar 
nicht, ob bei Fitbit das Token überhaupt abläuft. 
<a href="http://wiki.fitbit.com/display/API/OAuth-Authentication-API">Auch die Doku schweigt sich darüber aus</a>.

Mit diesem kleinen Setup hab ich jetzt Zugriff auf meine Daten bei Fitbit und kann damit allerlei Unsinn 
anstellen. Wer das Ergebnis bewundern möchte, kann das unter <a href="http://www.kopis.de">www.kopis.de</a> tun.
