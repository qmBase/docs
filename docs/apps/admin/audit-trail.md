---
title: Audit Trail
---

Der Audit Trail zeigt Ihnen, wer wann was an einem Eintrag geändert hat. So können Sie Änderungen jederzeit nachvollziehen, z.B. wenn ein Status gesetzt, ein Verantwortlicher gewechselt oder ein Eintrag gelöscht wurde.

:::info
Der Umfang der gespeicherten Ereignisse wird laufend erweitert. Derzeit wird noch nicht für jede Änderung ein Eintrag im Audit Trail gespeichert.
:::

## Audit Trail eines Eintrags anzeigen

Den Audit Trail finden Sie direkt in der Detailansicht eines Eintrags, z.B. eines Ziels, einer Reklamation oder einer Idee. Im unteren Bereich der Seite gibt es neben den Tabs **Kommentare** und **Anhänge** den Tab **Audit Trail**.

Dort sehen Sie alle gespeicherten Änderungen als Zeitleiste:

- Ganz oben steht die zuletzt gespeicherte Änderung.
- Ganz unten steht unter **Eintrag erstellt**, wer den Eintrag erstellt hat und wann.
- Bei jeder Änderung sehen Sie, was geändert wurde, z.B. hinzugefügte Schlagworte oder der neue Wert eines Custom Fields, wer die Änderung vorgenommen hat und wann.

![Tab Audit Trail mit der Zeitleiste der Änderungen eines Eintrags](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/audit-trail-doc-audit-trail.png)

### Details einer Änderung

Klicken Sie auf Datum und Uhrzeit einer Änderung. Es öffnet sich ein Fenster mit allen gespeicherten Angaben zu dieser Änderung, z.B. Zeitstempel, Bereich, Aktion und, falls vorhanden, die alten und die neuen Werte.

![Fenster mit den Details einer Änderung](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/audit-trail-doc-details.png)

Mit dem Button **Details** öffnen Sie die Detailseite der Änderung. Dort sehen Sie oben den **Bereich**, die **Aktion**, die **Details** und den **Akteur**, also die Person, die die Änderung vorgenommen hat. Darunter werden die alten Werte (**Alt**) und die neuen Werte (**Neu**) direkt nebeneinander verglichen. Entfernte Werte sind rot markiert, hinzugefügte Werte grün.

![Detailseite einer Änderung mit dem Vergleich der alten und neuen Werte](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/audit-trail-doc-details-diff-view.png)

Der Audit Trail eines Eintrags zeigt nur Änderungen an genau diesem Eintrag. Änderungen an anderen Einträgen, z.B. an verknüpften Einträgen, finden Sie im Audit Trail des jeweiligen Eintrags.

## Was wird gespeichert?

Ein Eintrag im Audit Trail wird z.B. bei folgenden Aktionen gespeichert:

| Aktion                                                   | Beispiel                                                            |
| -------------------------------------------------------- | ------------------------------------------------------------------- |
| Status ändern                                            | Eine Maßnahme wird von Offen auf Erledigt gesetzt.                  |
| Verantwortlichen oder Owner ändern                       | Ein Ziel bekommt einen neuen Verantwortlichen.                      |
| Inhalte bearbeiten                                       | Titel oder Beschreibung werden geändert.                            |
| Schlagworte hinzufügen oder entfernen                    | Ein Dokument bekommt ein neues Schlagwort.                          |
| Custom Fields ändern                                     | Der Wert eines Custom Fields wird angepasst.                        |
| Kommentare hinzufügen, bearbeiten oder löschen           | Zu einem Fehler wird ein Kommentar geschrieben.                     |
| Verknüpfungen hinzufügen oder entfernen                  | Eine Maßnahme wird mit einem Produkt verknüpft.                     |
| Zugriffsberechtigungen ändern                            | Der Zugriff auf einen Eintrag wird eingeschränkt.                   |
| Checklisten bearbeiten                                   | Ein Checklisten-Element wird hinzugefügt, bearbeitet oder entfernt. |
| Eintrag löschen oder wiederherstellen                    | Ein gelöschter Eintrag wird wiederhergestellt.                      |
| Teilnehmer hinzufügen, entfernen oder Teilnahme ändern   | Eine Person sagt zu einer Schulung zu.                              |

Zusätzlich gibt es Ereignisse, die nur in einzelnen Apps vorkommen, z.B.:

