---
id: account-login
title: Login / Anmeldung
description: Informationen rund um Login und Anmeldung
---

import ProductExampleUrl from "./../\_productExampleUrl.mdx";
import SupportEmailLink from "./../\_supportEmailLink.mdx";

Nach der Registrierung und Bestätigung des Kontos ist die Anmeldung am qmBase-Konto möglich.
Öffnen Sie dazu die qmBase-Instanz im Browser, zum Beispiel:

<ProductExampleUrl />

und geben Sie die Anmeldedaten ein.

![login](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Account/Login.png)

## Erste Anmeldung - Verknüpfung von Account und Personen

Bei der ersten Anmeldung erfolgt die Identifizierung. Bisher sind nur der Nutzername (E-Mail-Adresse) und das Passwort hinterlegt.
Zur besseren Erkennbarkeit für andere Nutzer wird ein persönliches Profil erstellt. Dies umfasst mindestens den Namen.
Dazu werden Vor- und Nachname abgefragt.
Falls in qmBase bereits eine Person mit dieser E-Mail-Adresse existiert, erfolgt eine automatische Zuordnung. Eine erneute Eingabe des Namens ist in diesem Fall nicht erforderlich.

Der Abgleich erfolgt ausschließlich über die E-Mail-Adresse, da diese systemweit eindeutig ist.

### Beispiel

Folgende Personen sind bereits in qmBase gespeichert.

| ID  | Vorname | Nachname   | E-Mail                                      |
| --- | ------- | ---------- | ------------------------------------------- |
| 1   | Max     | Mustermann | max.mustermann@qmbase.com                   |
| 2   | Maxima  | Musterfrau | <code>keine E-Mail-Adresse vorhanden</code> |

#### Beispiel mit vorhandener Person

Beispiel: Max Mustermann nutzt die E-Mail-Adresse max.mustermann@qmbase.com.
Nach der Registrierung wird das Konto bei der ersten Anmeldung direkt mit der Person (ID: 1) verknüpft.
![Verknüpfung mit bestehendem Profil](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/2023-12-20_ConnectAccount.png)

#### Beispiel ohne vorhandene Person

Beispiel: Maxima Musterfrau nutzt die E-Mail-Adresse maxima.musterfrau@qmbase.com. In diesem Fall erfolgt **keine** automatische Verknüpfung.
Obwohl eine Verknüpfung mit der Person (ID: 2) möglich scheint, kann systemseitig kein automatischer Zusammenhang
hergestellt werden, da der Abgleich ausschließlich über die E-Mail-Adresse erfolgt.
![Neues Profil erstellen](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/2023-12-20_createAccount.png)

### Lösungen für Probleme bei der Anmeldung

Nachfolgend finden Sie Antworten auf häufig gestellte Fragen zum Login.

#### Ich habe mein Passwort vergessen

Bei vergessenem Passwort kann dieses zurückgesetzt werden.
Nutzen Sie den Link „Passwort zurücksetzen“ und folgen Sie den Anweisungen in der E-Mail.

![forgotPassword](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Account/ForgotPassword.png)

:::info
Das Zurücksetzen von Passwörtern ist nur für lokale und bestätigte Nutzerkonten möglich.
Bei einer Anmeldung über externe Provider (z. B. Microsoft Entra ID) muss das Passwort dort geändert werden.
:::

#### Kann die Verknüpfung von Account und Person nachträglich geändert werden?

Nein, dies ist aus Sicherheitsgründen nicht möglich. Bei Bedarf wenden Sie sich bitte an den Support.

#### Wie ändere ich die E-Mail-Adresse meines Accounts (E-Mail, mit der ich mich anmelde)?

Die Änderung der E-Mail-Adresse erfolgt im Profil unter **Profil > Account-Sicherheit**.
Dort kann der Nutzername angepasst werden, um die Anmeldung mit einer neuen E-Mail-Adresse zu ermöglichen.

## Zwei-Faktor-Authentifizierung

:::info Geschlossene Beta Version

Dieses Feature wurde neu entwickelt und befindet sich noch in einer Beta Testphase. Falls Sie Interesse daran haben, diese Funktion zu testen wenden Sie sich bitte an <SupportEmailLink/>.
Die 2FA ist derzeit nicht kompatibel mit dem Login über einen externen Login Provider, wie z.B. das Active Directory.

:::

Die Zwei-Faktor-Authentifizierung (2FA) bietet eine zusätzliche Sicherheitsebene für das Benutzerkonto.
[Microsoft](https://www.microsoft.com/security/blog/2019/08/20/one-simple-action-you-can-take-to-prevent-99-9-percent-of-account-attacks/)
und andere Quellen berichten, dass Benutzer, die die Multi-Faktor-Authentifizierung (MFA) aktivieren,
99,9 % der automatisierten Angriffe verhindern können.

### Wie funktioniert das Verfahren?

Zusätzlich zur Anmeldung mit Benutzername und Passwort wird ein zeitbasiertes Einmalpasswort (TOTP) als weitere Sicherheitsebene genutzt.
Nach der Installation einer Authentifizierungs-App auf dem Mobiltelefon wird ein 6- bis 8-stelliger Code generiert.
Dieser muss nach der Eingabe von Benutzername und Passwort zusätzlich angegeben werden.

### Wie kann die 2FA aktiviert werden?

Navigieren Sie zu **Profil > Account-Sicherheit** und wählen Sie „Authentifikator-App hinzufügen“.
Folgen Sie den Anweisungen zur Installation der App auf Ihrem Mobiltelefon.
Scannen Sie den angezeigten QR-Code mit der App und geben Sie den generierten Code ein, um die Aktivierung zu bestätigen.

### Was tun bei Problemen?

Falls der Zugriff auf die Authentifizierungs-App nicht mehr möglich ist, bestehen zwei Optionen:

1. Nutzung der Wiederherstellungscodes (Recovery Codes), die im Profil einsehbar sind.
2. Deaktivierung der 2FA durch einen Administrator unter **Admin > Nutzer > Nutzerprofil > Aktionen**.
