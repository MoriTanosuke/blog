---
layout: post
title: Rails, OAuth und Fitbit
excerpt: 
---
Heute morgen bin ich *weit, weit* vor einer anständigen Zeit aufgewacht
und damit ich mich nicht allzu sehr langweile, habe ich mich noch einmal
hingesetzt und eine [Ruby on Rails][0]-Anwendung aufgesetzt. Mein Plan ist,
eine Anwendung zu bauen, die sich mit [Fitbit][1] verbindet und über die
[REST API][2] die geloggten Daten abfragt, anzeigt und exportierbar
macht.

Vor einiger Zeit habe ich mir schon das Buch [Agile Web Development with
Rails][3] gekauft und mich mit dessen Hilfe an meine ersten Versuche mit
*Ruby on Rails* gemacht. Ich muss sagen, man hat auch ohne tiefere
Kenntnisse in *Ruby* schnell Erfolge. Die ersten Seiten sind schnell
erstellt, [scaffolding][5] sei dank. Nach zwei oder drei Kommandos kann
man sich an die erste Implementierung der Logik machen, zwischendurch
ein wenig am CSS ändern, und wenn man dann die Logik fertig gehackt hat,
kann man sich die einzelnen Layouts und Views nochmal gesondert
vornehmen.

Für meine Fitbit-Anwendung habe ich mich auf eine einzige Seite und
ein sehr vereinfachtes Login beschränkt. Hauptaugenmerk wollte ich auf
das [OAuth-Plugin][4] und die Verbindung zu *Fitbit* legen. Leider ist
die Beschreibung lückenhaft, also musste ich etwas herumprobieren. Hier
sind die Schritte, die ich durchgeführt habe, um *Fitbit* als
OAuth-Provider zu konfigurieren:

# **Gemfile** editieren und *oauth-plugin* einbinden
# **bundle install** ausführen
# 


[0]: http://rubyonrails.org/
[1]: http://www.fitbit.com/
[2]: http://dev.fitbit.com/
[3]: http://www.amazon.de/Agile-Development-Rails-Pragmatic-Programmers/dp/1934356549/kopisde-21
[4]: https://github.com/pelle/oauth-plugin
[5]: http://de.wikipedia.org/wiki/Scaffolding
