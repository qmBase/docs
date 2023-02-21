---
id: audit-management
title: Auditmanagement
---

import {
FaPencilAlt,
FaPlus,
} from "react-icons/fa";

Mit Hilfe dieser App können Sie Ihr unternehmensweites Auditmanagement vollständig abbilden. Ihre Auditplanung wird stark vereinfacht und die Durchführung Ihrer internen und externen Audits unterstützt. Sämtliche Abweichungen können direkt mit Verbesserungs- oder Korrekturmaßnahmen verknüpft werden und alle Aktivitäten werden langfristig dokumentiert.

## Auditmanagement Startseite

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Audits.png)

Dies ist die Startseite des Auditmanagements mit den Buttons auf linken Seitenleiste navigieren Sie sich durch das Auditmanagement. Um Ihr erstes Audit zu erstellen klicken Sie einfach auf der linken Seite auf den Button <code><span><FaPlus/> Neu</span></code>.
Zusätzlich kommen Sie von hier zu folgenden Bereichen:

- **Audits**: Übersicht aller bestehenden Audits
- **Auditmatrix**: Darstellung der Auditplanung als Matrix
- **Einstellungen**: Hier können Sie die Einstellungen des Auditmanagements einsehen und ggf. ändern

### Wie erstelle ich ein Audit?

Mit dieser Funktion erstellen Sie Audits. Auf der linken Seitenleiste klicken Sie auf den Button <code>Neu</code> und werden auf die Maske zum Erstellen eines Audits weitergeleitet. Nachdem Sie dort die wichtigsten Informationen zu dem betreffenden Audit eingetragen haben speichern Sie das neue Audit ab.

| Parameter                     | Typ             | Beschreibung                                                                                                             |
| ----------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| <code>Kategorie</code>        | Text            | Audit einer Kategorie (z.B. Audit der Geschäftsführung) zuordnen. Die Kategorien werden in den Einstellungen festgelegt. |
| <code>Titel</code>            | Text            | Kurzer Titel mit dem sich die Maßnahmen wiederfinden lässt                                                               |
| <code>Beschreibung</code>     | Text (optional) | Mehr Informationen über das spezifische Audit                                                                            |
| <code>Geplant</code>          | Datum           | Wann das Audit erstellt wurde                                                                                            |
| <code>Verantwortlicher</code> | Name            | Wer ist für dieses Audit verantwortlich?                                                                                 |

Danach werden Sie auf die Detailansicht zu diesem Audit weitergeleitet und können weitere Parameter ändern oder hinzufügen. Fügen Sie zum Beispiel [Maßnahmen](projects-and-tasks.md), [Ziele](goal-management.md) oder [Customs fields](/docs/faqs/80) hinzu, um optimale Transparenz für Ihr Unternehmen und einen Überblick für Ihre Mitarbeiter zu schaffen.

| Parameter                         | Typ              | Beschreibung                                                                                                            |
| --------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <code>Zeit und Ort</code>         | Datum/Text       | Informationen über den Termin des Audits und den Ort der Durchführung                                                   |
| <code>Anhänge</code>              | Datei (optional) | Fügen Sie Dateien hinzu, die für dieses Audit notwendig sind                                                            |
| <code>Verantwortlicher</code>     | Name             | Wer ist für dieses Audit verantwortlich?                                                                                |
| <code>Custom Fields</code>        | Text             | Mit Custom Fields können Sie zusätzliche Informationen wie das Auditergebnis und dokumentierte Informationen hinzufügen |
| <code>Schlagworte</code>          | Text             | Schlagworte bieten Ihnen die Möglichkeit Audits einem oder mehreren Themenfeldern zuzuordnen oder zu priorisieren       |
| <code>Offen/In Bearbeitung</code> | Button           | Setzen Sie den Bearbeitungsstand des Audits nach Ihren Präferenzen                                                      |

### Verknüpfungsmöglichkeiten für Audits

| Objekt                  | Beschreibung und Zweck                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| <code>Maßnahmen</code>  | Fügen Sie Maßnahmen hinzu, die im Zusammenhang mit diesem Audit durchzuführen sind (Verbesserungen) |
| <code>Ziele</code>      | Fügen Sie Ziele hinzu, die durch dieses Audit erreicht werden sollen                                |
| <code>Teilnehmer</code> | Fügen Sie Teilnehmer zu einem Audit hinzu und halten Sie die Anwesenheit nach                       |
| <code>Formulare</code>  | Formulare lassen sich verknüpfen, um hier z.B. Audit Fragebögen oder ähnliches zu hinterlegen       |

### Auswirkungen und Aktionen im Hintergrund

Beim Erstellen eines Audits wird der Verantwortliche per E-Mail benachrichtigt. Wenn Sie selbst der Verantwortliche sind, bekommen Sie keine E-Mail.
Sobald Teilnehmer zu einem Audit hinzugefügt werden, werden diese per E-Mail benachrichtigt.

