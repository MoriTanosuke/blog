---
layout: post
published: false
title: First steps with maven, cucumber and a java web application
---

Today I started to work on my first *executable specifications* with
[Cucumber][0], [Maven][1], [Selenium Webdriver][2] and a brownfield
*Java Web Application*. A couple of weeks ago I already started to write
a little *domain specific language* based on pure [Java][3] and
[Junit][4] - but although the test code is more readable then a simple
java unit test, it's not *non-programmer readable* like something build
with [rspec][5] or the like.

After the first chapters of [Specification by example][6] I decided to
start again with a standard framework. After browsing [stackoverflow][7]
and search the internets for a while, I settled down with *Maven*
(because that will be the weapon of choice for builds in the office) and
*Selenium Webdriver* (because I'm already familiar with the syntax and
the flow). Then comes *Cucumber* for the *executable specifications*.

After some confusing minutes after setting up the directory structure in
my Maven project, I started with my first test:

    Feature: Layout
      Scenario: Link to Terms & Conditions is available on Homepage
        Given I am an anonymous user
        When I open the "Homepage"
        Then there is a link to "Terms & Conditions"

To run this specification I need an accompanying Junit testcase that can
be executed by my java setup:

    import org.cucumber.Cucumber;
    
    @RunWith(Cucumber.class)
    public class LayoutTest {
    }

END

0: http://cukes.info/
1: http://maven.apache.org/
2: http://seleniumhq.org/docs/03_webdriver.html
3: http://java.sun.com/
4: http://junit.org/
5: http://rspec.info/
6: http://www.amazon.de/Specification-Example-Successful-Deliver-Software/dp/1617290084/kopisde-21
7: http://stackoverflow.org/

