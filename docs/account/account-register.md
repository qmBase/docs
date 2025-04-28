---
id: account-register
title: Registrieren
description: Informationen rund um die erste Registrierung und Freischaltung Ihres Accounts
---

import ProductExampleUrl from "./../\_productExampleUrl.mdx";
import RegisterFlow from "./\_registerFlowChart.mdx";

Accounts bei qmBase ermöglichen den Zugang zu einem gemeinsamen Arbeitsbereich bzw. Unternehmen, um die Zusammenarbeit mit anderen Nutzern von qmBase zu ermöglichen.
In dem nachfolgenden Diagramm ist der Ablauf der Registrierung neuer Nutzer dargestellt. Die Registrierung kann durch die Administratoren des Systems auch so konfiguriert werden, dass das einzelne Teilbereiche nicht verfügbar sind.
Hierzu zählen z.B. die Registrierung im Self Service oder das Anfragen von Accounts als Nutzer ohne E-Mail Adresse.

<RegisterFlow/>
## Erstellen Sie ein Konto

Um mit der Nutzung von qmBase zu starten, benötigen Sie einen Account. Diesen Account können Sie entweder selbst erstellen oder eine E-Mail Einladung eines Kollegen annehmen.
Zur Erstellung Ihres Accounts benötigen wir Ihre E-Mail Adresse und ein Passwort. Verwenden Sie Ihre geschäftliche E-Mail-Adresse, um sich bei qmBase zu Registrieren.

### Von der Startseite

Wenn Sie ein Konto für sich selbst erstellen möchten, besuchen Sie https://qmbase.com und wählen Sie Login.
![qmBase Homepage](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202025-04-28_publicHomePage.png)
Falls Ihr Unternehmen bereits über einen qmBase Arbeitsbereich verfügt, können Sie von hier direkt zu diesem wechseln.
Andernfalls klicken Sie bitte auf den Link **Noch kein Kunde? Jetzt testen**, um sich einen eigenen Arbeitsbereich zu erstellen.

### Aus Ihrem Arbeitsbereich

Alternativ können Sie auch direkt auf Ihren Arbeitsbereich zugreifen. Typischerweise besteht die Url aus Ihrer Unternehmensdomain und dem Anhang qmbase.com.
Wenn also z.B. Ihre Domain https://meinefirma.de ist, erreichen Sie Ihren Arbeitsbereich über <ProductExampleUrl />

### Aus einer Einladung

Aus einer E-Mail Einladung klicken Sie einfach auf den Link aus der Einladung.

### Auf Registrierseite wechseln

![Login Seite](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202025-04-28%20Login.png)
Wenn Sie nicht angemeldet sind landen Sie auf dem Seite zur Anmeldung. Am unteren Rand des Formulars zur Anmeldung gibt es einen Link mit dem Sie zur Registrierung kommen **Registrieren Sie sich als neuer Nutzer!**.
![Register Seite](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202025-04-28%20Register.png)
Auf dieser Seite werden Sie aufgefordert Ihre E-Mail Adresse und ein Passwort anzugeben. Nach der Registrierung müssen Sie auf die Bestätigungsmail warten.
Dies dauert typischerweise nicht länger als 1 Minute.
Sollten Sie über keine E-Mail Adresse verfügen können Sie auch über den markierten Link einen Account Anfragen. Ihr Administrator stellt Ihnen dann Zugangsdaten zur Verfügung, so dass Sie mit einem Nutzernamen und einer E-Mail Adresse qmBase nutzen können.
Geben Sie hierzu bitte auf der dargestellten Seite Ihre Kontaktdaten an, so dass Sie identifiziert werden können.
![Account anfragen](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202025-04-28%20accountRequest.png)
Bitte beachten Sie, dass diese Funktion ein optionales Feature ist und nicht immer zur Verfügung steht.

#### Account bestätigen

In der E-Mail befindet sich ein Link, mit dem Sie Ihren Account bestätigen. Somit wissen wir, dass Sie Zugriff auf die E-Mail Adresse haben und damit zu der E-Mail Adresse gehören.
Nachdem Sie ihre E-Mail Adresse bestätigt haben, können Sie sich das erste Mal [anmelden](/docs/account/account-login).

## FAQS für Probleme bei der Registrierung

Häufig gestellte Fragen im Zusammenhang mit der Registrierung beantworten wir hier.

### Fehlermeldung "Domain invalid"

Dies bedeutet, dass von Ihrem Administrator festgelegt wurde, dass Registrierungen nur mit E-Mail Adressen möglich sind, die bestimmten Mustern entsprechen.
Weitere Informationen finden Sie [hier](/docs/apps/admin#erlaubte-domains).

### Konto lässt sich nicht bestätigen

Sie erhalten die Bestätigungsmail aber das Konto lässt sich nicht bestätigen. Dies kann an folgenden Gründen liegen:

- Sie haben mehrere Bestätigungsmails angefordert und das Konto nicht mit der neuesten Mail bestätigen.
- Die Bestätigungsmail ist älter als 24h

### E-Mail mit Account Bestätigung kommt nicht an

Bitte gehen Sie wie folgt vor:

1. Überprüfen Sie Ihren Spam Order
2. Probieren Sie sich erneut zu registrieren. Wenn der vorherige Versuch bereits funktioniert hat, können Sie sich so eine erneute Bestätigungsmail zuschicken lassen.
3. Wenden Sie sich an uns und wir lösen das Problem.

### Email '[max@mustermann.com]' is already taken

Diese Fehlermeldung erhalten Sie, wenn bereits ein Account mit Ihrer E-Mail Adresse angelegt wurde. Sie können daher keinen neuen Account anlegen.

### Welche Passwort Anforderungen gibt es?

Für einen sicheren Zugang werden an das Passwort Mindestanforderungen gestellt. Diese sind derzeit wie folgt.

- Minimale Zeichenanzahl: 8 Zeichen
- Großbuchstaben (z.B. A)
- Kleinbuchstaben (z.B. a)
- Sonderzeichen (z.B. !)
- Zahl (z.B. 1)

### Kann jemand anderes mein Passwort einsehen?

Nein, Best Practice ist es Passwörter nicht im Klartext zu speichern. Daran halten wir uns. Das bedeutet, dass Ihr Passwort mit einem sicheren Verfahren verschlüsselt wird.
Diese Funktion ist irreversibel, so es nicht möglich ist, dass aus dem verschlüsselten Passwort wieder das lesbare Passwort erstellt werden kann.

### Keine Person verknüpft in der Nutzerübersicht im Administrationsbereich

Sollte im Administrationsbereich in der Nutzerübersicht der Hinweis **Keine Person verknüpft** auftauchen bedeutet dies, dass der Nutzer sich zwar registriert hat.
Er hat aber noch **nicht** den Anmeldeprozess bis zum Ende durchlaufen. Dies geschieht automatisch, sobald der Nutzer sich das nächste Mal anmeldet.
Als Administrator brauchen Sie hier nichts zu tun. Sollte der Nutzer die Registrierung nicht vervollständigen können Sie das Profil auch einfach löschen.
Sobald der Nutzer die Software doch nutzen möchte, müsste er in diesem Fall den Registrierungsprozess noch einmal komplett durchlaufen.
