#!/bin/sh
/var/lib/gems/1.8/bin/jekyll --no-auto && s3cmd sync --delete-removed _site/ s3://blog.kopis.de
