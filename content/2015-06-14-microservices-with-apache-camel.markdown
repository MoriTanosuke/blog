---
layout: post
title: 'Microservices with Apache Camel - simple example'
---
Today I decided to play with [Apache Camel][0] to create some [microservices][3]. I know, microservices are the hot stuff right now, but usually one builds them with hot technology too. Like [Clojure][1] or [Scala][2]. Anyway, sometimes it's a good idea to stick with stable and known technology, especially if you are in an enterprise environment with strict rules. Or you want your developers to concentrate on the organisational changes that come with microservices instead of fiddling with new technology.

To get started, I decided that I want to use

* Maven to build the services
* [Docker][4] to deploy and run them
* Java/Apache Camel to implement them

That mix is conservative enough for a strict setting, using Java/Camel and Maven to develop the services. But with Docker I have one of the pieces in place that - in my opinion - will get traction in the mainstream Enterprise world in the next 2 or 3 years as well. Starting with Docker now is a good idea, so you should get yourself familiar with containers. :smiley: Especially if you think about deploying microservices to your infrastructure.

Ok, let's start with the project. I [pushed my project to github][5], you can clone it and run it right away. I'll go through the details now so you know what you are looking at. Let's have a look at the two services themselves, the `DateService` and the `TimeService`. As the names suggest, they return the current date and the current time. They are both exposed via *camel-jetty* as HTTP endpoints. To keep this short, I'll only show the `DateServiceRouteBuilder` here.

DateServiceRouteBuilder.java
----------------------------

I decided to split the camel service up into two small routes, one that actually gives the date and one that exposes the other route as HTTP. The port can be set via a property, which is useful when configuring the service from outside - which is a common theme for microservices or at least for deployed [*immutable infrastructure*][6].

<pre class="brush: java">
package de.kopis.microservices.routes;

import org.apache.camel.ExchangePattern;
import org.apache.camel.builder.RouteBuilder;

import de.kopis.microservices.services.DateService;

public class DateServiceRouteBuilder extends RouteBuilder {
  @Override
  public void configure() throws Exception {
    from("direct:getDate").setExchangePattern(ExchangePattern.InOut).bean(new DateService(), "getDate");
    // add HTTP interface
    from("jetty:http://0.0.0.0:{{port}}/date").setExchangePattern(ExchangePattern.InOut).to("direct:getDate");
  }
}
</pre>

When developing a microservice, we don't want an application server or anything bloated around the application. It's called *micro* for a reason. :smirk: So how do I run the application when I'm not deploying it into a container? Camel provides [the `Main` class][7] for this and here's how I use that:

RunDateService.java
-------------------

<pre class="brush: java">
package de.kopis.microservices.app;

import org.apache.camel.main.Main;

import de.kopis.microservices.routes.DateServiceRouteBuilder;

public class RunDateService {

  private Main main;

  public static void main(String[] args) throws Exception {
    RunDateService app = new RunDateService();
    final String port = (args.length == 1 ? args[0] : "8765");
    app.boot(port);
  }

  public void boot(String port) throws Exception {
    System.setProperty("port", port);

    // create a Main instance
    main = new Main();
    // enable hangup support so you can press ctrl + c to terminate the JVM
    main.enableHangupSupport();
    // add routes
    main.addRouteBuilder(new DateServiceRouteBuilder());

    // run until you terminate the JVM
    System.out.println(String.format("Starting Camel, using port %s. Use ctrl + c to terminate the JVM.", port));
    main.run();
  }
}
</pre>

I also use the [Maven Shade Plugin][8] to create an executable JAR. Here's the configuration from my `pom.xml`:

<pre class="brush: xml">
<build>
	<plugins>
		<plugin>
			<groupId>org.apache.maven.plugins</groupId>
			<artifactId>maven-shade-plugin</artifactId>
			<version>2.4</version>
			<executions>
				<execution>
					<phase>package</phase>
					<goals>
						<goal>shade</goal>
					</goals>
					<configuration>
						<transformers>
							<transformer 								implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
								<mainClass>de.kopis.microservices.app.RunDateService</mainClass>
							</transformer>
						</transformers>
					</configuration>
				</execution>
			</executions>
		</plugin>
	</plugins>
</build>
</pre>

When the project is build, you can run the service from the command line:

<pre class="brush: bash">
java -jar date-service/target/dateservice-*.jar 5679
</pre>

Now, to deploy this application with Docker I created a `Dockerfile` for each of the services and a `docker-compose.yml` to run both of them and (later) add a frontend that will use the services and displays their output in a simple HTML page. The `docker-compose.yml` only builds and runs the services at the moment.

You have to build the project with Maven first to create the JAR files in the `target` directories. This is a step that I want to automate and simplify with the `Dockerfile` in the parent POM directory. After building the project you can use *docker-compose* to start the services. Run the following comand in the top directory:

<pre class="brush: bash">
    docker-compose up
</pre>

After that you can open [http://localhost:8081/time][12] or [http://localhost:8080/date][13] to see the output of the services. Now you have 2 microservices built with Apache Camel running on your computer in Docker containers, ready to be deployed to your infrastructure.

In a production environment, the Docker images would be pushed to a central registry. Or the `Dockerfile` would download a *RELEASE* version from your central Maven repository. But with my example project you got a simple project that has everything you need to start with Apache Camel and Docker. Have fun!

[0]: https://camel.apache.org/
[1]: http://clojure.org/
[2]: http://www.scala-lang.org/
[3]: http://martinfowler.com/articles/microservices.html
[4]: https://www.docker.com/
[5]: https://github.com/MoriTanosuke/first-camel-microservice
[6]: https://blog.codeship.com/immutable-deployments/
[7]: https://camel.apache.org/running-camel-standalone-and-have-it-keep-running.html
[8]: https://maven.apache.org/plugins/maven-shade-plugin/examples/executable-jar.html
[12]: http://localhost:8081/time
[13]: http://localhost:8080/date

