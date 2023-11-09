---
id: wie-wird-qmbase-entwickelt
slug: /technical/wie-wird-qmbase-entwickelt
title: Wie wird qmBase entwickelt
---

Wie wir qmBase entwickeln und welche Technologien und Tools wir einsetzen, beantworten wir gerne. Insbesondere als Entwicklungsteam freuen wir über das Interesse.
Im nachfolgenden wollen in einigen zentralen Punkten erklären, wie unser Entwicklungsprozess abläuft. Für Rückfragen hierzu und weitere Details stehen wir gerne zur Verfügung.

## Planung

Grundsätzlich ist unsere gesamte Entwicklung ein agiler Prozess. Kern ist hierbei immer das Interesse und Feedback unserer Nutzer. Mit diesen Informationen entwickeln wir unsere Roadmap.
Unsere Roadmap hat jeweils eine Gültigkeitsdauer von **3 Monaten**. Auf der Roadmap befinden sich dabei die größeren Projekte und Meilensteine, die wir angehen wollen.
Größere Projekte sind Arbeitsaufgaben, die vermutlich eine Arbeitszeit von mehr als 20 Arbeitstagen in Anspruch nehmen.
Nach Ablauf der Gültigkeitsdauer der Roadmap überprüfen wir, ob wir unsere Ziele erreicht haben und entwickeln unter Einbeziehung des Kundenfeedbacks die Roadmap für die nächsten 3 Monate.

Wichtig ist uns hierbei, dass diese Roadmap ein lebendiges Dokument ist und nicht in Stein gemeißelt ist.

### Wie versionieren wir?

Aktuell sieht unsere die Versionsbezeichnung z.B. so aus 1.1.109.2371. Die einzelnen Komponenten haben dabei folgenden Sinn:

- 1 - Hauptversion → Alles mit der gleichen Versionsnummer ist miteinander kompatibel
- 1 - Nebenversion → Größere Updates werden durch ein Hochzählen dieser Nummer gekennzeichnet
- 109 - Patch → Diese Nummer wird hochgezählt, wenn Fehler behoben werden
- 2371 - Buildnummer → Diese Nummer zählt automatisch hoch, bei jeder neuen Version, die von uns kompiliert wird.

## Qualitätssicherung und Validierung

Die wichtigsten Instrumente für unsere interne Qualitätssicherung sind drei Aspekte:

1. Automatisierte Tests
2. Manuelle Tests in unserer Testabteilung
3. Beobachtung der Telemetriedaten unserer Software und Feedback aus dem Ticketsystem

### Automatisierte Tests

Für zentrale Funktionen innerhalb der Software entwickeln wir automatisierte Tests. Dies kann man sich vereinfacht gesagt so vorstellen.
Wir nehmen die Software als eine Blackbox an und geben Daten in die Software ein. Danach warten wir auf die Antwort der Software und vergleichen, ob die Antwort dem entspricht, was wir als Ergebnis erwarten.

Ein einfaches Beispiel hierfür ist der Prozess für das Erstellen neuer Personen. Wir übergeben Vor- und Nachnamen an die Software und erwarten dann, dass die Antwort der Software die neu erstellte Person enthält.
Ein Sonderfall ist hierbei, dass wir den Anwender vor Fehlern bewahren wollen. So überprüfen wir beispielsweise beim Erstellen neuer Personen, die auch eine E-Mail Adresse haben, ob diese bereits existiert, um so das Erfassen von Duplikaten zu verhindern.
Somit sieht der zweite Testfall so aus, dass zweimal die gleiche Person mit gleicher E-Mail Adresse erstellt werden soll. Die Erwartung ist hierbei, dass dies beim ersten Mal erfolgreich funktioniert und beim zweiten Mal zu einem Fehler führt.

Unsere automatisierten Tests unterscheiden sich in zwei Bereiche (Frontend und Backend), die jeweils in drei Ebenen getestet werden. Diese Ebenen sind:

- End-to-End (E2E) Tests Testen des User Interface (UI) und aller Abläufe.
- Integration Tests hier werden mehrere kleine Einheiten im Verbund und Zusammenspiel getestet.
- Unit Tests hierbei handelt es sich um Tests der kleinstmöglichen Einheiten der Software.

#### Warum werden nicht einfach alle Funktionen automatisch getestet, um alle Fehler auszuschließen?

Das Design und die Ausführung der automatisierten Tests ist häufig nicht trivial. Software kann eine Vielzahl an verschiedene Eingaben (Inputs) zulassen.
Diese sind unter Umständen isoliert betrachtet schon problematisch oder nur in verschiedenen Kombinationen. Diese Randfälle vorab zu identifizieren, ist vermutlich der anspruchsvollste Teil der Arbeit. Daher ist unser Vorgehen hier wie folgt:

1. Wir identifizieren die Funktionen, die Querschnittsfunktionen innerhalb der Software sind und testen diese prioritär.
2. Basierend auf den Nutzungsdaten identifizieren wir Fehler, die bei unseren Nutzern auftauchen und probieren diese mit automatischen Tests nachzustellen und dann zu beseitigen, so dass wir dadurch Wiederholfehler vermeiden.

### Manuelle Tests in unserer Testabteilung

Wie man in dem ersten Beispiel schon erkennen kann, gibt es grundsätzlich sehr viele Dinge, die überprüft und werden müssen. Da es immer Sonderfälle und Kombinationen gibt, die sich nicht so leicht automatisiert testen lassen ist darüber hinaus das manuelle Testen notwendig. Hierzu haben alle Mitarbeiter bei qmBase Zugriff auf die neueste Version und können alle Funktionen auf Herz und Nieren testen. Von unserem Entwicklungsteam wird in regelmäßigen Meetings auf aktuelle Änderungen hingewiesen, so dass für jeden deutlich wird, auf welche Dinge besonders zu achten ist.

### Beobachtung der Telemetriedaten unserer Software und Feedback aus dem Ticketsystem

Nachdem wir die Software in mehreren kleinen Schritten an unsere Kunden verteilt haben, folgt der letzte Schritt der Qualitätssicherung. Hier geht es darum bei der echten Nutzung auftretende Fehler zu identifizieren.
Neben Fehlern sind wir hier auch immer auf der Suche nach Performance Problemen. Einige Dinge lassen sich nur mit echten Daten erkennen, da jeder unserer Kunden seine Software auf eine andere Art und Weise nutzt.
Jeder Kunde hat in anderen Bereichen der Software mal mehr oder weniger Daten und Verknüpfungen und dies erfordert somit von Zeit zu Zeit einige Optimierungen. Auch Optimierungen der Nutzeroberfläche ergeben sich regelmäßig auch aus den echten Nutzerdaten.
