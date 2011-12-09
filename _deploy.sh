#!/bin/sh

jekyll --no-server --no-auto && rsync -rz _site/* kopis:/kunden/191922_26384/blog/
