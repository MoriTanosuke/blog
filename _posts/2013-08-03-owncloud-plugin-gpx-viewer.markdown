---
title: 'Owncloud Plugin to view GPX files'
date: 2013-08-03 00:00:00 
tags: 
layout: post
---
Today I decided to create a plugin for [Owncloud][0] which displays GPX files directly in your browser. For the plugin I used the great [leaflet][1] library and the [GPX plugin by Maxime Petazzoni][2]. The plugin will display all files with a mimetype of *text/gpx* or *application/gpx+xml* on a map in your browser when you click them while browsing your owncloud folders.

If you want to try the plugin, head over to [the github repository *files_gpxviewer*][3] and clone the repository into the folder *OWNCLOUD/apps/*. You can also [download a ZIP][4] with all the files.

If you find any issues, please help me improve the plugin by [creating a new issue][5].

[0]: http://owncloud.org/
[1]: http://leafletjs.com/
[2]: https://github.com/mpetazzoni/leaflet-gpx
[3]: https://github.com/MoriTanosuke/owncloud_files_gpxviewer
[4]: https://github.com/MoriTanosuke/owncloud_files_gpxviewer/archive/master.zip
[5]: https://github.com/MoriTanosuke/owncloud_files_gpxviewer/issues
