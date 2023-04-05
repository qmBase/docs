import React from "react";
import { Link } from "react-router-dom";
import { PbdModuleString } from "../models/pbdModuleString";

interface App {
  appName: PbdModuleString;
  linkingDescreption: string;
}

interface AppConnections {
  id: PbdModuleString;
  app: string;
  appLink: string;
  connectedApps?: App[];
}

const dataConnections: AppConnections[] = [
  {
    id: PbdModuleString.AbsencePlanner,
    app: "Abwesenheitsplaner",
    appLink: "/docs/apps/absence-planner",
  },
  {
    id: PbdModuleString.AuditManagement,
    app: "Auditmanagement",
    appLink: "/docs/apps/audit-management",
    connectedApps: [
      {
        appName: PbdModuleString.Employees,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.CustomForms,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.GoalManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.Blog,
    app: "Blog",
    appLink: "/docs/apps/blog",
  },
  {
    id: PbdModuleString.ClaimManagement,
    app: "Reklamationsmanagement",
    appLink: "/docs/apps/claim-management",
    connectedApps: [
      {
        appName: PbdModuleString.ClaimManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.DefectManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.Products,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.Crm,
    app: "CRM",
    appLink: "/docs/apps/crm",
    connectedApps: [
      {
        appName: PbdModuleString.ClaimManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.DocumentManagement,
    app: "Dokumentenmanagement",
    appLink: "/docs/apps/document-management",
  },
  {
    id: PbdModuleString.Employees,
    appLink: "/docs/apps/employees",
    app: "Mitarbeiter",
  },
  {
    id: PbdModuleString.DefectManagement,
    app: "Fehlermanagement",
    appLink: "/docs/apps/Fehlermanagement",
    connectedApps: [
      {
        appName: PbdModuleString.ClaimManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.Products,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.CustomForms,
    app: "Formulare",
    appLink: "/docs/apps/forms",
  },
  {
    id: PbdModuleString.QualificationMatrix,
    app: "Aufgaben & Qualifikationen",
    appLink: "/docs/apps/talent-manager",
    connectedApps: [
      {
        appName: PbdModuleString.Employees,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.GoalManagement,
    app: "Zielmanagement",
    appLink: "/docs/apps/goal-management",
    connectedApps: [
      {
        appName: PbdModuleString.AuditManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.IdeaManagement,
    app: "Ideenmanagement",
    appLink: "/docs/apps/idea-management",
  },
  {
    id: PbdModuleString.MaintenanceManagement,
    app: "Instandhaltung",
    appLink: "/docs/apps/maintenance-management",
    connectedApps: [
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.ProjectAndTaskManagement,
    app: "Projekte & Maßnahmen",
    appLink: "/docs/apps/projects-and-tasks",
    connectedApps: [
      {
        appName: PbdModuleString.AuditManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.ClaimManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.Crm,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.Employees,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.DefectManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.GoalManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.IdeaManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.MaintenanceManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.Products,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.OpportunityManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.TrainingManagement,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.Products,
    app: "Produkte",
    appLink: "/docs/apps/products",
    connectedApps: [
      {
        appName: PbdModuleString.ClaimManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.DefectManagement,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.OpportunityManagement,
    app: "Risiken & Chancen",
    appLink: "/docs/apps/opportunity-management",
    connectedApps: [
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
    ],
  },
  {
    id: PbdModuleString.TrainingManagement,
    app: "Schulungsmanagement",
    appLink: "/docs/apps/training-management",
    connectedApps: [
      {
        appName: PbdModuleString.Employees,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.CustomForms,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.QualificationMatrix,
        linkingDescreption: "",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption: "",
      },
    ],
  },
];

interface IProps {
  inputApp: PbdModuleString;
}

export default function ConnectionMatrix({ inputApp }: IProps) {
  const filteredData = dataConnections.find((x) => x.id === inputApp);
  if (!filteredData) {
    return <p>No data found</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Mögliche Verknüpfungen</th>
          <th>Verknüpfungsbeschreibung</th>
        </tr>
      </thead>
      <tbody>
        {filteredData?.connectedApps?.map((item) => {
          const appData = dataConnections.find((x) => x.id === item.appName);
          return (
            <tr key={item.appName}>
              <td>
                <Link to={appData?.appLink ?? "undefined"}>{appData?.app}</Link>
              </td>
              <td>{item.linkingDescreption}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
