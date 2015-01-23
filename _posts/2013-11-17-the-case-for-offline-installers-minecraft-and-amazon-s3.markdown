---
title: 'The case for offline installers - Minecraft and Amazon S3'
date: 2013-11-17 00:00:00 
tags: 
layout: post
---
Since yesterday I am not able install (or even play) a game I bought several months ago: [Minecraft][0]. In case you haven't heard of it yet, you've lived under a rock for several years. Go buy the game.

But, and this is a major issues for me, I couldn't install or play the game since yesterday. I had to reinstall my computer and when I finished everything and wanted to install Minecraft again, I got a lot of these errors in the launcher console:

    [08:29:05 WARN]: Couldn't download https://s3.amazonaws.com/Minecraft.Resources/sounds/random/explode2.ogg for job 'Resources'
    java.lang.RuntimeException: Server responded with 503
	at net.minecraft.launcher.updater.download.Downloadable.download(Downloadable.java:88) ~[launcher.jar:?]
	at net.minecraft.launcher.updater.download.DownloadJob.popAndDownload(DownloadJob.java:104) [launcher.jar:?]
	at net.minecraft.launcher.updater.download.DownloadJob.access$000(DownloadJob.java:11) [launcher.jar:?]
	at net.minecraft.launcher.updater.download.DownloadJob$1.run(DownloadJob.java:86) [launcher.jar:?]
	at java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source) [?:1.7.0_45]
	at java.util.concurrent.FutureTask.run(Unknown Source) [?:1.7.0_45]
	at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source) [?:1.7.0_45]
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source) [?:1.7.0_45]
	at java.lang.Thread.run(Unknown Source) [?:1.7.0_45]

As you can see in the error message, the game launcher started to download from https://s3.amazonaws.com/Minecraft.Resources/sounds/random/explode2.ogg but got a [HTTP error code 503][1] *Service not available*. I already know that [Amazon S3][2] has some restrictions on request rate and download volume, but nevertheless I tried to open the URL in my browser:

    <Error>
      <Code>SlowDown</Code>
      <Message>Please reduce your request rate.</Message>
      <RequestId>7064E0C35CD852F4</RequestId>
         <HostId>zG0J+l6QtmyubEt6A5pe5VlsKPe+vY6SbMTnLXz+UieLtwFWXlamKl4pVo7QulY7</HostId>
    </Error>

So what does that mean? Amazon decided to throttle the requests to the S3 storage used by Minecraft to host assets of the game. The launcher tries to download the version that you specified in the profile, but Amazon is not returning it but the 503 error instead.

This is not an error that will prevent everyone to download Minecraft, maybe it's just the region that my requests to S3 are routed to or maybe just me getting to a faulty S3 storage. But it's common enough that [@Dinnerbone reacted on twitter][3]:

<blockquote class="twitter-tweet"><p>Okay it looks like Amazon is having issues... Terrific! If you don&#39;t get any new music (game music, not records) then be patient, sorry!</p>&mdash; Nathan Adams (@Dinnerbone) <a href="https://twitter.com/Dinnerbone/statuses/401462779695341568">November 15, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

There is no other way for me to download the game than the launcher. There is no ZIP or EXE that will give me the complete game, and which could be mirrored by other hosts in case the hosting provider is not available or has other issues. This is a common usage pattern nowadays, it gives the publisher control over the download and is a way to have exact download statistics. Amazon S3 itself is mirrored over multiple hosts in different regions and you can even add another layer of caching to it via [Amazon Cloudfront][4].

But still, why is this the only way to download and install the game? And it's not the only online-only installer: *Google Chrome*, *Oracle Java*, *Steam*... they all rely on online installers. If you're lucky enough, you can zip the installed software afterwards and have your own offline installer, but I'm really happy when I notice a piece of software that provides a full offline installer, that is also hosted on different providers - or even downloadable [p2p][4] via *Torrent* or something like that.

So this again is a piece of software that I'll zip&backup and have to try if I can have my own version archive sitting on my [Drobo][6] at home just in case the magical *cloud* has a hiccup again.

**Small update:** If you do have a minecraft installation on your PC right now, you should ZIP it

* On Windows press *WIN+R*, enter *%APPDATA%* and create an archive of the directory *.minecraft*.
* On Linux, open a terminal and execute the following command: `tar cjf ~/.minecraft ~/minecraft.tar.bz2`
* On Mac, I don't know what to do. Maybe trust your Time Machine.

[0]: http://minecraft.net
[1]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.4
[2]: http://aws.amazon.com/s3/
[3]: https://twitter.com/Dinnerbone/status/401462779695341568
[4]: http://aws.amazon.com/cloudfront/
[5]: http://en.wikipedia.org/wiki/Peer-to-peer
[6]: http://www.drobo.com/

