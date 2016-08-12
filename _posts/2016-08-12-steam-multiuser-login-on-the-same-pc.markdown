---
layout: post
title: "Steam Multi-User Login on the same PC"
---
I'm using almost all my PCs with multiple users. That's usually not a problem, because applications are made for this - even on Windows. There is one prominent example that is not able to handle multi-user logins, although those are used since the early days of computing [almost 50 years ago][0].

To force [Steam][4] to use different logins for your users, follow these steps:

<script src="https://gist.github.com/MoriTanosuke/d5e47bd759bf868cecadeea5ae5edb44.js"></script>
<noscript>
# How to use this file
- Open the Steam directory, then the config subdirectory. Sort by date modified.
- For each Steam account:
 - Sign into Steam, saving the login details.
 - Quit Steam.
 - Copy *SteamAppData.vdf* to *SteamAppData_username.vdf* (where *username* is the Windows user name you'll use for that Steam account).
- Copy the script from this gist to your PC. Add it to all the *Autostart* folder of all users on your machine.

## ChangeSteamLoginPerUser.cmd
````
@echo on
STEAMDIR=C:\Program Files (x86)\Steam
move "%STEAMDIR%\config\SteamAppData.vdf" "%STEAMDIR%\config\SteamAppData_backup.vdf"
copy "%APPDATA%\SteamAppData_%USERNAME%.vdf" "%STEAMDIR%\config\SteamAppData.vdf"
````
</noscript>

You can [get the script from here][1]. It's taken from [this StackExchange Gaming answer][2]. There is also a slightly easier solution [posted on the same question][3].

If you have any questions or run into problems, feel free to [contact me][5].

[0]: https://en.wikipedia.org/wiki/Unix#History
[1]: https://gist.github.com/MoriTanosuke/d5e47bd759bf868cecadeea5ae5edb44
[2]: http://gaming.stackexchange.com/a/98566/10191
[3]: http://gaming.stackexchange.com/a/40762/10191
[4]: http://store.steampowered.com/
[5]: {% post_url contact %}
