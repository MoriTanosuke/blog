---
title: 'Debian Package for s3fs'
date: 2011-08-11 00:00:00 
tags: 
layout: post
---
<p><strong>Update:</strong> I tried to upload my package to <a href="http://mentors.debian.net/">mentors.debian.net</a>. You can see it at <a href="http://mentors.debian.net/package/s3fs">http://mentors.debian.net/package/s3fs</a>. I messed up the package information files, so <em>LoÃÂ¯c Minier</em> is still set as maintainer. I will fix that in the future.</p>
<p>Because I'm using <a href="http://aws.amazon.com/de/s3/">Amazons S3 service</a> a lot lately, I want to have an easy way to mount, transfer and delete files on my buckets. Unfortunatly, <a href="http://code.google.com/p/s3fs/wiki/FuseOverAmazon">s3fs</a> wasn't available on my debian installation, so I couldn't mount a bucket and use it as a local directory.</p>
<p>Well, it wasn't available. Because I decided to build a .DEB package for it. <a href="http://www.kopis.de/download/s3fs_1.40-1_amd64.deb">Download s3fs_1.40-1_amd64.deb here</a>.</p>
<p><strong>If you have any problems installing it, please leave a comment or drop me a mail</a>. It's my first debian package, so I'm not quite sure if it works. I tried submitting it to the official channels, but my GPG key is not yet uploaded.</strong> I'm thinking about setting myself up as a maintainer...</p>
