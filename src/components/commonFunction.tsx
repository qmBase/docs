import React from "react";
import { PbdModuleString } from "../models/pbdModuleString";
import { Entity } from "../models/entity";
import { Link } from "react-router-dom";
import { SharedFunction } from "../models/scharedFunction";
import { dataSharedFunction, functionDataArray } from "./functionDescription";

interface App {
  appName: PbdModuleString;
  appEntity?: Entity;
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
      SharedFunction.CustomFields,
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
    appEntity: Entity.Organisation,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
    ],
  },
  {
    appName: PbdModuleString.Crm,
    appEntity: Entity.OrganisationRating,
    sharedFunctions: [SharedFunction.Files, SharedFunction.AuditTrail],
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
    ],
  },
  {
    appName: PbdModuleString.MaintenanceManagement,
    appEntity: Entity.InventoryItems,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.MaintenanceManagement,
    appEntity: Entity.InspectionsDone,
    sharedFunctions: [SharedFunction.Files],
  },
  {
    appName: PbdModuleString.ProjectAndTaskManagement,
    appEntity: Entity.Projects,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.ProjectAndTaskManagement,
    appEntity: Entity.Tasks,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
      SharedFunction.Costs,
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
  entity?: Entity;
  entityTitle?: string;
}

export default function CommonFunction({ app, entity, entityTitle }: IProps) {
  const filteredData = data.find(
    (x) => x.appName === app && x.appEntity === entity
  );
  return (
    <table>
      <thead>
        <tr>{entityTitle ? <th colSpan={2}>{entityTitle}</th> : null}</tr>
        <tr>
          <th>Gemeinsame Funktionen</th>
          <th>Beschreibung</th>
        </tr>
      </thead>
      <tbody>
        {filteredData?.sharedFunctions.map((item, index) => (
          <tr key={index}>
            <td>
              <Link to={"/docs/common-features"}>
                {dataSharedFunction.find((x) => x.id == item)?.title}
              </Link>
            </td>
            <td>{dataSharedFunction.find((x) => x.id == item)?.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
