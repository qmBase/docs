---
id: common-features
title: Gemeinsame Funktionen
---

import {
FaCog,
FaFilter,
FaSearch,
FaEllipsisV,
FaColumns
} from "react-icons/fa";

In diesem Dokument sind alle Funktionen zusammengefasst, die sich die verschiedenen Apps teilen. Wenn Sie dieses Dokument gelesen haben, haben Sie einen guten Überblick über die wichtigsten Funktionen.

### Anhänge

### Tabellen

Das Auffinden Ihrer Daten war noch nie so einfach. Alles beginnt, wenn Sie einen Filter hinzufügen.
Sie können den Link in der Adressleiste verwenden, um die Ergebnisse mit jedem in Ihrem Team zu teilen. Tabellen unterstützen Sie mit den folgenden Funktionen.

![Tabellen Filter](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/basicTableFunctions_sm.gif)

#### <FaCog/> Standardeinstellungen

Wir verwenden sinnvolle Voreinstellungen, um nur relevante Daten anzuzeigen. Zum Beispiel filtern wir Daten heraus, die bereits als erledigt markiert wurden.

#### <FaSearch/> Suchfeld

Verwenden Sie das Suchfeld in der oberen rechten Ecke, um nach Daten zu suchen, die innerhalb der Tabelle sichtbar sind.

#### <FaFilter/> Daten filtern

Verwenden Sie die Filter-Schaltfläche, um die in der Tabelle angezeigten Ergebnisse einzugrenzen.

#### <FaEllipsisV/> Erweiterte Tabellenoptionen

Verwenden Sie das Kebab-Menü, um die erweiterten Tabellenoptionen zu öffnen.
Hier finden Sie weitere Möglichkeiten, um Daten in den Tabellen zu bearbeiten.

##### Sichtbarkeit von Spalten

Zeigen Sie mehr Spalten an oder exportieren Sie Daten, wenn diese Funktion verfügbar ist.
Klicken Sie auf den Button Sichtbarkeit der Spalten ändern <FaColumns/>. Hier können Sie zusätzliche Spalten ein- oder ausblenden. 
**Achtung** Sie können auch alle Spalten ausblenden, dann wird keine Tabelle angezeigt.


### Kommentare

In allen Apps Informationen kommentiert werden. Die Kommentare beziehen sich dabei i.d.R. auf das Hauptobjekt der einzelnen App. Also z.b. im Reklamationsmanagement auf die einzelne Reklamation.
Kommentare können genutzt werden, um gemeinsam kollaborativ zu arbeiten. Mit Hilfe der Kommentare können auch Personen die einen Eintrag sonst nicht bearbeiten können, Informationen hinzufügen und ergänzen.

#### Bearbeiten von Kommentaren

In einigen Apps können Sie Kommentare auch bearbeiten. Um Kommentare zu bearbeiten, muss eine der folgenden Bedingen erfüllt sein:

| Aktion     | Bedingung                                            |
| ---------- | ---------------------------------------------------- |
| Löschen    | Nutzer muss Ersteller des Kommentars oder Admin sein |
| Bearbeiten | Nutzer muss Ersteller des Kommentars sein            |

#### Übersicht der Apps mit Kommentaren

In der folgenden Tabelle finden Sie eine Übersicht aller Apps, in denen Sie Kommentare erfassen können.

| App                        | Kommentare beziehen sich auf | Bearbeiten / Löschen | Antworten auf Kommentare |
| -------------------------- | ---------------------------- | -------------------- | ------------------------ |
| Abwesenheitsplaner         | Abwesenheitsantrag           |                      |
| Auditmanagement            | Audits                       |                      |
| Aufgaben & Qualifikationen | <code>nicht vorhanden</code> |                      |
| Blog                       | Blogeintrag                  | ✔️                   |
| CRM                        | Organisationen, Personen     |                      |
| Dokumenetenmanagement      | Dokument                     | ✔️                   |
| Fehlermanagement           | Fehler                       |                      |
| Formulare                  | <code>nicht vorhanden</code> |                      |
| Ideenmanagement            | einzelne Idee                | ✔️                   |
| Instandhaltung             | Inventargegenstand           | ✔️                   |
| Mitarbeiter                | Person                       |                      |
| Produkte                   | Produkte                     |                      |
| Schulungsmanagement        | Schulungen                   |                      |
| Projekte & Maßnahmen       | Projekte, Maßnahmen          | ✔️                   |
|                            | Maßnahmen                    | ✔️                   |
| Reklamationsmanagement     | Reklamationen                | ✔️                   | ✔️                       |
| Risiken & Chancen          | Risiken, Chancen             |                      |
| Wiki                       | Wikieintrag                  | ✔️                   |
| Zielmanagement             | Ziele                        | ✔️                   |

### Schlagworte

Beinahe alle erfassten Informationen lassen sich mittels Schlagworten gruppieren und kategorisieren. Das Zuordnen der Schlagworte ist über die Detailsansichten zu den einzelnen Einträgen möglich. In den älteren Bereichen der Software erfolgt dies über das Kontextmenü neben dem Stift zum Bearbeiten einer Information.

![](https://caqadmin.blob.core.windows.net/faqs/63-images/mceclip1.gif)

In den neueren Bereichen der Software erfolgt das Bearbeiten der Schlagworte über eine Leiste oberhalb des ausgewählten Eintrags

![](https://caqadmin.blob.core.windows.net/faqs/63-images/mceclip3.gif)

Das Bearbeiten der Schlagworte ist unter Umständen an Berechtigungen zum Bearbeiten eines Eintrags geknüpft, so dass es je nach vorhanden Rechten möglich sein kann, dass Sie keine Schlagworte bearbeiten können.

> Tipp: Falls Sie die Diversität der Schlagworte stärker eingrenzen möchten, können Sie als Admin in der Konfiguration auch festlegen, dass neue Schlagworte nur über die Einstellungen erstellt werden können.

#### Wie kann ich die Farbe von Schlagworten ändern?

In den Einstellungen unter _/Allgemein/Schlagworte_ kann die Hintergrundfarbe und die Schriftfarbe einzelner Schlagworte konfiguriert werden. Die Schlagworte erscheinen im System dann immer in den eingestellten Farben.

### Angeheftete Einträge

Pro App können bis zu **3** Einträge aus der App auf der jeweiligen Startseite angeheftet werden. Das Anheften erfordert die Rolle eine Modul Admins oder Admins.
![Angeheftete Einträge auf App Startseite](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot2022-04-28_pinnedItemsRow.png)
Für angeheftete Einträge, die für einzelne Nutzer nicht sichtbar sein sollen, werden Platzhalterkarten mit einer Fehlermeldung angezeigt.
Einträge lassen sich aus den jeweiligen Detailsseiten z.B. einer Maßnahme heraus anheften.
![Eintrag anheften](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot2022-04-28_pinnedItemsAction.png)
Anheften von Einträgen ist derzeit in folgenden Apps möglich:

- Blog
- Dokumentenmanagement
- Formulare
- Projekte & Maßnahmen
- Wiki

#### Was bringt das Anheften von Einträgen - Anwendungsfälle

- Sensibilisieren Sie Ihre Kollegen für bestimmte Themen
- Schnellere Bearbeitung einzelner Themen durch größere Aufmerksamkeit
- Best Practices in in der Organisation etablieren
- Ein ärgerlicher Fehler tritt immer wieder auf? Heften Sie eine bestimmte Reklamation auf der Startseite des Reklamationsmanagements an und erreichen Sie eine größere Aufmerksamkeit.
