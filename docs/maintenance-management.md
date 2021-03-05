---
id: maintenance-management
title: Instandhaltung
---

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/MaintenanceManagement.png)

:::info Aktuelle Erweiterungen und Verbesserungen im Bereich Instandhaltung finden Sie [hier](/blog/tags/instandhaltung)
:::

## Erfassen von Inventargegenständen

Um neue Inventargegenstände zu erfassen klicken Sie auf den Button <code>Neu</code> über der Tabelle mit den bestehenden Inventargegenständen. Jeder Inventargegenstand kann mit den folgenden Funktionen erfasst werden:

| Parameter                 | Typ             | Beschreibung                                               |
| ------------------------- | --------------- | ---------------------------------------------------------- |
| <code>Kategorie</code>        | Auswahl            | Für eine Bessere Ordnung wird jeder Inventargegenstand einer Kategorie zugeordnet. Die Kategorien werden in den Einstellungen zum Instandhaltungsmanagement erstellt.|
| <code>Hersteller</code> | Text  |Hersteller des Inventarggegenstands|
| <code>Modell</code>        |Text | Modell des Inventarggegenstands|
|<code>Inventarnummer</code>|Text |Inventarnmmer des Inventargegenstands|
|<code>Seriennummer</code>|Text |Seriennummer des Inventargegenstands|
|<code>Beschreibung</code>|Text|Platz für weitere Informationen über den Inventargegenstand |
|<code>Funktionsfähig</code>|Auswahl |Funktionsfähigkeit des Inventargegenstands|
|<code>Status</code>|Auswahl Status des Inventargegenstands. Die unterschiedlichen Status werden in den Einstellungen zum Instandhaltungsmanagement erstellt.|
|Standort|Auswahl|Standort des Inventargegenstands|


Zusätzlich können weitere Inventragegenstände als Anlage zusammengefasst werden.


## Inventarprüfungen

Jeder Inventargegenstand kann unterschiedlichen Inventarprüfungen unterliegen. Um das System möglichst flexibel zu gestalten werden die unterschiedlichen Inventarprüfungen unabhängig vom Inventargegenstand konfiguriert. Jedem Inventargegenstand können dann individuell die einzelnen Prüfungstypen zugeordnet werden.  


### Erstellung von Inventarprüfungen

Die einzelnen Inventarprüfungen werden in den Einstellungen mit folgenden Eigenschaften erstellt. 

| Parameter                 | Typ             | Beschreibung                                               |
| ------------------------- | --------------- | ---------------------------------------------------------- |
| <code>Titel</code>        |Text            | Bezeichnung der Inventarpüfung|
| <code>Wiederkehrend</code>|Auswahl          |Muss diese Prüfung regelmäßig wiederholt werden?|
|<code>Intervall</code>|Zahl + Auswahl| Das Wiederholungsintervall, sofern die Prüfung regelmäßig wiederholt werden muss|
|<code>Vorwarnzeit</code>|Zahl + Auswahl| Zeitraum zur Warnung für anstehenden Wiederholungen von Prüfungen| 
|<code>Beschreibung</code>|Text|Platz für weitere Informationen über der Inventarprüfung|
|<code>Custom Fields</code>|Text|Custom Fields dienen zur Erstellung indvidueller Felder zur Informationserfassung|

### Verknüpfen und Erfassen von Inventarprüfungen

Unterliegt ein Inventargegenstand einer bestimmten Inventarprüfung, muss der Inventargegenstand mit dieser Prüfung verknüpft werden. Dazu wird der Inventargegnstand aufgerufen und in der Karte ***Prüfungsstatus*** über den Button <code>Neu</code> mit der Prüfung verknüpft. Alle Inventarprüfungen denen der Inventargegenstand unterliegt werden tabellarisch aufgelistet.  

Über den jeweiligen Button <code>Neu</code> das ein tatsächliches Prüfungsereignis erfasst werden. Jede Prüfung wird mit folgenden Eigenschaften erfasst:

| Parameter                 | Typ             | Beschreibung                                               |
| ------------------------- | --------------- | ---------------------------------------------------------- |
| <code>Erledigt</code>        |Datum            | Datum der Duchführung der Prüfung|
| <code>Prüfung OK?</code>|Auswahl          |War die Prüfung erfolgreich?|
|<code>Kosten</code>|Zahl| Welche Kosten sind mit der Prüfung enstanden?|
|<code>Erledigt von</code>|Auswahl| Wer hat die Prüfung durchgeführt?| 
|<code>Beschreibung</code>|Text|Platz für weitere Informationen über das prüfungsereignis|
|<code>Custom Fields</code>|Text|Individuelle Felder zur Informationserfassung|

