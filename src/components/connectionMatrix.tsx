import React from "react";
import { Link } from "react-router-dom";
import { PbdModuleString } from "../models/pbdModuleString";

interface AppConnections {
  id: PbdModuleString;
  appName: string;
  appLink: string;
  connectedApps?: PbdModuleString[];
}

const data: AppConnections[] = [
  {
    id: PbdModuleString.AbsencePlanner,
    appLink: "/docs/apps/absence-planner",
    appName: "Abwesenheitsplaner",
  },
  {
    id: PbdModuleString.AuditManagement,
    appName: "Auditmanagement",
    appLink: "/docs/apps/audit-management",
    connectedApps: [
      PbdModuleString.Employees,
      PbdModuleString.CustomForms,
      PbdModuleString.GoalManagement,
      PbdModuleString.ProjectAndTaskManagement,
    ],
  },
  {
    id: PbdModuleString.Blog,
    appName: "Blog",
    appLink: "/docs/apps/blog",
  },
  {
    id: PbdModuleString.ClaimManagement,
    appName: "Reklamationsmanagement",
    appLink: "/docs/apps/claim-management",
    connectedApps: [
      PbdModuleString.ClaimManagement,
      PbdModuleString.DefectManagement,
      PbdModuleString.ProjectAndTaskManagement,
      PbdModuleString.Products,
    ],
  },
  {
    id: PbdModuleString.Crm,
    appName: "CRM",
    appLink: "/docs/apps/crm",
    connectedApps: [
      PbdModuleString.ClaimManagement,
      PbdModuleString.ProjectAndTaskManagement,
    ],
  },
  {
    id: PbdModuleString.DocumentManagement,
    appName: "Dokumentenmanagement",
    appLink: "/docs/apps/document-management",
  },
  {
    id: PbdModuleString.Employees,
    appLink: "/docs/apps/employees",
    appName: "Mitarbeiter",
  },
  {
    id: PbdModuleString.DefectManagement,
    appName: "Fehlermanagement",
    appLink: "/docs/apps/Fehlermanagement",
    connectedApps: [
      PbdModuleString.ClaimManagement,
      PbdModuleString.ProjectAndTaskManagement,
      PbdModuleString.Products,
    ],
  },
  {
    id: PbdModuleString.CustomForms,
    appName: "Formulare",
    appLink: "/docs/apps/forms",
  },
  {
    id: PbdModuleString.QualificationMatrix,
    appName: "Aufgaben & Qualifikationen",
    appLink: "/docs/apps/talent-manager",
    connectedApps: [PbdModuleString.Employees],
  },
  {
    id: PbdModuleString.GoalManagement,
    appName: "Zielmanagement",
    appLink: "/docs/apps/goal-management",
    connectedApps: [
      PbdModuleString.AuditManagement,
      PbdModuleString.ProjectAndTaskManagement,
    ],
  },
  {
    id: PbdModuleString.IdeaManagement,
    appName: "Ideenmanagement",
    appLink: "/docs/apps/idea-management",
  },
  {
    id: PbdModuleString.MaintenanceManagement,
    appName: "Instandhaltung",
    appLink: "/docs/apps/maintenance-management",
    connectedApps: [PbdModuleString.ProjectAndTaskManagement],
  },
  {
    id: PbdModuleString.ProjectAndTaskManagement,
    appName: "Projekte & Maßnahmen",
    appLink: "/docs/apps/projects-and-tasks",
    connectedApps: [
      PbdModuleString.AuditManagement,
      PbdModuleString.ClaimManagement,
      PbdModuleString.Crm,
      PbdModuleString.Employees,
      PbdModuleString.DefectManagement,
      PbdModuleString.GoalManagement,
      PbdModuleString.IdeaManagement,
      PbdModuleString.MaintenanceManagement,
      PbdModuleString.ProjectAndTaskManagement,
      PbdModuleString.Products,
      PbdModuleString.OpportunityManagement,
      PbdModuleString.TrainingManagement,
    ],
  },
  {
    id: PbdModuleString.Products,
    appName: "Produkte",
    appLink: "/docs/apps/products",
    connectedApps: [
      PbdModuleString.ClaimManagement,
      PbdModuleString.DefectManagement,
      PbdModuleString.ProjectAndTaskManagement,
    ],
  },
  {
    id: PbdModuleString.OpportunityManagement,
    appName: "Risiken & Chancen",
    appLink: "/docs/apps/opportunity-management",
    connectedApps: [PbdModuleString.ProjectAndTaskManagement],
  },
  {
    id: PbdModuleString.TrainingManagement,
    appName: "Schulungsmanagement",
    appLink: "/docs/apps/training-management",
    connectedApps: [
      PbdModuleString.Employees,
      PbdModuleString.CustomForms,
      PbdModuleString.QualificationMatrix,
      PbdModuleString.ProjectAndTaskManagement,
    ],
  },
];

interface IProps {
  app: PbdModuleString;
}

export default function ConnectionMatrix({ app }: IProps) {
  const filteredData = data.find((x) => x.id === app);
  return (
    <table>
      <thead>
        <tr>
          <th>Mögliche Verknüpfungen</th>
        </tr>
      </thead>
      <tbody>
        {filteredData?.connectedApps?.map((itemId) => {
          const connectedApp = data.find((x) => x.id === itemId);
          return (
            <tr key={itemId}>
              <td>
                {connectedApp?.appLink && connectedApp?.appName && (
                  <Link to={connectedApp.appLink}>{connectedApp.appName}</Link>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
