---
id: general
title: Allgemein
slug: /general
---

Hier finden Sie allgemeine Informationen, die für alle Apps gültig sind.

# Suchen von Daten

Informationen & Tipps, die Ihnen dabei helfen schnell die richtigen Daten zu finden.

## Wie funktionieren unsere Filter

TODO Beispiel für filter

## Suchen von Personen

### Suchen von Personen in bestimmter Rolle z.B. in Dropdowns

Sollen Personen in einer bestimmten Rolle gesucht werden wird im Hintergrund eine folgende Logik befolgt.
Wenn z.B. eine Person in der Rolle des Ideenkoordinators gesucht wird, wird folgendes Schema durchlaufen:

1. Suche alle Personen, die in der Rolle und in einer meiner Gruppen sind
2. Wenn keine Personen gefunden wurden, zeige alle Admins in meiner Gruppe
3. Wenn keine Admins in meiner Gruppe gefunden werden, zeige alle Admins

#### Beispiel

Bei der folgende Konstellation aus Nutzern und Gruppen ergibt sich

| Nutzer  | Rolle(n)         | Gruppe Dortmund | Gruppe Hawai | Gruppe New York |
| ------- | ---------------- | --------------- | ------------ | --------------- |
| Müller  | Admin            | x               |              |                 |
| Meier   | Ideenkoordinator |                 | x            |                 |
| Schmidt | Nutzer           | x               |              |                 |
| Schulze | Nutzer           |                 | x            | x               |

- Wenn Nutzer Schmidt einen Ideenkoordinator sucht, erhält er als Auswahlmöglichkeiten Nutzer Müller.
- Wenn Nutzer Schulze einen Ideenkoordinator sucht, erhält er als Auswahlmöglichkeiten Nutzer Meier.
