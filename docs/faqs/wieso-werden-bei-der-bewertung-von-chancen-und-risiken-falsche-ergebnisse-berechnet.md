---
id: smartViews
slug: /faqs/45
title: Wieso werden bei der Bewertung von Chancen und Risiken falsche Ergebnisse berechnet
tags: [Risiken & Chancen]
---
Sie haben die notwendigen Variablen definiert und die Formel zu Berechnung der Risikowerte erstellt, aber die Ergebnisse die berechnet werden sind falsch?

Eine Urasache dafür kann die Benennung der Variablen sein. Wenn Sie zum Beispiel ein Variable schlicht *E* nennen, dann kann es passieren, dass diese als [Eulersche Zahl](https://de.wikipedia.org/wiki/Eulersche_Zahl) interpretiert wird. Bei der Berechnugn des Risikowertes wird dann automatisch *E = 2,71828 *angenommen. Dieser Fehler ist nicht so offensichtlich, da das Ergebnis ganzzahlig gerundet wird. Vermeiden Sie also am besten Variablennamen, die Ähnlichkeiten mit standardisierten mathematischen Parametern aufweisen.