---
title: 'Installation von NodeJS unter Windows/cygwin'
date: 2010-09-14 00:00:00
layout: post
---
Ich versuche seit gestern abend, <a href="http://nodejs.org/">NodeJS</a> ungter Windows 7 (64bit) und <a href="http://cygwin.com/">Cygwin</a> zu installieren. Die notwendigen Pakete von Cygwin sind installiert:

  * python
  * make
  * g++ (mingw)
  * curl
  * git

Anschliessend muss die ash geöffnet werden. Dazu drückt man WINDOWSTASTE+R und gibt C:cygwinbinash.exe ein. Im daraufhin geöffneten Konsolenfenster gibt man folgendes Kommando ein:

<pre class="brush: bash">
./rebaseall -v
</pre>

Damit werden die Links unter cygwin neu gesetzt. Jetzt sollte alles für die Installation von NodeJS bereit sein. Dazu öffnet man eine cygwin-bash und gibt folgende Kommandos ein:

<pre class="brush: bash">
git clone git://github.com/ry/node.git
cd node
./configure
make
make install
</pre>

Jetzt sollte NodeJS installiert sein. Sollte. Denn ich bekomme folgenden Fehler:

<pre class="brush: bash">
$ ./configure
/cygdrive/c/Users/Carsten Ringe/Documents/workspace/node/wscript: error: Traceback (most recent call last):
  File "/cygdrive/c/Users/Carsten Ringe/Documents/workspace/node/tools/wafadmin/
Utils.py", line 274, in load_module
    exec(compile(code, file_path, 'exec'), module.__dict__)
  File "/cygdrive/c/Users/Carsten Ringe/Documents/workspace/node/wscript", line 12, in &lt;module&gt;
    import js2c
  File "/cygdrive/c/Users/Carsten Ringe/Documents/workspace/node/tools/js2c.py",
 line 35, in &lt;module&gt;
    import jsmin
  File "/cygdrive/c/Users/Carsten Ringe/Documents/workspace/node/tools/jsmin.py", line 1
    ../deps/v8/tools/jsmin.py
    ^
SyntaxError: invalid syntax
</pre>

Das deutet anscheinend auf einen Fehler in der Installation von Python hin. Aber auch nach einer Neuinstallation habe ich noch dieses Problem. Auch das rebase von cygwin bringt keine Verbesserung.  Ich vermute langsam, dass es an meinem 64bit-System liegt. Naja, oder halt an Windows. Deshalb läuft auch gerade der rsync-Job für das Backup, danach wird doch wieder Ubuntu installiert... gnah.
