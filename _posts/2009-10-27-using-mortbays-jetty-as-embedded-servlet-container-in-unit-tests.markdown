---
title: 'Using Mortbays Jetty as embedded servlet container in unit tests'
date: 2009-10-27 00:00:00 
tags: 
layout: post
---
<p><em>Ich habe diesen Blogeintrag in einem Firmenblog ver&ouml;ffentlicht, daher ist er in Englisch. Und bitte:</em></p>

<p>Today I created a simple unit test that runs <a href="http://www.mortbay.org/jetty/">Mortbays Jetty</a> as an embedded servlet container for a unit test with <a href="http://www.junit.org/">JUnit 4</a>. It's quite simple to run the ServletTester and add Servlets to it, so you can create HTTP requests and assert against the responses.</p>

<p>To run Jetty you need the following JAR files in your classpath:</p>

<ul>
<li>jetty-6.X.Y.jar</li>
<li>jetty-servlet-tester-6.X.Y.jar</li>
<li>jetty-util-6.X.Y.jar</li>
<li>servlet-api-2.5-*.jar</li>
</ul>

<p>The <em>HelloServletTest</em> simply sets up Jetty to initialize a servlet, runs one test and stops Jetty after it. The <em>HelloServlet</em> I used for the first test. It's the obvious <em>Hello World</em> example.</p>

<p>Now you can remove <em>HelloServlet</code>, add your own servlet classes and go unit test them. ;-)</p>

<script src="https://gist.github.com/MoriTanosuke/611340.js"></script>
