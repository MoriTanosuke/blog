---
layout: post
title: Introduction to Java 8 Lambdas
published: false
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

[0]: http://www.oracle.com/technetwork/java/eol-135779.html
[1]: http://www.oracle.com/technetwork/java/javase/8-whats-new-2157071.html
[2]: http://clojure.org/
[3]: http://junit.org/
