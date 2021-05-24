---
id: talent-manager
title: Schulungen & Qualifikationen (Talent Manager)
---

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Trainings.png)

> Die App Talent Manager wird der zukünftige zentrale Anlaufpunkt für alle Themen, die Anforderungen, Qualifikationen und Mitarbeiter betreffen. Auch wenn sich der Talent Manager noch im Aufbau befindet, so sind die einzelnen Funktionen in den bisher einzelnen Apps **Schulungen** und **Aufgaben und Qualifikationen** schon verfügbar.

Mit der App Talent Manager erreichen Sie folgende Ziele

- Erstellen Sie Anforderungsprofile and Positionen und Aufgaben in Ihrer Organisation
- Finden Sie für anstehende Aufgaben die Mitarbeiter, die am besten geeignet sind
- Verpassen Sie keine Fristen bleiben Sie auf einem aktuellen Stand bei wiederkehrenden Qualifikationen Ihrer Mitarbeiter
- Fassen Sie alle Informationen in einer Datenquelle zusammen

‍Mit uns und unserem Talent Manager bieten Sie den Menschen in Ihrer Organisation den Rahmen und die Freiheit, die sie brauchen, um mutig voranzugehen und neue Ideen einzubringen. Und so Ihr Unternehmen erfolgreich in die Zukunft zu führen.
Starten Sie mit unserem Talent Manager, um faktenbasierte Entscheidungen zu treffen.

