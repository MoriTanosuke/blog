---
title: 'Clashing Spring placeholders with Camel "simple" language'
date: "2014-02-04"
tags: camel spring apache
layout: post
---
Today I tried to build a dynamic endpoint URL for one of my [camel][0] routes. I am using the [Spring properties bridge][2] to load configuration parameters and I try to build the endpoint URL using my configuration and request headers.

This is what my [recipientList][1] looks like:

    restlet:{{configuration.baseUrl}}?parameter=$simple{in.header.myHeader}

The important part is the `$simple{in.header.accessToken}`. First I was using the usual Camel syntax `${in.header.accessToken}`, but always got an exception on startup stating

    Could not resolve placeholder 'in.header.myHeader' in string value "restlet:MYBASEURL?parameter=${in.header.myHeader}"

The solution is to make the use of the *simple* language explicit like in `$simple{in.header.myHeader}`.

[0]: https://camel.apache.org/
[1]: https://camel.apache.org/recipient-list.html
[2]: https://camel.apache.org/using-propertyplaceholder.html

