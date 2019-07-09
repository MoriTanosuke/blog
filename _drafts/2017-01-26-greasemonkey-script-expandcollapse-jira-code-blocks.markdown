---
layout: post
title: "Greasemonkey Script to expand/collapse JIRA code blocks"
---
Recently the company I am working for switched to [JIRA][0] as our issue tracker. In general, I'm very happy with this, because the software we were using before didn't really understand Agile and the Board and various fields felt tacked on and not really integrated. The software was also a bit picky how to let the user do stuff.

But what I was missing is expanding/collapsing code blocks in comments and descriptions. This was very handy when you paste really long stacktraces or XML parts. [In JIRA this is not possible][1] without the help of a plugin ([plugin1][2] for example). So I decided to write a little greasemonkey userscript to do it. And here it is:

<pre class="brush: js">
// ==UserScript==
// @name           JIRA Collapsible Code
// @namespace      jira_collapsible_code
// @version        0.1
// @description    Makes PRE panels in JIRA collapsible
// @author         Carsten Ringe
// @match          https://yourjirahost/*
// ==/UserScript==

(function() {
    'use strict';

    // add style for collapse button
    $(".code.panel").each(function() {
        var random = new Date().getTime();
        var $panel = $(this);
        var $clicker = $('&lt;div style="width: 98%; border: 1px solid gray; padding: 2px; background: lightgray; border-radius: 3px;"&gt;Expand&lt;/div&gt;', {
            class: 'code-collapse',
            id: 'code-collapse-' + random,
            text: function() {
                return ($panel.is(':visible') ? 'Collapse' : 'Expand') + ' code';
            }
        });
        $panel.hide();
        $clicker.click(function () {
            var $header = $(this);
            var $content = $panel;
            //getting the next element
            $content.slideToggle(500, function() {
                $header.text(function() {
                    return ($content.is(':visible') ? 'Collapse' : 'Expand') + ' code';
                });
            });
        });
        $panel.prev().append($clicker);
    });
})();
</pre>

[0]: https://www.atlassian.com/software/jira
