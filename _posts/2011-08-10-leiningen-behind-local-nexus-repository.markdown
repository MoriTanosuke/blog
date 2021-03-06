---
title: 'Leiningen behind a local nexus repository'
date: 2011-08-10 00:00:00 
tags: 
layout: post
---
<p>Today I tried to use <a href="https://github.com/technomancy/leiningen">leiningen</a> on a development machine where I had set up a network-local <a href="http://nexus.sonatype.org/">nexus repository</a> for my <a href="http://maven.apache.org/pom.html#Distribution_Management">maven distribution management</a>. And it took me some minutes to get <em>leiningen</em> to work, because it always failed with a message like this:</p>
<pre>
----------
1 required artifact is missing.

for artifact:
  org.apache.maven:super-pom:jar:2.0

from the specified remote repositories:
  clojure (http://mylocalrepository/nexus/content/groups/public),
  clojars (http://mylocalrepository/nexus/content/groups/public),
  clojure-snapshots (http://mylocalrepository/nexus/content/groups/public),
  central (http://mylocalrepository/nexus/content/groups/public)


        at org.apache.maven.artifact.resolver.DefaultArtifactResolver.resolveTra
nsitively(DefaultArtifactResolver.java:324)
        at org.apache.maven.artifact.ant.DependenciesTask.doExecute(Dependencies
Task.java:170)
        ... 34 more
</pre>
<p>I noticed that there was the URL to <em>http://mylocalrepository</em> in the error messages and that I probably hadn't all the clojure stuff configured there. In fact, I didn't think about that at all. I don't want the clojure dependencies to live in that repository, so I have to exclude it from my maven mirror settings in <em>USERDIR/.m2/settings.xml</em>:
<pre>
&lt;mirrors&gt;
  &lt;mirror&gt;
    &lt;id&gt;nexus&lt;/id&gt;
    &lt;!-- use this mirror for everything excluding clojars and clojure: --&gt;
    &lt;mirrorOf&gt;*,!clojars,!clojure&lt;/mirrorOf&gt;
    &lt;!-- use this mirror for all external repositories:
    &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
    --&gt;
    &lt;url&gt;http://mylocalrepository/nexus/content/groups/public&lt;/url&gt;
  &lt;/mirror&gt;
&lt;/mirrors&gt;
</pre>
<p>After that <em>leiningen</em> downloaded all the dependencies and was generally more helpful. ;-)</p>
