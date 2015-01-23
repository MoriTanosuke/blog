---
title: 'How to create a Minecraft Mod with Forge'
date: 2014-02-27 00:00:00 
tags: minecraft,modding
layout: post
---
Most of this is taken from a [somewhat incomplete tutorial at Minecraftforge][3].

First things first:

* Install [Eclipse][2]
* Install the [gradle][1] integration from [eclipse marketplace][4]
* Download [the forge sourcecode][0]
* Unzip it somewhere
* Open a command line in that directory (on Windows 7, press the *WIN* key, type "*cmd*" and press *ENTER*, then type "*cd INSERT_DIRECTORY_YOU_UNZIPPED_FORGE_HERE*")
* Let [gradle][1] generate project files for [Eclipse][2]: *.\gradlew.bat setupDecompWorkspace --refresh-dependencies* and then *.\gradlew eclipse*
* Start your Eclipse, import an *existing project* from *INSERT_DIRECTORY_YOU_UNZIPPED_FORGE_HERE*
* Right click on the project, choose *Configure* -> *Convert to gradle project*
* Right click on the project, choose *Run as...* -> *1 Gradle Build*, check the *clean* and *build* task and run it (or type `gradle clean build`)

After all of this, browse to directory *build/libs* in *INSERT_DIRECTORY_YOU_UNZIPPED_FORGE_INTO_HERE*. You should find a JAR file including your mod there. :unamused:

If you want to run your mod, you can use the following gradle tasks:

* `gradle runClient` - will start minecraft with your mod
* `gradle runServer` - will start a minecraft server with your mod

If you run both tasks, you can connect with your modded client to your modded server and check if everything works as expected.

I've heard that if you put your eclipse workspace into the *eclipse* subfolder in your *INSERT_DIRECTORY_YOU_UNZIPPED_FORGE_INTO_HERE* you get a launch configuration for those tasks for free. I didn't try that, and created the launch configurations myself:

**Client**

* Main Class: `net.minecraft.launchwrapper.Launch`
* Arguments: `--version 1.6 --tweakClass cpw.mods.fml.common.launcher.FMLTweaker --accessToken FML`
* VM Arguments: `-Dfml.ignoreInvalidMinecraftCertificates=true`

**Server**

* Main Class: `cpw.mods.fml.relauncher.ServerLaunchWrapper`

[0]: http://files.minecraftforge.net/maven/net/minecraftforge/forge/1.7.2-10.12.0.1024/forge-1.7.2-10.12.0.1024-src.zip
[1]: http://gradle.org/
[2]: https://eclipse.org/
[3]: http://www.minecraftforge.net/wiki/Basic_Modding
[4]: http://marketplace.eclipse.org/content/gradle-integration-eclipse

