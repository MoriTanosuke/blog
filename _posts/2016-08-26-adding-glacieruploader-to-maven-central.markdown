---
title: "Adding Glacieruploader to Maven central"
layout: post
---
A couple of days ago I got a [request to provide submodules][0] for [my Amazon Glacier commandline application *glacieruploader*][1]. I've never done that before, but I learn about how to do it. The OP of the request kindly provided a couple of links to documentation:

* [http://www.sonatype.org/nexus/2015/04/28/how-to-publish-your-open-source-library-to-maven-central/][4]
* [http://central.sonatype.org/pages/apache-maven.html][5]
* [https://maven.apache.org/plugins/maven-deploy-plugin/][6]

After reading up and searching I also added some more links:

* [https://maven.apache.org/guides/mini/guide-central-repository-upload.html][7]
* [https://www.apache.org/dev/publishing-maven-artifacts.html][8]
* [http://central.sonatype.org/pages/choosing-your-coordinates.html][9]

At the moment I'm reading the [official documentation of Sonatype][2] and setting everything up to deploy my first project to [maven central][3]. This is pretty exciting for me. I always publish my projects as open source software using GPLv3 for most of it. But I never actually thought about publishing something to the *central* repository. (For those of you non-java developers: this is where everyone gets their libraries from.) I'm using the *central* repository every day, so it is a big deal.

Preparing for the deployment into *central* means cleaning up my POM, adding a couple of new plugins with the recommended configuration from the documentation above and then when everything is set up, creating a release and uploading it to Sonatype. When everything is done, I'll write a new post or update this one. Hopefully by the time you read the next update, you can [find my first project under *groupId* *de.kopis...*][10] ☻

[0]: https://github.com/MoriTanosuke/glacieruploader/issues/51
[1]: https://github.com/MoriTanosuke/glacieruploader
[2]: http://central.sonatype.org/pages/producers.html
[3]: https://search.maven.org/
[4]: http://www.sonatype.org/nexus/2015/04/28/how-to-publish-your-open-source-library-to-maven-central/
[5]: http://central.sonatype.org/pages/apache-maven.html
[6]: https://maven.apache.org/plugins/maven-deploy-plugin/
[7]: https://maven.apache.org/guides/mini/guide-central-repository-upload.html
[8]: https://www.apache.org/dev/publishing-maven-artifacts.html
[9]: http://central.sonatype.org/pages/choosing-your-coordinates.html
[10]: https://issues.sonatype.org/browse/OSSRH-24609
