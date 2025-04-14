---
id: general
title: Allgemein
slug: /general
---

Hier finden Sie allgemeine Informationen, die für alle Apps gültig sind.

## Informationen finden

Das Auffinden Ihrer Daten war noch nie so einfach. Alles beginnt, wenn Sie einen Filter hinzufügen. Sie können den Link in der Adressleiste verwenden, um die Ergebnisse mit jedem in Ihrem Team zu teilen. Tabellen unterstützen Sie mit den folgenden Funktionen.

### Tabellen

Tabellen sind das Herzstück jeder datengesteuerten Anwendung. Tabellen und Filter sind alle nach einem einheitlichen Schema aufgebaut und beinhalten ähnliche Funktionen.
Diese Funktionen sind im folgenden beschrieben.

![Example Table Gif with filters and columns toggle](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/basicTableFunctions.gif)

#### Standardeinstellungen

Wir verwenden sinnvolle Voreinstellungen, um nur relevante Daten anzuzeigen. Zum Beispiel filtern wir Daten heraus, die bereits als erledigt markiert wurden.
Zusätzlich werden nur die Spalten dargestellt, die in der Regel benötigt werden.

#### Suchfeld

Verwenden Sie das Suchfeld in der oberen rechten Ecke, um nach Daten zu suchen, die innerhalb der Tabelle sichtbar sind.

#### Mehr Informationen anzeigen

Verwenden Sie das Kontext-Menü (3-Punkte), um das Aussehen der Tabelle anzupassen. Zeigen Sie mehr Spalten an oder exportieren Sie Daten, wenn diese Funktion verfügbar ist.

#### Filter

Verwenden Sie die Filter-Schaltfläche, um die in der Tabelle angezeigten Ergebnisse einzugrenzen.
Mit Filtern lassen sich große Datenmengen einfach auf die Informationen herunterbrechen, die Sie suchen. Alle Filter, die Sie aktivieren werden bei uns über UND Verknüpfungen miteinander verbunden.
Wenn Sie also z.B. Maßnahmen nach dem Status "Offen" und der Verantwortlichen Person "Max Mustermann" filtern, werden Ihnen allle Maßnahmen angezeigt die **beide** Bedingungen erfüllen.
Sie können beliebig viele Filter kombinieren. Um die Filter nicht jedes Mal neu zu erstellen, können Sie die Filter in vielen Bereichen auch direkt als [Smart View](/docs/faqs/smart-views) abspeichern.

#### Sortieren

Daten in Tabellenspalten können vielfach sortiert werden. Eine Sortierung ist in der Regel dann möglich, wenn es sinnvolles Kriterium der Sortierung gibt.
Sortierbar sind z.B. Datumsangaben oder Texte. Nicht sortierbar sind hingegen Spalten mit den Schlagworten. Da in der Spalte mehrere Schlagworte stehen könnten stellt sich hier nämlich die Frage, welches Schlagwort zur Sortierung herangezogen werden sollte.

#### Exportieren von Daten

Die meisten Daten in Tabellen lassen sich exportieren. Hierzu gehen Sie bitte wie folgt vor:

1. Markieren Sie die Datensätze in der Tabelle, die Sie gerne exportieren möchten. Klicken Sie dazu auf diesen Button oben rechts über der Tabelle: ![](https://caqadmin.blob.core.windows.net/faqs/0-images/mceclip2.png)
2. Starten Sie den Download. Klicken Sie dazu auf diesen Button oben rechts über der Tabelle: ![](https://caqadmin.blob.core.windows.net/faqs/0-images/mceclip3.png)

### Suchen von Personen

#### Suchen von Personen in bestimmter Rolle z.B. in Dropdowns

Sollen Personen in einer bestimmten Rolle gesucht werden wird im Hintergrund eine folgende Logik befolgt.
Wenn z.B. eine Person in der Rolle des Ideenkoordinators gesucht wird, wird folgendes Schema durchlaufen:

1. Suche alle Personen, die in der Rolle und in einer meiner Gruppen sind
2. Wenn keine Personen gefunden wurden, zeige alle Admins in meiner Gruppe
3. Wenn keine Admins in meiner Gruppe gefunden werden, zeige alle Admins

##### Beispiel

Bei der folgende Konstellation aus Nutzern und Gruppen ergibt sich

| Nutzer  | Rolle(n)         | Gruppe Dortmund | Gruppe Hawaii | Gruppe New York |
| ------- | ---------------- | --------------- | ------------- | --------------- |
| Müller  | Admin            | x               |               |                 |
| Meier   | Ideenkoordinator |                 | x             |                 |
| Schmidt | Nutzer           | x               |               |                 |
| Schulze | Nutzer           |                 | x             | x               |

- Wenn Nutzer Schmidt einen Ideenkoordinator sucht, erhält er als Auswahlmöglichkeiten Nutzer Müller.
- Wenn Nutzer Schulze einen Ideenkoordinator sucht, erhält er als Auswahlmöglichkeiten Nutzer Meier.