### Beispiel

Herr Müller möchte ein Audit erstellen. Nachdem er sich bei qmBase angemeldet hat, ruft er die App Auditmanagement auf. Er wählt in der Seitenleiste den Button <code>Neu</code> aus. Anschließend wählt er die Kategorie seines Audits **Vertrieb** aus und trägt alle wichtigen Eckdaten ein. Nachdem er auf **Speichern** geklickt hat, wird er zur Detailansicht weitergeleitet. Auf dieser Seite hat er die Möglichkeit weitere Daten einzutragen. Außerdem kann Herr Müller einzelne Felder editieren, falls er Daten fehlerhaft eingetragen hat. Herr Müller hat nun die Möglichkeiten Maßnahmen und Ziele mit dem Audit zu Verknüpfen und Dokumente an das Audit anzuhängen. Mit jedem Audit sehen Sie direkt welche Maßnahmen aus diesem Audit resultieren und wie deren Bearbeitungsstand ist. Für alle Maßnahmen wird eine eindeutige Verantwortlichkeit sowie eine Frist für die Fertigstellung definiert. Herr Müller kann nun Teilnehmer zu dem Audit einladen und fügt alle Personen hinzu, die bei diesem Audit zugegen sein sollen. Die Teilnehmer werden anschließend per E-Mail benachrichtigt.

### Wie funktioniert die Auditmatrix?

Zur Nutzung der Auditmatrix müssen zunächst in den Einstellungen Auditanforderungen erstellt werden. Die Auditanforderungen können anschließend Auditkategorien zugeordnet werden.
In der Auditmatrix lässt sich dann darstellen, ob in einem bestimmten Zeitintervall bestimmte Auditanforderungen erfüllt wurden.

#### Beispiel Auditmatrix

Als Auditanforderung wird **ISO 9001** festgelegt. Untergeordnete Anforderungen sind:

- 5.1 Führung und Verpflichtung
- 5.2 Politik
- 5.3 Rollen, Verantwortlichkeiten und Befugnisse in der Organisation

Auditkategorien sind in unserem Beispiel

- Oberste Leitung (Geschäftsführung und Strategie)
  - Verknüpfte Anforderung **5.2 Politik**
- Vertriebsprozess
  - Verknüpfte Anforderung **5.3 Rollen, Verantwortlichkeiten und Befugnisse in der Organisation**

Wenn wir uns jetzt die Auditmatrix anschauen und nach der Anforderungen ISO 9001 und eine z.B. dem letzten Jahr filtern erscheint folgende Darstellung.

![AuditMatrix](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/AuditMatrix%202021-10-07%20113100.png)

In dieser Darstellung können Sie sehen, dass die Anforderung ISO 9001 aus drei Unteranforderungen besteht. Zwei Audits sind geplant oder durchgeführt, die mit der Anforderung zusammenhängen. Das Audit Geschäftsführung wurde bereits durchgeführt.
Daher ist der Haken hier grün. Das Audit Vertriebsprozess wurde bisher noch nicht geplant. Daher sieht man hier einen roten Hinweis.
In der Matrix selbst ist ein grauer Haken hinterlegt. Das bedeutet, dass diese Anforderung theoretisch erfüllt wäre, wenn das Audit tatsächlich im Zeitraum durchgeführt wird.

### Wie erstelle ich einen Auditbericht

Einen Auditbericht können Sie mit Hilfe des Dokumentenmanagements erstellen.
Damit Sie Informationen, die Sie bereits im Audit erfasst haben wiederverwenden können, gibt es die **Auditbericht erstellen**. Je nach Konfiguration Ihres Audits erstellen Sie mit wenigen Klicks einen Bericht. Diesen können Sie dann basierend auf Ihren Auditerkenntnissen ausfüllen und an alle beteiligten Personen verteilen.
![Auditbericht Button](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/20220531-auditReport.gif)

Für die Erstellung des Berichts müssen Auditanforderungen das betreffende Audit festgelegt werden. Zusätzlich müssen Sie über das Dokumentenmanagement verfügen.

#### Aufbau des Berichts

Der Bericht besteht aus einem einleitenden Text und eine Link zum Audit.
Zusätzlich wird eine Tabelle mit den festgelegten Auditanforderungen erstellt.
Die Daten hierzu stammen aus dem zugehörigen Auditkategorien und den verknüpften Auditanforderungen.

### Wo finde ich Auswertungen meiner Audits?

Die Auswertungen der Audits, sowie anderer Apps, finden Sie in der App Dashboard & Reportings. Das FAQ zu der App Dashboard & Reportings finden Sie [hier](dashboard.mdx).

### Gemeinsame Funktionalitäten

- [Rollen & Berechtigungen](/docs/faqs/56)
