---
id: talent-manager
title: Schulungen & Qualifikationen (Talent Manager)
---

import JobDescriptionRelation from "../charts/\_job-description-relation.mdx";

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

## Beziehung der einzelnen Informationen

Zum besseren Verständnis der Beziehung der einzelnen Informationen, ist in dem folgenden Schaubild die Beziehung der einzelnen Information darstellt.

<JobDescriptionRelation/>

## Aufgaben

Aufgaben sind die Tätigkeiten in Ihrer Organisation, die regelmäßig zu erledigen sind und bei denen es notwendig ist festzulegen, wer diese ausführen soll.
Legen Sie fest welche Aufgaben in Ihrer Organisation zu erledigen sind. Beispiele für typische Aufgaben sind:

1. Angebote erstellen
2. Rechnungen schreiben
3. Personalplanung

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

#### Eignung für die Aufgabe Ersthelfer

<code>Eignung Ersthelfer (A3) = 100% Q6 \* 0 (weil abgelaufen) => 0% Eignung</code>

#### Eignung für die Aufgabe Erstellen von Reportings

<code>Eignung Erstellen von Reportings (A1) = (50% Q1 + 100% Q2 + 100% Q3 + 100% Q4 + 100% Q5) / 5 (Anzahl der Qualifikationen) = 90 %</code>

#### Eignung für die Position Vertriebsassistenz

<code>Eignung Position Vertriebsassistenz (P1) = (100% Eignung Aufgabe Erstellen von Angeboten + 90% Aufgabe Erstellen von Reportings) / 2 (Anzahl Aufgaben) = 95%</code>

#### Individuelle Berechnung der Eignung mit Hilfe von Formeln

:::info Das Berechnen von Eignung mittels Formeln ist derzeit noch nicht überall verfügbar.
:::

In einigen Fällen reicht unsere standardmäßige Berechnung der Eignung nicht aus. Für diesen Fall können individuelle Formeln festgelegt werden. Dies kann z.B. in folgenden Szenarien vorliegen:

- Nur eine Teilmenge von mehreren Qualifikationen ist erforderlich
- Eine Qualifikation wird nur teilweise benötigt

Eine Teilmenge von Qualifikationen kann z.B. erforderlich sein, wenn Sie als Aufgabe **3G am Arbeitsplatz** einführen. Hierfür wird eine der folgenden Qualifikationen benötigt.

- Geimpft
- Genesen
- Antigen Schnelltest
- PCR Test

Als Formel für diese Aufgabe muss dann folgendes festgelegt werden.

<code>max(Geimpft,Genesen,Antigen Schnelltest, PCR Test)</code>

Mit dieser Formel wird die Eignung berechnet als das Maximum einer der genannten Qualifikationen in dem max() Ausdruck.
Wenn also die Qualifikationen mit folgenden Werten vorhanden wären

<code>max(0.1,0.2,0.3,0.4) = 0.4 => 40%</code>

(Dezimal Komma durch Punkt ersetzt zur Lesbarkeit)

Dass eine Qualifikation nur teilweise benötigt wird, könnte z.B. der Fall sein, wenn Sie die Aufgabe **Angebote erstellen** haben. Hierfür werden folgende Qualifikationen benötigt:

- Excel Kenntnisse - aber nur teilweise (zu 50%), da es lediglich um einfache Berechnungen geht.
- Verhandlungsgeschick - 100% der Qualifikation erforderlich, um das meiste herauszuholen.

Die Formel für diesen Fall lautet:
<code>(min("Excel Kenntnisse"/0,5,1)+Verhandlungsgeschick)/2</code>

Wenn Sie jetzt einen Mitarbeiter haben, der Excel Kenntnisse zu 25% besitzt und Verhandlungsgeschick zu 100% besitzt, berechnet sich die Eignung als:

<code>(min(0,25/0,5,1)+1)/2) = 0,75 => 75% Eignung</code>

Damit unser Formeleditor die richtig arbeiten kann, müssen Sie für die einzelnen Qualifikationen Variablen verwenden.
Die Variable setzt sich zusammen aus den Teilen <code>QualificationId\_</code> und dann der tatsächlichen ID der jeweiligen Qualifikation.
Für die Qualifikation mit der ID 25 ergibt sich dann z.B. als Variable der Name <code>QualificationId_25</code>.

### Erklärung der Darstellung der Qualifikationsmatrix

![Qualifikationsmatrix](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202021-12-11%20143743_QualificationMatrix.png)

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
