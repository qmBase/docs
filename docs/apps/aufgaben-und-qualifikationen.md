---
id: aufgaben-und-qualifikationen
title: Aufgaben & Qualifikationen
---

import JobDescriptionRelation from "../charts/\_job-description-relation.mdx";

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Trainings.png)

Mit der App Aufgaben und Qualifikationen erreichen Sie folgende Ziele

- Erstellen Sie Anforderungsprofile and Positionen und Aufgaben in Ihrer Organisation
- Finden Sie für anstehende Aufgaben die Mitarbeiter, die am besten geeignet sind
- Verpassen Sie keine Fristen bleiben Sie auf einem aktuellen Stand bei wiederkehrenden Qualifikationen Ihrer Mitarbeiter
- Fassen Sie alle Informationen in einer Datenquelle zusammen

> Lesen Sie unseren [Leitfaden](https://www.qmbase.com/leitfaden-mitarbeiterverwaltung/) für einen einfachen Start.

Unser Talent Manager besteht aus 3 Bausteinen

- Aufgaben
- Qualifikationen
- Stellenbeschreibungen

Die App **Aufgaben und Qualifikationen** baut dabei auf der App **Mitarbeiter** auf.

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

### Aufgaben-Matrix

In der Aufgabenmatrix werden Personen und Aufgaben einander gegenüber gestellt. Sie können hier auf einen Blick erkennen, wie qualifiziert die Personen für die jeweiligen Aufgaben sind.

| Darstellung                    | Bedeutung                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------- |
| Blauer Hintergrund             | Aufgabe ist Teil der Position des Mitarbeiters oder ist diesem direkt zugeordneter |
| Vollständig ausgefüllter Kreis | 100% qualifiziert für Aufgabe                                                      |
| Teilausgefüllter Kreis         | Anteilig qualifiziert für Aufgabe                                                  |

## Qualifikationen

Qualifikationen sind Fach- oder Sozialkompetenzen, die die Eignung einer Person für eine bestimmte Aufgabe beschreiben.
Legen Sie fest welche Qualifikationen in Ihrer Organisation benötigt werden, um die anfallenden Aufgaben zu erledigen. Beispiele für Qualifikationen sind:

- ERP Kenntnisse
- MS-Office Kenntnisse
- Führerschein
- Abgeschlossenes Studium

### Qualifikations-Matrix

In der Qualifikationsmatrix werden Personen und Qualifikationen einander gegenüber gestellt.

![Qualifikationsmatrix](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202021-12-11%20143743_QualificationMatrix.png)

| Darstellung                    | Bedeutung                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------- |
| Blauer Hintergrund             | Qualifikation wird auf Grund verknüpfter Positionen oder direkt zugeordneter Aufgaben benötigt |
| Vollständig ausgefüllter Kreis | Qualifikation zu 100% vorhanden                                                                |
| Teilausgefüllter Kreis         | Qualifikation anteilig vorhanden                                                               |
| Rotes Warndreieck              | Qualifikation benötigt aber nicht vorhanden                                                    |
| Roter Kreis                    | Qualifikation vorhanden aber abgelaufen                                                        |
| Gelber Kreis                   | Qualifikation vorhanden aber innerhalb der Vorwanzeit - läuft also bald ab                     |

## Beispiel für das Zusammenwirken von Positionen, Aufgaben und Qualifikationen

Der Mitarbeiter <code>Lukas Guss</code> hat die Positionen <code>Vertriebsassistenz</code> und <code>Arbeitssicherheitsbeauftragter</code>.
Zu den Positionen (P) gehören Aufgaben (A) für welche wiederum Qualifikationen (Q) notwendig sind. Inwieweit der Mitarbeiter tatsächlich über die jeweilige Qualifikation verfügt wird mit einem Wert zwischen 0% und 100% angegeben:

- Vertriebsassistenz (P1)
  - Erstellen von Reportings (A1)
    - SAP Kenntnisse (Q1) <code>Wert: 50%</code>
    - Deutsch in Wort und Schrift (Q2) <code>Wert: 100%</code>
    - Powerpoint Kenntnisse (Q3) <code>Wert: 100%</code>
    - Word Kenntnisse (Q4) <code>Wert: 100%</code>
    - Excel Kenntnisse (Q5) <code>Wert: 100%</code>
  - Erstellen von Angeboten (A2)
    - Deutsch in Wort und Schrift (Q2) <code>Wert: 100%</code>
    - Powerpoint Kenntnisse (Q3) <code>Wert: 100%</code>
    - Word Kenntnisse (Q4) <code>Wert: 100%</code>
    - Excel Kenntnisse (Q5) <code>Wert: 100%</code>
- Arbeitssicherheitsbeauftragter (P2)
  - Ersthelfer (A3)
    - Ersthelfer (Q6) <code>Wert: 0%</code>

Es ist möglich, dass dieselbe Qualifikationen für mehrere Aufgaben notwendig ist und daher mehrfach im Anforderungsprofil auftaucht.

Daraus ergibt sich, dass sich die Eignung für die Aufgaben wie folgt berechnet:

#### Eignung für die Aufgabe Erstellen von Reportings (A1)

Der Mitarbeiter ist zu 90% für die Aufgabe Erstellen von Reportings qualifiziert. Dieser Wert berechnet sich wie folgt:

```
Eignung Erstellen von Reportings (A1) = (Q1 + Q2 + Q3 + Q4 + Q5) / (Anzahl Qualifikationen)
```

```
Eignung Erstellen von Reportings (A1) = (50% + 100% + 100% + 100% + 100%) / 5 = 90 %
```

#### Eignung für die Aufgabe Erstellen von Angeboten (A2)

Der Mitarbeiter ist zu 100% für die Aufgabe Erstellen von Angeboten qualifiziert. Dieser Wert berechnet sich wie folgt:

```
Eignung Erstellen von Angeboten (A2) = ( Q2 + Q3 + Q4 + Q5) / (Anzahl Qualifikationen)
```

```
Eignung Erstellen von Angeboten (A2) = (100% + 100% + 100% + 100%) / 4 = 100 %
```

#### Eignung für die Aufgabe Ersthelfer (A3)

Der Mitarbeiter ist zu 0% für die Aufgabe Ersthelfer qualifiziert. Dieser Wert berechnet sich wie folgt:

```
Eignung Ersthelfer (A3) = Q1 / (Anzahl Qualifikationen)
```

```
Eignung Ersthelfer (A3) = 0% /1 = 0 %
```

#### Eignung für die Position Vertriebsassistenz (P1)

Der Mitarbeiter ist zu 95% für die Position Vertriebsassistent qualifiziert. Dieser Wert berechnet sich wie folgt:

```
Eignung Vertriebsassistenz (P1) = ( A1 + A2 ) / (Anzahl Aufgaben)
```

```
Eignung Vertriebsassistenz (P1) = ( 90 % + 100 % ) / 2 = 95 %
```

#### Eignung für die Position Arbeitssicherheitsbeauftragter (P2)

Der Mitarbeiter ist zu 0% für die Position Arbeitssicherheitsbeauftragter qualifiziert. Dieser Wert berechnet sich wie folgt:

```
Eignung Arbeitssicherheitsbeauftragter (P2) = ( A3 ) / (Anzahl Aufgaben)
```

```
Eignung Arbeitssicherheitsbeauftragter (P2) = ( 0 % ) / 1 = 0 %
```

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

```
max(Geimpft,Genesen,Antigen Schnelltest, PCR Test)
```

Mit dieser Formel wird die Eignung berechnet als das Maximum einer der genannten Qualifikationen in dem max() Ausdruck.
Wenn also die Qualifikationen mit folgenden Werten vorhanden wären

```
max(0.1,0.2,0.3,0.4) = 0.4 => 40%
```

(Dezimal Komma durch Punkt ersetzt zur Lesbarkeit)

Dass eine Qualifikation nur teilweise benötigt wird, könnte z.B. der Fall sein, wenn Sie die Aufgabe **Angebote erstellen** haben. Hierfür werden folgende Qualifikationen benötigt:

- Excel Kenntnisse - aber nur teilweise (zu 50%), da es lediglich um einfache Berechnungen geht.
- Verhandlungsgeschick - 100% der Qualifikation erforderlich, um das meiste herauszuholen.

Die Formel für diesen Fall lautet:

```
(min("Excel Kenntnisse"/0,5,1)+Verhandlungsgeschick)/2
```

Wenn Sie jetzt einen Mitarbeiter haben, der Excel Kenntnisse zu 25% besitzt und Verhandlungsgeschick zu 100% besitzt, berechnet sich die Eignung als:

```
((min(0,25/0,5,1)+1)/2) = 0,75 => 75% Eignung
```

Damit unser Formeleditor die richtig arbeiten kann, müssen Sie für die einzelnen Qualifikationen Variablen verwenden.
Die Variable setzt sich zusammen aus den Teilen <code>QualificationId\_</code> und dann der tatsächlichen ID der jeweiligen Qualifikation.
Für die Qualifikation mit der ID 25 ergibt sich dann z.B. als Variable der Name <code>QualificationId_25</code>.

### Erklärung der Darstellung der Qualifikationsmatrix

### Dashboard

Innerhalb des Dashboards werden die Daten aus der Matrix aggregiert dargestellt. Ziel ist auf einen Blick erkennen zu können, ob innerhalb einzelner Abteilungen oder Positionen Ihrer Organisation Handlungsbedarf besteht.

Wie ergeben sich die Werte innerhalb der Tabelle?
TODO: Bild Q-Matrix Dashboard
Wenn wir uns beispielsweise die Daten gruppiert nach Abteilungen anschauen ist die Tabelle folgendermaßen zu verstehen. Basierend auf dem gewählten Filter werden die dargestellten Personen vorausgewählt. Dann wird geschaut, welche Abteilungen mit dieser Auswahl an Mitarbeitern verknüpft sind. In der zweiten Spalten unter Personen wird die Anzahl der Mitarbeiter dargestellt, die mit der Abteilung verknüpft sind.
In der Spalte Status ergeben sich dann drei Zahlen in grün, gelb und rot. Die Berechnung der Zahlen ist in der folgenden Tabelle dargestellt. Zunächst wird die Anzahl der gesamt benötigten Qualifikationen berechnet. Dies könnte z.B. 10 sein.
Zur Vereinfachung werden in dieser Tabelle anteilige Qualifikationserfüllungen auch mit 100% berücksichtigt.

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

## Best Practices und typische Aufgaben

Im folgenden Abschnitt sind Best Practices und typische Aufgaben beschrieben, die durchgeführt werden können.

### Was kann ich als normaler Nutzer in dieser App machen?

Als normaler Nutzer, mit der **Standard-Berechtigung**, kann ihnen diese App in vielen Aspekten helfen und Antworten auf verschiedene Fragen liefern.
Der Einstiegspunkt für die Beantwortung dieser Fragen ist immer das eigene Profil in der App **Aufgaben & Qualifikationen**. Dieses erreichen Sie, indem Sie in der Seitenleiste auf den Eintrag **Mein Qualifikationsprofil** klicken.
![Link zu meinem Qualifikationsprofil](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202025-06-06%20myQualificationProfile.png)

Auf der nächsten Seite erscheint dann Ihr persönliches Qualifikationsprofil. Die Details zu diesem Profil werden in den folgenden Abschnitten beschrieben.
![Mein Qualifikationsprofil](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202025-06-06%20myQualificationProfile_Details.png)

#### Was ist meine Stellenbeschreibung?

In der linken Spalte (1) haben Sie Einblick in Ihr Stellenprofil.
Sie könnten sowohl ihr gesamtes Stellenprofil unter **Details anzeigen** einsehen, als auch nur die Beschreibung für jede einzelne Position, falls Sie über mehrere Positionen verfügen sollten.

#### Welche Aufgaben habe ich auf Basis meiner Stellenbeschreibung zu erfüllen?

Aus Ihren Positionen sowie der manuellen Zuordnung von Aufgaben ergeben sich die Tätigkeiten, die Sie innerhalb der Organisation ausführen sollen.
Diese können Sie unter dem Tab **Aufgaben** einsehen. Manuell zugeordnete Aufgaben sind dabei an dem grünen Handsymbol zu erkennen.

#### Über welche Qualifikationen soll ich verfügen, um meinen Aufgaben gerecht zu werden?

In der rechten Spalte (2) sehen Sie alle Qualifikationen, die für Ihre Aufgaben gefordert werden. Zusätzlich sehen Sie hier auch die Qualifikationen, über die Sie verfügen.
Die erforderlichen Qualifikationen sind mit dem Info Badge <span class="badge badge--info">Benötigt</span> versehen.

#### Welche Qualifikationen habe ich aktuell und wie lange sind diese gültig?

Qualifikationen, über die Sie verfügen, werden mit weiteren Details dargestellt. In der ersten markierten Zeile ist die Qualifikation **Akademischer Abschluss** dargestellt.
Diese Qualifikation ist zu 100% vorhanden (Spalte Eignung) jedoch bereits abgelaufen.
Qualifikationen können mit der Zeit ablaufen, wenn z.B. festgelegt ist, dass diese regelmäßig überwacht und oder erneut erworben werden sollen.
Da diese Qualifikation auf Grund ihrer Aufgaben nicht benötigt wird, besteht hier kein Handlungsbedarf.

In der zweiten markierten Zeile **Baggerführerschein** ist eine Qualifikation dargestellt, die ebenfalls zu 100% vorhanden und zusätzlich auch noch nicht abgelaufen ist.
Hier besteht also kein Handlungsbedarf.

Sollte Handlungsbedarf bei eine Qualifikation bestehen und Sie dokumentieren wollen, dass Sie über diese Qualifikation verfügen, dann klicken Sie bitte auf das Kebab-Menü (3) und wählen Sie dort den Eintrag **Neues Qualifikationsereignis hinzufügen** aus.

### Was kann ich als Vorgesetzter oder Administrator in dieser App machen?

Als Vorgesetzter oder Administrator besteht Ihr Ziel in der Regel nicht nur aus der Aktualisierung Ihres eigenen Qualifikationsprofils, sondern auch dem weiterer Kollegen und Mitarbeiter.
Hierzu bietet es sich an, als Einstiegspunkt z.B. die Qualifikationsmatrix auszuwählen. Hierzu klicken Sie in der linken Spalte auf **Qualifikationsmatrix**.

In der Qualifikationsmatrix sehen sie dann alle Personen, auf die Sie Zugriff haben.
Das kann entweder die ganze Organisation oder auch nur eine Teilmenge der Mitarbeiter sein. Sollten Sie nur eine Teilmenge der sichtbaren Mitarbeiter beurteilen wollen, können Sie die sichtbaren Mitarbeiter über die Filter nochmals weiter reduzieren.

:::info
Die erstellten Filter können Sie auch jederzeit als [Smart Views](/docs/faqs/smart-views) abspeichern, um somit immer schnell zu der Auswahl zu gelangen, die für Sie interessant ist.
:::

Zur Erklärung der Symbolik innerhalb der Qualifikationsmatrix schauen Sie bitte in den Abschnitt [Qualifikations-Matrix](#erklärung-der-darstellung-der-qualifikationsmatrix).
Um einen schnellen Überblick über die anstehenden Aufgaben zu erhalten, können Sie auch zum Reiter **Dashboard** wechseln.
![Dashboard Qualifikationsmatrix](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202025-06-12_QualyMatrixDashboard.png)
Hier sehen Sie dann den aktuellen Status der Qualifikationen für die ausgewählte Teilgruppe. Fokussieren Sie sich hier am besten auf die Kennzahl **Vorhandene erforderliche Qualifikationen**.
Um dann den Qualifikationsstatus zu verbessern, gibt es verschiedene Vorgehensweisen.

1. Sie gehen über das jeweilige Mitarbeiterprofil und fügen fehlende Qualifikationen [hinzu](#welche-qualifikationen-habe-ich-aktuell-und-wie-lange-sind-diese-gültig).
2. Sie gehen über eine Qualifikationen mit Handlungsbedarf und fügen dort Personen hinzu. Klicken Sie hierfür auf eine der Qualifikationen (2). Auf der Detailseite der Qualifikationen wählen Sie dann den Reiter **Personen** aus.
   Hier klicken Sie dann auf den Button **Person hinzufügen**, um mehrere Personen einer Qualifikation hinzuzufügen.
   ![Qualifikationsmatrix mit Handlungsbedarf](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202025-06-12_qualiMatrix_Actions.png)

## Zugriff - Wer kann was machen?

Da die App auf Daten aus anderen Apps zugreift und die Daten in diesem Bereich vergleichsweise sensibel sind, gestaltet sich die Zugriffsteuerung etwas anders als in anderen Bereichen unserer Software.

### Wie werden einem Mitarbeiter Aufgaben hinzugefügt?

Das Hinzufügen von Aufgaben ist an Berechtigungen geknüpft. Sofern nicht anders festgelegt, können Aufgaben durch den (App)Administrator Personen zugewiesen werden.
Als Basis sind jeder Person Aufgaben aufbauend auf den verknüpften Positionen zugeordnet.
Zusätzlich können mit dem Tab **Zugriff** weitere Bearbeiter freigegeben werden. Hier ist es wichtig Rolle **Editieren** auszuwählen.

### Wie werden einem Mitarbeiter Qualifikationen hinzugefügt?

Das Hinzufügen von Qualifikationen ist an Berechtigungen geknüpft. Sofern nicht anders festgelegt, können Qualifikationen durch den (App)Administrator Personen zugewiesen werden.
Zusätzlich können Sie die **Selbstzuweisung** aktivieren. Damit ist es dann möglich, dass sich jeder Nutzer selbst Qualifikationen zuweisen kann.
Als weitere Einschränkung können Sie auch weitere Bedingungen festlegen, die vor der Zuweisung erfüllt sein müssen. Hier kann z.B. das Ausfüllen eines Formulars erforderlich sein.
Zusätzlich können mit dem Tab **Zugriff** weitere Bearbeiter freigegeben werden. Hier ist es wichtig Rolle **Editieren** auszuwählen.

## Einschränkungen und Limits der App Aufgaben und Qualifikationen

### Schulungen

| Typ                    | Beschreibung             |
| ---------------------- | ------------------------ |
| Anzahl Teilnehmer      | Maximal 100 pro Schulung |
| Anzahl Qualifikationen | Maximal 100 pro Schulung |

### Schulungstypen

| Typ                    | Beschreibung                 |
| ---------------------- | ---------------------------- |
| Anzahl Qualifikationen | Maximal 100 pro Schulungstyp |

### Aufgaben und Qualifikationen

| Typ                                | Beschreibung |
| ---------------------------------- | ------------ |
| Anzahl Qualifikationen pro Aufgabe | Maximal 100  |
