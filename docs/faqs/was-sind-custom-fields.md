---
id: faq-80
slug: /faqs/80
title: Was sind Custom Fields
keywords:
  - Schulungsmanagement
  - Risiken & Chancen
  - Auditmanagement
  - Reklamationsmanagement
---

Custom Fields bieten die Möglichkeit vorhandene Formulare vollständig auf eigene Bedürfnisse anzupassen. Hierzu besteht in ausgewählten Apps die Möglichkeit Custom Fields zu erstellen.

Zum Erstellen der Custom Fields wechseln Sie einfach in der jeweiligen App in die Einstellungen und klicken Sie Custom Fields. Über das "+" oben rechts haben Sie Möglichkeit ein neues Custom Field zu erstellen.

![](https://caqadmin.blob.core.windows.net/faqs/80-images/7b5834bf-5fcf-48b1-9b44-445398c944d0-mceclip0.png)

Die erstellten Custom Fields können dann optional bei den vorhandenen Formularen einfügen.

![](https://caqadmin.blob.core.windows.net/faqs/80-images/mceclip1.png)

Custom Fields sind standardmäßig optionale Felder. Als Datentyp können folgende Optionen ausgewählt werden.

- Text -> Normales einzeiliges Textfeld

- Datum -> Datumspicker

- Zahl -> Zahleingabe

- Auswahl -> Dropdown Feld

- Textbereich -> Mehrzeiliges Textfeld

Sollten die Informationen, die Sie über die Custom Fields erfassen zwingend erforderlich sein, können Sie das Custom Field auch als Pflichtfeld definieren. Custom Fields, die als Pflichtfelder definiert sind, werden immer dann farblich hervorgehoben, wenn Sie noch nicht ausgefüllt sind.

Wenn Sie nicht genau wissen, welche Daten Sie erfassen möchten, nutzen Sie idealerweise den Typ Text.

## Festlegen von Custom Fields als Pflichtfelder

Sollten die Informationen, die Sie über die Custom Fields erfassen zwingend erforderlich sein, können Sie das Custom Field auch als Pflichtfeld definieren.
Custom Fields, die als Pflichtfelder definiert sind, werden immer dann farblich hervorgehoben, wenn Sie noch nicht ausgefüllt sind.

In der Detailsansicht werden Custom Fields, die als Pflichtfelder definiert sind, wie folgt hervorgehoben.

![](https://caqadmin.blob.core.windows.net/faqs/102-images/e5f13c40-025d-453a-9387-90a9a4fd3492-mceclip1.png)

Das Hervorheben von Custom Fields, die als Pflichtfelder definiert sind, wird in der Übersichtstabelle durch einen Warnhinweis an dem Eintrag dargestellt.

![](https://caqadmin.blob.core.windows.net/faqs/102-images/8df60f06-b7ae-44c8-a79b-d166407ed4ed-mceclip0.png)

## Zugriff auf Custom Fields Einschränken

Mit Custom Fields können Sie die qmBase Prozesse stärker individualisieren und an Ihr Unternehmen anpassen.
Ein wichtiger Punkt bei dieser Anpassung kann z.B. der Zugriff auf Custom Fields nur für spezieller Nutzer sein.
Z.B. kann es bei Reklamationen gewünscht sein, dass alle Reklamationen einmal durch den Betriebsleiter freigegeben werden sollen. Diese Anforderung können Sie umsetzen, indem Sie das Ändern des Custom Fields an eine spezielle Rolle knüpfen, die es nur dem Betriebsleiter erlaubt das Feld asuzufüllen.

Folgende Schritte sind dafür erforderlich:

- Erstellen Sie eine Rolle für den Betriebsleiter.

![](https://caqadmin.blob.core.windows.net/faqs/106-images/7a8cf13f-006b-4ebd-a30c-44a59bafe99f-mceclip1.png)

- Fügen Sie den gewünschten Nutzer dieser Rolle hinzu

![](https://caqadmin.blob.core.windows.net/faqs/106-images/3ddf6265-e0bf-4472-8e74-7c657b8c2fc3-mceclip2.png)

Wechseln Sie in die Einstellungen -> Reklamationsmanagement -> Custom Fields. Hier können Sie jetzt das Custom Field auswählen, dass mit der Einschränkung versehen werden soll. Sind keine Einschränkungen ausgewählt ist das Custom Field für jeden Nutzer änderbar.

![](https://caqadmin.blob.core.windows.net/faqs/106-images/8f9317d2-6c23-40ae-b59e-7b2e102bbecc-mceclip4.png)

Wenn Sie jetzt das Custom Field innerhalb der Reklamation ausfüllen, erscheint der Hinweis, dass eine besondere Rolle notwendig ist um das Feld auszufüllen. Sollten Sie diese Rolle nicht haben, ist der Hinweis auf die benötigte Rolle rot hinterlegt.

![](https://caqadmin.blob.core.windows.net/faqs/106-images/379467a1-4000-4def-953b-ec55e36808a4-mceclip6.png)

> Hinweis: Die Möglichkeiten des Administrators bleiben von diesen Einstellungen unberührt. Er kann also immer alles ändern.

## Apps in denen Custom Fields verfügbar sind

| App                       | Entität          | Custom Fields                       |
| ------------------------- | ---------------- | ----------------------------------- |
| Abwesenheitsplaner        |                  | x                                   |
| Audit management          |                  | x                                   |
| Blog                      |                  |                                     |
| Reklamationsmanagement    |                  | x                                   |
| CRM                       | Organisationen   | x                                   |
| CRM                       | Bewertungen      |                                     |
| Dokumentenmanagement      |                  |                                     |
| Mitarbeiter               |                  |                                     |
| Fehlermanagement          |                  | x                                   |
| Formulare                 |                  |                                     |
| Aufgabe & Qualifikationen | Non Standard     |                                     |
| Zielmanagement            |                  | x                                   |
| Ideenmanagement           |                  | x                                   |
| Instandhaltung            | Inventory items  | x (eingeschränkter Funktionsumfang) |
| Instandhaltung            | Inspections done | x (eingeschränkter Funktionsumfang) |
| Projekte & Maßnahmen      | Projekte         |                                     |
| Projekte & Maßnahmen      | Maßnahmen        | x                                   |
| Produkte                  |                  | x                                   |
| Risiken & Chancen         |                  | x                                   |
| Schulungen                |                  | x                                   |
| WIKI                      |                  |                                     |

## Einschränkungen & Limits der Custom Fields

| Typ                   | Beschreibung |
| --------------------- | ------------ |
| Anzahl Felder pro App | 32           |
