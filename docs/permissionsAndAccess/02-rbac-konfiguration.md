---
title: RBAC - Rollenbasierter Zugriff
---


Kontrollieren Sie den Zugriff auf Apps, Objekte und Funktionen in qmBase.
In der Regel reichen die vordefinierten Rollen aus. Sollten Sie aber spezielle Anforderungen haben, können Sie Rollen erstellen.

## Rollen erstellen

Erstellen Sie Rollen und weisen Sie diese den Benutzern zu.

1. Gehen Sie auf Admin > Berechtigungen > Rollen
2. Sehen Sie die vorhandenen Rollen an und klicken Sie auf "Rollen erstellen"
3. Speichern Sie die Rolle
4. Weisen Sie der Rolle die gewünschten Berechtigungen zu

## Rollen löschen

Löschen Sie Rollen, die nicht mehr benötigt werden.

1. Gehen Sie auf Admin > Berechtigungen > Rollen
2. Sehen Sie die vorhandenen Rollen an und klicken Sie auf die zu löschende Rolle
3. Klicken Sie auf "Rollen löschen"

:::info
Es können nur Rollen gelöscht werden, die keine Systemrollen sind.
Wenn eine Rolle gelöscht wird, wird diese allen Benutzern entzogen. Falls ein Benutzer dann keine Rollen mehr hat, hat dieser keinen Zugriff mehr auf das System.
:::

## Rollen einzelnen Nutzern zuweisen

Weisen Sie Rollen den Benutzern zu.

1. Gehen Sie auf Admin > Berechtigungen > Nutzer Berechtigungen
2. Sehen Sie die vorhandenen Rollen an und wählen die gewünschte Rolle aus
3. Weisen Sie die Rolle den gewünschten Benutzern zu

## Standard Rollen festlegen

Legen Sie Standardrollen fest, die neuen Benutzern automatisch zugewiesen werden.

1. Gehen Sie auf Admin > Berechtigungen > Nutzer Berechtigungen
2. Sehen Sie die vorhandenen Rollen an und wählen die gewünschte Rolle aus
3. Legen Sie die gewünschte Rolle als Standardrolle fest. Eine Checkbox befindet sich oberhalb der Tabelle.

## Verhalten von Rollen und Berechtigungen

Einzelne Rollen sind immer mit einem Set an Berechtigungen verknüpft.
Die Berechtigungen für die Systemrollen sind unveränderbar.
Wenn Sie individuellen Zugriff für einzelne Benutzer festlegen möchten, können Sie die Berechtigungen für benutzerdefinierte Rollen (Custom Roles) anpassen.

### Aufbau der Berechtigungen

Generell gilt, dass die Berechtigungen immer nach folgendem Muster aufgebaut sind:

`{Entity}.{Operation}.{Constraint}`

- Entity: Die Entität, auf die die Berechtigung zutrifft (z. B. Goal, Claim)
- Operation: Die Operation, die auf der Entität ausgeführt wird (z. B. Read, Write)
- Constraint: Die Einschränkung, die auf die Operation zutrifft (z. B. OwnedBy)

## Lesende Benutzer

Sie können einstellen, dass Benutzer nur Leserechte haben.
Diese Einstellung ist global und bezieht sich somit auf das gesamte System und alle Module.
Benutzer, die nur Leserechte haben, können keine Daten editieren.
Dies beinhaltet z. B. auch, dass diese Benutzer keine Lesebestätigungen für Dokumente ausführen können.
