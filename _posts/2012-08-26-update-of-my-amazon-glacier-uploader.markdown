---
layout: post
title: Update of my Amazon Glacier uploader
---

[A couple of days ago I started to build a simple command-line upload client for the new Amazon Glacier archival service][0]. You can get the software [from my github project "*glacieruploader*"][1].

Now I can write the first update, and it's going pretty well. I had some contributors opening issues with the first releases - still very early with *0.0.3* currently - and one contributor really contributing a pull request.

I updated the command line options, added a few more actions and am uploading a fairly large archive from my home computer to my own vault using my own client uploader. Eating your own dog food, and it's tasting fine for me. ;-)

There are a couple of other command line clients available now, so I want to compile a lit of tools that you can use if you don't have a full java environment on your system or if you simply don't like my client. So, here we go with a list of command-line tools for *Amazon Glacier*:

  * [glacieruploader][1] (my own project, java)
  * [glacierFreezer][2] (java)
  * [amazon-glacier-cmd-interface][3] (python)
  * <del>[glacier-cli][4] (python)</del> use [amazon-glacier-cmd-interface][3] instead
  * [awssum][5] (nodejs, I count that as command line)

If you're working on your own client or if you successfully used a client that's not in this list, please add a comment.

[0]: /2012/08/23/simple-uploader-for-amazon-glacier-archiving/
[1]: https://github.com/MoriTanosuke/glacieruploader
[2]: http://www.glacierfreezer.com/
[3]: https://github.com/uskudnik/amazon-glacier-cmd-interface
[4]: https://github.com/brodul/glacier-cli
[5]: https://github.com/appsattic/node-awssum

