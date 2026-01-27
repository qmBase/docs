---
title: Einleitung
---

import Mermaid from "@theme/mermaid";
import AccessFlow from "../charts/_access-flow-chart.mdx";

qmBase biete eine Vielzahl von Berechtigungen an, die es ermöglichen, den Zugriff auf verschiedene Funktionen des Systems zu steuern.
Wir verfolgen dabei zwei unterschiedliche Konzepte:

1. RBAC (Role Based Access Control): Rollen & Berechtigungen
2. ABAC (Attribute Based Access Control): Zugriff in Abhängigkeit von Attributen der Objekte.

Die Unterschiede der beiden Konzepte werden im folgenden detailliert erläutert.

## RBAC (Role Based Access Control): Rollen & Berechtigungen

Bei der rollenbasierten Zugriffskontrolle werden Berechtigungen an **Rollen** (z. B. Administrator,
Modul-Administrator oder Standardnutzer) geknüpft. Diese Rollen werden wiederum den einzelnen
Benutzern zugewiesen. Dies ermöglicht eine effiziente Verwaltung von Berechtigungen für große
Nutzergruppen auf App-Ebene.

## ABAC (Attribute Based Access Control): Zugriff in Abhängigkeit von Attributen der Objekte

Die attributbasierte Zugriffskontrolle ermöglicht eine feinere Steuerung auf der Ebene
**einzelner Einträge**. Hierbei entscheiden Merkmale des Objekts (z. B. ob ein Audit als
"privat" markiert ist) oder spezifische Attribute des Nutzers darüber, wer Zugriff erhält.
Dies erlaubt es, Ausnahmen von den allgemeinen Rollen festzulegen und sensible Daten gezielt zu schützen.

<Mermaid
  chart={`flowchart TD
    Start[Benutzer fordert Zugriff an] --> CheckRBAC{RBAC Check: Hat der Benutzer die erforderliche Rolle?}

    CheckRBAC -- Nein --> Deny[Zugriff verweigert]
    CheckRBAC -- Ja --> CheckABAC{ABAC Check: Erlauben Benutzer-/Ressourcenattribute den Zugriff?}

    CheckABAC -- Nein --> Deny[Zugriff verweigert]
    CheckABAC -- Ja --> Grant[Zugriff gewährt]
    `}
/>

## Übersicht

Sie können jedem Nutzer individuelle Zugriffsrechte auf die Plattform geben. Somit können Sie sicherstellen, dass nicht jeder alles sehen kann. Die Vergabe der Rollen und Berechtigungen erfolgt über:

[Angemeldet -> Admin -> Berechtigungen](https://app.qmbase.com/Account/findworkspace?returnUrl=/_admin/permissions)

Zugriff und Berechtigungen können in unendlichen vielen Möglichkeiten kombiniert werden. Damit Sie das gewünschte Ergebnis erhalten, ist es notwendig, den generellen Ablauf, das _Big Picture_, zu verstehen.

<AccessFlow />

Um die Anforderungen große Flexibilität auf der einen Seite und übersichtliche Konfiguration auf der anderen Seite zu erfüllen, funktionieren unsere Zugriffsrechte wie nacheinander geschaltete Filter. Diese Filter sind im obigen Bild dargestellt.
