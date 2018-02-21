---
layout: post
title: "Match only your own email in Evolution filters"
---
Today I decided to clean up my email filters at work. [Scott Hanselman wrote about his routine again][0]. Here is the short version:

  * Only pay attention to emails that are directed to your email address and only your email address
  * If your address is in the `CC` or has a lot of recipients in the `To`, it's only informational
  * If the email is to a group, it's also only informational

With this general rules, the amount of emails that you have to take action to is limited. I tend to go over the informational emails only once per day, but if someone is emailing me directly with a question I want to know about it.

Unfortunately the filters in my current email client [Evolution][1] do not support a rule like "Match if my email is the only recipient". Additionally to that, in my current work environment it is pretty common to not use groups and email informational messages to a bunch of addresses directly. So I had to come up with a better way to filter my email, and that's how I got to this [regex][2] filter:

    To:[^@]*[Yy]ourName@example\.com[^@]*$

The *regex rule* for the filter has to be applied to the *mail header*, and it checks if there are no additional `@` characters besides your own email address. This way the filter will not match on multiple recipients. It will also ignore the various ways to write email addresses and names in the `To` header.

I'm not quite sure if this will match for all emails I get, but it's a good starting point to add additional rules or filters. If you do know a better way to filter emails that were sent just to my own email address, please let me know.


[0]: https://www.hanselman.com/blog/OneEmailRuleHaveASeparateInboxAndAnInboxCCToReduceEmailStressGuaranteed.aspx
[1]: https://wiki.gnome.org/Apps/Evolution
