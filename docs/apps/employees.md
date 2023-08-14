---
id: employees
title: Mitarbeiter
---

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Employees.png)

:::info Aktuelle Erweiterungen und Verbesserungen dieser App finden Sie [hier](/blog/tags/mitarbeiter)
:::

Unter dieser App finden Sie die Auflistung aller Mitarbeiter in Ihrem Unternehmen. Sie haben von hier die Möglichkeit den einzelnen Mitarbeitern Positionen zuzuordnen und können dadurch z.B. ein digitales Organigramm erstellen, dass immer aktuell ist.

## FAQs Mitarbeiter

Hier finden Sie Fragen und Antworten, die häufig im Zusammenhang mit der App Mitarbeiter auftauchen.

### Ein Mitarbeiter und Nutzer hat das Unternehmen verlassen – was ist zu tun?

Innerhalb von qmBase werden die Nutzer und Mitarbeiter getrennt voneinander erfasst. Wenn ein Mitarbeiter, der gleichzeitig Nutzer der Software ist, das Unternehmen verlassen hat, sind zwei Dinge zu tun:

1. Als Administrator löschen Sie den Account des Nutzers im [Admin](https://app.qmbase.com/Account/findworkspace?returnUrl=/admin/users) Bereich.
   Der Account ist dann vollständig gelöscht und der Nutzer kann sich nicht mehr anmelden.
   Da es diesen Nutzer dann nicht mehr gibt, werden auch keine E-Mail Benachrichtigungen mehr an diese Person verschickt.

2. Als Nutzer mit Zugriff auf die App [Mitarbeiter](https://app.qmbase.com/Account/findworkspace?returnUrl=/employees) entfernen Sie den Mitarbeiter aus der Mitarbeiterliste. Dazu gibt es zwei Möglichkeiten:

   - Mitarbeiter löschen: Der Mitarbeiter wird in den Papierkorb verschoben
   - Mitarbeiter aus Mitarbeitern entfernen: Die Person wird nicht mehr als Mitarbeiter gelistet, ist aber noch als Kontakt über das CRM erreichbar. Verknüpfte Positionen bleiben erhalten.

3. Abschließend muss überprüft werden, ob der ehemalige Mitarbeiter noch als Verantwortlicher für aktive Aufgaben festgelegt ist.

Alle mit dem Mitarbeiter verknüpften Informationen, wie z.B. Maßnahmen oder Ideen bleiben erhalten. Der Mitarbeiter kann dann aber zukünftig nicht mehr als Verantwortlicher ausgewählt werden.

### Wie ändere ich die Darstellung von Namen von Personen und Mitarbeiter - Vorname Nachname vs. Nachname, Vorname

In Ihrem Profil unter **Profileinstellungen > Einstellungen** kann eingestellt in welche Reihenfolge die Namen sortiert werden sollen.

### E-Mail Adresse bereits in Verwendung, was ist zu tun?

Wenn beim Erstellen oder ändern eines Mitarbeiterprofils die Fehlermeldung **Email <max@mustermann.de> is already in use.** auftritt, liegt das daran, dass jede Email Adresse nur einem Profil zugeordnet werden kann.
An folgenden Stellen kann bereits ein Mitarbeiter vorhanden sein:

- App Mitarbeiter
- App CRM -> Kontakte -> Nur Personen anzeigen.

Bitte überprüfen Sie jeweils auch den Papierkorb, da für den Abgleich auch gelöschte Personen mit einbezogen werden.

### Was muss ich tun, damit automatisch ein Organigramm erstellt wird

Um automatisch ein Organigramm erstellen zu lassen, müssen die hierarchischen Beziehungen zwischen den einzelnen Positionen definiert werden.
In den [Einstellungen zu den Positionen](https://app.qmbase.com/Account/findworkspace?returnUrl=/settings/departmentpositions)können Sie jeder Position die hierarchisch untergeordneten Positionen zuordnen.

Sie können auch externe Personen im Organigramm anzeigen. Hilfreich ist das z.B. bei einer externen Fachkraft für Arbeitssicherheit.
Hierzu ist ein kleiner Workaround notwendig. Sie müssen dazu zunächst die externe Position als Mitarbeiter festlegen.
Dann können Sie beliebige Positionen zuordnen. Anschließend können Sie die Person wieder aus den Mitarbeitern entfernen.

### Was muss ich tun, damit Nutzer meinen Geburtstag einsehen können?

Der Geburtstag kann nur eingesehen werden, wenn der Haken bei "Geburtstag veröffentlichen" gesetzt ist.
Ansonsten kann der Geburtstag nur eingesehen werden durch Personen, die die betreffende Person bearbeiten können. Hier ist das Geburtsdatum nur dann sichtbar, wenn der Bearbeitungsmodus aktiv ist.
