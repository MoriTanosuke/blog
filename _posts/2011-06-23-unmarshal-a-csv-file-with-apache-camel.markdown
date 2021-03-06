---
title: 'Unmarshal a CSV file with Apache Camel'
date: 2011-06-23 00:00:00
tags: apache camel
layout: post
---
<p>Today I tried to work with <a href="http://camel.apache.org/">Apache Camel</a> for the first time. I'm currently reading the book <a href="http://www.manning.com/ibsen/">Camel in Action</a> and want to try the example with data that has a meaning to me. I decided to follow the examples of <em>Chapter 3: Transforming data with Camel</em> and try to read rows from a CSV file and convert them with <a href="http://camel.apache.org/bindy.html">Bindy</a> into annotated POJOs.</p>

<p>But, oh boy, is the documentation lacking. And the book is not helping me at all at this point. The examples there look easy and when you're reading the book you can follow the thoughts. But when I actually tried to write my first unit test without pasting the whole examples into your project, I got lost. The documentation of <em>Bindy</em> is very confusing if you only start writing tests for Camel. And the examples tests they show in the docs are so complicated I couldn't strip them down to a minimal version that would just read the CSV and unmarshal the rows into POJOs.</p>

<div style="float: left;"><script type="text/javascript"><!--
google_ad_client = "ca-pub-1325997557962631";
/* blog.kopis.de */
google_ad_slot = "5306287908";
google_ad_width = 234;
google_ad_height = 60;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script></div>

<p>And what do you do if you can't figure out how to do stuff? <a href="http://stackoverflow.com/q/6458841/834">You post a question on StackOverflow.</a></p>

<p>And right after I posted that question, I got the test running. Isn't it always like that? As soon as you ask for help, you find the solution to your problem. As if I'm afraid to let others see how much I suck. Anyway, here is a working junit test that will unmarshal a CSV into POJOs with the use of an annotated java bean:</p>

<h2>CsvBean.java</h2>

<script src="https://gist.github.com/1043310.js?file=CsvBean.java"></script>

<h2>CsvToBeanWithBindyTest.java</h2>

<script src="https://gist.github.com/1043310.js?file=CsvToBeanWithBindyTest.java"></script>

<p>You can <a href="https://gist.github.com/1043310">get the complete example in this gist</a>.</p>

<p>The confusing thing is that I don't get a list of <code>CsvBean</code>s, but a list of <code>Map</code>s that have an entry with the key set to the name of my class and the value set to the actual unmarshalled <code>CsvBean</code>. That was a surprise, and I don't know yet what that means. I think there's more to the CSV than I can see now, maybe having multiple bean classes unmarshalled from the CSV when there is a different number of columns in the rows.</p>

<p>HTH.</p>
