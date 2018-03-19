---
title: 'Exclude posts from your Ghost frontpage'
date: 2014-04-05 00:00:00 
tags: ghost-tag
layout: post
---
Today I tried to exclude posts tagged `wod` from my frontpage. The blogging software [Ghost][0] that I am using to run this blog recently [released v0.4.2][1] which supports the [new `#has` helper][2].

Unfortunately the new helper is not documented, so after reading some of the discussions on the pull requests and the issues I just tried to code the necessary part in my `index.hbs` file:

````
{% raw %}
    {{! Don't output posts tagged 'wod' on frontpage }}
    {{#has tag="wod"}}
    {{else}}
      <OUTPUT POST AS USUAL>
    {{/has}}
{% endraw %}
````

Now all posts tagged `wod` were excluded from the listing on my frontpage. :triumph: But when I clicked through the pagination, I noticed that instead of having 5 posts on all pages I got varying number of posts - the helper excluded the posts, but the pagination is not aware of this change in the list of posts to display. :neutral_face:

Maybe I didn't get the `{% raw %}{{#has}}{% endraw %}` helper right, or maybe there is a better method to exclude posts before they hit the frontpage at all.

**Do you exclude posts from your frontpage using Ghost? If so, I'd be more than happy if you leave a comment.**

[0]: https://ghost.org/
[1]: https://github.com/TryGhost/Ghost/releases/tag/0.4.2
[2]: https://github.com/TryGhost/Ghost/issues/2115
[3]: https://github.com/TryGhost/Ghost/issues/2115#issuecomment-39632860

