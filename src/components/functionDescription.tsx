import { SharedFunction } from "../models/sharedFunction";

interface SharedFunctionItem {
  id: SharedFunction;
  title: string;
  description: string;
}

export const dataSharedFunction: SharedFunctionItem[] = [
  {
    id: SharedFunction.AuditTrail,
    title: SharedFunction.AuditTrail.toString(),
    description: "Das ist die Beschreibung",
  },
  {
    id: SharedFunction.Comments,
    title: SharedFunction.Comments.toString(),
    description: "",
  },
  {
    id: SharedFunction.Costs,
    title: SharedFunction.Costs.toString(),
    description: "",
  },
  {
    id: SharedFunction.CustomFields,
    title: SharedFunction.CustomFields.toString(),
    description: "",
  },
  {
    id: SharedFunction.Files,
    title: SharedFunction.Files.toString(),
    description: "",
  },
  {
    id: SharedFunction.Workflows,
    title: SharedFunction.Workflows.toString(),
    description: "",
  },
];
