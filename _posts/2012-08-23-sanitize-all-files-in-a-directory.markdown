---
layout: post
title: Sanitize all files in a directory
---

Today I wanted to finally clean up several backup copies of my music.
Over the years I copied the files from device to device, moving through
multiple generations of computers. I put the music into a [Jungledisk
backup][0], uploaded them to [Amazon S3][1], copied them to my
[Drobo][3] or just moved them from one harddisk to another, bigger
harddisk. I even switched from Linux, to MacOS X, to Windows and am
on a Debian machine once again. And my next plan is to use the new
service [Amazon Glacier][2] to back it up again...

All of this moving did affect the files. The filenames are all over the
place, prefixes and funny encodings, even some of the file extensions
are no longer what they used to be.

A couple of months ago I started to write a [bash script][4] that should
help with all the confusion. It should remove all funny characters from
filenames, replace all the whitespaces with underscores and finally make
it all lowercase. That is how I like my files! ;-)

Today, I gave the script another try:

<script src="https://gist.github.com/3438761.js"> </script>

(If you don't see the code, go to [github][5].)

You can call the script like this:

    cd /path/to/your/music
    ./sanitize.sh . /new/path/to/your/sanitized/music/

After the script worked for several hours your files should savely sit
in the new directory, leaving the old files untouched. Then you can
start going through all the directories and remove duplicate files
manually.

You can clone the gist and modify it to your own needs. Just don't ask
me if something went wrong. :-D

[0]: https://www.jungledisk.com/
[1]: http://aws.amazon.com/s3/
[2]: http://aws.amazon.com/glacier/
[3]: http://drobo.com/
[4]: http://tldp.org/LDP/abs/html/
[5]: https://gist.github.com/3438761

