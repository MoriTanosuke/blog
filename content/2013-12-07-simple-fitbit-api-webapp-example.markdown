---
title: 'Simple Fitbit API webapp example'
date: "2013-12-07"
tags: 
layout: post
---
Yesterday I decided to create a simple web application that demonstrates how to authorize with the [Fitbit API][3] and extract data from your account. You can see the result [on my github repository][0]. You can also download a [runnable version of my webapp][1] - all you need is [Java][2].

Ok, now let's get to the details. :-)

First of all, I didn't want any bloated framework to create a very simple example application, so I decided to use the [Spark framework][4] to build my web application. If you are familiar with frameworks like [Sinatra][5] or [NodeJS][6] you will feel at home. It's a very basic framework, and you have to care only about the bare minimum to get a web application running. I'll use a lot of *Spark/Sinatra/Node-lingo* now.

Here's the main part of my application, the *routes* that are responsible for authorization with Fitbit, retrieving steps data and finally displaying the step count as a graph:

<script src="https://gist.github.com/MoriTanosuke/7839061.js?file=Login.java"></script>
<noscript>You can find the code at <a href="https://gist.github.com/MoriTanosuke/7839061.js?file=Login.java">my gist</a></noscript>

*Please note that I left out the error handling and some other things for brevity. If you want to see the full code, go to my [github repository][0].*

The first *route* `/login` is responsible to create the redirect to the authorization page if no credentials are found for the current user. After authorization the user is redirected back to the application where she ends up in the `/login` route again, this time with valid authorization *query parameters* (if parameter `completeAuthorization` is found, Fitbit completed the authorization for the user successfully). I'm then storing the credentials in the Fitbit API client `fitbit`, putting the `user` and the `client` into the *session* and redirect to the *route* `/steps`.

<script src="https://gist.github.com/MoriTanosuke/7839061.js?file=Steps.java"></script>
<noscript>You can find the code at <a href="https://gist.github.com/MoriTanosuke/7839061.js?file=Steps.java">my gist</a></noscript>

The *route* `/steps` then makes a call to the [Fitbit API][3] and retrieve the steps for the last 7 days. The method `loadData(...)` uses the fitbit client to get a [TimeSeries][7] of `TimeSeriesResourceType.STEPS` for a period of `TimePeriod.ONE_WEEK`.

<script src="https://gist.github.com/MoriTanosuke/7839061.js?file=SparkAppLoadData.java"></script>
<noscript>You can find the code at <a href="https://gist.github.com/MoriTanosuke/7839061.js?file=SparkAppLoadData.java">my gist</a></noscript>

Then the *route* redirects to a [freemarker template][8] that uses [Google Chart API][9] and iterates over the time series data to create the javascript code to populate the graph:

<script src="https://gist.github.com/MoriTanosuke/7839061.js?file=steps.ftl"></script>
<noscript>You can find the code at <a href="https://gist.github.com/MoriTanosuke/7839061.js?file=steps.ftl">my gist</a></noscript>

If you have any questions, feel free to leave a comment or contact me on [Google+][10].

[0]: https://github.com/MoriTanosuke/fitbit-webapp-example
[1]: https://github.com/MoriTanosuke/fitbit-webapp-example/releases
[2]: http://www.oracle.com/technetwork/java/index.html
[3]: http://dev.fitbit.com/
[4]: http://www.sparkjava.com/
[5]: http://www.sinatrarb.com/
[6]: http://nodejs.org/
[7]: https://wiki.fitbit.com/display/API/API-Get-Time-Series
[8]: http://freemarker.org/
[9]: https://developers.google.com/chart/
[10]: https://plus.google.com/+CarstenRinge

