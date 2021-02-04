---
id: audit-management
title: Auditmanagement
---
TODO IMPORT REACT ICONS 

# Auditmanagement Startseite 
Dies ist die Startseite des Auditmanagements mit den Buttons auf linken Seitenleiste navigieren Sie sich durch das Auditmanagement.

| Parameter                 | Typ             | Beschreibung                                               |
| ------------------------- | --------------- | ---------------------------------------------------------- |
| <code>Neu</code>          | Button          | Hier kommen Sie zur Seite zum Erstellen eines neuen Audits |
| <code>Audits</code>       | Button          | Überblick über bereits bestehende Audits                   |
| <code>Auditmatrix</code>  | Button          | Überblick über ihre Auditmatrix                            |
| <code>Einstellungen</code>| Button          | Hier können Sie die Einstellungen des Auditmanagements einsehen und ggf. ändern         |

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All Integration Specs/Audits.png)

## Wie erstelle ich ein Audit?
Mit dieser Funktion erstellen Sie Audits. Auf der linken Seitenleiste klicken Sie auf den Button <code>Neu</code> und werden auf die Maske zum Erstellen eines Audits weitergeleitet. Nachdem Sie dort die wichtigsten Informationen zu dem betreffenden Audit eingetragen haben speichern Sie das neue Audit ab. 

| Parameter                    | Typ             | Beschreibung                                               |
| ---------------------------  | --------------- | ---------------------------------------------------------- |
| <code>Kategorie</code>       | Text            | Audit einer Kategorie (z.B. Audit der Geschäftsführung) zuordnen                 |
| <code>Titel</code>           | Text            | Kurzer Titel mit dem sich die Maßnahmen wiederfinden lässt |
| <code>Beschreibung</code>    | Text (optional) | Mehr Informationen über das spezifische Audit              |
| <code>Geplant</code>         | Datum            | Wann das Audit erstellt wurde                              |
| <code>Verantwortlicher</code>| Name             | Wer ist für dieses Audit verantwortlich?                   |


Danach werden Sie auf die Detailansicht zu diesem Audit weitergeleitet und können weitere Parameter ändern oder hinzufügen. Fügen Sie zum Beispiel [Maßnahmen] (projects-and-tasks.md), [Ziele] (goal-management.md) oder [Customs fields](TODO: INSERT LINK) hinzu, um optimale Transparenz für Ihr Unternehmen und einen Überblick für Ihre Mitarbeiter zu schaffen. 

| Parameter                    | Typ             | Beschreibung                                               |
| ---------------------------  | --------------- | ---------------------------------------------------------- |
| <code>Maßnahmen</code>       | Text            |   Fügen Sie Maßnahmen hinzu, die im Zusammenhang mit diesem Audit durchzuführen sind (Verbesserungen)|
| <code>Ziele</code>           | Text            | Fügen Sie Ziele hinzu, die durch dieses Audit erreicht werden sollen|
| <code>Zeit und Ort</code>    | Datum/Text      | Informationen über den Termin des Audits und den Ort der Durchführung|
| <code>Anhänge</code>         | Datei (optional)|Fügen Sie Dateien hinzu, die für dieses Audit notwendig sind|
| <code>Verantwortlicher</code>| Name            | Wer ist für dieses Audit verantwortlich?                   |
| <code>Customfieds</code>     | Text            | Mit Customfields können Sie zusätzliche Informationen wie das Auditergebnis und dokumentierte Informationen hinzufügen|
| <code>Schlagworte</code>     | Text            | Schlagworte bieten Ihnen die Möglichkeit Audits einem oder mehreren Themenfeldern zuzuordnen oder zu priorisieren|
| <code>Offen/In Bearbeitung</code>| Button          | Setzen Sie den Bearbeitungsstand des Audits nach Ihren Präferenzen|

### Auswirkungen und Aktionen im Hintergrund(TODO)

Beim Erstellen eines Audits wird der Verantwortliche per E-Mail benachrichtigt. Wenn Sie selbst der Verantwortliche sind, bekommen Sie keine E-Mail.
Sobald Teilnehmer zu einem Audit hinzugefügt werden, werden Sie per E-Mail benachrichtigt.

### Beispiel 

Herr Müller möchte ein Audit erstellen. Nachdem er sich bei qmBase angemeldet hat, ruft er die App Auditmanagement auf. Er wählt in der Seitenleiste den Button <code>Neu</code> aus. Anschließend wählt er die Kategorie seines Audits **Vertrieb** aus und trägt alle wichtigen Eckdaten ein. Nachdem er auf **Speichern** geklickt hat, wird er zur Detailansicht weitergeleitet. Auf dieser Seite hat er die Möglichkeit weitere Daten einzutragen. Außerdem kann Herr Müller einzelne Felder editieren, falls er Daten fehlerhaft eingetragen hat. Herr Müller hat nun die Möglichkeiten Maßnahmen und Ziele mit dem Audit zu Verknüpfen und Dokumente an das Audit anzuhängen. Mit jedem Audit sehen Sie direkt welche Maßnahmen aus diesem Audit resultieren und wie deren Bearbeitungsstand ist. Für alle Maßnahmen wird eine eindeutige Verantwortlichkeit sowie eine Frist für die Fertigstellung definiert. Herr Müller kann nun Teilnehmer zu dem Audit einladen und fügt alle Personen hinzu, die bei diesem Audit zugegen sein sollen. Die Teilnehmer werden anschließend per E-Mail benachrichtigt. 

### Wie kann ich Änderungen an den Werten vornehmen? 

Möchten Sie Parameter ändern, fahren Sie mit dem Cursor über das betreffende Feld und klicken sie auf das <code>Stift</code> Icon. Anschließend können Sie den Parameter bearbeiten.

### Wie erstelle ich eine Auditmatrix? (TODO)

### Wie erstelle ich einen Auditkatalog?(TODO)

### Wo finde ich Auswertungen meiner Audits?
Die Auswertungen der Audits, sowie anderer Apps, finden Sie in der App Dashboard & Reportings. Das FAQ zu der App Dashboard & Reportings finden Sie [hier](dashboard.md). 




