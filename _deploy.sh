#!/bin/sh

rm -rf _site && jekyll --no-server --no-auto && rsync -vrz _site/* kopis:/kunden/191922_26384/blog/
