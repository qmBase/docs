---
id: change-notification-document-management
title: Wie werden Mitarbeiter automatisch über Änderungen in Artikeln informiert?
---

import {
FaInfo,
FaPlus,
} from "react-icons/fa";

Zu jedem Artikel gibt es in der Detailansicht die Tabelle _<FaInfo/>Zur Kenntnis genommen_. Personen die über Änderungen des Artikels automatisch in Kenntnis gesetzt werden sollen werden von dem Verantwortlichen über <code><FaPlus/></code> hinzugefügt.
Sobald die betroffene Personen die neue Artikelversion zur Kenntnisgenommen hat wird das Datum der Kenntnisnahme in der Tabelle dokumentiert.

### Wie bekommen alle Mitarbeiter Änderungen mit?

Damit alle Mitarbeiter über Änderungen informiert werden, gibt es die _Funktion für alle zur Kenntnisnahme festlegen_. Wenn ein Artikel so markiert ist, wird jedes Mal, wenn eine neue Revision eines Artikels veröffentlicht wird, die gesamte Liste der Artikel durchlaufen. Sollten bei einem Artikel noch nicht alle Mitarbeiter als Kenntnisnehmer hinzugefügt worden, werden die fehlenden Mitarbeiter ergänzt und benachrichtigt.

### What about the employees who left the company, do they still receive notifications about the changes on the new articles?

No, since they have disengaged from being employees, they will not get informed about any changes on the new articles. if the article marked as reviewed by all, then every time a new version of the article is published and reviewer list will be automatically updated by the current employees of the company.

### What about the employees who left the company, do they still receive notifications about the changes on the previous articles?

The answer to the question depends on whether the employee has already reviewed the article revision in a particular amount of time or not. If the employee reviewed the article revision then his data will be preserved as a historical log of events done on articles. However, if he has never reviewed the article revision then he will be detached from the reviewer list.
