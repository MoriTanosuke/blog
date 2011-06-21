#!/bin/sh
BUCKET=blog.kopis.de

s3cmd sync --delete-removed _site/ s3://${BUCKET}
