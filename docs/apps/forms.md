---
id: forms
title: Formulare
---

![Forms page screenshot](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Forms.png)

Mit qmBase Formularen können Sie Umfragen, Quizze und Formulare erstellen, andere Personen dazu einladen, über einen beliebigen Webbrowser oder ein mobiles Gerät darauf zu antworten, die Ergebnisse in Echtzeit sehen, wenn sie übermittelt werden, integrierte Analysen verwenden, um Antworten auszuwerten, und die Ergebnisse für zusätzliche Analysen oder Benotungen exportieren.

Formulare dienen einer regelmäßigen und standardisierten Informationserfassung.
Ein einmal erstelltes Formular kann beliebig oft ausgefüllt werden Jedes Formular kann dabei als individuelle Gruppierung von [Custom Fields](/docs/faqs/80/) verstanden werden.

## Wer kann die Formulare verwenden

qmBase Formulare sind bei allen Kunden verfügbar, die diese App in ihrem Abonnement enthalten haben.

## Wie wird ein Formular erstellt?

1. Unter dem Punkt <code>Einstellungen</code> finden Sie eine tabellarische Darstellung aller verfügbaren Formulare. Klicken Sie auf <code>Neu</code>, um ein neues Formular zu erstellen.
   Geben Sie dem Formular einen Titel und hinterlegen Sie optional eine Beschreibung.

2. Über den Button <code>Neues Feld hinzufügen</code> können Sie beliebig viele Formularfelder erstellen. Die Formularfelder entsprechen in Ihren Eigenschaften und Datentypen denen von Custom Fields.
   [Hier erfahren Sie mehr über die unterschiedlichen Datentypen in Custom Fields.](/docs/faqs/80/)

:::info
Beachten Sie, dass es zur einer Beschädigung von Daten kommen kann, wenn Sie die Datentypen eines Formularfeldes zu einem späteren Zeitpunkt ändern.
Beispiel: Sie erstellen ein Textfeld. Nachdem Sie bereits zahlreiche Antworten zu diesem Formularfeld erfasst haben ändern Sie den Datentyp dieses Feldes zu einem Datumsfeld.
:::

3. Veröffentlichen Sie das Formular. Wenn Sie das Formular mit allen gewünschten Formularfelder erstellt haben, veröffentlichen Sie das Formular über den Button <code>Veröffentlichen</code>.
   Um ein Formular zu veröffentlichen, müssen Sie in der Rolle <code>Freigeber</code> oder <code>Administrator</code> sein.

## Wie wird ein Formular ausgefüllt?

Ist ein Formular veröffentlicht, kann es auch ausgefüllt werden. Wählen Sie dazu das gewünschte Formular in dem Menüpunkt <code>Formular ausfüllen</code> und füllen Sie die Formularfelder nacheinander aus.

## Wo sind die ausgefüllten Formulare?

Die Antworten zu Formularen finden Sie unter dem Menüpunkt <code>Ausgefüllte Formulare</code>.
Alternativ können Sie über den Menüpunkt <code>Formulare verwalten</code> das gewünschte Formular auswählen und unter dem Tab <code>Antworten</code> die Formularantworten anzeigen lassen.

### Wer kann ausgefüllte Formulare sehen?

Der Zugriff auf ausgefüllte Formulare hängt von verschiedenen Kriterien ab, die in der nachfolgenden Tabelle dargestellt sind.

| Einstellung                                             | Sichtbarkeit der Antworten                                                                         |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Keine Einstellungen getroffen                           | Antworten sind nur sichtbar für den Ersteller, Verantwortlicher des Formulars, Module Admin, Admin |
| Formulareinstellung: Antworten öffentlich sichtbar      | Antworten können durch alle Personen mit Zugriff auf die App eingesehen werden                     |
| Formulareinstellung: Individuelle Zugriffseinstellungen | Dieser Bereich befindet sich noch in Entwicklung                                                   |

:::info Die Quiz Funktion ist derzeit nur als Private Vorschaufunktion verfügbar und für Sie möglicherweise noch nicht erreichbar.
:::

## Quiz

Formulare können als Quiz erstellt werden. Ein Quiz kann als Prüfung genutzt werden, um ausgefüllte Formulare zu bewerten und dem Einreicher Feedback zu seiner Leistung zu geben.

### Starten eines neues Quiz

1. Starten Sie die App Formulare klicken Sie auf **Formulare verwalten** > **Neu**.
2. Wählen Sie den Formulartyp Quiz aus und geben Sie dem Formulare einen Namen sowie eine optionale Beschreibung.

### Hinzufügen von Fragen

1. Wählen Sie **+ Neues Feld hinzufügen** aus, um Ihrem Quiz eine neue Frage hinzuzufügen.
2. Wählen Sie die Art der Frage aus **Auswahl-, Text- oder Zahlfragen usw.**
3. Legen Sie im Feld **Punkte** die maximal erreichbare Anzahl an Punkten für diese Frage fest.
4. Fügen Sie bis zu 100 weitere Fragen hinzu.

### Bewertung eines Ausgefüllten Quiz

Um ein ausgefülltes Formular zu bewerten, müssen Sie zunächst den Bewertungsrahmen festlegen.
Dazu editieren Sie das Formular und geben an, wie viel Prozent der maximal erreichbaren Punkte notwendig sind und das Quiz zu bestehen.

:::note
Sind in dem Formular 10 Punkte erreichbar und 8 Punkte ausreichend, um das Quiz zu bestehen, geben Sie z.B. **80%** an.
:::

### Senden Sie das Quiz an andere Personen und Sammeln Sie antworten

Über den Tab **Ausstehende Antworten** können Sie das Quiz an andere Personen versenden und diese zur Bearbeitung einladen.
Alternativ können Sie das Quiz auch einfach so zur Verfügung stellen, so dass es durch alle Kollegen mit Zugriff auf die App **Formulare** ausgefüllt werden kann.

### Überprüfen und Bewerten der Formularergebnisse

Nachdem Sie erste Antworten erhalten haben, können Sie diese überprüfen und bewerten.

1. Wählen Sie **Formulare verwalten** und gehen Sie zu Ihrem Quiz.
2. Wechseln Sie zum Tab antworten und wählen Sie eine der vorhanden Antworten aus.
3. Klicken Sie auf den Button **Jetzt bewerten**. Wenn Sie Ihre Ergebnisse später korrigieren möchten, können Sie dies über das Kontextmenü (3 Punkte) auf dieser Seite erledigen.
4. Überprüfen Sie alle Fragen und vergeben Sie Punkte pro Antwort.
5. Wählen Sie **Ergebnis veröffentlichen**, um den Einreicher über die sein Ergebnis zu informieren. Andernfalls ist das Ergebnis noch nicht sichtbar.
