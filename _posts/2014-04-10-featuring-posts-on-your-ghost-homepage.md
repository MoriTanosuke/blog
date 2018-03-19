---
title: "Featuring posts on your Ghost homepage"
layout: post
---
After waking up really early today 😴 I wanted give my Ghost blog homepage an overhaul. Because [I don't have a simple solution to exclude posts][0] based on a specific tag, I wanted to give *non-WOD* posts more room at the top of the page.

Fortunately with [Ghost 0.4][1] you can *feature* a post and your theme can check for those featured post. My theme [kopis-ghost-theme][2] now includes code like this:

````
{% raw %}
    {{! Display featured posts at the top }}
    {{#foreach posts}}
    {{#if featured}}
    <article class="{{post_class}} .featured">
        <header class="post-header">
            <span class="post-meta"><time datetime="{{date format='YYYY-MM-DD'}}">{{date format="DD MMM YYYY"}}</time> {{#if tags}}on {{tags}}{{/if}}</span>
            <h2 class="post-title"><img src="/assets/images/emoji/star.png" class="featured" title="featured post" alt="featured post" /><a href="{{url}}">{{{title}}}</a></h2>
        </header>
        <section class="post-social">
            <a href="{{url}}#disqus_thread">0 Antworten</a>
            <g:plusone href="{{url}}" size="small">
        </section>
        <section class="post-excerpt">
            <p>{{excerpt}}&hellip; <a href="{{url}}">weiterlesen</a></p>
        </section>
    </article>
    {{/if}}
    {{/foreach}}

    {{! Display regular posts }}
    {{#foreach posts}}
    {{#unless featured}}
    <article class="{{post_class}}">
        <header class="post-header">
            <span class="post-meta"><time datetime="{{date format='YYYY-MM-DD'}}">{{date format="DD MMM YYYY"}}</time> {{#if tags}}on {{tags}}{{/if}}</span>
            <h2 class="post-title"><a href="{{url}}">{{{title}}}</a></h2>
        </header>
        <section class="post-social">
            <a href="{{url}}#disqus_thread">0 Antworten</a>
            <g:plusone href="{{url}}" size="small">
        </section>
        <section class="post-excerpt">
            <p>{{excerpt}}&hellip; <a href="{{url}}">weiterlesen</a></p>
        </section>
    </article>
    {{/unless}}
    {{/foreach}}
{% endraw %}
````

With `{% raw %}{#if featured}...{/if}{% endraw %}` you can check if the post is a featured post inside your `foreach posts` loop. You can then modify the CSS class, for example.

Unfortunately I have to loop over the posts twice: first to write out all featured posts, then to write out all regular posts. Done that way, the featured post will appear at the top of the page. There is no easy way - *yet* - to reorder the posts on a given page before going into the `foreach posts` loop. :unamused: If you're good with CSS you can maybe reorder the posts on the client-side, but I'd much prefer to keep those things on my server before rendering the page.

**Do you use a custom theme on your Ghost installation? Or do you keep the default *casper* installation?**

[0]: http://blog.kopis.de/exclude-posts-from-your-ghost-frontpage/
[1]: http://blog.ghost.org/ghost-0-4/
[2]: https://github.com/MoriTanosuke/kopis-ghost-theme

