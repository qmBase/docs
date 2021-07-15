---
id: document-management
title: Dokumentenmanagement
---

import {
FaHome,
FaCaretDown,
FaInfo,
FaPlus,
} from "react-icons/fa";

![t](https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/DocumentManagement.png)

Mit dem Dokumentenmanagement verwalten Sie ganz einfach und unkompliziert die Dokumente (im Folgenden: Artikel) Ihres Unternehmens. Alle Dokumente durchlaufen einen Prozess zur Freigabe und Versionierung, z.B. Verfahrensanweisungen und Prozessbeschreibungen. Die Mitarbeiter werden automatisch über neue Dokumentenversionen informiert und alte Versionen werden automatisch archiviert. So stellen Sie sicher, dass Ihre Mitarbeiter immer mit den aktuellsten Dokumentenversionen arbeiten. Gleichzeitig erfüllen Sie Anforderung gängiger Managementsysteme (z.B. ISO 9001) zur Dokumentenlenkung. Mithilfe von Schlagworten können alle Dokumente unabhängig von der Ordnerstruktur strukturiert werden.

## Grundlegende Funktionen zum Bearbeiten der Dokumente

Die grundlegenden Funktionen zum Bearbeiten der Dokumente sind in den Apps Blog, Dokumentenmanagement und Wiki identisch. Die Funktionen sind [hier](/docs/faqs/article-shared) zentral beschrieben.

## Wie wird ein Ordner erstellt?

Im Dokumentenmanagement können beliebige Ordnerstrukturen aufgebaut werden. In den Ordnern werden die Artikel des Dokumentenmanagements abgelegt.

Über den Button <code>Neu</code> kann entweder ein neuer Ordner oder ein neuer Artikel erstellt werden. Vergeben Sie den gewünschten Namen für den Ordner und speichern Sie. Der Ordner wird an der Stelle im Ordnerverzeichnis erstellt, an der Sie sich zum Zeitpunkt der Erstellung befinden.

## Was ist eine README-Datei?

**Einzelne Ordner im Dokumentenmanagement können mit einem README Dokument versehen werden, um den anderen Nutzern einen Überblick darüber zu geben, was sich in diesem Ordner befindet. Hier kann z.B. erklärt werden, wie Vorlagen verwendet werden sollen.**

Eine README hilft dabei, damit sich jeder sofort zu Recht findet und keine Fragen offen bleiben. Die README ist der Teil eines Ordners, der von Nutzern oft zuerst wahrgenommen wird. Typische Inhalte sind beispielsweise:

- Wofür ist der Ordner gut

- Was können Nutzer mit den Inhalten anfangen

- Wer pflegt und ergänzt neue Informationen

- Wie können Nutzer dazu beitragen den Inhalt zu verbessern

Sobald Sie ein Dokument mit dem Namen README innerhalb eines Ordners oder im Stammverzeichnis (<code><FaHome/></code>) platziert haben, wird das Dokument unterhalb der Ordneransicht dargestellt. qmBase erkennt diese Dateien automatisch und es ist keinerlei weitere Aktion erforderlich. Sollten sich mehrere README Dokument innerhalb eines Ordners befinden, so wird nur das erste dieser Dokumente verwendet. Sie können somit eine einfache Navigation innerhalb beliebiger Unterbereiche des Dokumentenmanagements ermöglichen.

![](https://caqadmin.blob.core.windows.net/faqs/83-images/mceclip0.png)

Sie können die README Funktion auch als Admin unter Admin -> Konfiguration -> Dokumentmanagement deaktivieren.

## Link Prüfung

Im Bereich Link Prüfung können Sie automatisch überprüfen, ob die Links innerhalb eines Dokuments noch auf gültige Dokumente verweisen. Links, die überprüft werden, müssen auf ein anderes Dokument im Dokumentenmanagement verweisen.
Als nicht gültige Dokumente gelten gelöschte oder zurückgezogene Dokumente.

![linkValidator](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202021-07-15%20105026_linkValidator.png)
