---
layout: post
title: 'Wallabag - selbst-gehostete Alternative zu Instapaper'
---
Ich bin ein großer Freund von [Instapaper][0] für besseres Lesen von Internetartikeln, vor allem wenn ich unterwegs bin. Ich finde oft interessante Artikel, die aber im Moment des Findens eher ablenkend und meistens auch viel zu lang sind. Dann speichere ich diese Artikel bisher bei Instapaper und lade sie mir zum geruhsamen Offline-Lesen auf mein Handy runter. Dabei verschwindet passenderweise auch gleich die Werbung und die meistens störenden Bilder.

Leider musste ich dafür bisher eben immer Instapaper nutzen. D.h. ich schicke die interessanten Links und meine Lesegewohnheiten an einen Anbieter irgendwo in den USA. :worried:

Gestern habe ich aber dann [Wallabag][1] gefunden. Wallabag lehnt sich stark an Instapaper an und bietet die gleichen Funktionen - inklusive [Android App][2] - in einer selbst-gehosteten Anwendung an. Die Installation ist auf einem durchschnittlichen Webspace denkbar einfach. Man braucht PHP, die Daten liegen erstmal in eine SQLite-Datenbank. Man kann aber auch auf eine MySQL wechseln.

Ich selbst will Wallabag aber in meinem Docker-Setup auf meinem Server installieren. Das Dockerfile selbst ist schnell erstellt:

<pre class="brush: bash">
FROM	php:5.6-apache

RUN	apt-get update -y && apt-get install -y curl libpng12-dev libtidy-dev libgettextpo-dev unzip git
RUN	docker-php-ext-install mbstring
RUN	docker-php-ext-install gd
RUN	docker-php-ext-install tidy
RUN	docker-php-ext-install gettext
# install composer
RUN	cd /usr/local/bin && curl -s http://getcomposer.org/installer | php
RUN	git clone https://github.com/wallabag/wallabag.git /var/www/html/
RUN	curl --silent -o /tmp/vendor.zip http://static.wallabag.org/files/vendor.zip && unzip /tmp/vendor.zip && rm /tmp/vendor.zip

# add a custom config.inc.default.php if needed
#ADD	config.inc.default.php /var/www/html/inc/poche/config.inc.default.php

# make everything writeable
RUN	chown -R www-data:www-data /var/www/html/
</pre>

Anschliessend kann man den Container beherzt bauen:

<pre class="brush: bash">
docker build --rm=true -t wallabag .
</pre>

Anschliessend wird die Installation wie folgt gestartet:

<pre class="brush: bash">
docker run --name wallabag -p 8080:80 -t wallabag
</pre>

Jetzt nur noch im Browser die URL [http://localhost:8080/] aufrufen und schon kann man die ersten Artikel fürs spätere Lesen abspeichern. :smile: Wer die Android App nutzen will, der muss zuerst in der Konfiguration die *Feeds* einschalten und anschliessend die angezeigte *User ID* und das *Token* in der Android App eingeben. Anschliessend klappt auch die Synchronisierung.

Für mein eigenes Setup hatte ich noch das kleine Problem, das der Container mit Wallabag hinter einem Reverse Proxy steht und daher die öffentliche URL nicht mit der URL der Installation übereinstimmt. Leider hat Wallabag noch keine Einstellung für die *base url*, daher habe ich kurzerher meine rudimentären PHP-Kenntnisse ausgepackt und [einen *pull request* gestellt][3]. Damit kann über die *config.inc.default.php* eine Konfiguration-Option mit der öffentlichen Adresse gesetzt werden und die Links in den Themes funktionieren wieder:

<pre class="brush: php">
@define ('BASE_URL', 'https://meinhostname/pfad/zu/wallabag/');
</pre>

[0]: https://www.instapaper.com/
[1]: https://github.com/wallabag/wallabag/
[2]: https://play.google.com/store/apps/details?id=fr.gaulupeau.apps.InThePoche
[3]: https://github.com/wallabag/wallabag/pull/1214

