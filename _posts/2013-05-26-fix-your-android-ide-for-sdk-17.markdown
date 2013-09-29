---
layout: post
title: "Fix your Android IDE for SDK 17 and the Android Maven Plugin < 3.5.4"
tags: android
---

Recently I started [working on an Android App][1] and after some initial problems with 
the [new Android Studio based on IntelliJ][2] I am back on a regular maven build process.
But when setting up my project with the current version of the *"old"* [Android IDE based
on Eclipse][3] and the [Maven Android Plugin][4] I stumbled upon some errors when trying
to build the project:

    Failed to execute goal com.jayway.maven.plugins.android.generation2:android-maven-plugin:3.1.1:generate-sources 
       (default-generate-sources) on project tutorial: Execution default-generate-sources of 
       goal com.jayway.maven.plugins.android.generation2:android-maven-plugin:3.1.1:generate-sources 
       failed: Could not find tool 'aapt'. Please provide a proper Android SDK directory path as 
       configuration parameter <sdk><path>...</path></sdk> in the plugin <configuration/>. As an 
       alternative, you may add the parameter to commandline: -Dandroid.sdk.path=... or set 
       environment variable ANDROID_HOME. -> [Help 1]

After a quick search I found [this really fine answer on StackOverflow][0] and [a bug report][5]
explaining how to fix this issue on my linux environment:

{% highlight bash %}
    cd $ANDROID_HOME/platform-tools
    ln -s ../build-tools/android-4.2.2/aapt aapt
    ln -s ../build-tools/android-4.2.2/lib lib
    ln -s ../build-tools/android-4.2.2/aidl aidl
{% endhighlight %}

Because I am working on different machines, I had to fix this on at least one windows box too:

{% highlight bash %}
    cd $ANDROID_HOME\platform-tools
    mklink aapt.exe ..\build-tools\android-4.2.2\aapt.exe
    mklink /D lib ..\build-tools\android-4.2.2\lib
    mklink aidl.exe ..\build-tools\android-4.2.2\aidl.exe
{% endhighlight %}

The [original answer is available on StackOverflow][0] and I also added 
my windows version of the commands as a comment to that answer.


[0]: http://stackoverflow.com/a/16619907/834
[1]: https://github.com/MoriTanosuke/Feedy
[2]: http://developer.android.com/sdk/installing/studio.html
[3]: http://developer.android.com/tools/index.html
[4]: https://code.google.com/p/maven-android-plugin/
[5]: https://code.google.com/p/maven-android-plugin/issues/detail?id=377
