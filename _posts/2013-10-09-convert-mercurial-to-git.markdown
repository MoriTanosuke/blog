---
layout: post
title: "Converting a mercurial repository into a git repository"
---

Today I cloned a [mercurial][0] repository, because I'm using an android application that I may have some contributions for. The project is hosted on [Google Code][1] and is using a mercurial repository since the beginning. I'm a [git][2] user myself, so I don't want to give up my practiced workflows.

After trying [hg-git][4] without success, I found [hg-fast-export][3]. With this little tool I was able to convert the cloned mercurial repository into a git repository:

<pre class="brush: bash">
git clone git://repo.or.cz/fast-export.git

hg clone URL_TO_ORIGINAL_REPOSITORY
mkdir my-new-git-repository
cd my-new-git-repository
git init
PATH_TO_FASTEXPORT/hg-fast-export.sh -r ../NAME_OF_ORIGINAL_REPOSITORY --force
</pre>

After this little dance I got a valid git repository with history, tags and branches. [hg-fast-export][3] should be able to do incremental imports, so I'm curious how it will handle my own local changes and incoming changes from the mercurial upstream later.

[0]: http://mercurial.selenic.com/
[1]: http://code.google.com/
[2]: http://git-scm.com/
[3]: http://repo.or.cz/w/fast-export.git
[4]: http://hg-git.github.io/

