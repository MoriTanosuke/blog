---
layout: post
title: "Abgelaufene Zertifikate in Firefox für Android"
categories: software
tags: android
---
*Update* Mozilla hat [ein Update zu der Situation in ihrem Blog gepostet][3]. Der offiziell vorgeschlagene Fix für das abgelaufene Zertifikat für Desktop-Firefox ist jetzt das Aktivieren von *Firefox Studies*. Am einfachsten geht das über die Eingabe von `about:studies` in der Adresszeile und von dort kann man dann zu den Einstellungen wechseln, um die Studies überhaupt einzuschalten.

Mozilla ist ein Schnitzer unterlaufen: [Zertifikate für die Signierung von AddOns sind abgelaufen][0] und auf meinem Android-Smartphone waren heute morgen alle AddOns deaktiviert. Ohne [Ublock Origin][1] und [uMatrix][2] gehe ich aber nicht mehr ins Netz, deshalb habe ich **temporär** die folgende Einstellung vorgenommen:

  * `about:config` in die Adresszeile eingeben
  * nach `xpinstall.signatures.required` suchen
  * Wert auf `false` setzen

Damit wird die Prüfung der Signatur **komplett** deaktiviert! Das ganze muss natürlich wieder rückgängig gemacht werden, wenn Mozilla das abgelaufene Zertifikat bei sich ersetzt.

[0]: https://bugzilla.mozilla.org/show_bug.cgi?id=1548973
[1]: https://github.com/gorhill/uBlock/
[2]: https://github.com/gorhill/uMatrix
[3]: https://blog.mozilla.org/press-de/2019/05/04/ein-update-zu-firefox-add-ons/
