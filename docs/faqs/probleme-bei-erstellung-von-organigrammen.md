---
title: Probleme bei der Erstellung von Organigrammen
slug: probleme-bei-erstellung-von-organigrammen
---

In qmBase wird das Organigramm **ausschließlich aus den Positionen aufgebaut** – nicht aus den Mitarbeitern.  
Mitarbeiter werden zwar Positionen zugeordnet, spielen für die Struktur des Organigramms selbst jedoch keine Rolle.

Entscheidend ist allein, **wie die Positionen hierarchisch miteinander verknüpft sind**.

---

## Wie wird ein Organigramm in qmBase grundsätzlich aufgebaut?

Das Organigramm entsteht durch **direkte Hierarchie-Beziehungen zwischen Positionen**:

- Jede Position kann **genau eine übergeordnete Position** haben
- Eine Position kann **mehrere untergeordnete Positionen** haben
- Die Verknüpfung erfolgt **von oben nach unten**, immer nur auf der jeweils nächsten Ebene

Beispiel:
- Der *Geschäftsführung* werden die *Abteilungsleitungen* untergeordnet
- Den *Abteilungsleitungen* werden die jeweiligen *Mitarbeiter-Positionen* untergeordnet

Wichtig:  
Es werden **nur direkte Beziehungen** gepflegt – keine indirekten oder mehrfachen Zuordnungen.

---

## Warum kann das Organigramm manchmal nicht dargestellt werden?

Ein Organigramm kann nicht erzeugt werden, wenn eine der folgenden Situationen vorliegt:

### 1. Eine Position hat mehr als eine übergeordnete Position
Eine Position darf im Organigramm **nur einen direkten Vorgesetzten** haben.

Beispiel:
- Eine Position ist gleichzeitig der Geschäftsführung **und**
  der Abteilungsleitung **und**
  einer weiteren Leitung untergeordnet

➡️ In diesem Fall ist die Hierarchie nicht eindeutig darstellbar.

---

### 2. Es existieren Zirkelbeziehungen
Eine Zirkelbeziehung liegt vor, wenn sich Positionen **gegenseitig oder indirekt selbst unterordnen**.

Beispiel:
- Position A ist übergeordnet von Position B
- Position B ist (direkt oder indirekt) übergeordnet von Position A

➡️ Auch hier kann kein Organigramm aufgebaut werden.

---

## Wie finde ich heraus, wo das Problem liegt?

qmBase weist dich aktiv auf solche Fehler hin.

Gehe dazu wie folgt vor:

1. Öffne die **Tabelle „Positionen“**
2. Blende die Spalte **„Details“** ein
3. Prüfe die dort angezeigten Hinweise

Typische Hinweise sind z. B.:
- „Mehr als ein übergeordnetes Element führt zu Problemen bei der Visualisierung des Organigramms“
- „Zirkelbeziehung gefunden“

Diese Hinweise zeigen dir **konkret**, bei welchen Positionen die Hierarchie angepasst werden muss.

---

## Wie behebe ich die Probleme konkret?

Gehe die betroffenen Positionen **nacheinander** durch und prüfe:

- Welche übergeordnete Position ist **fachlich wirklich korrekt**?
- Welche Zuordnungen sind redundant oder falsch?

Beispiel:
Wenn eine Position wie der *Innendienst* mehrere übergeordnete Positionen hat (z. B. QMB, Geschäftsführung, Innendienstleitung, Betriebsleitung), sollte in der Regel **nur eine** davon bestehen bleiben – meist die **direkte fachliche Leitung**, z. B. die *Innendienstleitung*.

Entferne alle weiteren übergeordneten Zuordnungen.

---

## Wann wird das Organigramm angezeigt?

Sobald:
- jede Position **maximal eine übergeordnete Position** hat
- keine Zirkelbeziehungen mehr existieren
- alle Hinweise in der Spalte **„Details“** abgearbeitet sind

kann das Organigramm automatisch korrekt dargestellt werden.

---

## Kurz zusammengefasst

- Das Organigramm basiert **nur auf Positionen**, nicht auf Mitarbeitern
- Jede Position darf **nur eine übergeordnete Position** haben
- Zirkelbeziehungen sind nicht erlaubt
- Die Spalte **„Details“** zeigt dir konkrete Fehler an
- Nach Korrektur aller Hinweise wird das Organigramm angezeigt
