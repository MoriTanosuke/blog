---
layout: post
title: 'Set up Thunderbird for S/MIME'
---
During the last couple of days I tried to set up my mail clients to sign mail with S/MIME using a certificate that I got for free from [StartCom][0]. This includes a mail client on my Android phone, on my laptop and desktops. I already use the certificate on my domains and I added my email address a couple of months ago. So everything was prepared already. So this post is about the set up of the clients only.

On my Android phone I switched from [K9 Mail][1] to [MailDroid][2], which is a fairly expensive app. Currently I'm still using the [free version][3] but I'm planning to pay the 20€ and get rid of the ads soon. To enable S/MIME signing and encryption, you have to install the [FlipdogSolutions Crypto Plugin][4] as well. After starting the crypto app, you can import your certificate and that's it for signing and encrypting your mail on Android.

On the desktops and laptops it was a bit more hassle to get set up. I am using [Thunderbird][5] as my mail client and tried to follow [the official documentation on S/MIME][6]. But when I tried to send a signed mail with my certificate, I would get an error dialog complaining about *missing trust* for the certificate. After researching articles on S/MIME (all several years old, looks like everyone gave up the encryption stuff for private email) I decided to just re-import all root certificates from StartCom and I discovered that I missed the *StartCom Class 1 Primary Intermediate Client CA* in Thunderbird.

To fix this error, you can go to the *StartSSL Control Panel*, click on the menu *StartCom CA Certificates* in your Tool Box and download the *StartCom Class 1 Primary Intermediate Client CA* certificate. Import it into Thunderbird as described [in the docs][6] and you should be able to send signed and encrypted mail without any issues.

Enjoy your new privacy! :smile:

[0]: https://startssl.com/
[1]: https://play.google.com/store/apps/details?id=com.fsck.k9
[2]: https://play.google.com/store/apps/details?id=com.maildroid.pro
[3]: https://play.google.com/store/apps/details?id=com.maildroid
[4]: https://play.google.com/store/apps/details?id=com.flipdog.crypto.plugin
[5]: https://www.mozilla.org/thunderbird/
[6]: http://kb.mozillazine.org/Installing_an_SMIME_certificate