- **Formulare:** Felder hinzufügen, bearbeiten oder entfernen sowie Formulare veröffentlichen oder die Veröffentlichung zurücknehmen
- **Ideenmanagement:** Idee einreichen, bearbeiten, freigeben oder zurückgeben sowie den Ideenkoordinator ändern
- **Aufgaben & Qualifikationen:** Durchgeführte Qualifikationen bearbeiten
- **Instandhaltung:** Durchgeführte Prüfungen ändern
- **Risiken & Chancen:** Bewertungen ändern
- **Zielmanagement:** Änderungen an einzelnen Zielfortschritten

## In welchen Apps gibt es den Audit Trail?

Den Tab **Audit Trail** finden Sie in den Detailansichten folgender Apps:

- [Abwesenheitsplaner](/docs/apps/absence-planner)
- [Auditmanagement](/docs/apps/audit-management)
- [Blog, Dokumentenmanagement und Wiki](/docs/apps/article-shared)
- [CRM](/docs/apps/crm) (Organisationen und Bewertungen)
- [Fehlermanagement](/docs/apps/defect-management)
- [Formulare](/docs/apps/forms)
- [Ideenmanagement](/docs/apps/idea-management)
- [Instandhaltung](/docs/apps/maintenance-management) (Inventar und durchgeführte Prüfungen)
- [Mitarbeiter](/docs/apps/employees)
- [Produkte](/docs/apps/products)
- [Projekte & Maßnahmen](/docs/apps/projects-and-tasks)
- [Reklamationsmanagement](/docs/apps/claim-management)
- [Risiken & Chancen](/docs/apps/opportunity-management)
- [Schulungsmanagement](/docs/apps/training-management)
- [Zielmanagement](/docs/apps/goal-management)

## Audit Trail im Admin-Bereich

:::note
Dieser Bereich ist nur relevant, wenn Sie auch in der Rolle Admin sind.
:::

Im [Admin-Bereich](/docs/apps/admin) finden Sie im Menü links den Punkt **Audit trail**. Alternativ klicken Sie im Tab **Audit Trail** eines Eintrags unten auf **Mehr Details anzeigen**.

### Einstellungen

Unter **Einstellungen** legen Sie fest, ob und wie lange Ereignisse gespeichert werden:

- **Audit-Trail aktivieren:** Schaltet das Speichern von Ereignissen ein oder aus.
- **Aufbewahrungstage:** Legt fest, wie viele Tage die Ereignisse aufbewahrt werden. Möglich sind 1 bis 30 Tage.

Klicken Sie anschließend auf **Speichern**.

![Einstellungen des Audit Trails im Admin-Bereich](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/audit-trail-doc-settings.png)

:::warning
Solange der Audit Trail deaktiviert ist, werden keine Änderungen gespeichert. Diese Änderungen lassen sich auch später nicht nachträglich im Audit Trail anzeigen.
:::

Ist der Audit Trail deaktiviert, sehen Sie im Tab **Audit Trail** eines Eintrags einen entsprechenden Hinweis mit einem Link zu den Einstellungen.

### Übersicht aller Ereignisse

Über **View recent events** öffnen Sie die Übersicht aller gespeicherten Ereignisse aus allen Apps. Die Tabelle zeigt zu jedem Ereignis die **ID**, den **Bereich**, also die App, den **Service** und die **Aktion**. Hier können Sie:

- Ereignisse über **Suchen...** und **Filter** eingrenzen, z.B. nach Zeitraum oder nach der Person, die die Änderung vorgenommen hat
- die Ereignisse als CSV-Datei exportieren
- über die **ID** die Detailseite eines Ereignisses öffnen und die alten und neuen Werte vergleichen, wie unter [Details einer Änderung](#details-einer-änderung) beschrieben

![Übersicht aller Ereignisse im Audit Trail](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/audit-trail-doc-settings-review.png)

### Aktivität als Diagramm

Mit dem Button **View data as chart** unter der Tabelle zeigen Sie die Anzahl der Ereignisse im Zeitverlauf als Diagramm an. Über **Zeitspanne** wählen Sie den angezeigten Zeitraum, über **Gruppieren nach** fassen Sie die Ereignisse z.B. pro **Tag** zusammen. Mit **Individuelle Werte** können Sie die einzelnen Werte anzeigen.

![Aktivität im Audit Trail als Diagramm](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/audit-trail-doc-settings-review-chart.png)
