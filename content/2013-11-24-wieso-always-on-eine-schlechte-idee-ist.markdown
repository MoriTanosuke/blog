---
title: 'Wieso Always On eine schlechte Idee ist'
date: "2013-11-24"
tags: 
layout: post
---
Ich hatte mich ja [vor kurzem schon aufgeregt][0], dass eine reine Online-Anmeldung bzw. ein Online-Installer eine ziemlich doofe Idee ist. Und jetzt ist es schon wieder soweit: Ein *Always On*-Login schlägt seit gestern fehl und ich kann ein Spiel nicht spielen. Welches Spiel, fragt ihr? [Minecraft][1].

Der neue Launcher prüft beim Start, ob bereits ein Profil angelegt ist. Ist kein Profil angelegt, muss man seinen Mojang-Accountnamen und das Passwort eingeben. Das wird dann anscheinend online überprüft und erst dann kann Minecraft gestartet werden.

Seit gestern erhalte ich aber in den meisten Fällen die folgende Exception:

<pre>
[14:15:39 ERROR]: Couldn't log in
com.mojang.authlib.exceptions.AuthenticationUnavailableException: Cannot contact authentication server
	at com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService.makeRequest(YggdrasilAuthenticationService.java:58) ~[launcher.jar:?]
	at com.mojang.authlib.yggdrasil.YggdrasilUserAuthentication.logInWithPassword(YggdrasilUserAuthentication.java:77) ~[launcher.jar:?]
	at com.mojang.authlib.yggdrasil.YggdrasilUserAuthentication.logIn(YggdrasilUserAuthentication.java:60) ~[launcher.jar:?]
	at net.minecraft.launcher.ui.popups.login.LogInForm$4.run(LogInForm.java:173) [launcher.jar:?]
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145) [?:1.7.0_25]
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615) [?:1.7.0_25]
	at java.lang.Thread.run(Thread.java:724) [?:1.7.0_25]
Caused by: java.net.SocketTimeoutException: Read timed out
	at java.net.SocketInputStream.socketRead0(Native Method) ~[?:1.7.0_25]
	at java.net.SocketInputStream.read(SocketInputStream.java:150) ~[?:1.7.0_25]
	at java.net.SocketInputStream.read(SocketInputStream.java:121) ~[?:1.7.0_25]
	at sun.security.ssl.InputRecord.readFully(InputRecord.java:442) ~[?:1.7.0_25]
	at sun.security.ssl.InputRecord.read(InputRecord.java:480) ~[?:1.7.0_25]
	at sun.security.ssl.SSLSocketImpl.readRecord(SSLSocketImpl.java:927) ~[?:1.7.0_25]
	at sun.security.ssl.SSLSocketImpl.performInitialHandshake(SSLSocketImpl.java:1312) ~[?:1.7.0_25]
	at sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:1339) ~[?:1.7.0_25]
	at sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:1323) ~[?:1.7.0_25]
	at sun.net.www.protocol.https.HttpsClient.afterConnect(HttpsClient.java:515) ~[?:1.7.0_25]
	at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.connect(AbstractDelegateHttpsURLConnection.java:185) ~[?:1.7.0_25]
	at sun.net.www.protocol.http.HttpURLConnection.getOutputStream(HttpURLConnection.java:1090) ~[?:1.7.0_25]
	at sun.net.www.protocol.https.HttpsURLConnectionImpl.getOutputStream(HttpsURLConnectionImpl.java:250) ~[?:1.7.0_25]
	at com.mojang.authlib.HttpAuthenticationService.performPostRequest(HttpAuthenticationService.java:73) ~[launcher.jar:?]
	at com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService.makeRequest(YggdrasilAuthenticationService.java:41) ~[launcher.jar:?]
	... 6 more
</pre>

Hier ist nochmal die Fehlermeldung: **Cannot contact authentication server**.

Minecraft möchte also, bevor ich überhaupt nur dran denke, das Spiel zu starten, eine Überprüfung meines Accounts online vornehmen. Ohne diese Überprüfung kann ich nicht mal eine existierende Singleplayer-Welt starten - d.h. das Spiel ist nicht spielbar.

Wenn mir jetzt bitte jemand erklären kann, wieso ich zum Spielen eines Spiels, das vollständig auf meiner Festplatte installiert ist und zu dem ich sogar schon Savegames habe, eine Onlineverbindung brauche?

[0]: /the-case-for-offline-installers-minecraft-and-amazon-s3/
[1]: http://minecraft.net/

