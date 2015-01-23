---
title: 'Installing Bukkit plugin RealEnchantment on server 1.6.1'
date: 2013-07-07 00:00:00 
tags: 
layout: post
---
Yesterday I decided it's time to get some horses. [Minecraft v1.6.1][0] is released and the new launcher 
makes it easy to switch versions on the client side. At the same time, [bukkit announced the first development build][1]
for their server, so everything fell into place.

After the usual backup dance I downloaded the latest bukkit JAR file and started the server. Because I don't 
use plugins on my server, the update went without complications: download the new JAR, modify my startup script, 
run it and the server was up.

Then I decided to have at least one plugin that will fix the stupid Minecraft enchantments: [RealEnchantment][2]

If you played more than 10 minutes of Minecraft, you already know that enchanting a tool, weapon or piece of 
armor is more than frustrating: Spend 30 levels on a diamond sword and you get [Bane of Athropods, Level 2][3]...

The description of [RealEnchantment][2] sounded like the solution to this problem:

> **Why using RealEnchantment?**
> 
> Because RealEnchantment is different, firstly you don't have to enchant your items
> and hope that you get good enchantments. This is the luck factor that I don't like.
> But RealEnchantment has also a luck factor: the enchantment costs. If you want to
> enchant an item with, for example fortune level 3, the cost of this enchantment is
> not fixed. In our example there is a range from 23 level to 30 level, but the chance
> to pay 30 level is higher than to pay 23 level. So the luck factor from the Minecraft
> basics don't get loss!
> You use commands to enchant, but an enchantment table must be nearby.

So this plugin reverses the random part of enchantments: instead of paying fixed 30 levels and getting a random
enchantment, you spend a random amount of levels and get a fixed level of enchantment.

Although the plugin is not released for 1.6.1 yet, it ran just fine on my development channel server. The
only thing I had to change was running on *JDK 7* instead of *JDK 6*. Maybe the plugin author will compile the
next JAR with a more downward compatible *target* switch - or maybe everyone is using *JDK 7* now anyway.

Now at least I as a server admin can use the command `/re fortune 3` to get an enchanted diamond pickaxe 
with [Fortune 3][4]. To allow other players to use the command, I had to set up permissions. I decided to use 
the plugin [PermissionsEx][5] (PEX in short).

After downloading the latest PEX JAR to my `plugins` directory and reloading the server, I started to edit 
the file *SERVER_ROOT/plugins/PermissionsEx/permissions.yml* and added the following permissions to the *default* 
group:

    groups:
      default:
        default: true
        permissions:
        - modifyworld.*
        - RealEnchantment.basic
        - RealEnchantment.enchant.*    
        - RealEnchantment.list
        - RealEnchantment.info
        - RealEnchantment.prepayinfo

I didn't assign all permissions starting with `RealEnchantment.` to users, but only the one necessary to enchant 
items and get the help for the plugin commands. It's not necessary to assign new groups to specific users, because 
everyone on the server should have the `/re` command available. If you need to have a special group for that, you 
can [read up in the PEX documentation][6].

[0]: https://mojang.com/2013/07/minecraft-the-horse-update/
[1]: http://forums.bukkit.org/threads/craftbukkit-for-minecraft-1-6-1-development-build-is-now-available.156980/
[2]: http://dev.bukkit.org/bukkit-plugins/real-enchantment/
[3]: http://www.minecraftwiki.net/wiki/Bane_of_Arthropods#Bane_of_Arthropods
[4]: http://www.minecraftwiki.net/wiki/Fortune#Fortune
[5]: http://dev.bukkit.org/bukkit-plugins/permissionsex/
[6]: https://github.com/PEXPlugins/PermissionsEx/wiki/Basic-Permissions-Setup#wiki-additional-groups
