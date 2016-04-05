---
title: 'Commons Base64OutputStream - Principle of least surprise?'
date: "2013-10-24"
tags: 
layout: post
---
Yesterday I had the requirement to write [base64][0] encoded content mixed with non-base64 encoded content. I have to deal with potentially large files (hundreds of MBs), so I wanted to work with streams to avoid memory issues. Also I am bound to an API of an external product, which hands an [InputStream][1] into my code and expects an [InputStream][1] back. (As a side note, did you know about [PipedInputStream][2] and [PipedOutputStream][3]?)

I am already using [commons-codec Base64 encoder][5] for small pieces of data, so I quickly discovered [Base64OutputStream][6] to write base64 encoded data in a streaming manner. I wrote a quick [junit test][7] to verify that my usage of this class produces the correct result and was somewhat surprised that 4 characters in the base64 encoded data were missing...

<script src="https://gist.github.com/MoriTanosuke/7129937.js"></script>

See the full git repository of the code at https://gist.github.com/MoriTanosuke/7129937.

As you can see above, *not closing* the [Base64OutputStream][6] does not produce the correct base64 encoded data. Only if I call *#close()* after writing into the stream, the missing bytes are encoded and written into the stream. Because I wrapped the [Base64OutputStream][6] around a [PipedOutputStream][3] and have to write additional non-base64 encoded data into it afterwards, I can not close the stream.

The solution for me was to switch to [Base64InputStream][8] and have *commons-codec* do the encoding when I read from my original *InputStream* source. That way I get valid base64 data for all my tested inputs. I tried to call *#flush()* instead, but that does not write the missing bytes into the stream. A quick peek into the sourcecode revealed that the code in question is only executed in the method *#close()*.

This was kind of surprising, because the [official javadoc in OutputStream#flush][9] says

> Flushes this output stream and forces any
> buffered output bytes to be written out. The
> general contract of flush is that calling it
> is an indication that, if any bytes previously
> written have been buffered by the implementation
> of the output stream, such bytes should
> immediately be written to their intended
> destination. 

It took me only a couple of minutes to switch from [Base64OutputStream][6] to [Base64InputStream][8], but if my test string in the unit test was just one character different, I'd not have catched this prior to integration testing - which is always a headache if you're trying to make systems talk to each other and you have this kind of unexpected behavior somewhere deep down in the guts of your code. 

[0]: https://en.wikipedia.org/wiki/Base64
[1]: http://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html
[2]: http://docs.oracle.com/javase/7/docs/api/java/io/PipedInputStream.html
[3]: http://docs.oracle.com/javase/7/docs/api/java/io/PipedOutputStream.html
[4]: https://en.wikipedia.org/wiki/Principle_of_least_astonishment
[5]: http://commons.apache.org/proper/commons-codec/javadocs/api-release/org/apache/commons/codec/binary/Base64.html
[6]: http://commons.apache.org/proper/commons-codec/javadocs/api-release/org/apache/commons/codec/binary/Base64OutputStream.html
[7]: http://junit.org/
[8]: http://commons.apache.org/proper/commons-codec/javadocs/api-release/org/apache/commons/codec/binary/Base64InputStream.html
[9]: http://docs.oracle.com/javase/7/docs/api/java/io/OutputStream.html#flush%28%29

