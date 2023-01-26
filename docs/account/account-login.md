---
id: account-login
title: Login / Anmeldung
description: Informationen rund um Login und Anmeldung
---

import ProductExampleUrl from "./../\_productExampleUrl.mdx";
import SupportEmailLink from "./../\_supportEmailLink.mdx";

Nachdem Sie sich registriert haben und Ihr Konto bestätigt haben, können Sie sich bei Ihrem qmBase Konto anmelden.
Öffnen Sie dazu einfach Ihre qmBase Version in Ihrem Browser z.B.

<ProductExampleUrl />

und geben Sie Ihre Anmeldedaten ein.

![login](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202021-05-24_login.png)

## Verknüpfung von Account und Personen

Nachdem Sie Ihren Account erstellt haben, können Sie sich bei qmBase anmelden.
Bei Ihrer ersten Anmeldung werden Sie gefragt, wer Sie sind. Bisher kennen wir nur Ihren Nutzernamen (E-Mail Adresse) und Ihr Passwort.
Damit Sie für die anderen Nutzer leichter zu erkennen sind, erstellen Sie jetzt Ihr persönlich Profil. Dies beinhaltet mindestens Ihren Namen.
Daher werden Sie zunächst nach Ihrem Vor- und Nachnamen gefragt.
Sollte bereits eine Person innerhalb von qmBase angelegt sein, die Ihre E-Mail Adresse hat, werden Sie dieser Person automatisch zugeordnet, so dass Sie Ihren Namen nicht angeben müssen.

Wir verwenden ausschließlich die E-Mail Adresse für einen Vergleich, weil eine E-Mail Adresse per Definition eindeutig sein muss und nicht mehrfach vorkommen kann.

### Beispiel

Folgende Personen sind bereits in qmBase gespeichert.

| ID  | Vorname | Nachname   | E-Mail                                      |
| --- | ------- | ---------- | ------------------------------------------- |
| 1   | Max     | Mustermann | max.mustermann@qmbase.com                   |
| 2   | Maxima  | Musterfrau | <code>keine E-Mail Adresse vorhanden</code> |

#### Beispiel mit vorhandener Person

Angenommen Sie sind Max Mustermann mit der E-Mail Adresse max.mustermann@qmbase.com.
Nach der Registrierung wird ihr Account bei der ersten Anmeldung direkt mit der Person (ID: 1) verknüpft.
![Verknüpfung mit bestehendem Profil](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/2022-11-16_ConnectAccount.png)

#### Beispiel ohne vorhandene Person

Angenommen Sie sind Maxima Musterfrau mit der E-Mail Adresse maxima.musterfrau@qmbase.com. Hier wird Ihr Account **nicht** automatisch mit einer Person verknüpft.
Auch wenn es hier möglicherweise naheliegend wäre, dass die Person mit der ID:2 zu verknüpfen wäre, können wir hier automatisch keinen Zusammenhang herstellen, da wir den Vergleich ausschließlich auf Basis der E-Mail Adresse vornehmen.
![Neues Profil erstellen](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/2022-11-16-createAccount.png)

### Lösungen für Probleme bei der Anmeldung

Häufig gestellte Fragen im Zusammenhang mit dem Login beantworten wir hier.

#### Ich habe mein Passwort vergessen

Wenn Sie Ihr Passwort vergessen haben, können Sie einfach ihr Passwort zurücksetzen.
Klicken Sie einfach auf den Link "Passwort zurücksetzen" und folgen Sie den Anweisungen in der E-Mail.

![forgotPassword](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202021-05-24_forgotPassword.png)

#### Kann die Verknüpfung von Account und Person nachträglich geändert werden?

Nein, das ist aus Sicherheitsgründen nicht möglich. Sollte es dennoch erforderlich sein, sprechen Sie uns in diesem Fall bitte an.

#### Wie ändere ich die E-Mail Adresse meines Accounts (E-Mail mit der ich mich anmelde)

Das ändern Ihrer E-Mail Adresse können Sie in Ihrem Profil vornehmen. Gehen Sie dazu auf Profil > Account Sicherheit.
Hier können Sie den Nutzernamen ändern und damit dann erreichen, dass Sie sich mit einer anderen E-Mail Adresse anmelden können.

## Zwei-Faktor-Authentifizierung

:::info Geschlossene Beta Version

Dieses Feature wurde neu entwickelt und befindet sich noch in einer Beta Testphase. Falls Sie Interesse daran haben, diese Funktion zu testen wenden Sie sich bitte an <SupportEmailLink/>.
Die 2FA ist derzeit nicht kompatibel mit dem Login über einen externen Login Provider, wie z.B. das Active Directory.

:::

Durch die Verwendung der Zwei-Faktor-Authentifizierung wird eine zusätzliche Sicherheitsebene für Ihr Konto bereitgestellt.
[Microsoft](https://www.microsoft.com/security/blog/2019/08/20/one-simple-action-you-can-take-to-prevent-99-9-percent-of-account-attacks/) und andere Quellen berichten, dass Benutzer, die die Multi-Faktor-Authentifizierung (MFA) für ihre Konten aktivieren, 99,9 % der automatisierten Angriffe verhindern können.

### Wie funktioniert es?

Neben der normalen Anmeldung mit Benutzernamen und Passwort wird eine neue Sicherheitsebene durch die Verwendung eines zeitbasierten Einmalpassworts (TOTP) hinzugefügt.
Eine Authentifizierungs-App wird auf Ihr Mobiltelefon heruntergeladen, generiert einen 6- bis 8-stelligen Code und der Benutzer muss diesen nach der Bestätigung seines Benutzernamens und Passworts zusätzlich eingeben.

### Wie kann es aktiviert werden?

Wechseln Sie zu **Profil > Account Sicherheit**. Klicken Sie einfach auf "Authentifikator-App hinzufügen".
Bitte folgen Sie den Anweisungen, wie Sie die Zwei-Faktor-Authentifikator-App auf Ihr Mobiltelefon herunterladen.
Nach dem Download müssen Sie den angegebenen QR-Code scannen und die von Ihrer Handy-App generierte Nummer eingeben, um den Aktivierungsvorgang zu bestätigen.

### Was mache ich bei Problemen

Sollten Sie sich nicht mehr anmelden können, weil z.B. auf Ihre Authentifizierungs-App auf dem Mobiltelefon keinen Zugriff mehr haben, haben Sie zwei Möglichkeiten.
Sie können entweder die Recovery Codes zur Anmeldung nutzen. Auf diese können aus Ihrem Profil zugreifen.
Alternativ können Sie Ihren Administrator bitten Ihre 2FA zu deaktivieren. Diese ist möglich unter **Admin > Nutzer > Nutzerprofil > Aktionen**.
