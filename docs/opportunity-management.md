---
id: opportunity-management
title: Risiken & Chancen
---
TODO IMPORT REACT ICONS

# Startseite der App Risiken und Chancen
Dies ist die Startseite der App Risiken und Chancen mit den Buttons auf linken Seitenleiste navigieren Sie sich durch das Risiko & Chancen Management. Außerdem können Sie über die Startseite des Risiko & Chancen Managements direkt auf das globale Dashboard zurückgreifen um zu dem [Dashboard und Reportings](dashboard.md) der Risiken & Chancen zu gelangen. Unter <code>Mein Dashboard </code> sehen die Risiken & Chancen für die Sie als verantwortliche Person zuständig sind. 
| Parameter                    | Typ             | Beschreibung                                               |
| ---------------------------  | --------------- | ---------------------------------------------------------- |
| <code>Neu</code>             | Button          | Hier kommen Sie zur Seite zum Erstellen von neuen Risiken/Chancen|
| <code>Übersicht</code>       | Button          | Überblick über bereits bestehenden Risiken/Chancen         |
| <code>Bewertung</code>       | Button          | Bereits bewertete Risiken                                  |
| <code>Einstellungen</code>   | Button          | Hier können Sie die Einstellungen des Risikomanagements einsehen und ggf. ändern|
| <code>Papierkorb</code>      | Button          | Hier finden Sie gelöschte Einträge der App Risiken und Chancen|