Nach dem Speichern der Prüfung werden alle erfassten Daten noch mal dargestellt und es können zusätzlich Dateien angehängt werden, zum Besipiel externe Prüfungsberichte. 

Auf Basis des Prüfungsdatums und dem Wiederholungsintervall für die Invetarprüfung errechnet sich automatisch die Frist für die erneute Durchfrührung der Prüfung. 

Eine Übersicht über alle anstehenden und durchgeführten Invertprüfungen sind links über die Seitennavigation über die Menüpunkte <code>Anstehende Prüfungen</code> und <code>Durchgeführte Prüfungen</code> erreichbar erreichbar.  

## Reparaturen
TODO



## QR Code Etiketten erstellen zur einfachen digitalen Erfassung von Prüfungen

Nachdem Sie Ihr Inventar in qmBase erfasst haben, stellt sich die Frage, wie Sie es schaffen möglichst einfach und nahtlos Prüfungen zu erfassen.
Ein Ansatz hierfür ist das erstellen von Etiketten mit einem QR Code, so dass Sie Prüfungen einfach mit Ihrem Smartphone oder Tablet erfassen können.

:::note Was benötigen Sie?
qmBase, Excel, Word vorgefertigte Etiketten und einen Drucker
:::

Wie Sie das in drei einfach Schritten schaffen stellen wir Ihnen hier vor.

1. Exportieren Sie die Gegenstände, die Sie etikettieren möchten
2. Nutzen Sie unsere Excel Vorlage, um die Links zu erzeugen
3. Drucken Sie Ihre Etiketten als Serienbrief und etikettieren Sie Ihre Gegenstände

### Exportieren Sie die Gegenstände

Wählen Sie die Gegenstände aus, die Sie etikettieren möchten. Anschließend können Sie diese Gegenstände aus qmBase exportieren.

### Nutzen Sie unsere Excel Vorlage zur Erzeugung der Links

In unserer Vorlage müssen Sie folgende Spalten ausfüllen.

Download: [Etiketten_qmBase_qr.xlsx](./assets/Etiketten_qmBase_qr.xlsx)

- Anzeigename: Lesbarer Text, der zusätzlich zum QR Code angezeigt wird
- ID: qmBase Identifikationsnummer des Gegenstands
- HostName: Name Ihrer qmBase Instanz z.B. https://meineFirma.qmbase.com
- Path: Unverändert lassen

### Drucken Sie die Etiketten als Serienbrief

Wenn Sie Tabelle aus dem vorherigen Schritt erstellt haben, können Sie sich hier den Serienbrief als Vorlage herunterladen. Achtung: Word meldet beim Öffnen der Datei einen beschädigten Datensatz. Dies kann aber durch einen Klick auf Wiederherstellen behoben werden.

Download: [Etiketten_qmBase_qr.docx](./assets/Etiketten_qmBase_qr.docx)

Für Ihren eigenen Seriebrief können Sie folgende Feldfunktioinen verwenden:

- QR Code: <code>DISPLAYBARCODE MERGEFIELD Url QR \q 3 \s 5</code>
- Anzeigename: <code>MERGEFIELD Anzeigename</code>

In unsere Vorlage verwenden wir Etiketten der Größe 45x45mm. Diese Größe reicht in der Regel aus, damit die Etiketten problemlos von Ihrer Kamera erkannt werden können. Für andere Größen und Etiketten Formen können Sie entweder unsere Vorlage anpassen oder mit dem Word Serienbrief Assistenten mit wenigen Klicks Ihre eigene Vorlage designen. Mehr Informationen zur Erstellungen von Serienbriefen finden Sie [hier](https://www.google.de/search?q=office+serienbrief+erstellen).

### Etikettieren Sie Ihre Gegenstände

Die Etiketten können jetzt mit der Serienbrief Funktion von Word gedruckt werden und auf Ihren Inventargegenständen verteilt werden. Danach können Sie die Etiketten einfach einscannen und sofort Prüfungen und Prüfdaten erfassen.

## FAQs Instandhaltung

#### Welche Daten soll ich erfassen

Erfassen Sie die Daten, die Sie bei der Arbeit benötigen. Typischerweise hat sich folgendes als Hilfreich herausgestellt.

- Name wie werden die Geräte in Ihrer Organisation bezeichnet
- Anleitungen und Hilfe z.B. als PDF Anhang
- Adressen und Kontaktdaten von Servicepartnern
- Abmessungen und Gewicht, wenn Dinge transportiert werden müssen
- Anschaffungsdatum, um das Alter Ihres Maschinenparks im Blick zu behalten
