---
id: wie-wird-qmbase-entwickelt
slug: /technical/wie-wird-qmbase-entwickelt
title: Wie wird qmBase entwickelt
---

Von Zeit zu Zeit erhalten wir Anfragen dazu, wie wir qmBase entwickeln und welche Technologien und Tools wir einsetzen. Diese Fragen beantworten wir gerne. Insbesondere als Entwicklungsteam freuen wir über dieses Interesse. Im nachfolgenden wollen in einigen zentralen Punkten erklären, wie unser Entwicklungsprozess abläuft. Für Rückfragen hierzu und weitere Details stehen wir gerne zur Verfügung.

## Planung

Grundsätzlich ist unsere gesamte Entwicklung ein agiler Prozess. Kern ist hierbei immer das Interesse und Feedback unserer Nutzer. Mit diesen Informationen entwickeln wir unsere Roadmap. Unsere Roadmap hat jeweils eine Gültigkeitsdauer von **6 Monaten**. Auf der Roadmap befinden sich dabei die größeren Projekte und Meilensteine, die wir angehen wollen. Größere Projekte sind Arbeitsaufgaben, die vermutlich eine Arbeitszeit von mehr als 20 Arbeitstagen in Anspruch nehmen. Nach Ablauf der Gültigkeitsdauer der Roadmap überprüfen wir, ob wir unsere Ziele erreicht haben und entwickeln unter Einbeziehung des Kundenfeedbacks die Roadmap für die nächsten 6 Monate.

Wichtig ist uns hierbei, dass diese Roadmap ein lebendiges Dokument ist und nicht in Stein gemeißelt ist.

## Qualitätssicherung

Die wichtigsten Instrumente für unsere interne Qualitätssicherung sind drei Aspekte:

1.  Automatisierte Tests

2.  Manuelle Tests in unserer Testabteilung

3.  Beobachtung der Crashdaten unserer Software und Feedback aus dem Ticketsystem

### Automatisierte Tests

Für zentrale Funktionen innerhalb der Software entwickeln wir automatisierte Tests. Dies kann man sich vereinfacht gesagt so vorstellen. Wir nehmen die Software als eine Blackbox an und geben Daten in die Software ein. Danach warten wir auf die Antwort der Software und vergleichen, ob die Antwort dem entspricht, was wir als Ergebnis erwarten.

Ein einfaches Beispiel hierfür ist der Prozess für das Erstellen neuer Personen. Wir übergeben Vor- und Nachnamen an die Software und erwarten dann, dass die Antwort der Software die neu erstellte Person enthält. Ein Sonderfall ist hierbei, dass wir den Anwender vor Fehlern bewahren wollen. So überprüfen wir beispielsweise beim Erstellen neuer Personen, die auch eine E-Mail Adresse haben, ob diese bereits existiert, um so das Erfassen von Duplikaten zu verhindern. Somit sieht der zweite Testfall so aus, dass zweimal die gleiche Person mit gleicher E-Mail Adresse erstellt werden soll. Die Erwartung ist hierbei, dass dies beim ersten Mal erfolgreich funktioniert und beim zweiten Mal zu einem Fehler führt.

### Manuelle Tests in unserer Testabteilung

Wie man in dem ersten Beispiel schon erkennen kann, gibt es grundsätzlich sehr viele Dinge, die überprüft und werden müssen. Da es immer Sonderfälle und Kombinationen gibt, die sich nicht so leicht automatisiert testen lassen ist darüber hinaus das manuelle Testen notwendig. Hierzu haben alle Mitarbeiter bei qmBase Zugriff auf die neueste Version und können alle Funktionen auf Herz und Nieren testen.

### Beobachtung der Crashdaten unserer Software und Feedback aus dem Ticketsystem

Nachdem wir die Software in mehreren kleinen Schritten an unsere Kunden verteilt haben, folgt der letzte Schritt der Qualitätssicherung. Hier geht es darum bei der echten Nutzung auftretende Fehler zu identifizieren. Neben Fehlern sind wir hier auch immer auf der Suche nach Performance Problemen. Einige Dinge lassen sich einfach nur mit echten Daten erkennen, da jeder unserer Kunden seine Software auf eine andere Art und Weise nutzt. Jeder Kunde hat in anderen Bereichen der Software mal mehr oder weniger Daten und Verknüpfungen und dies erfordert somit von Zeit zu Zeit einige Optimierungen.

## Technische Details

Wir entwickeln unsere Software mit den modernsten Frameworks und Tools. Grundsätzlich unterscheiden wir zwei Bereiche der Software. Dies ist zum einen das **Backend** und zum anderen das **Frontend**. Als Backend bezeichnen wir den Teil der Software, die auf unserem Server läuft. Das Frontend ist der Teil der Software, der bei Ihnen läuft. Dies betrifft somit den gesamten Quellcode, den Ihr Browser herunterlädt und dann ausführt.

### Backend

Unser Backend wird mit dem **ASP.NET Core** Framework entwickelt. Die zum Einsatz kommende Programmiersprache ist **C#**. Hierbei handelt es sich um ein von Microsoft entwickeltes Open-Source Web Framework. Daten werden in einer SQL Datenbank und einem Speicher für Dateien gespeichert. Als Entwicklungsumgebung nutzen wir **Visual Studio**.

### Frontend

Das Frontend besteht zu einem überwiegenden Teil aus einer **React** Applikation. Diese Anwendung wird mit **TypeScript** programmiert und dann in **JavaScript** übersetzt, um dann bei Ihnen im Browser zu laufen. Als Entwicklungsumgebung nutzen wir hier **Visual Studio Code**.
