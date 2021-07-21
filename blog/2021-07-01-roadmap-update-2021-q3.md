---
title: 🚀 Roadmap Update 2021 Q3
author: Philipp Pähler
author_image_url: https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png
image: /img/blog/roadmap.jpg
tags: [Roadmap]
draft: true
---

Mit jedem vierteljährlichen Blog-Update stellen wir Ihnen eine Liste der Verbesserungen vor, die wir in qmBase vornehmen wollen. Unser Ziel ist es eine transparente Entwicklung darzustellen, so dass Sie wissen, auf welche Änderungen Sie sich einstellen können.
Der wichtigste Input für unsere Planung ist dabei **Ihr** Feedback.

> Wir möchten ihnen an dieser Stelle für alle Tickets danken, die Sie erstellen. 💐🙏

Dieses Feedback hilft uns zu verstehen, wie Sie qmBase und nutzen und was wir tun können, um Sie in Ihrer täglichen Arbeit zu unterstützen und Ihnen das Leben zu erleichtern.

Da wir ihr Feedback laufend in unsere Entwicklung einbinden ist unsere Roadmap auch kein statisches Dokument und kann daher im Laufe der Zeit angepasst werden.

<!--truncate-->

## Allgmein

### Globale Suche 🔍

Das Suchfeld in der Navigationsleiste soll eine stärkere Bedeutung bekommen. Derzeit lassen sich über dieses Feld lediglich einzelne Apps suchen und dahin navigieren. Zukünftig wird es möglich sein, über dieses Suchfeld direkt einzelne Funktionen zu erreichen, wie z.B. das Erstellen einer neuen Maßnahme. Zusätzlich sollen auch die verschiedenen Einstellungen hierüber erreichbar sein.

In einer weiteren Ausbaustufe werde hierüber dann auch von Ihnen erstellte Inhalte durchsuchbar werden.

### Follow Me ⭐

Unter diesem Begriff verbirgt sich eine Funktion, die es ermöglichen soll leichter den Überblick zu behalten und die Dinge zu verfolgen, die für Sie interessant sind. Das könnte z.B. der Bearbeitungsstatus einer bestimmten Reklamation sein, die Sie zwar nicht selbst bearbeiten aber für Sie trotzdem von Interesse ist. Dafür wird es möglich sein einzelne Informationen als Favoriten zu markieren, um diese Ereignisse dadurch im Blick zu behalten und über Änderungen informiert zu werden.

> Alle Tabellen Verknüpfungsicons, wie bei Qualifikationen und Schulungen

## Formulare <-> Maßnahmen

> Verknüpfung Formular(antowrten) Maßnahmen mit Bezug auf Fragen

## Dokumentenmanagement

Verknüpfung von Dokumenten mit Fristen: Im betrieblichen Alltag kann es erforderlich sein, dass Dokumente mit Fristen versehen werden müssen, um diese regelmäßig zu überprüfen. Hierfür wollen wir eine spezielle Funktion zur Dokumentenprüfung erstellen.

## Sicherheit & Zugriff 🔐

### Externe Logins

In den letzten Monaten haben wir den Login mit Hilfe von externen Login Providern besser in unsere Software integriert. Ein Login via Google oder Microsoft Konto ist damit leicht konfigurierbar (Bezahlpflichtiges Extra).

### Zwei-Faktor-Authentifizierung

Während der gerade genannte Punkt vor allem auch einen großen Komfortgewinn bringt, liegt uns die Sicherheit Ihrer Daten natürlich sehr am Herzen. Aus diesem Grund wird in diesem Quartal für alle Kunden der Login mittels Zwei-Faktor-Authentifizierung zur Verfügung stehen.
Derzeit läuft diese Anmeldung noch in einer letzten Testphase, so dass dieser Punkt zeitnah bei allen verfügbar sein sollte.

### Feingliedrieger Zugriff

