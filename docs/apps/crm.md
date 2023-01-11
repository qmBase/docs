---
id: crm
title: CRM
---

import {
FaPlus,
FaListUl,
FaStarHalfAlt,
FaChessKing,
FaShippingFast,
} from "react-icons/fa";

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Crm.png)

Das CRM ist die zentrale Kontaktverwaltung innerhalb von qmBase. Weitere Apps wie das [Reklamationsmanagement](claim-management) oder das [Projekt- & Maßnahmenmanagement](projects-and-tasks) greifen auf diese Kontakte zu. Kontakte werden als Organisationen mit einer beliebigen Anzahl an Personen erfasst. Die Kontakte können als Kunden oder Lieferanten klassifiziert werden. Zu den Kontakten können entsprechend Kundenbewertungen oder Lieferantenbewertungen hinterlegt werden.

# Kontakte anlegen

In der Navigationsleiste auf der linken Seite wird über den Menüpunkt <code><FaListUl/> Kontakte</code> eine Übersichtstabelle mit allen bestehenden Kontakten aufgerufen. Mit dem Button <code><FaPlus/> Neu</code> oberhalb der Tabelle werden neue Kontakte erstellt. In dem sich öffnenden Dialogfenster kann eine **Firmen- Organisationsname** oder der Name einer Kontaktperson eingetragen werden. Werden beide Felder ausgefüllt, wir die Kontaktperson direkt der Organisation zugeordnet.

## Zusätzliche Informationen zu Organisationen

Nachdem eine Organisation erstellt wurde können weitere Informationen dazu erfasst werden. Folgende Felder stehen insgesamt zur Verfugung:

| Parameter                                    | Typ      | Beschreibung                                                              |
| -------------------------------------------- | -------- | ------------------------------------------------------------------------- |
| <code>Schlagworte</code>                     | Text     | Schlagworte bieten die Möglichkeit Kontakte übergeordnet zu strukturieren |
| <code>Verantwortlicher</code>                | Liste    | Person, die für den Kontakt verantwortlich ist                            |
| <code>Name</code>                            | Text     | Name der Organisation                                                     |
| <code>Beschreibung</code>                    | Text     | Hier können weitere Informationen zu dem Kontakt hinterlegt werden        |
| <code>Externe ID</code>                      | Text     | Referenz zu dem gleichen Kontakt in einer anderen Software                |
| <code>URL</code>                             | Text     | Hier kann die Webseite des Kontakts eingetragen werden                    |
| <code>Lieferant</code>                       | Checkbox | Markierung des Kontaktes als Lieferant                                    |
| <code>Kunde</code>                           | Checkbox | Markierung des Kontaktes als Kunde                                        |
| <code>E-Mail</code>                          | Text     | E-Mail-Adresse des Kontakts                                               |
| <code>Telefon</code>                         | Text     | Telefonnummer des Kontakts                                                |
| <code>Adressen</code>                        | Text     | Adressen des Kontakts                                                     |
| <code>Mitarbeiter und Kontaktpersonen</code> | Liste    | Adresse des Kontakts                                                      |

## Zusätzliche Informationen zu Kontaktpersonen

Nachdem eine Kontaktperson erstellt wurde können weitere Informationen dazu erfasst werden. Folgende Felder stehen insgesamt zur Verfügung:

| Parameter                   | Typ   | Beschreibung                                                              |
| --------------------------- | ----- | ------------------------------------------------------------------------- |
| <code>Schlagworte</code>    | Text  | Schlagworte bieten die Möglichkeit Kontakte übergeordnet zu strukturieren |
| <code>Anrede</code>         | Liste | Wie wird die Kontaktperson angesprochen?                                  |
| <code>Vorname</code>        | Text  | Vorname der Kontaktperson                                                 |
| <code>Nachname</code>       | Text  | Nachname der Kontaktperson                                                |
| <code>Externe ID</code>     | Text  | Referenz zu der gleichen Kontaktperson in einer anderen Software          |
| <code>E-Mail</code>         | Text  | E-Mail-Adresse des Kontaktperson                                          |
| <code>Geburtstag</code>     | Datum | Geburtsdatum der Kontaktperson                                            |
| <code>Telefon</code>        | Text  | Telefonnummern des Kontaktperson                                          |
| <code>Adressen</code>       | Text  | Adressen des Kontaktperson                                                |
| <code>Organisationen</code> | Liste | Organisationen für die die Kontaktperson tätig ist                        |

TODO: Verweis auf Pflichtfelder

# Verknüpfungen mit weiteren Objekten und Informationen

## Maßnahmen

Zu jeder Organisation können in der Maßnahmentabelle über den Button <code><FaPlus/> Hinzufügen</code> Maßnahmen verknüpft werden. Mehr über Maßnahmen erfahren Sie im [Projekt- Maßnahmenmanagement](projects-and-tasks)

## Reklamationen

Im [Reklamationsmanagement](claim-management) können Sie Ihre Kunden- & Lieferantenreklamationen erfassen und direkt mit den betroffenen Kontakten verknüpfen. Dazu greift das Reklamationsmanagement auf die Kontaktdaten aus dem CRM zu. Im CRM wiederum werden zu jedem Kontakt direkt die dazugehörigen Reklamationen dargestellt.

## Bewertungen

Jeder Kontakt in qmBase kann bewertet werden. Dabei kann es sich um Kunden- oder Lieferantenbewertungen handeln. Die Bewertungshistorie zu jedem Kontakt wird immer auf der rechte Seite auf der Karte **_Bewertungen_** angezeigt. Wollen Sie eine Bewertung hinzufügen klicken Sie einfach auf den <FaPlus/>-Button.

Jeder Kontakt wird auf einer Skala von 0-100% bewertet. Ein Kommentarfeld erlaubt die Erfassung zusätzlicher Informationen.

Sobald die Bewertung erstellt wurde, wird sie auch auch in der Übersicht der Bewertungen dargesellt. Die Tabbellenspalte **_ID_** führt zu der Detailansicht der Bewertung. Dort kann die Bewertung bearbeitet werden und es können weitere Dokumente angefügt werden.

Eine Übersicht über alle Bewertungen aller Kontakte erreichen Sie über den Menüpunkt <code><FaStarHalfAlt/></code>. Über den Button <code><FaPlus/></code> können Sie dort ebenfalls Bewertungen erfassen. In diesem Fall müssen aber zusätzlich den zu bewertenden Kontakt auswählen.

Die Menüpunkte <code><FaChessKing/> Kundenbewertung</code> und <code><FaShippingFast/> Lieferantenbewertungen</code> zeigen jeweils nur die Bewertungen für Kunden bzw. Lieferanten.
