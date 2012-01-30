#!/bin/bash
#
# Creates a template for a new jekyll post.
TODAY=`date +%Y-%m-%d`
TITLE=$1
FILETYPE=markdown
# filename
P=_posts/${TODAY}-${TITLE// /-}.${FILETYPE}
POST=${P,,}
# used for the date frontyaml
DATE=`date`
# publish directory

cat > ${POST} << EOF
---
layout: post
title: ${TITLE}
date: ${DATE}
published: false
---

EOF

echo New post created: ${POST}