Legen Sie für einzelnen Maßnahmen, Dokumente, Schulungen etc. fest wer auf diese zugreifen und wer diese bearbeiten kann. (Weitere Erklärungen)[http://localhost:3000/docs/faqs/56/#feingliedrigerer-zugriff]

## Verbesserung der Performance

Wie bereits zu Beginn des Jahres werden wir in diesem Quartal erneut in die Performance unserer Software investieren. Hierbei sehen wir zwei wesentliche Angriffspunkte:

1. Gefühlte Performance: Wie wirkt die Nutzung der Software auf den User. Um diesen Eindruck zu verbessern arbeiten wir in folgenden Bereichen

   - **Optimierung des Seitenaufbaus**: Häufig genutzte Bereiche werden mit höherer Priorität geladen, so dass diese schneller Verfügbar sind.
   - **Caching**: Daten, die genutzt aber selten geändert werden, verbleiben lokal im Speicher des Nutzers, so dass hier zusätzliches Laden von Daten verhindert werden kann.
   - **Wechsel zwischen Apps**: Momentan sind unsere einzelnen Apps eigenständige "Bereiche" der Software. Beim Wechsel gibt es erhebliche Ladezeiten, da viele grundlegende Daten verarbeitet werden müssen. Hier werden wir die Apps zusammenführen, so dass es zukünftig technisch nur noch wenige Apps geben wird. Damit entfallen die Ladezeiten beim Wechsel der Apps vollständig. Diese Änderung hat keine Auswirkungen auf die allgemeine Darstellung der Software, sondern sind ausschließlich technischer Natur.

2. Messbare Performance

Unser **Ziel** ist es, bei den Server Antwortzeiten Zeiten in den Bereich von ~200ms im 95. Perzentil zu kommen. D.h., dass 95% der Serveranfragen schneller als in 200ms erfolgen. Zu Beginne des Jahres waren wir hier auf einem sehr guten Weg. Im weiteren Verlauf sind wir hier auf Grund komplexerer Funktionen wieder etwas zurückgefallen. Einen großen Teil dieser Verschlechterung konnten wir in der Zwischenzeit wieder aufholen. Aber auch hier werden wir weitere Optimierungen vornehmen.

| Datum      | 95. Perzentile (ms) | Ø (ms) | 50. Perzentile (ms) | 99. Perzentile (ms) |
| ---------- | ------------------- | ------ | ------------------- | ------------------- |
| 2021-01-19 | 213                 | 82     | 13                  | 1293                |
| 2021-03-10 | 374                 | 124    | 14                  | 2233                |
| 2021-03-19 | 399                 | 147    | 15                  | 2710                |
| 2021-06-11 | 696                 | 215    | 16                  | 2975                |
| 2021-07-19 | 402                 | 151    | 14                  | 2153                |

## Altlasten

Einige Punkte der alten Roadmap konnten wir bisher noch nicht oder nur teilweise umsetzen. Diese sind allerdings immer noch geplant und bestehen aus folgenden Punkten.

### Zielmanagement 🏁

Bisher kann der Zielfortschritt nur als % Wert erfasst werden. Dies erfordert unnötig kompliziertes Umrechnen bei der Benutzung der Software. An diese Stelle soll eine flexiblere Erfassung der Fortschritte kommen. Somit können dann auch einfach absolute Werte wie bspw. Anzahl der Neukunden erfasst werden.

### Workflows & Automatisierung 🤖

Wiederkehrende Aufgaben manuell zu erledigen ist eine monotone Aufgabe und fehleranfällig. Hier setzen wir mit unserer Funktion **Workflows** an, um solche Abläufe zu vereinfachen.
Sie können sich einen Workflow als ein einfaches regelbasiertes Programm innerhalb von qmBase vorstellen.
Ein Workflow besteht aus folgenden Eigenschaften:

- Auslöser
- Bedingungen
- Auszuführende Aktion

  Beispiele für Workflows sind z.B.:

- Schicke eine Mail an die Qualitätssicherungsabteilung, wenn eine neue Reklamation erfasst wurde
- Blockiere das Ändern des Status einer Reklamation, wenn ein festgelegtes Custom Field nicht ausgefüllt wurde.

### Talentmanager 🤡

Verknüpfung der Bereiche Aufgabe & Qualifikationen und Schulungsmanagement in einer einheitlichen App, die vermutlich den Namen Talentmanager bekommen wird. Detailliertere Definition von Anforderungen an Qualifikationen z.B. durch Formulare oder Dokumente.
