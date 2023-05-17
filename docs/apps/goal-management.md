---
id: goal-management
title: Zielmanagement
---

![Startseite Zielmanagement](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Goals.png)

## Startseite

Auf der Startseite des Zielmanagements werden Ihnen die wichtigsten Informationen angezeigt. Diese Informationen sind in einzelnen Karten organisiert.
Folgende Karten sind im Zielmanagement verfügbar.

| Name                  | Beschreibung                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| Angeheftete Einträge  | Administratoren können einzelne Ziele, die besonders wichtig sind, direkt auf der Startseite anheften. |
| Handlung erforderlich | Hier wird dargestellt in welchen Bereichen akute Handlung erforderlich ist.                            |
| Meine Ziele           | Schneller Zugriff auf Ziele, die Sie erstellt haben oder für die Sie verantwortlich sind.              |
| Zuletzt aufgerufen    | Hier werden die letzten 10 Ziele oder Zielfortschritte dargestellt, die Sie aufgerufen haben.          |

Unter <code>Mein Dashboard</code> sehen die Ziele für die Sie als verantwortliche Person zuständig sind. Über <code>Smart Views</code> können Sie auf gespeicherte Filter zugreifen.

| Parameter                | Beschreibung                                               |
| ------------------------ | ---------------------------------------------------------- |
| <code>Neu</code>         | Hier kommen Sie zur Seite zum Erstellen von neuen Zielen   |
| <code>Übersicht</code>   | Überblick über bereits bestehende Ziele                    |
| <code>Fortschritt</code> | Überblick über den Fortschritt Ihrer Ziele                 |
| <code>Graph</code>       | Hier sehen Sie die Relation der einzelnen Ziele zueinander |

## Wie erstelle ich ein Ziel?

Neue Ziele erstellten Sie über den den Button <code>Neu</code> auf der linken Seite. In der folgenden Maske können Sie kurz die wichtigsten Informationen zum dem Ziel erfassen:

| Parameter                 | Typ             | Beschreibung                                          |
| ------------------------- | --------------- | ----------------------------------------------------- |
| <code>Titel</code>        | Text            | Kurzer Titel mit dem sich das Ziel wiederfinden lässt |
| <code>Beschreibung</code> | Text (optional) | Beschreibung des Ziels                                |
| <code>Frist</code>        | Datum           | Datum bis, zu dem das Ziel erreicht werden soll       |

Danach werden Sie auf die Detailansicht zu diesem Ziel weitergeleitet und können weitere Parameter ändern oder hinzufügen.
Fügen Sie zum Beispiel [Maßnahmen] (projects-and-tasks.md), Ziele oder [Custom Fields](TODO: INSERT LINK) hinzu, um optimale Transparenz für Ihr Unternehmen und einen Überblick für Ihre Mitarbeiter zu schaffen.

| Parameter                                        | Typ             | Beschreibung                                                                                                                             |
| ------------------------------------------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| <code>Verantwortlicher</code>                    | Name            | Person, die für das Ziel verantwortlich ist                                                                                              |
| <code>Fortschritt</code>                         | Menge           | Fortschritt des Ziels                                                                                                                    |
| <code>Custom Fields</code>                       | Button          | Unter Custom Fields können Sie zusätzliche Faktoren zu ihrem Ziel zuordnen                                                               |
| <code>Startwert</code>                           | Anzahl          | Grundwert des Ziels, der erhöht bzw. reduziert werden soll                                                                               |
| <code>Aktueller Wert</code>                      | Anzahl          | Aktueller Wert der Einheit auf die sich das Ziel bezieht                                                                                 |
| <code>Zielwert</code>                            | Anzahl          | Wert der bis zu der Frist erreicht werden soll                                                                                           |
| <code>Einheit</code>                             | Menge           | Einheit in der das Ziel gemessen wird, hierbei kann es sich um Prozentwerte oder absolute Werte (z.B. Geld, Stückzahlen, Zeiten) handeln |
| <code>Richtung</code>                            | Liste           | Bestimmt, ob der aktuelle Wert gleich bleiben, erhöht der verringert werden soll                                                         |
| <code>Maßnahme</code>                            | Button          | Verknüpfen Sie das Ziel mit den zugehörigen Maßnahmen, die nötig sind um das Ziel zu erreichen                                           |
| <code>Anhänge</code>                             | Name            | Fügen Sie Dateien hinzu, die für dieses Ziel relevant sind                                                                               |
| <code>Schlagworte</code>                         | Text (optional) | Schlagworte bieten Ihnen die Möglichkeit das Ziel einem oder mehreren Themenfeldern zuzuordnen                                           |
| <code>Offen/In Bearbeitung/Abgeschlossen</code>  | Button          | Setzen Sie den Bearbeitungsstand des Ziels                                                                                               |
| <code>Übergeordnete/Untergeordnete Ziele </code> | Text (optional) | Setzen Sie Ihr Ziel in Relation zu anderen Zielen                                                                                        |
| <code>Audit</code>                               | Button          | Verbinden Sie Ihr Ziel mit einem Audit für mehr Übersichtlichkeit und Transparenz                                                        |

