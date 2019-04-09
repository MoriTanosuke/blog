---
title: 'Testing the coverage metric of JMockIt'
date: 2009-11-20 00:00:00 
tags: 
layout: post
---
<p>After <a href="http://blog.kopis.de/2009/11/19/code-coverage-what-are-we-talking-about/">yesterdays article about Code Coverage terminology</a> I thought more about the code coverage metric JMockIt uses. I created a simple class and a unit test to get more insights:</p>

<script src="https://gist.github.com/MoriTanosuke/615391.js"></script>

<p>This is as simple as it gets. The example is taken from the Wikipedia page on <a href="http://de.wikipedia.org/wiki/Kontrollflussorientierte_Testverfahren#C1._Zweig.C3.BCberdeckungstest_.28Branch_Coverage.29">Kontrollflussorientierte Testverfahren</a> again. For 100% <em>statement coverage</em> you only need one test case, in which <code>y &gt; x</code>. Then all statements are executed and you have 100% <em>statement coverage</em>.</p>

<p>And here is the resulting JMockit coverage report:</p>

<p><img src="/images/content/media_httpblogkopisde_IpDpB.png.scaled500.png" width="500" height="155"/></p>

<p><img src="/images/content/media_httpblogkopisde_GmhCF.png.scaled500.png" width="402" height="277"/></p>

<p>As you can see, JMockit tells us that every single statement is executed, exactly 1 time, with this test case. And that's exactly what I understand as <em>statement coverage</em> and it is in full compliance to the ISTQB terminology.  Now, to make my point really clear, let me change the class as follows:</p>

<script src="https://gist.github.com/MoriTanosuke/615394.js"></script>

<p>I added the empty ELSE statement that I omitted first. And I run JMockit again to get a new coverage report:</p>

<p><img src="/images/content/media_httpblogkopisde_DdqDv.png.scaled500.png" width="500" height="155"/></p>

<p><img src="/images/content/media_httpblogkopisde_iajth.png.scaled500.png" width="403" height="355"/></p>

<p>This is not 100% branch coverage, ISTQB certified or not. ;-) My point on this is, if you want to use a tool to verify your testing requirements, make sure that you know what the tool is measuring.  And make sure you <a href="http://groups.google.com/group/jmockit-users/browse_thread/thread/42fc076e61843907?pli=1">read the discussion thread in the JMockit users group</a>.</p>

<p><strong>*Update*</strong> I created a <a href="http://cobertura.sourceforge.net/">Cobertura</a> coverage report for <em>CoverMeSimple</em> now:</p>

<p><img src="/images/content/media_httpblogkopisde_gFphr.png.scaled500.png" width="500" height="279"/></p>
