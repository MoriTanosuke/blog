--- 
wordpress_id: 468
layout: post
title: "Compojure Setup für schnelle Entwicklung"
wordpress_url: http://blog.kopis.de/?p=468
---
Ich hab in den letzten Tagen weiter mit <a href="http://compojure.org/">Compojure</a> herumgebastelt und will jetzt meinen aktuellen Stand der Entwicklungsumgebung aufschreiben. Vielleicht hilft es euch ja beim Einstieg. Ich bin jedenfalls etwas enttäuscht, das man keine guten Tutorials und Hilfen findet, wenn man frisch in <a href="http://clojure.org/">Clojure</a> und gerade <a href="http://compojure.org/">Compojure</a> einsteigt.

<a href="https://github.com/MoriTanosuke/CmpjrAjaxTest">Meine Dateien findet ihr jetzt auch in einem Repository bei github.</a>

Als erstes lege ich mit <a href="https://github.com/technomancy/leiningen">leiningen</a> ein neues Projekt an:

    lein new CmpjrAjaxTest

Anschliessend editiere ich die Datei <code>project.clj</code> und füge die Abhängigkeiten für ein minimales Compojure-Setup ein:

    (defproject CmpjrAjaxTest "1.0.0-SNAPSHOT"
      :description "FIXME: write description"
      :dependencies [[org.clojure/clojure "1.2.0"]
                 [org.clojure/clojure-contrib "1.2.0"]
                 [enlive "1.0.0-SNAPSHOT"]
                 [compojure "0.6.0-RC4"]
                 [ring/ring-jetty-adapter "0.3.5"]]
      :dev-dependencies [[lein-ring "0.3.2"]]
      :ring {:handler CmpjrAjaxTest.app/app})

Wichtig sind die beiden letzten Zeilen mit den Keys <code>:dev-dependencies</code> und <code>:ring</code>. Damit wird leiningen angewiesen, einen Ring-Server zu starten, der automatisch meine Äderungen nachlädt und immer den aktuellen Stand der Entwicklung präsentiert.

Mit <code>:ring {:handler CmpjrAjaxTest.app/app})</code> gebe ich damit eine Referenz auf meinen Routen-Handler an leiningen. Die Definition findet sich in der Datei <code>app.clj</code>:

    (ns CmpjrAjaxTest.app
      (:use compojure.core
            clojure.contrib.json
            net.cgrand.enlive-html
            ring.adapter.jetty
            CmpjrAjaxTest.core)
      (:require [compojure.route :as route]
        [compojure.handler :as handler]))
    
    (deftemplate index "resources/test.html"
      [cmap]
      [:span#msg] (content (:msg cmap)))
    
    (defroutes main-routes
      (GET "/" [] (index {:msg Hello World!"}))
      (GET "/msg/:msg" [msg] (index {:msg msg}))
      (GET "/json" []
        {:headers {"Content-Type" "application/json"}
         :body (json-str {:foo "foo", :bar "bar"})})
      (route/resources "/")
      (route/not-found "Page not found"))
    
    (def app
      (handler/site main-routes))
    
    (defn dev []
      (run-jetty #'app {:port 8080}))

Hier passiert jetzt einiges. Erst einmal übernimmt Compojure für mich alles, was mit Routing der Request zu tun hat. Ich definiere mit <code>(defroutes NAME ...)</code> nur die Zuordnung von Requests zu meinen Funktionen. Die Funktionen liefern anschliessend das Ergebnis, also eine HTML-Seite. Oder ein JSON-Objekt. Oder irgendwas ganz anderes.

Die erste Route führt ihr aus, wenn ihr einfach <code>http://127.0.0.1:3000</code> im Browser öffnet. Dort wird nur das Template geladen und <code>Hello, World!</code> ausgegeben. Interessanter wird das zweite Beispiel:

    (defroutes main-routes
      ...
      (GET "/msg/:msg" [msg] (index {:msg msg}))
      ...)

Diese Route führt ihr aus, wenn ihr im Browser <code>http://127.0.0.1:3000/msg/blahfasel</code> öffnet. Alles nach <code>msg/</code> wird von Compojure jetzt als Parameter in meine Funktion übergeben.

Und noch interessanter ist das dritte Beispiel:

    (defroutes main-routes
      ...
      (GET "/json" []
        {:headers {"Content-Type" "application/json"}
         :body (json-str {:foo "foo", :bar "bar"})})
      ...)

Wenn ihr also <code>http://127.0.0.1:3000/json</code> im Browser öffnet, wird euch ein JSON-Objekt mit 2 Attributen zurückgegeben. Das ganze läuft über <a href="http://richhickey.github.com/clojure-contrib/json-api.html">die ganz normale clojure.contrib JSON API</a>, hat also weder was mit Compojure oder meiner Template-Engine zu tun. Ich erzeuge einfach mit folgenden Aufruf ein JSON-Objekt aus einer Map:

    (json-str {:foo "foo", :bar "bar"})

Und das Ergebnis ist folgendes:

    {"foo":"foo","bar":"bar"}

Ich habe in meinem Beispiel bereits <a href="https://github.com/cgrand/enlive#readme">die Template-Engine Enlive</a> verwendet. Damit kann ich meine Antwort aus einer HTML-Datei lesen, mit Variablen anreichern und dem Nutzer zurückliefern. Dazu definiere ich mir ein Template, das eine <code>map</code> mit Werten bekommt und in die Datei einsetzt:

    (deftemplate index "resources/test.html"
      [cmap]
      [:span#msg] (content (:msg cmap)))

<a href="https://github.com/cgrand/enlive#readme">Enlive</a> arbeitet mit Selektoren, wer CSS und/oder JQuery kennt, wird sich da gleich wohl fühlen. Für mich reicht das erstmal aus und ich will für meine Beispiele so einfach wie möglich bleiben. Nachher versteh ich das selbst nicht mehr... ;-)

Jetzt kann ich mit folgendem Kommando den Server starten und meine Seite bewundern. Anschliessend kann ich meine Dateien bearbeiten. <a href="https://github.com/technomancy/leiningen">leiningen</a> übernimmt für mich das Neuladen der Äderungen und ich brauche im Browser nur noch F5 zu drücken. Hiermit wird der Server gestartet:

    $ lein ring server
    2011-02-24 18:14:59.362:INFO::Logging to STDERR via org.mortbay.log.StdErrLog
    2011-02-24 18:14:59.363:INFO::jetty-6.1.26
    2011-02-24 18:14:59.382:INFO::Started SocketConnector@0.0.0.0:3000
    Started server on port 3000

Bei mir öffnet sich der Browser dann selbst und ich sehe direkt die Startseite. Viel Spass! :-)

<del datetime="2011-02-24T18:35:37+00:00"><strong>PS</strong>: <a href="http://blog.kopis.de/wp-content/uploads/2011/02/CmpjrAjaxTest.zip">Ihr könnt euch mein Beispielprojekt auch als ZIP runterladen: CmpjrAjaxTest.zip</a></del>
<strong>PPS</strong>: Ihr solltet euch doch lieber gleich <a href="https://github.com/MoriTanosuke/CmpjrAjaxTest">mein Repository bei github clonen</a>.
