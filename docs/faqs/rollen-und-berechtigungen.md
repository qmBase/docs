---
id: faq-56
slug: /faqs/56
title: Rollen, Berechtigungen und Zugriff
---

import {
VscKey,
} from "react-icons/vsc";

## Rollen & Berechtigungen

Sie können jedem Nutzer individuelle Zugriffsrechte auf die Plattform geben. Somit können Sie sicherstellen, dass nicht jeder alles sehen kann. Die Vergabe der Rollen und Berechtigungen erfolgt über:

[Angemeldet -> Admin -> Berechtigungen](https://support.qmbase.com/Account/findworkspace?returnUrl=/_admin/permissions)

In der Regel gibt es für alle Module standardmäßig drei verschiedene Berechtigungen. Diese sind nachfolgend in Reihenfolge ihrer Fähigkeiten aufgeführt. Für weitere Details lesen Sie bitte den Eintrag zur entsprechenden Rolle:

### Lesende Nutzer

Sie können einstellen, dass Nutzer nur Leserechte haben. Diese Einstellung ist global und bezieht sich somit auf die gesamte Software und alle Module. Nutzer, die nur Lesenrechte haben können keine Daten editieren. Dies beinhaltet z.B. auch, dass diese Nutzer keine Lesebestätigung für Dokumente ausführen können.

### Standard

Mit dem Standard Zugriff kann der Nutzer folgende Aktionen ausführen:

- Auf das Modul zugreifen
- Neue Einträge erstellen
- Seine eigenen Einträge editieren
- Ändern von Eigenschaften, die auf den Status des Eintrags bezogen sind

### Einstellungen

Durch den Zugriff auf die Einstellungen können Nutzer alle zu dem Modul gehörigen Einstellungen verändern.

### Modul Administrator

Der Modul Admin ist das Äquivalent zum normalen Admin auf Modulebene. Er kann alles erstellen, ändern und löschen, was er möchte.

### Administrator

Administratoren haben Zugriff auf alle Funktionen und unterliegen keinen Einschränkungen

## Feingliedrigerer Zugriff

Wenn diese Zugriffssteuerungen auf App Ebene nicht ausreichen, haben Sie zusätzlich die Möglichkeit eine Zugriffssteuerung auf der Ebene der einzelnen Einträge vorzunehmen.

:::info
Diese Funtion befindet sich noch in der Vorschau und ist nicht vollständig umgesetzt. Weitere Punkte, die noch umgesetzt werden müssen, finden Sie am Ende dieses Abschnitts.
:::

Diese Funktion ist in folgenden Apps von qmBase verfügbar:

| App                              | Status | Weitere Details                                           |
| -------------------------------- | ------ | --------------------------------------------------------- |
| Audits                           | 🔧     | Sichtbarkeit in Tabellen und Detailansicht eingeschränkt  |
| Schulungen                       | 🔧     | Sichtbarkeit in Tabellen und Detailsansicht eingeschränkt |
| Formulare                        | 🔧     | Sichtbarkeit in Detailsansicht eingeschränkt              |
| Dokumentenmanagement, WIKI, Blog | 🔧     | Sichtbarkeit in Tabellen und Detailsansicht eingeschränkt |
| Reklamationen                    | 🔧     | Sichtbarkeit in Detailsansicht eingeschränkt              |
| Maßnahmen                        | 🔧     | Sichtbarkeit in Tabellen und Detailsansicht eingeschränkt |
| Ziele                            | 🔧     | Sichtbarkeit in Tabellen und Detailsansicht eingeschränkt |

Die Steuerung des Zugriffs kann durch die folgenden Personen erfolgen:

- Verantwortlicher
- Owner
- (Modul) Administrator

Um den Zugriff festzulegen, gehen Sie wie folgt vor:

1. Klicken Sie auf den Eintrag z.B. ein Audit.
2. Wählen Sie den Tab **<code><VscKey/> Zugriff</code>** aus.
3. Makieren Sie den Eintrag als Privat.

Ab diesem Zeitpunkt ist der Eintrag nur noch für die Personen sichtbar, die unter **Zugriff verwalten** bzw. in der Karte **Standardzugriff** aufgeführt sind.

### Zugriff verwalten

In diesem Bereich haben Sie die Möglichkeit einzelnen Nutzern Zugriff zu einem privaten Eintrag zu erteilen. Mit dem Zugriff an dieser Stelle überschreiben Sie die Einstellungen, die über Rollen festgelegt wurden.

Bitte beachten Sie hierbei, dass es sich nur um den Zugriff auf einen einzelnen Eintrag (z.B. Audit) handelt. Geben Sie einen Eintrag (z.B. Audit) aus einer App (z.B. Auditmanagement) für einen Nutzer frei, der sonst keinen Zugriff auf dieses App hat, bleibt der Zugriff auf den einzelnen Eintrag beschränkt.

#### Zugriff für einzelne Nutzer festlegen

Wenn Sie den Zugriff für einzelne Nutzer festgelegt haben, können Sie zusätzlich noch festlegen, welcher Art dieser Zugriff sein soll. Wir unterscheiden derzeit:

##### Lesen

Nutzer kann Eintrag aufrufen und kopieren. Zusätzlich kann der Nutzer Kommentare und Dateien hinzufügen.

##### Schreiben

Nutzer kann alles aus lesend und Eintrag editieren

### Todos & Roadmap

- Filter für private Einträge in Listen
- Zugriffe basierend auf Gruppen
- Zugriffe basierend auf individuellen Rollen
- Sichtbarkeit der Einträge aus Verknüpfungen. Wenn Sie z.B. ein privates Audit erstellt haben ist es trotzdem für alle Personen sichtbar, die Zugriff auf eine verknüpfte Maßnahme haben. Der Klick auf das Audit funktioniert allerdings nicht.
- Kommentare auf den App Startseiten sind unbeeinflusst von eventuellen Sichtbarkeitseinstellugen
