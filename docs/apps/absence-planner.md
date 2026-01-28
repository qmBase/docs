---
id: absence-planner
title: Abwesenheitsplaner
---

![Ansichten Abwesenheitsplaner](https://caqadmin.blob.core.windows.net/faqs/97-images/b3ee39c7-274f-4ee8-8fdb-a64aa2410e4e-mceclip0.png)

:::info Aktuelle Erweiterungen und Verbesserungen dieser App finden Sie [hier](/blog/tags/abwesenheitsplaner)
:::

Diese App ermöglicht die digitale Planung und Verwaltung von Abwesenheiten. Benutzer können Urlaubsanträge systemgestützt einreichen und den Status ihres Urlaubskontos einsehen.
Automatisierte Freigabeprozesse und Kalenderübersichten unterstützen die Personalabteilung und erhöhen die Transparenz für alle Beteiligten.

## Workflow

### 1. Antrag erstellen

Nach der Konfiguration der Grundeinstellungen können Abwesenheiten erfasst werden. Über die Schaltfläche „Neu“ wird ein neuer Antrag erstellt.
Dabei wird die entsprechende Abwesenheitsregelung (z. B. Urlaub oder Krankheit) ausgewählt.

Während der Erstellung wird systemseitig geprüft, ob der Antrag Aussicht auf Erfolg hat.
Das System prüft dabei beispielsweise, ob das betreffende Konto über ausreichend verfügbare Tage für die gewählte Regelung verfügt.

> **Wichtig:** Diese Prüfung dient als Hinweis und verhindert nicht das Erstellen von Anträgen, die fachlich nicht sinnvoll sind.

### 2. Antrag abschicken

Beim Abschicken des Antrags führt das System folgende Schritte aus:

- Falls im Benutzerprofil Vertreter hinterlegt sind, werden diese automatisch für den Zeitraum der Abwesenheit übernommen.
- Hinterlegte Freigeber für die gewählte Abwesenheitsart werden automatisch zugewiesen.
- Vertreter und Freigeber erhalten eine Benachrichtigung über ihre jeweiligen Aufgaben.

### 3. Genehmigungsprozess

Nach dem Abschicken des Antrags verbleibt dieser im Status „Offen“, bis die zuständigen Personen über die Freigabe entscheiden.
Sobald ein Freigeber den Antrag ablehnt oder genehmigt, wird der Antragsteller benachrichtigt.

Haben alle zuständigen Personen den Antrag genehmigt, kann die finale Freigabe erfolgen. Dieser Schritt wird von einem der Freigeber durchgeführt.
Ist systemseitig nur eine Person für die Freigabe erforderlich, erfolgt dieser Schritt automatisch.

:::info Bearbeitung und Stornierung
Solange der Antrag noch nicht bearbeitet wurde, kann er beliebig angepasst oder gelöscht werden.
Wurde der Antrag bereits freigegeben, kann die Freigabe durch einen Administrator rückgängig gemacht werden, oder der Antragsteller zieht den Antrag zurück.
In diesem Fall verbleibt der Datensatz mit dem Status „Zurückgezogen“ im System.
:::

## Rollen im Abwesenheitsplaner

**Ersteller:** Person, die den Antrag einreicht. Ein Antrag kann für den Eigenbedarf oder für einen Dritten erstellt werden.

**Antragsteller:** Person, für die die Abwesenheit beantragt wird.

**Freigeber:** Personen, die zur Genehmigung von Abwesenheitsanträgen berechtigt sind.

**Vertreter:** Vertretung während der Abwesenheit des Antragstellers.

**Administrator:** Personen mit der Rolle Modul-Admin oder Admin.

## Zugriffsberechtigungen

Der Antrag durchläuft verschiedene Statusprozesse, welche die Zugriffsberechtigungen steuern.

- **Zugriff auf den Antrag:**
  - Detailansicht: Administrator, Antragsteller, zugewiesene Freigeber.
  - Eckdaten (Zeitraum): Alle Benutzer mit Zugriff auf die App.
- **Erstellung von Anträgen:** Administrator (für alle Benutzer), Benutzer mit Standardzugriff (für den Eigenbedarf).
- **Bearbeitung von offenen Anträgen:** Administrator, Ersteller.
- **Freigabe von Anträgen:** Administrator, zugewiesene Freigeber.

Nach der Genehmigung kann der Antrag durch einen Administrator oder den Ersteller zurückgezogen werden.

## Einstellungen

Zur Nutzung aller Funktionen sind folgende Konfigurationen erforderlich:

### Abwesenheitstypen

Unter **Einstellungen -> Mitarbeiter -> Abwesenheitstypen** werden die verschiedenen Arten der Abwesenheit definiert. Beispiele:

- Urlaub
- Krankheit
- Berufsschule
- Sonderurlaub

### Abwesenheitsregelungen

Unter **Einstellungen -> Mitarbeiter -> Abwesenheitsregelungen** werden Regeln zur Organisation der Abwesenheiten erstellt (z. B. Urlaubsregelung für das Kalenderjahr).

Eigenschaften einer Abwesenheitsregelung:

- **Gültigkeitszeitraum:** Zeitraum, in dem die Regelung Anwendung findet.
- **Verfügbare Tage:** Gesamtzahl der Tage für diese Regelung.
- **Resttage:** Maximale Anzahl an Tagen, die in den nächsten Zeitraum übernommen werden können.
- **Restlaufzeit:** Zeitraum, in dem die restlichen Tage genutzt werden müssen.

### Feiertage

Unter **Einstellungen -> Allgemein -> Feiertage** werden Feiertage und Betriebsferien hinterlegt.

## Benachrichtigungen

Das System versendet zu folgenden Anlässen Benachrichtigungen:

| Auslösendes Ereignis        | Empfänger                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------- |
| Erstellen eines Antrags     | Freigeber                                                                             |
| Änderung des Antragsstatus  | Antragsteller (bei Freigabe erfolgt zudem eine Benachrichtigung an die Vertreter)     |
| Hinzufügen eines Freigebers | Neu zugewiesener Freigeber                                                            |

<!-- Custom component -->

import CommonFunction from "@site/src/components/commonFunction.tsx";

<CommonFunction app={`AbsencePlanner`} />
