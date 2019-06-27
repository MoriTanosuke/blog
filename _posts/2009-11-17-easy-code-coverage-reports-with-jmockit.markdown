---
title: 'Easy code coverage reports with JMockIt'
date: 2009-11-17 00:00:00
tags: development
layout: post
---
In this blog post I want to describe how I use <a href="http://code.google.com/p/jmockit/">JMockIt</a> not only for stubs and mocks, but for easy generation of code coverage reports while developing.  <a href="http://code.google.com/p/jmockit/">JMockIt</a> is my favorite tool for unit testing, because of it's ease of use and the many options you get out of this framework. Only recently I decided to try the code coverage report that comes with JMockIt. I was searching for an easy way to monitor my test coverage while continuing development. I didn't want another tool or another VM running a fancy code review tool. I just wanted to see what my current test cases are covering.

**My class & test**

For all of you wanting to get working code I give you a <a href="http://codingdojo.org/cgi-bin/wiki.pl?KataCatalogue">code kata</a> that I created earlier. It's the <a href="http://codingdojo.org/cgi-bin/wiki.pl?KataFizzBuzz">FizzBuzz kata</a>, and it is already prepared to run with JMockIt.

<script src="https://gist.github.com/MoriTanosuke/615405.js"></script>

**How to create reports**

To create code coverage reports with JMockIt you don't have to go to hours and hours of tool setup before you get something done. Just drop these JAR in your classpath and you're setup to go:

  * jmockit.jar
  * <del>jmockit-coverage.jar</del>
  * jmockit-coverage-html[basic|full].jar
  * <del><em>JDK_HOME</em>/lib/tools.jar</del>

<del datetime="2009-11-18T08:53:23+00:00">When you're working inside <a href="http://eclipse.org/">Eclipse</a> I recommend adding the tools.jar as a user library. See the <a href="http://help.eclipse.org/ganymede/index.jsp?topic=/org.eclipse.jdt.doc.user/reference/preferences/java/buildpath/ref-preferences-user-libraries.htm">Eclipse documentation</a> for some help with that.</del>

<del datetime="2009-11-18T08:53:23+00:00"></del> <strong>Update:</strong> With Version 0.933+ you don't need the JDK `tools.jar` nor the `jmockit-coverage.jar` in your classpath anymore. That reduces the setup to 2 JAR files. Notice that you only need the `jmockit-coverage-htmlbasic.jar`> if you intend to view the report only in Eclipse. The FULL report has additional information, that might be useful to you, but I prefer fast tests and simple reports while developing. <em>Thanks for the tips, Rog&eacute;rio</em>.

Now run your <a href="http://www.junit.org/">JUnit test</a> and you get a directory coverage-report with an index.html file in it. Open it in your favorite browser (or with the <a href="http://eclipse.org/home/categories/index.php?category=enterprise">Eclipse/Java EE</a> internal web browser) and you see a report.

When you dig into the FizzBuzz.java you see the details:

<img src="alreadydeleted.png" width="500" height="446"/>

Do you smell something? What is that red line about? Is there code that is redundant or maybe plain wrong? Is the testcase testing the wrong things or taking false results for true? If you stumble upon something like this, this is the point where you notice that quick coverage reports are worth the setup time.

There is also a way of creating the reports from your ant script. But I'll save that for a later blog post. If you want to try it yourself, go read the official documentation about JVM parameters.

**What I think about it**

This is as easy as code coverage gets: Covered lines are green, uncovered lines are red. You even get a little counter before each line telling you how many times this line was hit. Searching for performance bottlenecks? Start looking on high line counters. A whole method appearing in red? Examine the preconditions and write a test that calls that method.

Best thing on JMockIt coverage reports is: They don't slow down your tests very much. You can just drop the JARs in your classpath and continue with your unit testing. If you want to check on your current coverage status, open the report and take a quick look. I think this is easy enough for every developer to integrate into his process. And you are already doing unit tests, right? So it shouldn't take you more than a few mouse clicks to get a first coverage report...