![t](https://caqadmin.blob.core.windows.net/public-screenshots/AllIntegrationSpecs/QualityMonitor/Opportunities.png)

## Wie erstelle ich ein neues Risiko/ eine neue Chance?
Mit dieser Funktion erstellen Sie Risiken/Chancen auf der linken Seitenleiste klicken Sie auf den Button <code>Neu</code> und werden auf die Maske zum Erstellen von Risiken & Chancen weitergeleitet. Nachdem Sie dort die wichtigsten Informationen zu dem betreffenden Risiko oder der Chance eingetragen haben, klicken Sie auf: speichern.
Beim Erstellen können Sie folgende Werte festlegen:

| Parameter                    | Typ             | Beschreibung                                               |
| ---------------------------  | --------------- | ---------------------------------------------------------- |
| <code>Typ</code>             | Text            | Wählen Sie zwischen einer Chance oder einem Risiko         |
| <code>Kategorie</code>       | Button          | Wählen Sie eine Kategorie für Ihr Risiko aus               |
| <code>Titel</code>           | Button          | Kurzer Titel mit dem sich das Risiko/ die Chance wiederfinden lässt|
| <code>Verantwortlicher</code>| Name            | Name des Verantwortlichen für dieses Risiko/ die Chance    |
| <code>Beschreibung</code>    |Text (optional)  | Geben Sie Ihrem Team mehr Informationen über den Sachverhalt|

Danach werden Sie auf die Detailansicht zu diesem Risiko oder dieser Chance weitergeleitet und können weitere Parameter ändern oder hinzufügen. Fügen Sie zum Beispiel [Maßnahmen](projects-and-tasks.md), [Ziele](goals.md) oder [Customs fields](TODO: INSERT LINK) hinzu, um optimale Transparenz für Ihr Unternehmen und einen Überblick für Ihre Mitarbeiter zu schaffen. 

| Parameter                    | Typ             | Beschreibung                                               |
| ---------------------------  | --------------- | ---------------------------------------------------------- |
| <code>Bewertung</code>       | Text            | Erstellen Sie ein Bewertungskriterium für Ihre Chance oder Ihr Risiko|
| <code>Custom Fields</code>   | Button          | Unter Customs Fields können Sie zusätzliche Faktoren zu ihrem Risiko zuordnen|
| <code>Maßnahme </code>       | Button          | Verknüpfen Sie das Risiko mit den zugehörigen Maßnahmen um den Schaden zu verringern|
| <code>Anhänge</code>         | Name            | Fügen Sie Dateien hinzu, die für dieses Risiko notwendig sind|
| <code>Schlagworte</code>     |Text (optional)  | Schlagworte bieten Ihnen die Möglichkeit dem Risiko einem oder mehreren Themenfeldern zuzuordnen oder zu priorisieren|
| <code>Offen/In Bearbeitung</code>| Button      | Setzen Sie den Bearbeitungsstand des Risikos/der Chance nach Ihren Präferenzen|

### Auswirkungen und Aktionen im Hintergrund (TODO)

Beim Erstellen von Risiken & Chancen wird der Verantwortliche per E-Mail benachrichtigt.

### Beispiel

Herr Müller möchte ein Risiko erstellen. Nachdem er sich bei qmBase angemeldet hat, ruft er die App Risiko & Chancen auf. Er wählt in der Seitenleiste den Button <code>Neu</code> aus. Anschließend wählt er den Typ **Risiko** und die Kategorie des Risikos aus und trägt alle wichtigen Eckdaten ein. Nachdem er auf **Speichern** geklickt hat, wird er zur Detailansicht weitergeleitet. Auf dieser Seite hat er die Möglichkeit weitere Daten einzutragen. Außerdem kann Herr Müller einzelne Felder editieren, falls er Daten fehlerhaft eingetragen hat. 
Herr Müller hat nun die Möglichkeiten Maßnahmen mit dem Risiko zu Verknüpfen und Dokumente an das Risiko anzuhängen. Mit jedem Risiko sieht Herr Müller direkt welche Maßnahmen aus diesem Risiko resultieren und wie deren Bearbeitungsstand ist. Für alle Maßnahmen wird eine eindeutige Verantwortlichkeit sowie eine Frist für die Fertigstellung definiert. 
Herr Müller kann Bewertungen zu dem erstellten Risiko hinzufügen. Hierzu klickt er auf den Button <code>Plus</code> und trägt dort die Formel für die Bewertung und alle wichtigen Eckdaten ein. Die Bewertung kann in regelmäßigen Zeitabständen wiederholt werden. So ist sichergestellt, dass das Risiko regelmäßig überwacht werden. Sobald das Risiko eliminiert wurde, setzt Herr Müller den Status des Riskos von **In Bearbeitung** auf **Abgeschlossen**.
  
### Bearbeiten von Risiken & Chancen

Möchten Sie Parameter ändern, fahren Sie mit dem Cursor über das betreffende Feld und klicken sie auf das <code>Stift</code> Icon. Anschließend können Sie den Parameter bearbeiten.

### Wie definiere ich die Bewertungskriterien für Chancen & Risiken?

Für jede Chancen- bzw. Risikokategorie können individuelle Bewertungskriterien definiert werden. Dies erfolgt in den Einstellungen zu der jeweiligen Kategorie.
Dazu definiere Sie zunächst Variablen anhand derer Sie Ihre Chancen/ Risiken bewerten möchten:  

![SCREENSHOT] (TODO: INSERT SCREENSHOT https://caqadmin.blob.core.windows.net/faqs/0-images/783eaf58-031b-4bc0-b0dd-926f2c8c04a7-mceclip0.png)

In unserem Beispiel werden die Risiken anhand folgender Parameter bewertet:
* Eintrittswahrscheinlichkeit (Auf einer Skala von 1 bis 10)
* Entdeckungswahrscheinlichkeit (Auf einer Skala von 1 bis 10)
* Bedeutung des Risikos (Auf einer Skala von 1 bis 10)
Im nächsten Schritt definieren wir eine Formel mit der sich aus den Variablen eine [Risikoprioritätzahl (RPZ)](https://www.qmbase.com/fmea-fehlermoeglichkeits-und-einfluss-analyse/) ermittelt.

![SCREENSHOT] (TODO: INSERT SCREENSHOT https://caqadmin.blob.core.windows.net/faqs/0-images/2bd2c719-cd26-45f1-a998-df1d27a2788d-mceclip2.png)

In unserem Beispiel multiplizieren wir die einzelnen Variablen miteinander. 
Wird ein Risiko mit der entsprechenden Kategorie bewertet, werden Sie aufgefordert für jede von ihnen definierte Variable auf der von Ihnen festgelegten Skala zu bewerten. Als Ergebnis wird automatisch die Risikoprioritätzahl ermittelt.

![SCREENSHOT] (TODO: INSERT SCREENSHOT https://caqadmin.blob.core.windows.net/faqs/0-images/f01f9746-3617-47b9-b00d-1d1eb68e00b9-mceclip1.png)

### Wieso werden bei der Bewertung von Chancen und Risiken keine Ergebnisse berechnet?

Für die Bewertung von Chancen und Risiken müssen in den Einstellungen Variablen und Formeln zur Bewertung definiert werden. Sollten Sie Variablen umbenennen müssen, diese auch in der Formel angepasst werden. Sollten also keine Ergebnisse zur Bewertung von Chancen und Risiken berechnet werden prüfen Sie bitte die Berechnungsformel und die Variablennamen auf Richtigkeit.
 
### Wieso werden bei der Bewertung von Chancen und Risiken falsche Ergebnisse berechnet?

Sie haben die notwendigen Variablen definiert und die Formel zu Berechnung der Risikowerte erstellt, aber die Ergebnisse die berechnet werden sind falsch?
Eine Ursache dafür kann die Benennung der Variablen sein. Wenn Sie zum Beispiel ein Variable schlicht E nennen, dann kann es passieren, dass diese als Eulersche Zahl interpretiert wird. Bei der Berechnungen des Risikowertes wird dann automatisch E = 2,71828 angenommen. Dieser Fehler ist nicht so offensichtlich, da das Ergebnis ganzzahlig gerundet wird. Vermeiden Sie also am besten Variablennamen, die Ähnlichkeiten mit standardisierten mathematischen Parametern aufweisen.
 
### Wo finde ich Auswertungen meiner Risiken & Chancen?

Die Auswertungen der Risiken & Chancen, sowie anderer Apps, finden Sie in der App Dashboard & Reportings. Das FAQ zu der App Dashboard & Reportings finden Sie [hier](dashboard.md).