> Lesen Sie unseren [Leitfaden](https://www.qmbase.com/leitfaden-mitarbeiterverwaltung/) für einen einfachen Start.

Unser Talent Manager besteht aus 3 Bausteinen

- Aufgaben
- Qualifikationen
- Schulungen

Der Talent Manager baut dabei auf der App **Mitarbeiter** auf.

## Aufgaben

Aufgaben sind die Tätigkeiten in Ihrer Organisation, die regelmäßig zu erledigen sind und bei denen es notwendig ist festzulegen, wer diese ausführen soll.
Legen Sie fest welche Aufgaben in Ihrer Organisation zu erledigen sind. Beispiele für typische Aufgaben sind:

1.  Angebote erstellen
2.  Rechnungen schreiben
3.  Personalplanung

> Tipp: Starten Sie mit den wichtigsten Aufgaben in Ihrem Unternehmen, die notwendig sind, um Ihre Kernprozesse zuverlässig auszuführen.

### Matrix

In der Aufgabenmatrix werden Personen den festgelegten Aufgaben gegenüber gestellt. Sie können hier auf einen Blick erkennen, wie qualifiziert die Personen für die jeweiligen Aufgaben sind.

| Darstellung                    | Bedeutung                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Blauer Hintergrund             | Aufgabe wird auf Grund verknüpfter Positionen oder direkt zugeordneter Aufgaben benötigt |
| Vollständig ausgefüllter Kreis | 100% qualifiziert für Aufgabe                                                            |
| Teilausgefüllter Kreis         | Anteilig qualifiziert für Aufgabe                                                        |

## Qualifikationen

Qualifikationen sind Fach- oder Sozialkompetenzen, die die Eignung einer Person für eine bestimmte Aufgabe beschreiben.
Legen Sie fest welche Qualifikationen in Ihrer Organisation benötigt werden, um die anfallenden Aufgaben zu erledigen. Beispiele für Qualifikationen sind:

- ERP Kenntnisse
- MS-Office Kenntnisse
- Führerschein
- Abgeschlossenes Studium

### Matrix

In der App Aufgaben & Qualifikationen können Sie sich auf einen Blick anschauen, welchen Qualifikationsbedaf es in Ihrem Unternehmen gibt. Hierzu werden die Mitarbeiter den Qualifikationen gegenüber gestellt.

Zur weiteren Veranschaulichung welche Informationen Sie erhalten können, nehmen wir folgende Beispiel Daten an (diese sind auch in unseren Testystemen enthalten).

In unserem Unternehmen gibt es einen Mitarbeiter <code>Lukas Guss</code> dieser hat die Positionen <code>Vertriebsassistenz</code> und <code>Arbeitssicherheitsbeauftragter</code>.
Für die Positionen ergeben sich folgende Anforderungen (A = Aufgaben, Q = Qualifikationen):

- Vertriebsassistenz (P1)
  - Erstellen von Reportings (A1)
    - SAP Kenntnisse (Q1)
    - Deutsch in Wort und Schrift (Q2)
    - Powerpoint Kenntnisse (Q3)
    - Word Kenntnisse (Q4)
    - Excel Kenntnisse (Q5)
  - Erstellen von Angeboten (A2)
    - Deutsch in Wort und Schrift (Q2)
    - Powerpoint Kenntnisse (Q3)
    - Word Kenntnisse (Q4)
    - Excel Kenntnisse (Q5)
- Arbeitssicherheitsbauftragter (P2)
  - Ersthelfer (A3)
    - Ersthelfer (Q6)

Unser Beispiel Mitarbeiter <code>Lukas Guss</code> erfüllt die an ihn gestellten Anforderungen wie folgt:

- SAP Kenntnisse (Q1) 50%
- Deutsch in Wort und Schrit(Q2) 100%
- Powerpoint Kenntnisse (Q3) 100%
- Word Kenntnisse (Q4) 100%
- Excel Kenntnisse (Q5) 100%
- Ersthelfer (Q6) 100% aber ungültig

Daraus ergibt sich, dass sich die Eignung für die Aufgaben wie folgt berechnet:

**Eignung für die Aufgabe Ersthelfer**

<code>Eignung Ersthelfer (A3) = 100% Q6 \* 0 (weil abgelaufen) => 0% Eignung</code>

**Eignung für die Aufgabe Erstellen von Reportings**

<code>Eignung Erstellen von Reportings (A1) = (50% Q1 + 100% Q2 + 100% Q3 + 100% Q4 + 100% Q5) / 5 (Anzahl der Qualifikationen) = 90 %</code>

**Eignung für die Position Vertriebsassistenz**

<code>Eignung Position Vertriebsassistenz (P1) = (100% Eignung Aufgabe Erstellen von Angeboten + 90% Aufgabe Erstellen von Reportings) / 2 (Anzahl Aufgaben) = 95%</code>

TODO: Bild Q-Matrix mit Testdaten

Wie lässt sich mit diesem Wissen jetzt die Qualifikationsmatrix interpretieren? In der Qualifikationsmatrix gibt es verschiedene Darstellungen, die sich aus den vorhandenen Daten ergeben. Alle Möglichkeiten sind in der folgenden Tabelle aufgelistet.

| Darstellung                    | Bedeutung                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------- |
| Blauer Hintergrund             | Qualifikation wird auf Grund verknüpfter Positionen oder direkt zugeordneter Aufgaben benötigt |
| Vollständig ausgefüllter Kreis | Qualifikation zu 100% vorhanden                                                                |
| Teilausgefüllter Kreis         | Qualifikation anteilig vorhanden                                                               |
| Rotes Warndreieck              | Qualifikation benötigt aber nicht vorhanden                                                    |
| Roter Kreis                    | Qualifikation vorhanden aber abgelaufen                                                        |
| Gelber Kreis                   | Qualifikation vorhanden aber innerhalb der Vorwanzeit - läuft also bald ab                     |

### Dashboard

Innerhalb des Dashboards werden die Daten aus der Matrix aggregiert dargestellt. Ziel ist auf einen Blick erkennen zu können, ob innerhalb einzelner Abteilungen oder Positionen Ihrer Organisation Handlungsbedarf besteht.

Wie ergeben sich die Werte innerhalb der Tabelle?
TODO: Bild Q-Matrix Dashboard
Wenn wir uns beispielsweise die Daten gruppiert nach Abteilungen anschauen ist die Tabelle folgendermaßen zu verstehen. Basierend auf dem gewählten Filter werden die dargestellten Personen vorausgewählt. Dann wird geschaut, welche Abteilungen mit dieser Auswahl an Mitarbeitern verknüpft sind. In der zweiten Spalten unter Personen wird die Anzahl der Mitarbeiter dargestellt, die mit der Abteilung verknüpft sind.
In der Spalte Status ergeben sich dann drei Zahlen in grün, gelb und rot. Die Berechnung der Zahlen ist in der folgenden Tabelle dargestellt. Zunächst wird die Anzahl der gesamt benötigten Qualifikationen berechnet. Dies könnte z.B. 10 sein.
Zur Vereinfachung werden in dieser Tabelle anteillige Qualifikationserfüllungen auch mit 100% berücksichtigt.

Zu den benötigten Qualifikationen zählen:

- Qualifikationen, die durch direkt zugeordnete Aufgaben gefordert werden.
- Qualifikationen, die durch verknüpfte Positionen und damit verbundene Aufgaben gefordert werden.

| Mitarbeiter | Benötigte Qualifikationen | Vorhanden | Vorhanden mit Vorwarnzeit erreicht | Abgelaufen | Nicht vorhanden |
| ----------- | ------------------------- | --------- | ---------------------------------- | ---------- | --------------- |
| A           | 5                         | 5         |
| B           | 3                         | 1         | 1                                  | 1          |                 |
| C           | 2                         | 1         |                                    | 1          |                 |
| **Summe**   | 10                        | 7         | 1                                  | 2          |

Wenn alle Mitarbeiter einer Abteilung angehören, würden sich aus dem Beispiel folgende Zahlen ergeben.

| Farbe | Bedeutung                                                                 | Prozentwert basierend auf Beispiel |
| ----- | ------------------------------------------------------------------------- | ---------------------------------- |
| Rot   | Anteil der nicht vorhanden benötigten Qualifikationen.                    | 20%                                |
| Gelb  | Anteil der benötigten Qualifikationen, die innerhalb der Vorwarnzeit sind | 10%                                |
| Grün  | Anteil der benötigten Qualifikationen, die vorhanden sind                 | 70%                                |

Die Gruppierung nach einzelnen Positionen funktioniert analog.

## Schulungen

Die App Schulungen & Qualifikationen stellt das Schulungsmanagement und das Qualifikationsmanagement dar. Die umfangreiche Funktionalität unterstützt Sie bei der optimalen Befähigung Ihrer Mitarbeiter für deren Unternehmensfunktionen. Die App beinhaltet ein klassisches Schulungsmanagement, um für die Mitarbeiter Schulungen zu verwalten, zu planen und zu dokumentieren. Für eine Ermittlung des Schulungsbedarfs werden in der Qualifikationsmatrix (Skill Matrix) die Mitarbeiter und ihre vorhandenen Qualifikationen visualisiert. In der Funktionsmatrix werden die Mitarbeiter ihren Unternehmensfunktionen und den dafür notwendigen Qualifikationen gegenübergestellt.

### Erstellen von Schulungen

Wählen Sie aus der Navigationsleiste den Eintrag "Ressourcen" -> "Schulungsmanagement"

![](https://caqadmin.blob.core.windows.net/faqs/69-images/mceclip0.png)

Klicken Sie in dem Modul Schulungsmanagement auf "Neu".

![](https://caqadmin.blob.core.windows.net/faqs/69-images/mceclip1.png)

Füllen Sie das Formular aus, klicken Sie auf "Speichern" und schon haben Sie Ihre erste Schulung erstellt.

![](https://caqadmin.blob.core.windows.net/faqs/69-images/mceclip2.png)

Erläuterung der Formularfelder:

- **Kategorie**: Um welche Art von Schulung handelt es sich
- **Titel**: Kurzbeschreibung – Was ist das Thema
- **Geplant** – Wann soll die Schulung stattfinden
- Bei Bedarf Reiter „Erweitert“ auswählen, um weitere Informationen zu erfassen
- Weitere Informationen unter „Erweitert“

  - Verantwortlich – Wer führt die Schulung durch und ist für den Inhalt und die Durchführung verantwortlich
  - Beschreibung – Detailliertere Beschreibung der Schulung
  - Wirksamkeit durch Teilnehmer beurteilbar – Teilnehmer können durchgeführte Schulungen bewerten
  - Teilnehmer können sich selbst anmelden – Wenn Schulungen im Voraus geplant werden, kann es so eingestellt werden, dass sich die Teilnehmer selbst einladen können
  - Maximale Anzahl Teilnehmer – Ist die Anzahl der Teilnehmer begrenzt z.B. aus Platzgründen

### Bearbeiten von Schulungen

- Verknüpfen weiterer Informationen

#### Wie können Mitarbeiter sich selbst zu Schulungen anmelden

Um Mitarbeitern die Möglichkeit zu geben, sich selbst zu Schulungen anzumelden müssen die entsprechenden Schulungstermine zunächst ganz regulär über _Schulungsmanagement -> Neu_ erstellt werden. In dem Formular zur Erstellung der Schulungen findet sich die Checkbox _Teilnehmer können sich selbst anmelden._ Wird diese Checkbox markiert, dann können die Mitarbeiter die Schulungen unter _Schulungsmanagement -> Katalog_ finden und sich selbst zu der Schulung anmelden.

#### Wie kann ich die Anzahl der Schulungsteilnehmer begrenzen

Wenn Sie über _Schulungsmanagement -> Neu_ eine neue Schulung planen, dann finden Sie in dem Formular das Feld _Maximale Anzahl Teilnehmer,_ dort können Sie die Anzahl der Teilnehmer begrenzen. Wenn Sie das Feld leer lassen, dann ist die Anzahl der Schulungsteilnehmer unbegrenzt.

Die Anzahl der Schulungsteilnehmer zu begrenzen macht vorallem dann Sinn, wenn die Mitarbeiter die Möglichkeit haben sich selbst zu der Schulung anzumelden.

#### Wie können Qualifikationen auf Teilnehmer einer Schulung übertragen werden

Qualifikationen können auf Teilnehmer einer Schulung übertragen werden, wenn folgende Bedingungen erfüllt sind:

- Schulungs Status ist "Abgeschlossen"
- Schulung ist mir Qualifikationen verknüpft
- Schulung hat Teilnehmer, zu denen die Qualifikation noch nicht übertragen wurde
- Nutzer ist Verantwortlicher der Schulung oder ist mindestens in der Rolle Schulungsmanagement Admin

#### Formulare - Evaluation und Bewertung von Schlungen

Mit dem Verknüpfen von Formularen und Schulungen, können Sie unterschiedliche Ziele erreichen:

- Lernstandskontrollen
- Schulungsevaluation
- Wirksamkeitprüfungen
- Organisatorische Koordination

:::note Beispiel für die Verwendung von Formularen
Die geplante Schulung dauert den ganzen Tag und Sie möchten die Teilnehmer mittags verköstigen. Dabei möchten Sie Rücksicht auf Vegetarier nehmen.
Folgende Schritte sind notwendig, um Formulare und Schulungen miteinander zu verknüpfen.
:::

#### Wie kann ich externe Personen, die keine Mitarbeiter sind, zu Schulungen einladen

Externe Personen, die nicht als Mitarbeiter des Unternehmens markiert sind, können auch als Teilnehmer zu Schulungen hinzugefügt werden. Ob diese dann auch z.B. E-Mail Benachrichtigungen erhalten, hängt davon ab, ob die entsprechenden Personen über einen qmBase Account verfügen.

In dem Dialog zum Hinzufügen von Teilnehmern lässt sich die Auswahl der möglichen Teilnehmer filtern.

![](https://caqadmin.blob.core.windows.net/faqs/72-images/mceclip0.png)

##### Als Verantwortlicher und Organisator der Schulung

Schulung erstellen

Formular erstellen

###### Schulung mit Formular verknüpfen

Klicken Sie auf den Button "Formular hinzufügen" und wählen Sie das gewünschte Formular aus. Sobald Sie das Formular verknüpft haben, wird es jedem Teilnehmer zum Ausfüllen angezeigt.

![](https://caqadmin.blob.core.windows.net/faqs/123-images/c0203050-719a-47f3-856e-6d0f6852d1f0-mceclip1.png)

###### Einschränken der Möglichkeit zum Ausfüllen der verknüpften Formulare

Wenn Sie möchten, dass die Möglichkeit des Ausfüllens von Formularen an bestimmte Bedingungen geknüpft ist, können Sie das nach dem Verknüpfen des Formulars festlegen. In unserem Beispiel möchten wir erreichen, dass das Formular nur in der Planungsphase ausgefüllt werden kann, damit wir für das Mittagessen entsprechend frühzeitig einkaufen können. Daher legen wir fest, dass das Formular nur ausgefüllt werden kann, so lange der Status der Schulung als "Offen" festgelegt ist.

Sobald der Status der Schulung nicht mehr offen ist, wird der Button zum Ausfüllen des Formulars deaktiviert.

###### Antworten einsehen

Unter der Registerkarte Antworten haben Sie die Möglichkeit die ausgefüllten Formulare einzusehen.

##### Als Teilnehmer der Schulung

Schulungsteilnehmer können lediglich Formulare ausfüllen. D.h. als Teilnehmer sehen Sie direkt die verknüpften Formulare und können über einen Klick auf den Button "Formular ausfüllen" starten.

Ihre abgeschickten beantworteten Formulare können Sie unter der Registerkarte Antworten einsehen.

Sollte das Ausfüllen des Formulars an bestimmte Bedingungen genknüpft sein, z.B. den Status der Schulung, ist der Button deaktiviert und es erscheint eine kurze Information neben dem Button.

- Maßnahmen
- Qualifikationen
- Teilnehmer
