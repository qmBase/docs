---
id: workflows
slug: /faqs/workflows
title: Workflows
keywords:
  - Workflows
---

:::info
Diese Funtion befindet sich noch in der Vorschau und ist nicht vollständig umgesetzt.
:::

Workflows ermöglichen es verschiedene Prozesse innerhalb von qmBase zu automatisieren und genauer zu steuern. Für jede App können Sie individuelle Workflows festlegen.

Beispiele für Workflows:

- bsp1
- bsp2

## Wie wird ein Workflow ausgewertet?

Wenn innerhalb von qmBase eine Aktion ausgelöst wird (z.B. das Ändern des Status), wird folgende Logik durchlaufen:

1. Es werden alle Workflows geladen, die für die Kombination aus App und Aktion vorhanden sind.
2. Für jeden Workflow werden **alle** Bedingungen ausgewertet.
3. Wenn alle Bedingungen erfüllt werden, werden die Aktionen des Workflows ausgeführt.

D.h. also im Umkehrschluss, dass sobald eine Bedingung nicht zutrifft wird der ganze Workflow nicht ausgeführt. Sind für eine Aktion mehrer Workflows vorhanden kann es also sein, dass einzelne Workflows ausgeführt werden. Es müssen jedoch nicht notwendigerweise alle Workflows ausgeführt werden.

## Bestandteile eines Workflows

Ein Workflow besteht aus folgenden Eigenschaften.

| Eigenschaft  | Beschreibung                                                                      |
| ------------ | --------------------------------------------------------------------------------- |
| Titel        | Titel des Workflows                                                               |
| Beschreibung | Beschreibung des Workflows, welchen Zweck soll der Workflow erfüllen.             |
| Bedingungen   | Liste von Bedingungen, damit der Workflow ausgelöst wird.                         |
| Aktionen     | List von Aktionen, die ausgelöst werden sollen, wenn der Workflow aktiviert wird. |

## Geplante Änderungen

- Refactoring der Workflows
  - Trigger festlegen
  - Variablen, die genutzt werden können
  - Zusätzliche Aktionen E-Mail Notifications
