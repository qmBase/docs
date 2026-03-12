---
title: Webhooks
description: Automatisieren Sie individuell Arbeitsabläufe innerhalb von qmBase
---

Erstellen Sie eine Webhook-Automatisierung, um Informationen aus qmBase an andere Systeme zu senden.

## Was sind Webhooks?

Webhooks sind automatisierte Nachrichten, die von einer Anwendung an eine andere gesendet werden, wenn ein bestimmtes Ereignis eintritt. Sie werden oft verwendet, um Daten zwischen verschiedenen Anwendungen auszutauschen.
Mit Hilfe von Webhooks lassen sich also einfache Integrationen zwischen qmBase und anderen Systemen selbst erstellen.

## Webhook erstellen

Um einen Webhook zu erstellen, müssen Sie zunächst einen Auslöser und Bedingungen festlegen. Dies wird ausführlich in unserer [Dokumentation zu Workflow-Automatisierungen](../gettingStarted/workflow-automatisierung.mdx) beschrieben.

Als Aktion wählen Sie die Aktion "Webhook senden".

Der Webhook selbst besteht aus folgenden Bestandteilen:

- URL: Die URL, an die der Webhook gesendet werden soll.
- Methode: Die HTTP-Methode, die verwendet werden soll.
- Header: Header, die dem Webhook hinzugefügt werden sollen.
- Body: Der Body des Webhooks.

## Webhook testen

Nachdem Sie einen Webhook erstellt haben, können Sie diesen testen, indem Sie auf den Button "Webhook testen" klicken. Es öffnet sich ein Fenster, in dem Sie den Webhook testen können.
![Webhook testen](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/webhook_1.png)

Im oberen Bereich sehen Sie die URL, an die der Webhook gesendet wird. In der Mitte sehen Sie den Body des Webhooks. In der unteren Bereich sehen Sie die Header des Webhooks.
![Webhook testen](https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/webhook_2.png)

Wenn der Test fehlschlägt, wird Ihnen eine Fehlermeldung angezeigt. Wenn der Test erfolgreich ist, wird Ihnen eine Erfolgsmeldung angezeigt.

:::tip
Nutzen Sie einen Service wie https://smee.io/ um Webhooks einfach zu testen.
:::