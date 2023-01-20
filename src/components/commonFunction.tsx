import React from "react";
import { PbdModuleString } from "../models/pbdModuleString";
import { Entity } from "../models/entity";
import { Link } from "react-router-dom";

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
  entity?: Entity;
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
    entity: Entity.Organisation,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.CustomFields,
    ],
  },
  {
    appName: PbdModuleString.Crm,
    entity: Entity.OrganisationRating,
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
    entity: Entity.InventoryItems,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
      SharedFunction.Costs,
    ],
  },
  {
    appName: PbdModuleString.MaintenanceManagement,
    entity: Entity.InspectionsDone,
    sharedFunctions: [SharedFunction.Files],
  },
  {
    appName: PbdModuleString.ProjectAndTaskManagement,
    entity: Entity.Projects,
    sharedFunctions: [
      SharedFunction.Comments,
      SharedFunction.Files,
      SharedFunction.AuditTrail,
    ],
  },
  {
    appName: PbdModuleString.ProjectAndTaskManagement,
    entity: Entity.Tasks,
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
}

export default function CommonFunction() {
  return <h1>From Func</h1>;
}

// export default function CommonFunction({ app }: IProps) {
//   const filteredData = data.filter((x) => x.appName === app);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Function</th>
//           <th>Description</th>
//         </tr>
//       </thead>
//       <tbody>
//         {filteredData.map((data, index) => (
//           <tr key={index}>
//             <td>
//               <Link to="./docs/common-features/">{data.sharedFunctions}</Link>
//             </td>
//             <td></td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
