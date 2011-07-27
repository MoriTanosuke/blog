#!/bin/sh

/var/lib/gems/1.8/bin/jekyll --no-auto && git push && s3cmd sync --add-header "Cache-Control: max-age=2678400, public" --skip-existing --delete-removed _site/ s3://blog.kopis.de
