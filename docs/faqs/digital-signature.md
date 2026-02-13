---
id: digital-signature
title: Digitale Signatur
---

# Digitale Signaturen bzw. elektronische Signaturen in qmBase

Diese FAQ zeigt, welche Anforderungen ISO, FDA und GMP an elektronische Signaturen stellen und wie qmBase diese Anforderungen in der Praxis umsetzt.

## Auf einen Blick

- In Managementsystemen bedeutet „elektronische Signatur“ in der Regel eine **nachvollziehbare Freigabe im System** (nicht zwingend eine QES mit Zertifikat).
- Entscheidend sind **Verantwortlichkeit, Nachvollziehbarkeit und Datenintegrität**.
- qmBase unterstützt diese Anforderungen mit **personenbezogenen Freigaben, Zeitstempeln, Versionsbezug und Audit Trail**.

## Was ist im Managementsystem mit „elektronischer Signatur“ gemeint?

Im QM-/Managementsystem-Kontext ist damit typischerweise keine kryptografische Zertifikatssignatur im rechtlichen Sinne gemeint, sondern eine dokumentierte, personenbezogene Freigabehandlung im System.

Ziele:

- eindeutige Verantwortungszuweisung
- Nachvollziehbarkeit von Entscheidungen
- Schutz vor unbemerkter Manipulation
- Auditierbarkeit

## ISO (z. B. ISO 9001, ISO 14001, ISO 13485): Welche Anforderungen gelten?

ISO-Normen machen keine konkreten technischen Vorgaben zur Signaturtechnologie. Gefordert werden vor allem:

- klare Verantwortlichkeiten
- dokumentierte Freigaben
- nachvollziehbare Änderungen
- Lenkung dokumentierter Informationen

**Umsetzung in qmBase**

- Freigaben sind einer konkreten Person zugeordnet.
- Freigaben sind versioniert und zeitgestempelt.
- Änderungen und Freigaben werden lückenlos protokolliert.
- Nur berechtigte Benutzer dürfen freigeben.

## FDA (21 CFR Part 11): Welche Anforderungen gelten?

Die FDA fordert insbesondere:

- eindeutige Zuordnung der Signatur zu einer Person
- Authentifizierung mit mindestens zwei Komponenten (z. B. Benutzerkennung + Passwort)
- Verknüpfung der Signatur mit dem Datensatz
- Erfassung von Datum, Uhrzeit und Bedeutung der Signatur
- nachvollziehbare Audit Trails

**Wichtig:** Die FDA verlangt keine qualifizierte elektronische Signatur (QES) und keine Zertifikate, sondern ein kontrolliertes, validierbares System.

**Umsetzung in qmBase**

- Anmeldung ausschließlich über personalisierte Benutzerkonten
- Authentifizierung per E-Mail-Adresse und Passwort
- Freigaben nur im angemeldeten Zustand
- Protokollierung von Name, Datum/Uhrzeit, Aktion und Dokumentversion
- unveränderliches Änderungs- und Freigabeprotokoll

## GMP (EU GMP Annex 11): Welche Anforderungen gelten?

EU GMP Annex 11 fordert:

- elektronische Signaturen als systeminternes Äquivalent zur handschriftlichen Unterschrift
- dauerhafte Verknüpfung von Signatur und Datensatz
- Erfassung von Name, Datum und Uhrzeit
- Schutz vor unbefugter Nutzung

Auch hier liegt der Fokus auf Datenintegrität und Verantwortlichkeit, nicht auf rechtlicher Außenwirkung.

**Umsetzung in qmBase**

- systemgestützte Freigabeprozesse mit festen Rollen
- Signaturen sind untrennbar mit der jeweiligen Revision verknüpft
- vollständige Historie aller Freigaben
- Zugriff nur für autorisierte Benutzer

## eIDAS / QES: Erfüllt qmBase diese Anforderungen?

Nein – und für interne Managementsystem-Freigaben ist das in der Regel nicht erforderlich.

Die eIDAS-Verordnung regelt die rechtliche Wirkung elektronischer Signaturen im externen Rechtsverkehr (z. B. Verträge mit externen Parteien). Für interne QM-Freigaben ist eine QES typischerweise nicht vorgeschrieben.

**qmBase ist ausgelegt für**

- interne Freigaben
- revisionssichere Dokumentenlenkung
- Audit- und Inspektionssicherheit

**qmBase ist nicht ausgelegt für**

- formbedürftige Rechtsgeschäfte mit externen Parteien

## Warum verwendet qmBase keine qualifizierten elektronischen Signaturen (QES)?

QES-Lösungen:

- erhöhen Kosten und Komplexität
- verschlechtern die Benutzerfreundlichkeit
- bringen für ISO-, FDA- oder GMP-Audits in der Regel keinen zusätzlichen regulatorischen Mehrwert

Leitprinzip in qmBase:

> So viel Kontrolle wie nötig – so wenig Hürden wie möglich.

## Sind Freigaben in qmBase revisions- und auditsicher?

Ja. qmBase stellt sicher, dass:

- jede Freigabe eindeutig einer Person zugeordnet ist
- jede Änderung nachvollziehbar bleibt
- frühere Versionen einsehbar bleiben
- Manipulationen erkennbar sind

Damit erfüllt qmBase die typischen Erwartungen von ISO-Auditoren, FDA-Inspektoren und GMP-Behörden.

## Zusammenfassung

| Anforderung an elektronische Freigaben | qmBase |
| --- | --- |
| Eindeutige Zuordnung zur freigebenden Person | ✔️ |
| Authentifizierung vor der Freigabe | ✔️ |
| Zeitstempel (Datum & Uhrzeit) | ✔️ |
| Verknüpfung mit der Dokumentrevision | ✔️ |
| Lückenlose Änderungs- und Freigabehistorie (Audit Trail) | ✔️ |
| Rollen- und Berechtigungskonzept | ✔️ |
| Schutz vor unbefugter Nutzung | ✔️ |

**Hinweis:** Qualifizierte elektronische Signaturen (QES) nach eIDAS sind keine Anforderung aus ISO-Normen, FDA 21 CFR Part 11 oder EU GMP Annex 11 und daher nicht Bestandteil der qmBase-Freigabemechanismen.

**Kurz gesagt:** qmBase bietet elektronische Signaturen, die praxisnah, auditfest und regulatorisch passend für Managementsysteme sind – ohne unnötige Komplexität.
