import { Link } from "react-router-dom";
import { Entity } from "../models/entity";
import { PbdModuleString } from "../models/pbdModuleString";
import { SharedFunction } from "../models/sharedFunction";
import { dataSharedFunction } from "./functionDescription";

interface App {
  appName: PbdModuleString;
  appEntity?: Entity;
  sharedFunctions: SharedFunction[];
}

const data: App[] = [
  {
    appName: PbdModuleString.AbsencePlanner,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.CustomFields,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.AuditManagement,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.CustomFields,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.Blog,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.ClaimManagement,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Costs,
      SharedFunction.CustomFields,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.Crm,
    appEntity: Entity.Organisation,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.CustomFields,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.Crm,
    appEntity: Entity.OrganisationRating,
    sharedFunctions: [SharedFunction.AuditTrail, SharedFunction.Files],
  },
  {
    appName: PbdModuleString.DocumentManagement,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.Employees,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.DefectManagement,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Costs,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.CustomForms,
    sharedFunctions: [SharedFunction.AuditTrail],
  },
  {
    appName: PbdModuleString.QualificationMatrix,
    sharedFunctions: [SharedFunction.Files],
  },
  {
    appName: PbdModuleString.GoalManagement,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Costs,
      SharedFunction.CustomFields,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.IdeaManagement,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.MaintenanceManagement,
    appEntity: Entity.InventoryItems,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Costs,
      SharedFunction.Files,
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
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.ProjectAndTaskManagement,
    appEntity: Entity.Tasks,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Costs,
      SharedFunction.CustomFields,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.Products,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.OpportunityManagement,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.CustomFields,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.TrainingManagement,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Costs,
      SharedFunction.CustomFields,
      SharedFunction.Files,
    ],
  },
  {
    appName: PbdModuleString.KnowledgeBase,
    sharedFunctions: [
      SharedFunction.AuditTrail,
      SharedFunction.Comments,
      SharedFunction.Files,
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
        {entityTitle && (
          <tr>
            <th colSpan={2}>{entityTitle}</th>
          </tr>
        )}
        <tr>
          <th>Gemeinsame Funktionen</th>
          <th>Beschreibung</th>
        </tr>
      </thead>
      <tbody>
        {filteredData?.sharedFunctions.map((item) => (
          <tr key={item}>
            <td>
              <Link to={"/docs/general/common-features"}>
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
