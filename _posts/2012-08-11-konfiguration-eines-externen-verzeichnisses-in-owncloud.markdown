---
layout: post
title: Konfiguration eines externen Verzeichnisses in owncloud
tags: cloud frontpage
---

Seit ein paar Tagen hab ich eine Instanz von [owncloud][0] für mich aufgesetzt, um die Ablösung von [Dropbox][1] zu testen. Generell find ich die Idee von Dropbox & Co super, und die Synchronisation gerade auf mein Android-Telefon ist mein Lieblingsfeature. Aber wenn man mal drüber nachdenkt, dass die Dateien irgendwo auf der Welt herumliegen, dann wird einem doch etwas unwohl. Vor allem nach [den jüngsten Sicherheitsschwankungen][2] bei den Cloud-Anbietern...

Ich hab jetzt also meine eigene kleine Cloud, kann die auf meine Rechner und auf mein Telefon synchronisieren und bin selbst für die Sicherheit verantwortlich. Es gibt natürlich noch ein paar Dinge, die nicht so samtweich laufen wie bei Dropbox:

* Windows-Client versteht keinen Proxy
* Android-Client synchronisiert manchmal nicht
* Weboberfläche zeigt die Termine in meinem importierten Kalender nicht an, auf dem Android sind sie nach der Synchronisation aber zu sehen

Als nächstes stand der Import meiner Bild an. Ich hatte vor einiger Zeit schon mit [Bulkr][3] meine Flickr-Fotos gesichert und sie auf meinem Webspace abgelegt. Jetzt wollte ich die Bilder natürlich nicht nochmal hochladen, sondern direkt vom Server importieren. Dafür bietet *owncloud* schon eine Möglichkeit: **external storage support**.

Dazu legt man die Datei `/config/mount.php` an und schreibt folgenden Inhalt hinein:

    <?php
    return array(
        'user'=>array(
            'meinbenutzername'=>array(
                '/$user/files/meinedateien' => array('class'=>'OC_Filestorage_Local',
                                                     'options'=>array('datadir' => '/pfad/zu/meinen/dateien'))
            )
        )
    );
    ?>

Danach [taucht der Ordner aber nicht automatisch in meinen Dateien auf][4], sondern ich musste noch einen Ordner mit dem gleichen Namen `meinedateien` anlegen - erst dann wurden die Bilder angezeigt.


[0]: http://owncloud.org
[1]: http://dropbox.com
[2]: https://blog.dropbox.com/index.php/security-update-new-features/
[3]: http://clipyourphotos.com/bulkr
[4]: http://forum.owncloud.org/viewtopic.php?f=4&t=2976#p6183
