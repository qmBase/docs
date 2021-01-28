---
slug: /faqs/81
title: Wie definiere ich für den Qualifikations-Import die Wiederholungsintervalle
tags: [Datenimport,Aufgaben & Qualifikationen]
---
***TimeInterval*** gibt die Einheit an, in der die Zeit gemessen wird:

0 = Year ,

1 = Month ,

2 =Week,

3 = Day,

4 = Hour,

5 = Minute,

6 = Second

***TimeIntervalValue* **gibt dann den dazugehörigen nummerischen Wert an.

TimeInterval = 0, TimerIntervallValue = 2 würde bedeuten, dass die Qualifikation eine Gültigkeit von 2 Jahren hat.

Das Feld ***SurveillanceIntervalTimeSpan* **erfasst die Informationen gemäß [https://de.wikipedia.org/wiki/ISO_8601](https://intern.qmbase.com/_KnowledgeBase/ISO%208601)

Eine Gültigkeit von zwei Jahren wird wie folgt vorgegeben: **P2Y**

Das **P** gibt an, dass es sich um eine Zeitspanne (Period) handelt.






Zeichen für weitere Zeitspannen




**Y**
Jahr (***year***)


**M**
Monat (***month***)


**W**
Woche (***week***)


**D**
Tag (***day***)


**h**
Stunde (***hour***)


**m**
Minute (***minute***)


**s**
Sekunde (***second***)


