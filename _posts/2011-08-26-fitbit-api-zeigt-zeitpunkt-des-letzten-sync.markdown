---
layout: post
title: Fitbit API zeigt Zeitpunkt des letzten Sync
---
Heute gab es [eine interessante Ankündigung][2] für die [Fitbit API][1]:

> We've included the tracker last sync time to the API endpoints with the latest platform development. Have a look at the documentation here: https://wiki.fitbit.com/display/API/API-Get-Devices

Die entsprechende Antwort in der API sieht jetzt so aus:

    {
        "devices":
        [
            "device":
            {     
                "battery":<value>,
                "id":<value>,
                "lastSyncTime":<value>
            }
            <..>
        ]
    }

Das find ich ja sehr gut. Ich werd das demnächst mal auf [kopis.de][3] einbauen.

[1]: http://dev.fitbit.com
[2]: https://groups.google.com/d/msg/fitbit-api/bdtT--KXHt0/m2zKt6C-qGYJ
[3]: http://www.kopis.de
