---
id: announcements
title: Announcements
sidebar_label: Announcements
slug: /technical/announcements
---

### 2024-08-01

Zum 01.11.2024 werden keine E-Mails mehr über Sendgrid verschickt. Ab diesem Datum werden E-Mails ausschließlich über [Azure Communication Services](https://azure.microsoft.com/de-de/products/communication-services/) verschickt.

#### Änderungen für dne Nutzer

Für den Nutzer sollten die Auswirkungen minimal sein. Was sich ändert ist die Absenderadresse:

> admin-noreply@qmbase.com > DoNotReplay@qmbase.com

Nutzer müssen evtl. Ihre Spamfilter mit diesen neuen Daten anpassen.

#### Vorteile

Wir erwarten uns durch diese Änderung folgende Vorteile:

1. Bessere Reputation des neuen E-Mail Dienstes und damit einhergehend weniger Probleme mit Spamfiltern.
2. Reduzierte Komplexität der Unterauftragnehmer (gem. §28 Abs. 2 DSGVO) im AVV, da hier jetzt nicht mehr die eigenständige Firma Sendgrind Inc. zugehörig ist.

### 2024-02-12 Abschaltung alter Domains

Zum 31.03.2024 werden folgende Domains abgeschaltet:

- https://qmadmin.qmbase.com
- https://qmbasestore.azurewebsites.net
- https://qmbase-armfunctions.azurewebsites.net

On-Premises Nutzer müssen bis zum diesem Datum Ihr qmBase aktualisiert haben, damit alle Funktionen unterbrechungsfrei zur Verfügung stehen.
Eine aktuelle Übersicht finden Sie jederzeit [hier](/docs/technical/installation).

### 2020-06-22 Speicherdauer E-Mails und Synchronisationsevents

E-Mail Benachrichtigungen und Synchronisationsevents werden, sofern nicht anders vereinbart, nicht länger als 30 Tage gespeichert.
