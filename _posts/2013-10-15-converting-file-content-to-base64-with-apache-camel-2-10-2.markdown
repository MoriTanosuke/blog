---
layout: post
title: "Converting file content to base64 with Apache Camel 2.10.2"
---
Recently I wanted to convert input files of various formats into an XML message with certain meta information and the content of the input file as as [base64-encoded][0] element. Because I'm working on enterprise integration at the moment and we're using [Apache Camel][1] a lot, I first tried to find an available solution from *Camel*.

Sure enough, if you're using a version of *Camel* higher than 2.11.0, you can just use [the shipped Base64DataFormat][2] and be done. It's as simple as this XML configuration:

	<camelContext id="camel" xmlns="http://camel.apache.org/schema/spring">
      <dataFormats>
        <base64 id="base64" />
      </dataFormats>
      <route>
        <from uri="file://inputDirectory" />
        <marshal ref="base64" />
        <to uri="file://outputDirectory" />
      </route>
    </context>

Unfortunately, I'm stuck with *Camel* Version 2.10.2 - so no *Base64DataFormat* for me. I decided to roll my own [DataFormat][3] and use [Apache Commons Base64][4].

My route (using the Spring DSL) now looks like this:

  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camel="http://camel.apache.org/schema/spring"
      xsi:schemaLocation="
         http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
         http://camel.apache.org/schema/spring http://camel.apache.org/schema/spring/camel-spring.xsd">
    
      <bean id="base64Dataformat" class="eu.hermes.heit.esb.testing.mapping.Base64DataFormat" />
  
      <camel:camelContext xmlns="http://camel.apache.org/schema/spring">
  
          <route>
              <from ref="file://inputDirectory" />
              <!-- convert input to base64 encoded string -->
              <marshal>
                  <custom ref="base64Dataformat" />
              </marshal>
              <!-- convert into string, the velocity template isn't doing that -->
              <convertBodyTo type="java.lang.String" />
              <!-- wrap into mapping message schema -->
              <to uri="velocity:META-INF/templates/mappingmessage.vm" />
              <to uri="file://archive" />
      </camel:camelContext>
    </beans>

The actual Base64 encoding looks quite like in *Camel* Version 2.11.x. Because I want to use a [velocity template][5] and wrap the base64 encoded string in XML, I have to convert the body into a *java.lang.String* - no idea why.

Now I can convert file content into base64 encoded string and pass them to other (mostly legacy) systems.


[0]: https://en.wikipedia.org/wiki/Base64
[1]: https://camel.apache.org/
[2]: https://camel.apache.org/base64.html
[3]: https://camel.apache.org/maven/current/camel-core/apidocs/org/apache/camel/spi/DataFormat.html
[4]: http://commons.apache.org/proper/commons-codec/apidocs/org/apache/commons/codec/binary/Base64.html
[5]: https://camel.apache.org/velocity.html
