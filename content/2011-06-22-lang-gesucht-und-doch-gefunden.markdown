---
title: 'Lang gesucht und doch gefunden'
date: "2011-06-22"
tags: 
layout: post
---
<p>In den letzten 3 oder 4 Tagen war ich auf der Suche nach einem verzwickten Bug. Eine Funktion ging von heute auf morgen kaputt - so sah es jedenfalls aus. Was monatelang funktioniert hat und eine zentrale Funktion der Software ist, an der ich seit &uuml;ber 12 Monaten arbeite, ist kaputt gegangen.</p>

<p>Nat&uuml;rlich nicht nach einem erkennbaren Muster, sondern anscheinend v&ouml;llig willk&uuml;rlich. Und selbstverst&auml;ndlich gab es keine offensichtlichen Fehlermeldungen in den Logs oder Crashes. Die Software hat diese Funktion f&uuml;r einige Nutzer einfach nicht ausgef&uuml;hrt.</p>

<p>Heute mittag hab ich dann <del>aus Verzweiflung</del> im Zuge meiner gr&uuml;ndlichen Analyse meine Suche auf weitere Bereiche ausgedehnt und tats&auml;chlich eine &Auml;nderung <em>ausserhalb</em> meiner Software gefunden, die eine Auswirkung haben konnte. Ich habe ungef&auml;hr 1 Minute gebraucht, um die Stelle im Code eines anderen zu finden, die bei mir einen Fehler ausgel&ouml;st hatte.</p>

<p>Das es diese Abh&auml;ngigkeit gibt, war mir nicht mehr bewu&szlig;t. Sie war auch dem Entwickler nicht bewu&szlig;t, der die &Auml;nderung gemacht hat. Hinterher war allen klar, da&szlig; diese &Auml;nderung nat&uuml;rlich Auswirkungen auf andere haben kann. Aber hinterher ist man ja immer kl&uuml;ger. Und die Korrektur hat ungef&auml;hr 2 Minuten gedauert...</p>

<p>Was ich aus dieser Episode schlie&szlig;e: <strong>wenn man schon Abh&auml;ngigkeiten zu anderen hat, muss man diese so deutlich wie m&ouml;glich markieren</strong>. Und man muss sie so klein wie m&ouml;glich halten.</p>

<p>Und morgen fr&uuml;h schreibe ich als erstes einige Tests, mit denen ich solche Probleme beim n&auml;chsten Mal ausreichend dokumentiere. Ich muss mir also einen Weg einfallen lassen, bei einer &Auml;nderung in der Zukunft meine Tests so fehlschlagen zu lassen, dass ein anderer Entwickler daraus genug Informationen bekommt, um die Abh&auml;ngigkeit zu finden und den Fehler sofort zu erkennen.</p>

<p>Ja, und ich werde daran arbeiten, die Abh&auml;ngigkeit aufzul&ouml;sen. Aber manchmal muss man mit solchen Sachen leben.</p>
