#!/bin/sh

rm -rf _site
jekyll --no-server --no-auto
rsync -irz --progress _site/* kopis:/kunden/191922_26384/blog/

