---
layout: post
title: 'Using Googles mirror for Maven Central'
---
Today I stumbled upon an interesting [article about a full mirror for Maven Central provided by Google][0]. I decided to give it a try and put the following `mirror` in my `$HOME/.m2/settings.xml`:

````
<settings>
  ...
  <mirrors>
    <mirror>
      <id>google-maven-central</id>
      <name>Google Maven Central</name>
      <url>https://maven-central.storage.googleapis.com</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>
</settings>
````

After that I deleted my local repository:

````
rm -rf ~/.m2/repository
````

So for the next couple of weeks I'll be using the new mirror. :smile:

[0]: http://takari.io/2015/10/28/google-maven-central.html

