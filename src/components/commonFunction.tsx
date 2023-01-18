import React from "react";
import { PbdModuleString } from "../models/pbdModuleString";
import { Entity } from "../models/entity";

enum SharedFunction {
  Comments = "Comments",
  Files = "Files",
  AuditTrail = "AuditTrail",
  CustomFields = "CustomFields",
  Workflows = "Workflows",
  Costs = "Costs",
}

interface App {
  appName: PbdModuleString;

  sharedFunctions: SharedFunction[];
}

const data: App[] = [
  {
    appName: PbdModuleString.AbsencePlanner,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
    ],
  },
  {
    appName: PbdModuleString.AuditManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.Blog,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.ClaimManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.Crm,
    sharedFunctions: [SharedFunction.Comments, SharedFunction.Files],
  },
  {
    appName: PbdModuleString.DocumentManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.Employees,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.DefectManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.CustomForms,
    sharedFunctions: [SharedFunction.AuditTrail],
  },
  {
    appName: PbdModuleString.GoalManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.IdeaManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.MaintenanceManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.ProjectAndTaskManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
    ],
  },
  {
    appName: PbdModuleString.Products,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.OpportunityManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
    ],
  },
  {
    appName: PbdModuleString.ToDoManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.TrainingManagement,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.KnowledgeBase,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
];

interface IProps {
  app: PbdModuleString;
}

export default function CommonFunction({ app }: IProps) {
  const filteredData = data.filter((x) => x.appName === app);

  return (
    <table>
      <thead>
        <tr>
          <th>Function</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((data, index) => (
          <tr key={index}>
            <td>{data.sharedFunctions}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
