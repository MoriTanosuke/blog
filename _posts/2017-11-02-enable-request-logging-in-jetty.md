---
title: "Enable request logging in Jetty 9.1"
layout: post
---

Today I wanted to have a more detailed look into the requests coming into one of my applications using 
[Eclipse Jetty][0]. While it is easy enough to see incoming requests by enabling logging for 
class `org.eclipse.jetty.server.Server` (via the standard java logging API or SLF4J), adding a method to log incoming
request headers is on a different level.

After digging around in the documentation and the sourcecode for a while, this is what I came up with:

```` java
// Create a server, but do not start it. This would prevent adding
// handlers later
Server server = JettyHttpContainerFactory.createServer(baseUri, null, null, false);

HandlerCollection handlers = new HandlerCollection();
// request log handler
RequestLogHandler requestLogHandler = new RequestLogHandler();
RequestLog requestLog = new Slf4jRequestLog();
requestLogHandler.setRequestLog(requestLog);
RequestLog traceLog = new Slf4jRequestLog() {
  @Override
  public void log(Request request, Response response) {
	  LOG.info("*************************************");
	  try {
	    Enumeration<String> headerNames = request.getHeaderNames();
	    while(headerNames.hasMoreElements()) {
		    String headerName = headerNames.nextElement();
		    String headerValue = request.getHeader(headerName);
		    LOG.info("{}: {}", headerName, headerValue);
	    }
	    // only dump the request body if we can reset the inputstream
	    if(request.getInputStream().markSupported()) {
		    request.getInputStream().mark(Integer.MAX_VALUE);
		    LOG.info(IOUtils.toString(request.getInputStream()));
		    request.getInputStream().reset();
	    } else {
		    LOG.info("Can not dump request body, because it can not be reset");
	    }
	  } catch (IOException e) {
	    LOG.warn(e);
	  }
	  LOG.info("*************************************");
  }
};
requestLogHandler.setRequestLog(traceLog);
// handler for real requests
final JettyHttpContainer containerHandler = ContainerFactory.createContainer(JettyHttpContainer.class,
	new RestResourceConfigWithSpringSupport("application-context.xml", MyServiceClass.class));
// add all handlers
handlers.setHandlers(new Handler[]{requestLogHandler, containerHandler});
server.setHandler(handlers);

server.start();
````

Note that I'm using a `RestResourceConfigWithSpringSupport`, but that doesn't have to be the case. The main point for me
was to create the `JettyHttpContainer` myself and not use the one created by a different call to 
`JettyHttpContainerFactory.createServer(...)`. This way I can see at least the HTTP headers coming into my application. I'd
prefer to see the body too, but I didn't want to spent the time for it right now.

If anyone knows a way to wrap the request `InputStream` into a re-readable option, please let me know.

[0]: http://www.eclipse.org/jetty/
