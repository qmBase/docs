import { SharedFunction } from "../models/sharedFunction";

export interface SharedFunctionItem {
  id: SharedFunction;
  title: string;
  description: string;
}

export const sharedFunctionsData: SharedFunctionItem[] = [
  {
    id: SharedFunction.AuditTrail,
    title: SharedFunction.AuditTrail.toString(),
    description:
      "Durch den Audit Trail können vorgenommene Änderungen innerhalb von qmbase verfolgt werden.",
  },
  {
    id: SharedFunction.Comments,
    title: SharedFunction.Comments.toString(),
    description:
      "Kommentare erleichtern die Zusammenarbeit und ermöglichen Nutzer ohne Zugriffsrechte auf Einträge, Informationen hinzuzufügen und zu ergänzen.",
  },
  {
    id: SharedFunction.Costs,
    title: SharedFunction.Costs.toString(),
    description:
      "Hier werden die Kosten für jeden Eintrag erfasst und anhand verschiedener Kriterien aufgeteilt.",
  },
  {
    id: SharedFunction.CustomFields,
    title: SharedFunction.CustomFields.toString(),
    description:
      "Mit Custom Fields können Sie unseren Standard vollständig an individuelle Bedürfnisse angepassen.",
  },
  {
    id: SharedFunction.Files,
    title: SharedFunction.Files.toString(),
    description:
      "Nutzen Sie Anhänge, um ergänzende Informationen aus anderen Quellen hinzuzufügen.",
  },
  {
    id: SharedFunction.Workflows,
    title: SharedFunction.Workflows.toString(),
    description:
      "Individuell festgelegte Workflows bieten die Möglichkeit, Prozesse zu automatisieren und präzise zu steuern.",
  },
];
