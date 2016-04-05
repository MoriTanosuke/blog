---
title: 'Minimum working example for fitbit4j'
date: "2012-05-30"
tags: 
layout: post
---
**Update**: I build a complete project with Maven now that you can check
out at [my github repository][7]. Feel free to
fork the repository and build on it.

----

Yesterday [someone][0] asked me to help out with the first steps with
the [Fitbit API][1] and [fitbit4j][2]. And although I think
[fitbit4j][2] is bloated almost to unusability I wanted to verify my
sentiments and try to build a simple example application that reads out
basic data. This should be a very easy tutorial for the *Fitbit API*.

Here is what I got [after revisiting the help I got from the development
group][3] when I started:

<script src="https://gist.github.com/2829240.js?file=FitbitConsoleApplication.java"></script>

Make sure your fitbit application is setup as a *desktop* application to
give you the PIN. The output of the application will show your *display
name* and the registration date on [fitbit.com][4].

This is the most basic application that has access to the [Fitbit
API][1] using their own library. Isn't that a little too much just to
get data from a REST API? They're forcing a `FitbitApiCredentialsCache`,
a `FitbitAPIEntityCache`, a `FitbitApiSubscriptionStorage` and the
instantiation of a `FitbitAPIClientService<FitbitApiClientAgent>` down
my throat. Compare that to the same actions in [Ruby][5]:

<script src="https://gist.github.com/2829240.js?file=fitbit_console_application.rb"></script>

Much cleaner. Just avoiding all the boilerplate about the caches and
storages would make [fitbit4j][2] so much easier to use. Well, that is
exactly the reason why I decided to lern myself some [Ruby On Rails][5]
while building the [fitbit analyzr][6]. No java webapp, no fitbit4j.
Since then I never looked back and I'm happily building my application
with Rails. :-)

[0]: http://orange.imlab.cc/
[1]: http://dev.fitbit.com/
[2]: https://github.com/Fitbit/fitbit4j
[3]: https://groups.google.com/d/topic/fitbit-api/9Y6IANPM5qU/discussion
[4]: http://fitbit.com/
[5]: http://rubyonrails.org/
[6]: http://fitbitanalyzr.heroku.com/
[7]: https://github.com/MoriTanosuke/fitbit-cli-example
