---
layout: post
title: Desktop Notifications für meinen Webchat "Chocket"
---

Ich wollte schon die ganze Zeit [Desktop Notifications][0] in [meinen
selbstprogrammierten Webchat *chocket*][3] einbauen, bin aber nie über eine
rudimentäre Anzeige der ungelesenen Nachrichten im *title*
hinausgekommen. Jetzt hab ich mich mal hingesetzt und anhand [eines
schönen Artikels bei html5rocks.com][1] die *Desktop Notifications*
eingebaut.

Im Prinzip läuft es darauf hinaus, die ankommenden Messages im Fall
einer Erwähnung des eigenen Namens (*mention*) zusätzlich in eine
*Desktop Notification* auszugeben. Dazu muss zuerst die Berechtigung des
Benutzers eingeholt werden:

    if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
        window.webkitNotifications.createNotification('icon.png', 'Notification Title', 'Notification content...');
    } else {
      window.webkitNotifications.requestPermission();
    }

Diese Funktion wird als *click*-Handler z.B. auf einem Button oder einem
Link eingebaut, weil nur der Benutzer selbst diese Aktion starten kann.

Danach kann man wie im obigen Beispiel die *Desktop Notifications*
abschicken. Im [Commit 667aaf6][2] kann man in Zeile 128 sehen, wie
anschliessend die Nachricht im Fall einer Erwähnung des eigenen Nicks
weitergeleitet wird.

<img src="/img/chocket-desktop-notification.png" alt="Screenshot einer Desktop Notification" />

Und schon bekommt man (zumindest in [Chrome][4]) die *Desktop
Notifications* angezeigt. :-)

[0]: http://www.chromium.org/developers/design-documents/desktop-notifications/api-specification
[1]: http://www.html5rocks.com/en/tutorials/notifications/quick/
[2]: https://github.com/MoriTanosuke/chocket/commit/667aaf681d90dcb7c7fd98ce3e14cf1b91e12cf0
[3]: https://github.com/MoriTanosuke/chocket
[4]: http://chrome.google.com/

