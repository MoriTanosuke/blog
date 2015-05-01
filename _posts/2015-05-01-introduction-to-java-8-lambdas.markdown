---
layout: post
title: Introduction to Java 8 Lambdas
---
If you read about the [Java 7 EOL][0] and you worry about all the changes that [Java 8][1] brings, I want to show you how to bring your code from previous styles into the new stream-and-lambda-shinyness of Java 8. Getting my head around lambdas was a major step for me, but since I started that in other languages (mostly [Clojure][2]) I thought it would be helpful to write a blog post about the Java way of doing Lambdas as well.

Let's start with a simple class, an Apple.

<pre class="brush: java">
public class Apple {
  private String color;
  private double weight;

  public Apple(String color, double weight) {
    this.color = color;
    this.weight = weight;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public double getWeight() {
    return weight;
  }

  public void setWeight(double weight) {
    this.weight = weight;
  }
}
</pre>

An Apple has a color and a weight. We want to be able to sort apples by both of this features. Let's write a [JUnit Test][3], *Java 7-style*.

<pre class="brush: java">
import static org.junit.Assert.assertEquals;
 
import java.util.ArrayList;
import java.util.List;
 
import org.junit.Before;
import org.junit.Test;
 
public class SortApplesTest {
 
  private List<Apple> unsorted;
 
  @Before
  public void createApples() {
    unsorted = new ArrayList<>();
    for (int i = 1; i < 10; i++) {
      unsorted.add(new Apple("red", 1.23));
    }
    unsorted.add(new Apple("green", 2.34));
  }
 
  @Test
  public void canSortApplesByColor() {
    List<Apple> green = filterApples(unsorted, new AppleColorPredicate("green"));
    assertEquals(1, green.size());
  }
 
  @Test
  public void canSortApplesByWeight() {
    List<Apple> green = filterApples(unsorted, new AppleMinimumWeightPredicate(2.0));
    assertEquals(1, green.size());
  }
 
  private List<Apple> filterApples(List<Apple> unsorted, ApplePredicate colorPredicate) {
    List<Apple> sorted = new ArrayList<>();
    for (Apple apple : unsorted) {
      if (colorPredicate.test(apple)) {
        sorted.add(apple);
      }
    }
    return sorted;
  }
}
</pre>

To be a little more flexible with my code, I created an interface `ApplePredicate` to encapsulate the code that is doing the comparision of the `Apple` and the sort criteria.

<pre class="brush: java">

interface ApplePredicate {
  public boolean test(Apple apple);
}
 
class AppleColorPredicate implements ApplePredicate {
  private final String color;
 
  public AppleColorPredicate(String color) {
    this.color = color;
  }
 
  public String getColor() {
    return color;
  }
 
  @Override
  public boolean test(Apple apple) {
    return apple.getColor().equals(color);
  }
 
}
 
class AppleMinimumWeightPredicate implements ApplePredicate {
 
  private final double weight;
 
  public double getWeight() {
    return weight;
  }
 
  public AppleMinimumWeightPredicate(double weight) {
    super();
    this.weight = weight;
  }
 
  @Override
  public boolean test(Apple apple) {
    return apple.getWeight() > weight;
  }
}
</pre>

Now, how do we start to refactor this code *Java 8-Style*? First, let's remove some of the boilerplate and use [anonymous classes][4] for the `ApplePredicate` implementations:

<pre class="brush: java">
  @Test
  public void canSortApplesByColor() {
    List<Apple> green = filterApples(unsorted, new ApplePredicate() {
      @Override
      public boolean test(Apple apple) {
        return apple.getColor().equals("green");
      }
    });
    assertEquals(1, green.size());
  }
 
  @Test
  public void canSortApplesByWeight() {
    List<Apple> green = filterApples(unsorted, new ApplePredicate() {
      @Override
      public boolean test(Apple apple) {
        return apple.getWeight() > 2.0;
      }
    });
    assertEquals(1, green.size());
  }
</pre>

That's a little better, we avoid creating 2 new files (or at least, 2 new classes) and the code that filters our `Apples` is right there for us to read. In Java 8, there is a shorthand notation for this kind of code (an anonymous inner class with only one method): [the *lambda*][6]. Let's rewrite the code with our first lambda:

<pre class="brush: java">
  @Test
  public void canSortApplesByColor() {
    List<Apple> green = filterApples(unsorted, (Apple apple) -> apple.getColor().equals("green"));
    assertEquals(1, green.size());
  }
 
  @Test
  public void canSortApplesByWeight() {
    List<Apple> green = filterApples(unsorted, (Apple apple) -> apple.getWeight() > 2.0);
    assertEquals(1, green.size());
  }
</pre>

Now that's short code, and we're still doing it in Java! :-) If you have experience with other languages, the syntax might look familiar. If you do most of your work in Java, this might hurt your eyes at first, but that goes away when you notice how much less boilerplate code you have to write.

There is another refactoring we can do to make the code more reusable and extensible. We can remove the type from the `ApplePredicate` so we can reuse it to sort oranges or cars or the famous `Employee` later in our project. Let's do that:

<pre class="brush: java">
interface Predicate<T> {
  boolean test(T t);
}
</pre>

Now we have to refactor the `filterApples` method:

<pre class="brush: java">
  private <T> List<T> filter(List<T> unsorted, Predicate<T> predicate) {
    List<T> sorted = new ArrayList<>();
    for (T element : unsorted) {
      if (predicate.test(element)) {
        sorted.add(element);
      }
    }
    return sorted;
  }
}
</pre>

You can see the whole code in [this gist][5]. I followed the [java tutorial on Lambdas][6] closely and I suggest you go read that documentation now. It's worth it. :-) There are a lot of other changes that will make your code more concise and easier to read ([search for *Java 8 Streams*][7], for example).

I hope I get around writing some more blog posts about the changes. And I hope we all can move our production code forward into Java 8-land soon. If I ever have to see Java 1.4.2 on a server again, I will pull the plug. :boom:

[0]: http://www.oracle.com/technetwork/java/eol-135779.html
[1]: http://www.oracle.com/technetwork/java/javase/8-whats-new-2157071.html
[2]: http://clojure.org/
[3]: http://junit.org/
[4]: https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html
[5]: https://gist.github.com/MoriTanosuke/2f059e955cb12c5b9783
[6]: https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html
[7]: http://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html
