---
title: Import
---

Im Admin-Bereich unter _Admin -> Import_ finden Sie Möglichkeiten unterschiedliche Daten in ihr qmBase zu importieren.
Dabei kann es sich unter anderem um Mitarbeiterdaten, Kunden- und Lieferantendaten, Inventargegenstände, Dokumente und ähnliches handeln.
Bitte beachten Sie die **Vorlagen** und Hinweise im oberen Bereich des Imports. Unser Import kann nur die von uns definierten Datenstrukturen verarbeiten.
D.h., dass z.B. bei der Anrede von Personen (Gender) 0 für Herrn und 1 für Frau steht. Andere Angaben können zu Fehlern führen.
Bitte beachten Sie beim Import die Beispiele aus den Downloadvorlagen und die Informationen unter "Weitere Informationen".
![Import Home page](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202022-02-03%20200124_importHome.png)

Nachdem Sie eine Datei zum Import hochgeladen haben, sehen Sie in der Vorschau, ob es für Ihren Import noch Hinweise oder Fehlermeldungen gibt.
Diese werden farblich hervorgehoben und zeigen einen Hinweistext, wenn man mit der Maus über die Markierung fährt.
![Import Error](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202022-02-03%20200200_importDetails.png)

Wenn Sie einen automatischen Import von Daten aus einem anderen IT-System wünschen bzw. die automatische Synchronisation mit anderen Systemen, dann sprechen Sie uns bitte direkt an.

### Beispiele für den Import

Unter den folgenden Verlinkungen finden Sie Beispiele für bestimmte Importe.

- [Organisationen](import-organisations)
- [Qualifikationen](import-qualifications)
- [Nutzer](import-user)

## Erweiterter Import (neu)

:::info Die Beschreibung gilt nur für unsere aktuelle Version der Imports. Dies beinhaltet derzeit folgende Objekte: **Produkte**.
:::

Für den Import müssen Sie zunächst den den Objekttypen z.B. Produkte auswählen.
Der Import besteht aus vier einfachen Schritten, die Sie in diesem Video sehen.
![Import gif](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/importProducts.gif)

Für den Import Ihrer Daten gehen Sie wie folgt vor:

1. Laden Sie die zu importierenden Dateien im CSV Format hoch.
2. Wir bereiten Ihre Daten für den Import vor und weisen auf eventuell vorhandene Fehler hin.
3. Konfigurieren Sie den gewünschten Import. Sie können zwischen unterschiedlichen Importstrategien wählen.
   1. Create - Alle Daten werden als neue Einträge importiert.
   2. CreateIfNotExist - Es werden nur Daten importiert, die noch **nicht** im System gefunden wurden.
   3. Update - Es werden nur bestehende gefundene Daten aktualisiert.
   4. Upsert - Es werden bestehende Daten aktualisiert und neue Daten hinzugefügt.
4. Tippen Sie **Confirm** in das Feld **Bestätigen**, um den Import freizugeben.
5. Klicken Sie auf den Button **Import**
6. Nach erfolgtem Import wird aus der Importvorschau das Importergebnis. Hier werden die Zeilen, die hinzugefügt oder aktualisiert wurden hervorgehoben.
7. Unterhalb des Importergebnisses wird Ihnen jetzt eine Übersicht Ihrer aktuellen Daten angezeigt mit einem Hinweis auf den letzten Bearbeitungsstand.
   Hier haben Sie jetzt die Möglichkeit überzählige Daten zu löschen.

### Wie werden vorhandene Daten zur Aktualisierung identifiziert?

Wenn während des Importprozesses vorhandene Daten aktualisiert werden sollen, müssen diese identifiziert werden.
Dies erfolgt entweder mit Hilfe der qmBase eigenen Id oder einer externen Id (ExternalId). Eine Mischung aus beiden Varianten ist nicht möglich.

### Einschränkungen beim Import

Pro Import Vorgang können maximal 10.000 Einträge importiert werden.

### Import von unterschiedlichen Objekttypen

Beim Import der unterschiedlichen Objekttypen kann es eventuell Besonderheiten geben. Diese werden in den folgenden Abschnitten für die jeweiligen Objekte dargestellt.

#### Import von Produkten

Beim Import von Produkten können folgende Eigenschaften importiert werden.

| Feld        | Typ           | Bedeutung                                                      | Wird bei Aktualisierungsstrategien aktualisiert? |
| ----------- | ------------- | -------------------------------------------------------------- | ------------------------------------------------ |
| ID          | Zahl optional | Interne qmBase Id                                              | Nein                                             |
| ExternalId  | Text optional | Referenznummer aus anderem System (z.B. ERP oder CRM Software) | Ja                                               |
| Titel       | Text          | Titel des Produkts                                             | Ja                                               |
| Description | Text optional | Beschreibung des Produkts                                      | Ja                                               |
