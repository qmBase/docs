---
id: crm
title: CRM
---

import {
  FaPlus,
} from "react-icons/fa";

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Crm.png)

Das CRM ist die zentrale Kontakverwaltug innerhalb von qmBase. Weitere Apps wie das [Reklmationsmanagement](claim-management) oder das [Projekt- & Maßnahmenmanagement](projects-and-tasks) greifen auf diese Kontakte zu. Kontakte werden als Organisationen mit einer beliebigen Anzahl an Personen erfasst. Die Kontakte können als Kunden oder Lieferanten klassifiziert werden. Zu den Kontakten können entsprechend Lieferantenbewertungen oder Kundenzufriedenheitsanalysen hinterlegt werden.

# Kontakte anlegen

In der Navigationsleiste auf der Linken Seite wird über den Menüpunkt <code>Kontakte</code> eine Übersichtstabelle mit allen bestehenden Kontakten aufgerufen. Mit dem Button <code><FaPlus/> Neu</code> oberhalb der Tabelle werden neue Kontakte erstellt. In dem sich öffnenden Dialogfenster kann eine **Firmen-  Organsisationsname** oder der Namee einer Kontakperson eingetragen werden. Werden beide Felder ausgefüllt, wir die Kontaktperson direkt der Organisation zugeordnet.

## Zusätzliche Informationen zu Organsiationen

Nachdem eine Organistion erstellt wurde können weitere Informationen dazu erfasst werden. Folgende Felder stehen insgesamt zur Verfüung:

|Parameter|Typ|Beschreibung|
|---------|---|------------|
|<code>Schlagworte</code>|Text|Schlagworte bieten die Möglichkeit Kontakte übergeordnet zu sturkturieren| 
|<code>Verantwortlicher</code>|Liste|Person, die für den Kontakt veranwortlich ist|
|<code>Name</code>|Text|Name der Orgnaisation|
|<code>Beschreibung</code>|Text|Hier könnne weitere Inforamtionen zu dem Kontakt hinterlegt werden|
|<code>Externe ID</code>|Text|Referenz zu dem gleichen Kontakt in einer anderen Software|
|<code>URL</code>|Text (optinal)|Hier kann die Webseite des Kontakts eingetragen werden|
|<code>Lieferant</code>|Checkbox)|Markierung des Kontaktes als Lieferant|
|<code>Kunde</code>|Checkbox|Markierung des Kontaktes als Kunde|
|<code>E-Mail</code>|Text|E-Mail-Adresse des Kontakts|
|<code>Telefon</code>|Text|Telefonnummer des Kontakts|
|<code>Adressen</code>|Text|Adressen des Kontakts|
|<code>Mitarbeiter und Kontaktpersonen</code>|Liste|Adresse des Kontakts|

## Zusätzliche Informationen zu Kontaktpersonen 

Nachdem eine Kontaktperson erstellt wurde können weitere Informationen dazu erfasst werden. Folgende Felder stehen insgesamt zur Verfüung:

|Parameter|Typ|Beschreibung|
|---------|---|------------|
|<code>Schlagworte</code>|Text|Schlagworte bieten die Möglichkeit Kontakte übergeordnet zu sturkturieren| 
|<code>Anrede</code>|Liste|Wie wird die Kontaktperson angesprochen?|
|<code>Vorname</code>|Text|Vorname der Kontaktperson|
|<code>Nachname</code>|Text|Nachname der Kontaktperson|
|<code>Externe ID</code>|Text|Referenz zu der gleichen Kontaktperson in einer anderen Software|
|<code>E-Mail</code>|Text|E-Mail-Adresse des Kontaktperson|
|<code>Geburtstag</code>|Datum|Geburtsdatum der Kontaktperson|
|<code>Telefon</code>|Text|Telefonnummern des Kontaktperson|
|<code>Adressen</code>|Text|Adressen des Kontaktperson|
|<code>Organisationen</code>|Liste|Organisationen für die die Kontaktperson tätig ist|

TODO: Verweis auf Pflichtfelder

# Verknüpfungen mit weiteren Objekten und Informationen

## Maßnahmen
Zu jeder Organisation können in der Maßnahmentabelle über den Button <code><FaPlus/> Hinzufügen></code> Maßnahmen verknüpft werden. 

