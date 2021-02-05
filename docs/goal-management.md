---
id: goal-management
title: Zielmanagement
---
TODO IMPORT REACT ICONS

# Zielmanagement Startseite 
Dies ist die Startseite des Zielmanagements mit den Buttons auf linken Seitenleiste navigieren Sie sich durch das Zielmanagement. Außerdem können Sie über die Startseite des Zielmanagements direkt auf globale Ziele zurückgreifen um zu dem [Dashboard und Reportings] (dashboard.md) der Ziele zu gelangen. Unter <code>Mein Dashboard </code>sehen die Ziele für die Sie als verantwortliche Person zuständig sind. 

| Parameter                    | Typ             | Beschreibung                                               |
| ---------------------------  | --------------- | ---------------------------------------------------------- |
| <code>Neu</code>             | Button          | Hier kommen Sie zur Seite zum Erstellen von neuen Zielen   |
| <code>Übersicht</code>       | Button          | Überblick über bereits bestehende Ziele                    |
| <code>Fortschritt</code>     | Button          | Überblick über den Fortschritt Ihrer Ziele                 |
| <code>Graph</code>           | Button          | Hier sehen Sie die Relation der einzelnen Ziele zueinander |

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All Integration Specs/Goals.png)

## Wie erstelle ich ein Ziel?
Mit dieser Funktion erstellen Sie Ziele für Ihr Unternehmen. Auf der linken Seitenleiste klicken Sie auf den Button <code>Neu</code> und werden auf die Maske zum Erstellen eines Audits weitergeleitet. Nachdem Sie dort die wichtigsten Informationen zu dem betreffenden Audit eingetragen haben speichern Sie das neue Audit ab. Beim Erstellen können Sie folgende Werte festlegen:

| Parameter                    | Typ             | Beschreibung                                               |
| ---------------------------  | --------------- | ---------------------------------------------------------- |
| <code>Titel</code>           | Text            | Kurzer Titel mit dem sich das Ziel wiederfinden lässt      |
| <code>Beschreibung</code>    | Text (optional) | Beschreibung des Ziels                                     |
| <code>Frist</code>           | Datum           | Datum bis, zu dem das Ziel erreicht werden soll            |
| <code>Startwert</code>       | Anzahl          | Grundwert des Ziels das erhöht bzw. verringert werden soll |
| <code>Aktueller Wert</code>  | Anzahl          | Aktueller Wert der Einheit auf die sich das Ziel bezieht   |
| <code>Zielwert</code>        | Anzahl          | Wert der bis zu der Frist erreicht werden soll             |
| <code>Einheit</code>         | Menge           | Bezieht sich auf das jeweilige Ziel. Hierbei kann es sich um Stückzahlen, Zeiten, Umsatz oder ähnliches handeln|
| <code>Richtung</code>        | Liste           | Bestimmt, ob der aktuelle Wert gleich bleiben, erhöht der verringert werden soll|

Danach werden Sie auf die Detailansicht zu diesem Ziel weitergeleitet und können weitere Parameter ändern oder hinzufügen. Fügen Sie zum Beispiel [Maßnahmen] (projects-and-tasks.md), Ziele oder [Customs fields](TODO: INSERT LINK) hinzu, um optimale Transparenz für Ihr Unternehmen und einen Überblick für Ihre Mitarbeiter zu schaffen. 

| Parameter                    | Typ             | Beschreibung                                               |
| ---------------------------  | --------------- | ---------------------------------------------------------- |
| <code>Verantwortlicher</code>| Name            | Person, die für das Ziel verantwortlich ist                |
| <code>Fortschritt</code>     | Menge           | Fortschritt des Ziels                                      |
| <code>Custom Fields</code>   | Button          | Unter Customs Fields können Sie zusätzliche Faktoren zu ihrem Ziel zuordnen|
| <code>Maßnahme</code>        | Button          | Verknüpfen Sie das Ziel  mit den zugehörigen Maßnahmen, die nötig sind um das Ziel zu erreichen|
| <code>Anhänge</code>         | Name            | Fügen Sie Dateien hinzu, die für dieses Risiko notwendig sind|
| <code>Schlagworte</code>     |Text (optional)  | Schlagworte bieten Ihnen die Möglichkeit das Ziel einem oder mehreren Themenfeldern zuzuordnen|
| <code>Offen/In Bearbeitung</code>| Button      | Setzen Sie den Bearbeitungsstand des Ziels nach Ihren Präferenzen|
| <code>Übergeordnete/Untergeordnete Ziele </code>|Text (optional)  | Setzen Sie Ihr Ziel in Relation zu anderen Zielen|
| <code>Audit</code>            | Button         | Verbinden Sie Ihr Ziel mit einem Audit für mehr Übersichtlichkeit und Transparenz|

### Auswirkungen und Aktionen im Hintergrund(TODO)

Beim Erstellen eines Ziels können Sie Verantwortliche für dieses Ziel ernennen. Diese Mitarbeiter erhalten eine E-Mail, sobald Sie zu Verantwortlichen ernannt werden.
### Beispiel 

Herr Müller möchte ein Ziel erstellen. Nachdem er sich bei qmBase angemeldet hat, ruft er die App Zielmanagement auf. Er wählt in der Seitenleiste den Button <code>Neu</code> aus. Anschließend trägt er den Titel des Ziels und alle wichtigen Eckdaten ein. Nachdem er auf **Speichern** geklickt hat, wird er zur Detailansicht weitergeleitet. Auf dieser Seite hat er die Möglichkeit weitere Daten einzutragen. Außerdem kann Herr Müller einzelne Felder editieren, falls er Daten fehlerhaft eingetragen hat. 
Er kann diesem Ziel weitere über- oder untergeordnete Ziele hinzufügen, um darzustellen, wie Ziele innerhalb des Unternehmens miteinander verbunden sind. Die Verbindung der Ziele werden ihm in der Seitenleiste unter dem Button <code>Graph</code> angezeigt. 

Herr Müller hat nun die Möglichkeiten Maßnahmen und Audits mit dem Ziel zu Verknüpfen und Dokumente an das Ziel anzuhängen. Mit jedem Ziel sieht Herr Müller direkt welche Maßnahmen aus diesem Ziel resultieren und wie deren Bearbeitungsstand ist. Für alle Maßnahmen wird eine eindeutige Verantwortlichkeit sowie eine Frist für die Fertigstellung definiert. 
Herr Müller kann, sobald er Fortschritte des Ziels erreicht hat, diese unter dem Punkt **Fortschritt** eintragen, eine detaillierte Ansicht aller Fortschritte kann er auf der Seitenleiste unter dem Button <code>Fortschritte</code> einsehen. Sobald das Ziel erreicht ist, setzt Herr Müller den Status des Ziels von **In Bearbeitung** auf **Abgeschlossen**

### Bearbeiten von Zielen 
Möchten Sie Parameter ändern, fahren Sie mit dem Cursor über das betreffende Feld und klicken sie auf das <code>Stift</code> Icon. Anschließend können Sie den Parameter bearbeiten.

### Wo finde ich Auswertungen meiner Ziele?
Die Auswertungen der Ziele, sowie anderer Apps, finden Sie in der App Dashboard & Reportings. Die FAQ zu der App Dashboard & Reportings finden Sie [hier](dashboard.md).
