---
title: 'Jekyll auf Amazon CloudFront hosten'
date: 2011-06-21 00:00:00 
tags: 
layout: post
---
<p>Heute nachmittag hab ich mal ausprobiert, wie man den eigenen Jekyll-Blog auf einem <a href="http://aws.amazon.com/de/s3/">Amazon S3-Bucket</a> hosten und mit <a href="http://aws.amazon.com/de/cloudfront/">Amazon CloudFront</a> weltweit verteilen kann. Mein erster Eindruck: fast so einfach wie Schuhe anziehen.</p>

<h2>Einrichten des S3-Buckets</h2>

<p>Als erstes hab ich mich auf der <a href="https://console.aws.amazon.com/">Amazon Management Console</a> eingeloggt und ein neues Bucket angelegt:</p>

<p><a href="http://www.flickr.com/photos/cringe/5856725391/" title="aws-s3-bucket-fuer-jekyll by cringe, on Flickr"><img src="http://farm6.static.flickr.com/5315/5856725391_f202428760_m.jpg" width="240" height="63" alt="aws-s3-bucket-fuer-jekyll"></a></p>

<p>Jetzt muss ich noch mit <a href="http://s3tools.org/s3cmd">s3cmd</a> mein AWS-Zugang konfigurieren. Dazu rufe ich folgendes Kommando auf und folge den Hinweisen auf dem Bildschirm:</p>

<pre>
s3cmd --configure
</pre>

<p>Im Prinzip muss man da nur seine Zugangsdaten zum <em>Amazon Webservice</em> angeben.

<h2>Hochladen der statischen Inhalte</h2>

<p>Ich habe lokal meine statische Seite mit Jekyll generiert. Danach habe ich im Verzeichnis <code>_site</code> alle Dateien, die ich für die Seite brauche. Die kann ich jetzt auf mein vorher angelegtes Amazon S3-Bucket hochladen:</p>

<pre>
s3cmd sync --delete-removed _site/ s3://{bucketname}
</pre>

<p>Jetzt kann ich bereits meinen Blog auf dem S3-Bucket aufrufen: <a href="http://blog.kopis.de.s3-website-eu-west-1.amazonaws.com/">http://blog.kopis.de.s3-website-eu-west-1.amazonaws.com/</a></p>

<h2>Einrichten von Amazon CloudFront</h2>

<p>Als erstes muss ich eine <em>Distribution</em> anlegen, wieder in der <a href="https://console.aws.amazon.com/">Amazon Management Console</a>:</p>

<p><a href="http://www.flickr.com/photos/cringe/5857278758/" title="aws-cloudfront-fuer-jekyll by cringe, on Flickr"><img src="http://farm6.static.flickr.com/5272/5857278758_b1c4f0fabd_m.jpg" width="240" height="62" alt="aws-cloudfront-fuer-jekyll"></a></p>

<p>Beim Einrichten wähle ich den Type <em>download</em> und mein S3-Bucket aus. Jetzt kann ich wieder meinen Blog aufrufen, diesmal auf dem CloudFront Content Delivery Network (CDN): <a href="http://d3ln3qjv5hffnc.cloudfront.net/">http://d3ln3qjv5hffnc.cloudfront.net/</a></p>

<h2>Einstellen der CNAMEs</h2>

<p>Damit ich meine Daten unter eine besseren Domain aufrufen kann, muss ich noch einige Einstellungen im Domain Name Server meiner Domain <a href="http://kopis.de/">kopis.de</a> vornehmen. Ich möchte einen <a href="http://de.wikipedia.org/wiki/CNAME">CNAME</a> einrichten und die Daten in der <em>CloudFront</em> anschliessend über <a href="http://blog2.kopis.de">blog2.kopis.de</a> aufrufen.</p>

<p>Das Einrichten eines <em>CNAME Records</em> ist aber so abhängig vom Hoster der Domain, dass ich euch nicht damit langweilen möchte. Als letzter Schritt bleibt dann eigentlich nur noch der Aufruf des Blogs bzw. das Setzen von Links auf die statischen Inhalte in der CloudFront.</p>

<p>Ich hoste dann meinen Blog unter <a href="http://blog.kopis.de">blog.kopis.de</a>, während die meisten Inhalte aber von <a href="http://blog2.kopis.de">blog2.kopis.de</a> kommen. Das ganze könnt ihr auch für einen dynamischen Blog machen, der z.B. nur statische Inhalte wie CSS, Javascript und Bilder aus der CloudFront lädt. Da mein Blog mit Jekyll nur noch aus statischen Inhalten besteht, kann ich alle Inhalte aus der CloudFront bedienen. Ich brauche dann gar keinen eigenen Webspace mehr und könnte mein Hostingpaket auf die reine Domain abspecken.</p>
