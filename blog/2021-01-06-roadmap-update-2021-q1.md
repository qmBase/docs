---
title: Roadmap Update 2021 Q1
author: Philipp Pähler
author_image_url: https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png
image: https://www.qmbase.com/wp-content/uploads/2020/01/Bild1-1200x589.jpg
tags: [Roadmap]
---

Auch in diesem Jahr, 2021, werden wir qmBase dynamisch weiterentwickeln und die Features verbessern, die Ihnen ihre tägliche Arbeit erleichtern.
Bisher haben wir unsere Roadmap halbjährlich aktualisiert. Jetzt wechseln wir zu einer quartalsweisen Planung, um hier einen konkreteren Ausblick geben zu können, wie wir qmBase weiterentwickeln.

<!--truncate-->

Folgende Themen werden wir in diesem Quartal aufgreifen.

- **Verbesserung der Performance** 🔧
- **Talentmanager**
- **Bessere Dokumentation**
- **Sicherheit & Zugriff**
- **Dashboards & Reportings**
- **Kalenderintegration**
- **Audit Trail**

## Verbesserung der Performance 🔧

**Update 19.01.2021** Aktuelle Antwortzeiten hinzugefügt.

Die Arbeit mit qmBase soll Spaß machen und leicht von der Hand gehen. Damit wir Sie nicht in Ihrem Arbeitsalltag aufhalten, ist es entscheidend, dass qmBase schnell und ohne unnötig lang Ladezeiten funktioniert. Performance ist also ein wichtiges Feature. Hierzu werden wir in diesem Quartal einige Optimierungen vornehmen dazu zählt:

1. Einsatz von leistungsstärkerer Hardware ✔️
2. Update unsere Server Frameworks auf ASP.NET 5 ✔️

Unser **Ziel** ist es, bei den Server Antwortzeiten Zeiten in den Bereich von ~200ms im 95 Perzentil zu kommen. D.h. dass 95% der Serveranfragen schneller als in 200ms erfolgen.

| Datum      | 95th Percentile (ms) | Ø (ms) | 50th Percentile (ms) | 99th Percentile (ms) |
| ---------- | -------------------- | ------ | -------------------- | -------------------- |
| 2020-12-04 | 442                  |        |                      |                      |
| 2020-12-11 | 497                  |        |                      |                      |
| 2020-12-18 | 414                  |        |                      |                      |
| 2021-01-15 | 216                  |        |                      |                      |
| 2021-01-19 | 213                  | 82     | 13                   | 1293                 |

## Bessere Dokumentation

Ausbau unseres FAQ und Hilfe Bereichs, um mehr Hilfe zur Selbsthilfe zu ermöglichen. Auf unserer neuen Seite [https://help.qmbase.com](https://help.qmbase.com) werden wir alle Dokumentationen zentral zusammenführen.
Somit haben Sie z.B. auch die Möglichkeit auf die Hilfe zuzugreifen, wenn Sie einmal Probleme bei der Anmeldung haben. Neben Anleitungen für normale Nutzer der Software, wird es hier auch eine aktuelle Dokumentation zur Installation von qmBase geben, wenn Sie eine Installation von qmBase auf Ihrem eigenen Server betreiben.

## Sicherheit & Zugriff

Kundenindividuelle Einbindung von Zwei-Faktor-Authentifizierung. Differenziertere Rollen & Zugriffsberechtigungen innerhalb der Software. Behalten Sie einfacher den Überblick, wer in welche Bereiche Einblick hat. Unser Ziel ist es hier für alle grundsätzlichen Objekte (Schulungen, Maßnahmen etc.), die in qmBase existieren, Funktionen bereizustellen, die die Freigabe eines einzelnen Objekts ermöglichen.

## Kalenderintegration

Bessere Verknüpfung mit Kalendern. Übertragen Sie alle relevanten Ereignisse in qmBase in einen Internet Kalender, den Sie dann z.B. mit Outlook abonnieren können und somit leichter in Ihren alltäglichen Workflow einbinden können. Terminierte Ereignisse werden in einen iCal Feed geschrieben. Diesen können Sie dann mit Ihrem Kalender abonnieren und haben dadurch die Ereignisse direkt in Ihrem Kalender.

## Dashboards & Reportings

Detailliertere Auswertungsmöglichkeiten, indem die Filter der normalen Übersichtstabellen übernommen werden. Derzeit gibt es in den meisten Bereichen nur die Möglichkeit nach voreingestellten Zeitintervallen zu filtern. Durch die neuen Filter wird es hier dann wesentlich flexiblere Möglichkeiten geben.

## Talentmanager

Verknüpfung der Bereiche Aufgabe & Qualifikationen und Schulungsmanagement in einer einheitlichen App, die vermutlich den Namen Talentmanager bekommen wird. Detailliertere Definition von Anforderungen an Qualifikationen z.B. durch Formulare oder Dokumente.

## Audit Trail

Weitere Optimierungen im Bereich des Audit Trails.
