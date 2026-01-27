---
title: Standard Rollen
---

In den unterschiedlichen Apps gibt es teils unterschiedliche Konfigurationsmöglichkeiten für Berechtigungen. Die gängigen Konfigurationsmöglichkeiten sind nachfolgend aufgeführt. Für weitere Details lesen Sie bitte den Eintrag zur entsprechenden Rolle:

### Standard

Mit dem Standard Zugriff kann der Nutzer folgende Aktionen ausführen:

- Auf das Modul zugreifen
- Neue Einträge erstellen
- Seine eigenen Einträge editieren
- Ändern von Eigenschaften, die auf den Status des Eintrags bezogen sind

#### Beispiel: Rolle Zielmanagement Standard

Die Rolle Zielmanagement Standard ermöglicht es die App Zielmanagement zu öffnen und Ziele zu erstellen.
Zusätzliche können Ziele bearbeitet werden, für die der aktuelle Nutzer verantwortlich oder oder der Ersteller ist.

| Erteilte Berechtigung    | Erforderliche Berechtigung | Ergebnis          |
| ------------------------ | -------------------------- | ----------------- |
| `Goal.Read`              | `Goal.Read`                | ✅                |
| `Goal.Read`              | `Goal.Write`               | ❌                |
| `Goal.ReadWrite`         | `Goal.Read`                | ✅                |
| `Goal.ReadWrite.OwnedBy` | `Goal.Write`               | ✅ _if owner_     |
| `Goal.ReadWrite.OwnedBy` | `Goal.ReadWrite`           | ❌ _if not owner_ |

### Einstellungen

Durch den Zugriff auf die Einstellungen können Nutzer alle zu dem Modul gehörigen Einstellungen verändern.

### Freigeber

Freigeber sind berechtigt Inhalte freizugeben, z.B. Dokumente oder Formulare. Diese Rolle ist nicht in jeder App verfügbar.

### Modul Administrator

Der Modul Admin ist das Äquivalent zum normalen Admin auf Modulebene. Er kann alles erstellen, ändern und löschen, was er möchte.

### Administrator

Administratoren haben Zugriff auf alle Funktionen und unterliegen keinen Einschränkungen.