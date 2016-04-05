---
layout: post
title: 'Creating a Git repository on Amazon CodeCommit'
date: "2015-07-14"
---
A few days ago I read about [Amazon CodeCommit][0], a git repository hosting service running in Amazons cloud. Of course I had to try it, so I decided to import my [GlacierUploader][1] to a new repository - fitting project for a CodeCommit repository. :smile:

Here's the series of steps I had to go through to get my code into [CodeCommit][0]:

* [Set up my IAM user with appropriate policies][3]
* [Set up *CodeCommit* to accept my SSH key][2]
  Little caveat here: You have to put your *SSH key ID* into `~/.ssh/config` - took me a little while to get this right, I was putting my IAM username there which will result in an error message like `A client error (UnrecognizedPublicKeyEncoding) occurred when calling the UploadSSHPublicKey operation: Invalid public key uploaded.`
* [Install the AWS command line interface][1]
* Add a new Git *remote* to my local repository to push the current code: `git add remote amazon your-url-to-the-codecommit-repo`
* Push my repo to [CodeCommit][0]: `git push amazon master`

Done. :thumbsup:

I'm not quite sure if I want to use Amazons service to host my Git repositories. Most of my repositories are public and on [Github][4] anyway, and my private repositories are hosted on my own server... but it's good to have an alternative to Github, in case the company does wrong in the future - can't see that coming, but you never know.

[0]: https://aws.amazon.com/codecommit/
[1]: http://docs.aws.amazon.com/cli/latest/userguide/installing.html
[2]: https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html
[3]: https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up.html#setting-up-assign-permissions
[4]: https://github.com/MoriTanosuke
