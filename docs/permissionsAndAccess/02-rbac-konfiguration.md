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
Es können nur Rollen gelöscht werden, die nicht Systemrollen sind.
Wenn eine Rolle gelöscht wird, wird diese allen Nutzern entzogen. Falls ein Nutzer dann keine Rollen mehr hat, hat dieser keinen Zugriff mehr auf die Software.
:::

## Rollen einzelnen Nutzern zuweisen

Weisen Sie Rollen den Benutzern zu.

1. Gehen Sie auf Admin > Berechtigungen > Nutzer Berechtigungen
2. Sehen Sie die vorhandenen Rollen an und wählen die gewünschte Rolle aus
3. Weisen Sie die Rolle den gewünschten Benutzern zu

## Standard Rollen festlegen

Festlegen Sie Standard Rollen, die für neue Benutzer automatisch zugewiesen werden.

1. Gehen Sie auf Admin > Berechtigungen > Nutzer Berechtigungen
2. Sehen Sie die vorhandenen Rollen an und wählen die gewünschte Rolle aus
3. Legen Sie die gewünschte Rolle als Standard Rolle fest. Ein Checkbox befindet sich oberhalb der Tabelle.

## Verhalten von Rollen und Berechtigungen

Einzelne Rollen sind immer mit einem Set an Berechtigungen verknüpft. Die Berechtigungen für die Systemrollen sind unveränderbar. Wenn Sie individuellen Zugriff für einzelne Nutzer festlegen möchten, können Sie die Berechtigungen für die Custom Rollen anpassen.

### Aufbau der Berechtigungen

Generell gilt, dass die Berechtigungen immer nach folgendem Muster aufgebaut sind:

`{Entity}.{Operation}.{Constraint}`

- Entity: Die Entität, auf die die Berechtigung zutrifft z.B. Goal, Claim
- Operation: Die Operation, die auf der Entität ausgeführt wird z.B. Read, Write
- Constraint: Die Einschränkung, die auf die Operation zutrifft z.B. OwnedBy

## Lesende Nutzer

Sie können einstellen, dass Nutzer nur Leserechte haben. Diese Einstellung ist global und bezieht sich somit auf die gesamte Software und alle Module. Nutzer, die nur Leserechte haben können keine Daten editieren. Dies beinhaltet z.B. auch, dass diese Nutzer keine Lesebestätigung für Dokumente ausführen können.
