---
layout: post
title: 'Apache Wicket on Google AppEngine'
published: false
---
A couple of days ago I decided to build a small application that I can use to track time spent on a certain task. Because I like [Google AppEngine][0] and I want to get into [Apache Wicket][1], I decided to switch from the [javascript application from the AppEngine tutorial][2] to a simple Wicket application.

I start with generating the project skeleton via the archetype:

````
mvn archetype:generate -Dappengine-version=1.9.27 -Dapplication-id=your-app-id -Dfilter=com.google.appengine.archetypes:
````

First of all, Google AppEngine is based on Servlet API 2.x, so I have to stick with Wicket 6.x. The recommended Java version is *Java 7*, so we need to setup the maven configuration to use Java 7:

````
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <version>3.2</version>
    <artifactId>maven-compiler-plugin</artifactId>
    <configuration>
	<source>7</source>
	<target>7</target>
    </configuration>
</plugin>
````

We need the [Apache Wicket][1] dependencies as well, I'm using verion *6.20.0* in my sourcecode:

````
<dependency>
    <groupId>org.apache.wicket</groupId>
    <artifactId>wicket-core</artifactId>
    <version>${wicket.version}</version>
</dependency>
<dependency>
    <groupId>org.apache.wicket</groupId>
    <artifactId>wicket-datetime</artifactId>
    <version>${wicket.version}</version>
</dependency>
<dependency>
    <groupId>org.wicketstuff</groupId>
    <artifactId>wicketstuff-gae-initializer</artifactId>
    <version>${wicket.version}</version>
</dependency>
````

As you can see, I added `org.wicketstuff:wicketstuff-gae-initializer` as a dependency. This little gem should set up everything to run Wicket on Google AppEngine. Ok, now it's time to move to [Apache Wicket][1]. Edit the `web.xml`:

````
<?xml version="1.0" encoding="utf-8" standalone="no"?>
<web-app xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.5"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">
    <servlet>
        <servlet-name>SystemServiceServlet</servlet-name>
        <servlet-class>com.google.api.server.spi.SystemServiceServlet</servlet-class>
        <init-param>
            <param-name>services</param-name>
            <param-value>my.google.cloud.endpoint.API</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>SystemServiceServlet</servlet-name>
        <url-pattern>/_ah/spi/*</url-pattern>
    </servlet-mapping>

    <filter>
        <filter-name>wicket.wicket-quickstart</filter-name>
        <filter-class>org.apache.wicket.protocol.http.WicketFilter</filter-class>
        <init-param>
            <param-name>applicationClassName</param-name>
            <param-value>my.google.appengine.WicketApplication</param-value>
        </init-param>
        <init-param>
            <param-name>configuration</param-name>
            <param-value>deployment</param-value>
        </init-param>
    </filter>

    <filter-mapping>
        <filter-name>wicket.wicket-quickstart</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>
````

The class `my.google.appengine.WicketApplication` is the usual Wicket boilerplate to get started:

````
package my.google.appengine;

import my.google.appengine.pages.*;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.protocol.http.WebApplication;

import java.util.logging.Logger;

public class WicketApplication extends WebApplication {
    private static final Logger LOGGER = Logger.getLogger(WicketApplication.class.getName());

    @Override
    public Class<? extends WebPage> getHomePage() {
        LOGGER.fine("Returning application.");
        return HomePage.class;
    }

    @Override
    public void init() {
        super.init();
        LOGGER.info("Initializing application.");

        // configure nice URLs
        mountPage("/home", HomePage.class);
        mountPage("/list", AnotherListPage.class);
        mountPage("/edit/${key}", AnotherEditPage.class);
    }
}
````

I also use `mountPage(...)` to add some pages with nicer URLs. It's not needed, but the generated URLs are not how I roll. :smile: Now we're ready to deploy the application to Google AppEngine:

````
mvn appengine:deploy
````

If you are not yet logged in, your browser should open with an OAuth permission request. Accept it and the deployment should run. After everything is done. You can open your Wicket application on your appengine URL. If you don't know the URL yet, open your [Google Developer console][3] and go to *Compute -> AppEngine -> Versions*. There is one version and you can click the little icon next to the version number to open a new tab with your application.

[0]: https://cloud.google.com/appengine/docs/
[1]: https://wicket.apache.org/
[2]: https://cloud.google.com/appengine/docs/java/gettingstarted/introduction
[3]: https://console.developers.google.com/

