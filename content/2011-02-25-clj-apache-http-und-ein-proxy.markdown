---
title: 'clj-apache-http und ein Proxy'
date: "2011-02-25"
tags: 
layout: post
---
<p>Falls ihr mal in die Verlegenheit kommen solltet, eine HTTP-Verbindung per <a href="https://github.com/rnewman/clj-apache-http">clj-apache-http</a> debuggen zu wollen (z.B. wegen einer störrischen OAuth-Authorisierung), dann solltet ihr euch <a href="http://www.fiddler2.com/fiddler2/">Fiddler</a> installieren und anschliessend alle Requests durch diesen Proxy leiten. In <a href="https://github.com/rnewman/clj-apache-http">clj-apache-http</a> macht man das wie folgt:</p>

<pre>
(require ['com.twinql.clojure.http :as 'http])

(:content 
  (http/get (java.net.URI.&amp;quot;http://www.kopis.de&quot;)
    :parameters (http/map-&gt;params {
      :default-proxy (http/http-host
        :host&amp;quot;127.0.0.1&quot; 
        :port 8765)}) :as :string))
</pre>
