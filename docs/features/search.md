---
title: Suche
description: So finden Sie Apps, Einträge und Personen in qmBase schnell wieder
keywords:
  - Suche
  - Globale Suche
  - Erweiterte Suche
  - Tabellen
  - Auswahlfelder
---

Die Suche begegnet Ihnen in qmBase an vielen Stellen: in der Navigationsleiste, über jeder Tabelle und in Auswahlfeldern. Auf dieser Seite erfahren Sie, wie die einzelnen Suchen funktionieren und wie Sie am schnellsten zum gewünschten Ergebnis kommen.

## Überblick

| Suche                                               | Wo finden Sie sie?                                             | Wofür nutzen Sie sie?                                      |
| --------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| [Globale Suche](#globale-suche)                     | Navigationsleiste oder <kbd>Strg</kbd>+<kbd>k</kbd>            | Einträge aus allen Apps finden und direkt zu Apps springen |
| [Erweiterte Suche](#erweiterte-suche)               | Link am unteren Rand der [globalen Suche](#globale-suche)      | Suchergebnisse als Tabelle anzeigen und filtern            |
| [App-Suche](#app-suche)                             | App-Übersicht in der Seitenleiste                              | Schnell eine App öffnen                                    |
| [Suche in Tabellen](#suche-in-tabellen)             | Suchfeld oberhalb einer Tabelle                                | Einträge innerhalb einer Liste finden                      |
| [Suche in Auswahlfeldern](#suche-in-auswahlfeldern) | Felder wie „Verantwortlich“, „Organisation“ oder „Schlagworte“ | Den passenden Eintrag oder die passende Person auswählen   |

## Globale Suche

Die globale Suche öffnen Sie jederzeit über das Suchsymbol in der Navigationsleiste oder mit der Tastenkombination <kbd>Strg</kbd>+<kbd>k</kbd>.

Während Sie tippen, erhalten Sie zwei Arten von Ergebnissen:

- **Apps und allgemeine Bereiche** wie Startseite, Einstellungen oder Profil. Ein Klick darauf bringt Sie direkt zur jeweiligen Seite. Apps werden dabei genauso gefunden wie in der [App-Suche](#app-suche), also auch über verwandte Begriffe und trotz kleiner Tippfehler.
- **Einträge aus Ihren Apps**, z. B. Maßnahmen, Reklamationen, Dokumente oder Personen. Jeder Treffer zeigt seine ID und seine Schlagworte an.

Die Ergebnisse werden nach Relevanz sortiert. Dabei werden neben dem Titel auch passende Stichworte berücksichtigt, sodass die relevantesten Treffer oben stehen.

![Globale Suche](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/global-search-docs-demo.gif)

### Suche eingrenzen

Möchten Sie nur in einer bestimmten App suchen, wählen Sie in der globalen Suche den Eintrag **Suche eingrenzen**. Wählen Sie anschließend die gewünschte App aus. Im Suchfeld erscheint dann z. B. `Ihre Daten / Dokumentenmanagement /`. Alle weiteren Eingaben werden nur noch in dieser App gesucht.

![Suche auf eine App eingrenzen](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/narrow-search-docs-demo.gif)

### Durchsuchte Apps und Felder

Die globale Suche durchsucht die folgenden Apps und Felder:

| App                    | Durchsuchte Felder                                  |
| ---------------------- | --------------------------------------------------- |
| Auditmanagement        | Titel                                               |
| Blog                   | ID, Titel, Titel der aktuellen Revision             |
| CRM                    | ID, externe ID der Organisation, Namen von Personen |
| Dokumentenmanagement   | ID, Titel, Titel der aktuellen Revision             |
| Fehlermanagement       | Titel                                               |
| Formulare              | Titel                                               |
| Instandhaltung         | Titel                                               |
| Produkte               | ID, externe Produkt-ID, Name                        |
| Projekte & Maßnahmen   | Titel                                               |
| Reklamationsmanagement | Titel                                               |
| Risiken & Chancen      | Titel                                               |
| Schulungsmanagement    | Titel                                               |
| Wiki                   | ID, Titel, Titel der aktuellen Revision             |
| Zielmanagement         | Titel                                               |

In Apps mit Status, z. B. Maßnahmen, Reklamationen oder Audits, zeigt die globale Suche die Einträge an, die **offen** oder **in Bearbeitung** sind. So erhalten Sie vor allem die Treffer, an denen aktuell gearbeitet wird. Abgeschlossene Einträge sowie Einträge aus weiteren Apps finden Sie über das [Suchfeld der Tabelle](#suche-in-tabellen) in der jeweiligen App.

## Erweiterte Suche

Am unteren Rand der [globalen Suche](#globale-suche) finden Sie den Link **Erweiterte Suche**.

![Link „Erweiterte Suche“ am unteren Rand der globalen Suche](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/advanced-search-docs-location.png)

Er öffnet eine eigene Seite, auf der die Treffer der globalen Suche als Tabelle angezeigt werden. Dort sehen Sie zu jedem Treffer die Art des Eintrags, den Titel und die Schlagworte und können die Ergebnisse zusätzlich nach Schlagworten filtern.

![Seite „Erweiterte Suche“ mit Suchergebnissen als Tabelle](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/advanced-search-docs-page.png)

## App-Suche

In der App-Übersicht der Seitenleiste können Sie gezielt nach einer App suchen. Neben dem App-Namen werden dabei auch passende Stichworte berücksichtigt. So finden Sie z. B. die App **Reklamationsmanagement** auch über verwandte Begriffe wie „Beschwerde“, „8D-Report“ oder „Mängelrüge“. Kleine Tippfehler werden toleriert.

Die App-Suche funktioniert ähnlich wie die Suche nach Apps in der [globalen Suche](#globale-suche).

![App-Suche in der Seitenleiste](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/app-search-docs-demo.gif)

## Suche in Tabellen

Über das Suchfeld oberhalb einer Tabelle durchsuchen Sie die Einträge der jeweiligen Liste. Die Suche berücksichtigt die Inhalte, die in der Tabelle angezeigt werden, und lässt sich mit den [Filtern](/docs/gettingStarted/common-features/#tabellen) der Tabelle kombinieren.

![Suche in einer Tabelle](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/table-search-all-fields-docs-demo.gif)

### Durchsuchte Spalten festlegen

In ausgewählten Tabellen, z. B. in der App **Mitarbeiter**, bestimmen die eingeblendeten Spalten, welche Felder durchsucht werden. Blenden Sie über die Sichtbarkeit der Spalten eine Spalte ein, wird sie in der Suche berücksichtigt. Ausgeblendete Spalten werden nicht durchsucht. So können Sie die Suche gezielt auf die für Sie relevanten Informationen eingrenzen.

![Suche in der Tabelle berücksichtigt die eingeblendeten Spalten](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/table-search-with-search-field-docs-demo.gif)

## Suche in Auswahlfeldern

In Auswahlfeldern durchsucht die Suche neben dem Namen auch die zugehörigen Angaben, die in der Vorschlagsliste angezeigt werden.

**Beispiel:** Bei der Auswahl von Mitarbeitenden werden unter dem Namen die Position und die Abteilung angezeigt. Geben Sie z. B. eine Position ein, werden alle Mitarbeitenden mit dieser Position vorgeschlagen. So finden Sie die zuständige Person auch dann, wenn Sie nur ihre Rolle im Unternehmen kennen.

Wie Vorschläge ermittelt werden, wenn nur Personen mit einer bestimmten Rolle zur Auswahl stehen, lesen Sie unter [Suchen von Personen](/docs/general/#suchen-von-personen).

![Suche nach verantwortlichen Mitarbeitenden über die Position](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/search-responsible-employee-by-role.gif)

## Zugriff

Alle Suchen berücksichtigen Ihre Berechtigungen. Einträge, auf die Sie keinen Zugriff haben, werden in den Suchergebnissen nicht angezeigt.
