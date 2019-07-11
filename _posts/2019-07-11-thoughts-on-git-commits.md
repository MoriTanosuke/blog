---
layout: post
title: "Thoughts on git commits"
tags: git development
featured_image: /images/featured/git-model.png
---
Over the last few days I read articles about git commits and commit messages
[here][0], [here][1] and [here][2]. I don't know if the article are new or
years old, but I started to reflect on my usage of git and how I create my
commit messages.

First of all, there are two differences I make: personal repositories that only
I work on and that I won't share with anyone else (although they might be
public on github) and professional repositories that I share with others or
where I work together with a team. They have different rules in my head, and
so my commit messages look a lot different. On the other hand, handling of
branches is not different at all. So, let's go over how I use branches first.

I have one rule: **Use a branch for everything.**

First exception to that is fixing a typo, if it's changing just on letter.
Everything else goes into a branch first. This is useful if I decide to commit
a bunch of nonsense and drop all those commits again after recognizing that I
totally lost track of the goal I set out to achieve or if I want to rewrite
history to please my esthetical brain. I also tend to rewrite commit messages
a lot after reading them in my git log. Usually my workflow goes like this:

  * Starting working on a bugfix or feature, create a branch.
  * The initial commit has a message that follows [the pattern described here][3].
  * Commit a bunch of stuff, sometimes WIP commits which are not a fully
    functional thing on their own, but just a *savepoint*.
  * Interactive rebase when I'm done to re-order, squash or split commits. Goal
    is to bring the number of commits down as much as I can without
    sacrificing understandability. This might end up as one big commit, but
    for reviews I like to keep things a bit more separated - makes it easy to
    follow my thoughts. I can always squash everything into a single large
    commit before merging.
  * Push to remote.
  * Get a review (automated for boring stuff, from a real person for the
    interesting things).
  * Maybe rebase on branch *master* to avoid garbled history on the main branch.
  * Merge with `--ff-only` to make sure the history is clean.

I like [the branch model described in the post "*A successful git branching
model*"][4], but I can also work with just a master branch - as long as I can
have my own feature branches on remote while working, to have the CI do
all the automated checks and run my tests.

![]({{ site.baseurl }}/images/featured/git-model.png)

Now, let's talk about commit messages. First my rules for professional
repositories which I share and work with other people. Most important rule:
**The first line is a short summary of what the commit does.** And I'm not
talking about "*Fix stuff*" and the like. I also like to include a reference
to the issue tracker on the first line, at the start of the message. If you
generate your changelogs from git history, this will make it a lot better.

The rest of the message is a description of *WHY* the commit does what it does
and details about the most important parts of the change. This should read like
the summary at the start/end of a non-fiction book with the big picture
overview. The message should also answer these questions ([see this post][5]):

  * Why is it necessary?
  * How does it address the issue?
  * What effects does the patch have?

This way your tools display nice to read, descriptive one-liners and you can
read the summary chapters if you want to or if you're looking for a specific
commit.

For personal, non-shared repositories I'm less strict. If you look into [the
git log for this blog][6], for example, there is a lot of "*new post*" and
"*fix link to heroku*" going on. Because it's also not sourcecode, I don't really
care that much. Nothing breaks if I fix image URLs, no money is lost by a
business and there simply isn't much that I need to write down for myself for
reference later on if I add an image to a post. 🤷‍♂️ Most of the changes in this
commits are perfectly described by a short one-liner message that says
"*new post*", for example when I add this article to my blog.

Ok, before I start rambling now about messy git histories on the main branch and
how people don't follow simple naming patterns on branches or how nobody seems
to know how to squash commits, I'll just stop here. There are some good articles
linked, you should read them and try to write a better commit message for your
next commit.

[0]: https://victoria.dev/verbose/git-commit-practices-your-future-self-will-thank-you-for/
[1]: https://chris.beams.io/posts/git-commit/
[2]: https://victoria.dev/verbose/an-automatic-interactive-pre-commit-checklist-in-the-style-of-infomercials/
[3]: https://github.com/torvalds/subsurface-for-dirk/commit/b6590150d68df528efd40c889ba6eea476b39873
[4]: https://nvie.com/posts/a-successful-git-branching-model/
[5]: http://who-t.blogspot.com/2009/12/on-commit-messages.html
[6]: https://github.com/MoriTanosuke/blog/commits/master
