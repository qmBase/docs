---
id: defect-management
title: Fehlermanagement
---

![Screenshot Fehlermanagement Startseite](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/ErrorManagement/Defects.png)

Die App ermöglicht es Ihnen, Fehler systematisch zu erfassen und mit entsprechenden Reklamationen oder Produkten zu verknüpfen.
Dadurch erhalten Sie einen umfassenden Überblick über auftretende Probleme, können potenzielle Muster erkennen und entsprechende Maßnahmen ergreifen.

## Wie werden Fehler erstellt

Bevor Sie mit der Fehlerdokumentation beginnen können, ist es erforderlich, Fehlerkategorien zu erstellen, um die Fehler im späteren Verlauf gruppieren zu können.
Unter dem Punkt "Einstellungen" finden Sie die Option "Fehlerkategorien". Klicken Sie auf "Neu", um eine neue Kategorie anzulegen.
Mögliche Kategorien könnten beispielsweise Materialfehler, Verpackungsfehler oder Produktionsfehler sein.

Sobald Sie Ihre Fehlerkategorien definiert haben, können Sie mit der eigentlichen Fehlerdokumentation beginnen. Navigieren Sie dazu auf der Startseite der App und wählen Sie die Option "Neu" aus.
Fügen Sie beim Titel eine Kurzbeschreibung hinzu - Was ist das Thema? Wählen Sie anschließend eine der zuvor erstellten Kategorien aus und bestimmen Sie einen Verantwortlichen.
Optional können Sie eine Beschreibung hinterlegen, um den Fehler zu erläutern.

### Welche Einstellungen gibt es und wofür sind die gut?

Auch in der App Fehlermanagement gibt es unterschiedliche Einstellungen, die im folgenden erklärt werden.

#### Fehlerkategorien

Fehlerkategorien dienen der Gruppierung von Fehlern. Mit Hilfe diese Gruppierung ist es leichter Trends und Schwerpunkte zu erkennen.

#### Custom Fields

Sie haben die Möglichkeit mit Hilfe der Custom Fields weitere optionale oder Pflichtfelder hinzuzufügen, wie z.B. ein Datumsfeld oder eine Zahleneingabe.
Dadurch können Sie die Erfassung von spezifischen Informationen nach Ihren individuellen Anforderungen gestalten. Um benutzerdefinierte Felder für die App festzulegen, navigieren Sie zu Einstellungen > Custom Fields > Neu

#### Fehlerkette

Außerdem können Sie zu jedem Fehler die Fehlerursache hinzufügen. Durch die Informationen über Fehlerursache und daraus resultierende Fehler bildet sich eine Fehlerkette

> Resultierende Fehler > Dieser Fehler > Fehlerursache

Beispiel

> kaputtes Produkt > Riss in der Verpackung > Fehlerhafte Verpackungsmaschine

## Welche Besonderheiten gibt es?

Sie haben die Möglichkeit Fehler mit Maßnahmen, Produkten und Reklamationen zu verknüpfen.

<!-- Custom component -->

import CommonFunction from "@site/src/components/commonFunction.tsx";

import ConnectionMatrix from "@site/src/components/connectionMatrix.tsx";

<CommonFunction app={`DefectManagement`} />

<ConnectionMatrix inputApp={`DefectManagement`} />
