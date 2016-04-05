---
title: 'Simple Upload for Amazon Glacier archiving'
date: "2012-08-23"
tags: 
layout: post
---
**Update** I uploaded a new version of the [glacieruploader][4]. I want
to move to a cleaner command line usage, so I introduced better options.
Check it out and tell me what you think. :-)

**Update** You can now [download the first version][5]. Keep in mind
that this is my very first try on the uploader. ;-)

Yesterday I read about the new [Amazon Glacier][0] services that allow
all customers of [amazons webservice][1] to store backups even cheaper
than [Amazon S3][2]. And because I am constantly searching for a better
backup, I was curious how that could be used from my home PC to backup
my music, pictures and documents.

As always Amazon provides the service without much client software, so
there is no way to upload something other than implementing your own
application. And that's what I did:

[https://github.com/MoriTanosuke/glacieruploader][4]

This is a simple command line application that uploads one archive file
to your backup vault. At the moment you can't download and run it, but
I'll add a packaged and runnable version later.

If you take a look at the implementation, you'll see a lot of hardcoded
stuff, but this is just a prototype to see how the [Glacier][0] works. 
I took a fair amount of code from the [official Java Amazon SDK 
example][3], so kudos to the AWS team for providing such a nice SDK. :-)

I think I'll play around with *Glacier* some more and try to think about
a nice way to integrate it into the last mile of my multi-step backups
at home.


[0]: http://aws.amazon.com/en/glacier/
[1]: http://aws.amazon.com/
[2]: http://aws.amazon.com/en/s3/
[3]: http://docs.amazonwebservices.com/amazonglacier/latest/dev/using-aws-sdk-for-java.html
[4]: https://github.com/MoriTanosuke/glacieruploader
[5]: https://github.com/MoriTanosuke/glacieruploader/downloads