### Auswirkungen und Aktionen im Hintergrund(TODO)

Beim Erstellen eines Ziels können Sie die Verantwortliche Person für dieses Ziel bestimmen. Der Mitarbeiter wird darüber automatisch per E-Mail informiert.

## Wie erfasse ich den Fortschritt für ein Ziel

In dem Bereich Fortschritt lassen sich jeweils die aktuellen Wert hinterlegen. Der Fortschritt lässt sich als Prozentwert oder als absoluter Wert erfassen. Wird das Ziel als absoluter Wert erfasst, dann kann auch zusätzlich eine Einheit festgelegt werden.

Der zeitliche Verlauf der Zielerreichung wird automatisch in einem Diagramm angezeigt. Über den Menüpunkt <code>Fortschritt</code> in der Seitenleiste können auch die bereits bestehenden Werte auch wieder editiert werden.

### Beispiel

Herr Müller möchte ein Ziel erstellen. Nachdem er sich bei qmBase angemeldet hat, ruft er die App Zielmanagement auf. Er wählt in der Seitenleiste den Button <code>Neu</code> aus.
Anschließend trägt er den Titel des Ziels und alle wichtigen Eckdaten ein. Nachdem er auf **Speichern** geklickt hat, wird er zur Detailansicht weitergeleitet. Auf dieser Seite hat er die Möglichkeit weitere Daten einzutragen.
Außerdem kann Herr Müller einzelne Felder editieren, falls er Daten fehlerhaft eingetragen hat.
Er kann diesem Ziel weitere über- oder untergeordnete Ziele hinzufügen, um darzustellen, wie Ziele innerhalb des Unternehmens miteinander verbunden sind.
Die Verbindung der Ziele werden ihm in der Seitenleiste unter dem Button <code>Graph</code> angezeigt.

Herr Müller hat nun die Möglichkeiten Maßnahmen und Audits mit dem Ziel zu Verknüpfen und Dokumente an das Ziel anzuhängen.
Mit jedem Ziel sieht Herr Müller direkt welche Maßnahmen aus diesem Ziel resultieren und wie deren Bearbeitungsstand ist.
Für alle Maßnahmen wird eine eindeutige Verantwortlichkeit sowie eine Frist für die Fertigstellung definiert.
Herr Müller kann, sobald er Fortschritte des Ziels erreicht hat, diese unter dem Punkt **Fortschritt** eintragen, eine detaillierte Ansicht aller Fortschritte kann er auf der Seitenleiste unter dem Button <code>Fortschritte</code> einsehen.
Sobald das Ziel erreicht ist, setzt Herr Müller den Status des Ziels von **In Bearbeitung** auf **Abgeschlossen**

### Bearbeiten von Zielen

Möchten Sie Parameter ändern, fahren Sie mit dem Cursor über das betreffende Feld und klicken sie auf das <code>Stift</code> Icon. Anschließend können Sie den Parameter bearbeiten.

### Wo finde ich Auswertungen meiner Ziele?

Die Auswertungen der Ziele, sowie anderer Apps, finden Sie in der App Dashboard & Reportings. Die FAQ zu der App Dashboard & Reportings finden Sie [hier](dashboard.mdx).

### Benachrichtigungen

Bei der Bearbeitung von Zielen werden zu folgenden Anlässen Benachrichtigungen Versand:

| Auslösendes Ereignis        | Empfänger              | Benachrichtigung an Abonnenten der Watch Funktion |
| --------------------------- | ---------------------- | ------------------------------------------------- |
| Erstellen eines Ziels       | Verantwortlicher       |                                                   |
| Editieren eines Ziels       | Verantwortlicher       | ✅                                                |
| Ändern des Status           | Verantwortlicher       | ✅                                                |
| Ändern des Verantwortlichen | Neuer Verantwortlicher |                                                   |
| Hinzufügen von Anhängen     | Verantwortlicher       | ✅                                                |
| Hinzufügen von Kommentaren  | Verantwortlicher       | ✅                                                |
