---
layout: post
title: Wechsel zu git-svn
---
Es ist wieder so weit: [Subversion][0] (genauer: [IBM RAD][1] und [Subclipse][2] treiben mich in den Wahnsinn. Ich kann kaum noch commiten, bekomme Fehlermeldungen wie *malformed XML* und nichts geht.

Das liegt zum Teil am Repository, denn ich bekomme bei Revision 2 [eine Fehlermeldung *Ã¢ÂÂRA layer request failed: REPORT request failedÃ¢ÂÂ during git-svn*][3] - das liegt wahrscheinlich am komischen Windows-Zeichensatz in Dateinamen in dieser Revision. Das musste ich irgendwann mal mühsam finden und per Hand korrigieren und seitdem kann ich nichts vor der kaputten Revision auschecken.

Damit meine Geduld jetzt nicht übermässig strapaziert wird, werde ich zu [git-svn][4] wechseln. Ich kann damit zwar diese Revision immer noch nicht auschecken (und auch einige Tags und Branches machen Probleme), aber [git][5] hat mich noch nicht so im Stich gelassen wie [Subversion][0]...

Mit dem folgenden Befehl habe ich als erstes nur meinen *trunk* ausgecheckt und den Revisionsbereich eingeschränkt:

    git svn clone -r100:HEAD http://svn/path/to/trunk

Anschliessend könnte ich die Branches und Tags einrichten, in dem ich den [Branch in die *git config* eintrage][6]. Ob ich das mache, weiÃÂ ich noch nicht. Vielleicht lege ich ja auch nur neue Branches an, ohne jemals auf die alten zuzugreifen... abwarten.

Jetzt kann ich zumindest wieder arbeiten und anständige Diffs machen. Mal sehen, was passiert, wenn ich das erst Mal commiten muss. :-)

[0]: http://subversion.apache.org/
[1]: http://www-01.ibm.com/software/awdtools/developer/application/
[2]: http://www.eclipse.org/subversive/
[3]: http://stackoverflow.com/q/8451480/834
[4]: http://git-scm.com/docs/git-svn
[5]: http://git-svm.com/
[6]: http://stackoverflow.com/q/296975/834
