import { Entity } from "../models/entity";
import { PbdModuleString } from "../models/pbdModuleString";
import { SharedFunction } from "../models/sharedFunction";

export interface AppConfig {
  appName: PbdModuleString;
  appEntity?: Entity;
  sharedFunctions: SharedFunction[];
}

export const commonFunctionsData: AppConfig[] = [
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
