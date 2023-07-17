---
id: maintenance-management
title: Instandhaltung
---

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/MaintenanceManagement.png)

:::info Aktuelle Erweiterungen und Verbesserungen im Bereich Instandhaltung finden Sie [hier](/blog/tags/instandhaltung)
:::

Die App für das Instandhaltungsmanagement und zur Prüfmittelverwaltung unterstützt Sie in der Verwaltung Ihrer Inventargegenstände.
Jedem Inventargegenstand können frei definierbare Inventarprüfungen mit den notwendigen Wiederholungsintervallen zugeordnet werden. Dadurch ergibt sich Ihr Wartungsplan ganz automatisch von selbst.
Sämtliche Aktivitäten des Instandhaltungsmanagements und der Prüfmittelverwaltung werden automatisch ausgewertet und langfristig dokumentiert.

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

Download: [Etiketten_qmBase_qr.xlsx](./../assets/Etiketten_qmBase_qr.xlsx)

- Anzeigename: Lesbarer Text, der zusätzlich zum QR Code angezeigt wird
- ID: qmBase Identifikationsnummer des Gegenstands
- HostName: Name Ihrer qmBase Instanz z.B. <https://meineFirma.qmbase.com>
- Path: Unverändert lassen

### Drucken Sie die Etiketten als Serienbrief

Wenn Sie Tabelle aus dem vorherigen Schritt erstellt haben, können Sie sich hier den Serienbrief als Vorlage herunterladen. Achtung: Word meldet beim Öffnen der Datei einen beschädigten Datensatz.
Dies kann aber durch einen Klick auf Wiederherstellen behoben werden.

Download: [Etiketten_qmBase_qr.docx](./../assets/Etiketten_qmBase_qr.docx)

Für Ihren eigenen Serienbrief können Sie folgende Feldfunktionen verwenden:

- QR Code: <code>DISPLAYBARCODE MERGEFIELD Url QR \q 3 \s 5</code>
- Anzeigename: <code>MERGEFIELD Anzeigename</code>

In unsere Vorlage verwenden wir Etiketten der Größe 45x45mm. Diese Größe reicht in der Regel aus, damit die Etiketten problemlos von Ihrer Kamera erkannt werden können.
Für andere Größen und Etiketten Formen können Sie entweder unsere Vorlage anpassen oder mit dem Word Serienbrief Assistenten mit wenigen Klicks Ihre eigene Vorlage designen.
Mehr Informationen zur Erstellungen von Serienbriefen finden Sie [hier](https://www.google.de/search?q=office+serienbrief+erstellen).

### Etikettieren Sie Ihre Gegenstände

Die Etiketten können jetzt mit der Serienbrief Funktion von Word gedruckt werden und auf Ihren Inventargegenständen verteilt werden. Danach können Sie die Etiketten einfach einscannen und sofort Prüfungen und Prüfdaten erfassen.

## FAQs Instandhaltung

### Wer kann Prüfungen erfassen?

Um Prüfungen zu erfassen, müssen Sie Zugriff auf den Inventargegenstand haben. Zusätzlich müssen Sie entweder (Module)-Administrator oder Verantwortlicher sein.
Alternativ können Sie auch über den Tab Zugriff als Bearbeiter hinzugefügt werden.

### Welche Daten soll ich erfassen

Erfassen Sie die Daten, die Sie bei der Arbeit benötigen. Typischerweise hat sich folgendes als Hilfreich herausgestellt.

- Name wie werden die Geräte in Ihrer Organisation bezeichnet
- Anleitungen und Hilfe z.B. als PDF Anhang
- Adressen und Kontaktdaten von Servicepartnern
- Abmessungen und Gewicht, wenn Dinge transportiert werden müssen
- Anschaffungsdatum, um das Alter Ihres Maschinenparks im Blick zu behalten

<!-- Custom component -->

import CommonFunction from "@site/src/components/commonFunction.tsx";

import ConnectionMatrix from "@site/src/components/connectionMatrix.tsx";

<CommonFunction
app={`MaintenanceManagement`}
entity={`InventoryItems`}
entityTitle={`Inventargegenstände`}
/>

<CommonFunction
app={`MaintenanceManagement`}
entity={`InspectionsDone`}
entityTitle={`Anstehende Prüfungen`}
/>

<ConnectionMatrix inputApp={`MaintenanceManagement`} />
