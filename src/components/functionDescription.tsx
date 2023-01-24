import { SharedFunction } from "../models/scharedFunction";
import { FunctionDescriptionData } from "./functionDescriptionData";

interface SharedFunctionItem {
  id: SharedFunction;
  title: string;
  description: string;
}

export const dataSharedFunction: SharedFunctionItem[] = [
  {
    id: SharedFunction.AuditTrail,
    title: SharedFunction.AuditTrail.toString(),
    description: "Description Audit Trail",
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
];

interface Functions {
  functionName: SharedFunction;
  functionDescription: FunctionDescriptionData;
}

export const functionDataArray: Functions[] = [
  {
    functionName: SharedFunction.Comments,
    functionDescription: FunctionDescriptionData.Comments,
  },
  {
    functionName: SharedFunction.Files,
    functionDescription: FunctionDescriptionData.Files,
  },
  {
    functionName: SharedFunction.AuditTrail,
    functionDescription: FunctionDescriptionData.AuditTrail,
  },
  {
    functionName: SharedFunction.CustomFields,
    functionDescription: FunctionDescriptionData.CustomFields,
  },
  {
    functionName: SharedFunction.Workflows,
    functionDescription: FunctionDescriptionData.Workflows,
  },
  {
    functionName: SharedFunction.Costs,
    functionDescription: FunctionDescriptionData.Costs,
  },
];
