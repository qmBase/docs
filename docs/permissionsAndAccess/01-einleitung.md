---
title: Einleitung
---

import Mermaid from "@theme/mermaid";

qmBase biete eine Vielzahl von Berechtigungen an, die es ermöglichen, den Zugriff auf verschiedene Funktionen des Systems zu steuern.
Wir verfolgen dabei zwei unterschiedliche Konzepte:

1. RBAC (Role Based Access Control): Rollen & Berechtigungen
2. ABAC (Attribute Based Access Control): Zugriff in Abhängigkeit von Attributen der Objekte.
3. PBAC (Policy Based Access Control): Zugriff in Abhängigkeit von Regeln.

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

## PBAC (Policy Based Access Control): Zugriff in Abhängigkeit von Regeln

Die regelbasierte Zugriffskontrolle ermöglicht eine feinere Steuerung auf der Ebene
**einzelner Einträge**. Hierbei entscheiden Regeln darüber, wer Zugriff erhält.
Dies erlaubt es, Ausnahmen von den allgemeinen Rollen festzulegen und sensible Daten gezielt zu schützen.

<Mermaid
  chart={`flowchart TD
    Start[Benutzer fordert Zugriff an] --> CheckRBAC{RBAC Check: Hat der Benutzer die erforderliche Rolle?}

    CheckRBAC -- Nein --> Deny[Zugriff verweigert]
    CheckRBAC -- Ja --> CheckABAC{ABAC Check: Erlauben Benutzer-/Ressourcenattribute den Zugriff?}

    CheckABAC -- Nein --> Deny[Zugriff verweigert]
    CheckABAC -- Ja --> Grant[Zugriff gewährt]

    %% Optional PBAC integration
    CheckABAC --> CheckPBAC{PBAC Check: Erfüllt die Regeln die für den Zugriff notwendig sind?}
    CheckPBAC -- Nein --> Deny[Zugriff verweigert]
    CheckPBAC -- Ja --> Grant[Zugriff gewährt]
    `}
/>