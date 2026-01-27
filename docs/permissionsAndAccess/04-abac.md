---
title: ABAC - Attributbasierter Zugriff
---

import { VscKey } from "react-icons/vsc";

## Attributbasierter Zugriff

Wenn diese Zugriffssteuerungen auf App Ebene nicht ausreichen, haben Sie zusätzlich die Möglichkeit eine Zugriffssteuerung auf der Ebene der einzelnen Einträge vorzunehmen.

:::info
Hierbei handelt es sich um ein neues Feature. Wir haben haben noch viele Erweiterungen zu dieser Funktion geplant. Diese finden Sie am Ende dieser Seite. Derzeit betreffen die Einschränkungen lediglich die **Sichtbarkeit** von Einträgen.
:::

Diese Funktion ist in folgenden Apps von qmBase verfügbar:

| App                              | Index | Details | Kommentare auf App Startseite |
| -------------------------------- | ----- | ------- | ----------------------------- |
| Abwesenheitsplaner               | ✔     | ✔       |                               |
| Audits                           | ✔     | ✔       |                               |
| Aufgaben & Qualifikationen       | ✔     | ✔       |                               |
| Schulungen                       | ✔     | ✔       |                               |
| Formulare                        | ✔     | ✔       |                               |
| Dokumentenmanagement, WIKI, Blog | ✔     | ✔       | ✔                             |
| Instandhaltung                   | ✔     | ✔       | ✔                             |
| Reklamationen                    | ✔     | ✔       | ✔                             |
| Risiken & Chancen                | ✔     | ✔       |                               |
| Maßnahmen                        | ✔     | ✔       | ✔                             |
| Ziele                            | ✔     | ✔       | ✔                             |

> Legende:
> Index - Übersichtstabelle zur App;
> Details - Detailsansicht des entsprechenden Eintrags

Die Steuerung des Zugriffs kann durch die folgenden Personen erfolgen:

- Verantwortlicher
- Owner
- (Modul) Administrator

Um den Zugriff festzulegen, gehen Sie wie folgt vor:

1. Klicken Sie auf den Eintrag z.B. ein Audit.
2. Wählen Sie den Tab **<VscKey/> Zugriff** aus.
3. Markieren Sie den Eintrag als Privat.

Ab diesem Zeitpunkt ist der Eintrag nur noch für die Personen sichtbar, die unter **Zugriff verwalten** bzw. in der Karte **Standardzugriff** aufgeführt sind.

### Zugriff verwalten

In diesem Bereich haben Sie die Möglichkeit einzelnen Nutzern oder Gruppen Zugriff zu einem privaten Eintrag zu erteilen. Mit dem Zugriff an dieser Stelle überschreiben Sie die Einstellungen, die über Rollen festgelegt wurden.

Bitte beachten Sie hierbei, dass es sich nur um den Zugriff auf einen einzelnen Eintrag (z.B. Audit) handelt.
Geben Sie einen Eintrag (z.B. Audit) aus einer App (z.B. Auditmanagement) für einen Nutzer oder eine Gruppe frei, der sonst keinen Zugriff auf dieses App hat, bleibt der Zugriff auf den einzelnen Eintrag beschränkt.
Die Anzahl der möglichen Freigaben ist auf jeweils 10 Nutzer, Gruppen und Rollen beschränkt.

<!--

#### Zugriff für einzelne Nutzer festlegen

Wenn Sie den Zugriff für einzelne Nutzer festgelegt haben, können Sie zusätzlich noch festlegen, welcher Art dieser Zugriff sein soll. Wir unterscheiden derzeit:

##### Lesen

Nutzer kann Eintrag aufrufen und kopieren. Zusätzlich kann der Nutzer Kommentare und Dateien hinzufügen.

##### Schreiben

Nutzer kann alles aus lesend und Eintrag editieren

### Todos & Roadmap für die Zugriffssteuerung

- Änderungen des Zugriffs für mehrere Elemente in einem Schritt
- Zugriffe basierend auf Gruppen
- Zugriffe basierend auf individuellen Rollen
- Sichtbarkeit der Einträge aus Verknüpfungen. Wenn Sie z.B. ein privates Audit erstellt haben ist es trotzdem für alle Personen sichtbar, die Zugriff auf eine verknüpfte Maßnahme haben. Der Klick auf das Audit funktioniert allerdings nicht.
- Kommentare auf den App Startseiten sind unbeeinflusst von eventuellen Sichtbarkeitseinstellungen (Teilweise umgesetzt)
- Zugriffsarten festlegen lesend vs. schreibend
-->