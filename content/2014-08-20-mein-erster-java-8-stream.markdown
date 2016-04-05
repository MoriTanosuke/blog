---
title: 'Mein erster Java 8 Stream'
date: "2014-08-20"
tags: java
layout: post
---
Heute habe ich mich mal in [Java 8][0] eingelesen und mir dafür als erstes die [Stream API][1] vorgenommen. Wenn Du noch nie etwas davon gehört hast, hilft Dir vielleicht [mein Junit Test][2], den ich als allererste Klasse mit Sprachelementen aus Java 8 geschrieben habe. Von dort aus sind die ersten Links in die [Stream API][1] gemacht und Du solltest ein paar Punkte zum Weiterlesen haben.

<script src="https://gist.github.com/MoriTanosuke/4f5d84916fae5d2f7f07.js"></script>
<noscript>
<pre>
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.Assert.assertEquals;

public class SortApplesTest {
    private List<Apple> apples = new ArrayList<Apple>();

    @Before
    public void setUp() {
        apples.clear();

        apples.add(new Apple("green"));
        apples.add(new Apple("green"));
        apples.add(new Apple("red"));
        apples.add(new Apple("yellow"));
    }

    @Test
    public void sortGreenApples() {
        final List<Apple> greenApples = apples.stream().filter(a -> a.color.equals("green")).collect(Collectors.toList());
        assertEquals(greenApples.size(), 2);
    }
}
</pre>
</noscript>

Den Code findest Du auch unter https://gist.github.com/MoriTanosuke/4f5d84916fae5d2f7f07

Falls Du ein Buch für den Einstieg suchst, ich kann [Java 8 in Action][3] empfehlen. :smile:

[0]: https://jdk8.java.net/
[1]: http://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html
[2]: https://gist.github.com/MoriTanosuke/4f5d84916fae5d2f7f07
[3]: http://www.manning.com/urma/

