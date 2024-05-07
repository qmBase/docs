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
        linkingDescreption:
          "Verknüpfen Sie Audits mit Mitarbeitern, um direkt Teilnehmer für ein Audit festzulegen.",
      },
      {
        appName: PbdModuleString.CustomForms,
        linkingDescreption:
          "Die Verknüpfung mit den Formularen ermöglicht das Hinterlegen von Dokumenten wie beispielsweise Audit-Fragebögen.",
      },
      {
        appName: PbdModuleString.GoalManagement,
        linkingDescreption:
          "Ergänzen Sie Ziele, die mit diesem Audit erreicht werden sollen.",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption:
          "Definieren Sie auditbezogene Maßnahmen, um Verbesserungen zu erzielen.",
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
        linkingDescreption:
          "Verbinden Sie Reklamationen, die inhaltlich zusammenhängen oder voneinander abhängig sind.",
      },
      {
        appName: PbdModuleString.DefectManagement,
        linkingDescreption:
          "Identifizieren Sie durch Fehlergenerierung und -verknüpfung Ursachen für Reklamationen.",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption:
          "Verfassen Sie Maßnahmenpläne, um die Bearbeitung von Reklamationen zu dokumentieren und zukünftige Vorfälle zu vermeiden.",
      },
      {
        appName: PbdModuleString.Products,
        linkingDescreption:
          "Verknüpfen Sie Produkte, um die Fehleranfälligkeit einzelner Produkte besser nachvollziehen zu können.",
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
        linkingDescreption:
          "Verknüpfen Sie direkt betroffene Kontakte mit den jeweiligen Kunden- und Lieferantenreklamationen.",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption:
          "Definieren Sie Maßnahmen, die auf spezifische Anforderungen der Kunden abzielen.",
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
        linkingDescreption:
          "Hiermit können Sie Fehler mit entsprechenden Reklamationen verknüpfen, können Sie Muster erkennen und priorisieren, die für Kunden besonders problematisch sind.",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption:
          "Verknüpfen Sie Fehler mit Maßnahmen, um Handlungsschritte zu definieren und zu verfolgen, die zur Lösung des Problems ergriffen werden.",
      },
      {
        appName: PbdModuleString.Products,
        linkingDescreption:
          "Indem Sie Fehler mit spezifischen Produkten verknüpfen, können Sie Muster oder Trends identifizieren, die auf bestimmte Produktserien oder Produktionsprozesse hinweisen.",
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
        linkingDescreption:
          "Fügen Sie Mitarbeiter mit den entsprechenden Aufgaben und Qualifikationen hinzu.",
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
        linkingDescreption:
          "Verbinden Sie Ihr Ziel mit einem Audit für mehr Übersichtlichkeit und Transparenz.",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption:
          "Zur Zielerreichung können Maßnahmen verknüpft und deren Wirksamkeit dokumentiert werden.",
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
        linkingDescreption:
          "Verknüpfen Sie die erforderlichen Maßnahmen für die Instandhaltung.",
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
        linkingDescreption:
          "Diese Verknüpfung können Sie nutzen, um z.B. die Bearbeitung von Korrekturmaßnahmen aus Audits zu steuern.",
      },
      {
        appName: PbdModuleString.ClaimManagement,
        linkingDescreption:
          "Die Verknüpfung von Reklamationen mit entsprechenden Maßnahmen ermöglicht eine umfassende Dokumentation der Bearbeitungsschritte.",
      },
      {
        appName: PbdModuleString.Crm,
        linkingDescreption:
          "Setzen Sie erforderliche Maßnahmen in Bezug auf Kunden- und Lieferanten.",
      },
      {
        appName: PbdModuleString.Employees,
        linkingDescreption:
          "Hier können Sie Personen festlegen, die für die Umsetzung der Maßnahme verantwortlich sind.",
      },
      {
        appName: PbdModuleString.DefectManagement,
        linkingDescreption:
          "Geben Sie Fehler an, die durch entsprechende Maßnahmen vermieden werden können.",
      },
      {
        appName: PbdModuleString.GoalManagement,
        linkingDescreption:
          "Um eine detailliertere Planung und Dokumentation der Umsetzung zu ermöglichen, können Ziele und Maßnahmen verknüpft werden.",
      },
      {
        appName: PbdModuleString.IdeaManagement,
        linkingDescreption:
          "Formulieren Sie Maßnahmen, die notwendig sind um Ideen umzusetzen.",
      },
      {
        appName: PbdModuleString.MaintenanceManagement,
        linkingDescreption:
          "Verknüpfen Sie die erforderlichen Maßnahmen für die Instandhaltung.",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption:
          "Fügen Sie Maßnahmen hinzu, die mit der Maßnahme in Verbindung stehen.",
      },
      {
        appName: PbdModuleString.Products,
        linkingDescreption:
          "Fügen Sie Produkte hinzu, um Maßnahmen zu ergreifen, die zur Verbesserung der Produkte führen.",
      },
      {
        appName: PbdModuleString.OpportunityManagement,
        linkingDescreption:
          "Verknüpfen Sie geeignete Maßnahmen, um Risiken zu minimieren oder Chancen zu nutzen.",
      },
      {
        appName: PbdModuleString.TrainingManagement,
        linkingDescreption:
          "Setzen Sie Maßnahmen mit Schulungen in Verbindung, um den Anlass der durchgeführten Schulung darzustellen.",
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
        linkingDescreption:
          "Verknüpfen Sie Produkte mit Reklamationen, um die Fehleranfälligkeit einzelner Produkte besser nachvollziehen zu können.",
      },
      {
        appName: PbdModuleString.DefectManagement,
        linkingDescreption:
          "Eine Verknüpfung mit den Fehlern ermöglicht es, fehlerhafte Produkte zu identifizieren.",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption:
          "Verknüpfen Sie Maßnahmen, die zur Verbesserung der Produkte führen sollen.",
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
        linkingDescreption:
          "Verknüpfen Sie das Risiko oder die Chance mit den zugehörigen Maßnahmen um den Schaden zu verringern oder die Chance zu erhöhen.",
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
        linkingDescreption:
          "Verwalten, planen und dokumentieren Sie Schulungen für die Mitarbeiter.",
      },
      {
        appName: PbdModuleString.CustomForms,
        linkingDescreption:
          "Die Nutzung von Custom Fields ermöglicht eine präzise Kategorisierung von Schulungen.",
      },
      {
        appName: PbdModuleString.QualificationMatrix,
        linkingDescreption:
          "Für die Ermittlung des Schulungsbedarfs werden in der Qualifikationsmatrix die Mitarbeiter und ihre vorhandenen Qualifikationen visualisiert.",
      },
      {
        appName: PbdModuleString.ProjectAndTaskManagement,
        linkingDescreption:
          "Hiermit können Sie Schulungen einer bestimmten Maßnahme zuordnen.",
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
