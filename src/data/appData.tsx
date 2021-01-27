import React from "react";
import { FaChalkboardTeacher, FaRegLightbulb, FaTasks } from "react-icons/fa";
import { AppInfo } from "../models/appInfo";
import { PbdModuleString } from "../models/pbdModuleString";

export const appData: AppInfo[] = [
  {
    // icon: <FaFolder size="5rem" />,
    title: "Abwesenheitsplaner",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.AbsencePlanner,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "Auditmanagement",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.AuditManagement,
  },

  {
    // icon: <FaFolder size="5rem" />,
    title: "Blog",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.Blog,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "CRM",
    description: "",
    url: "docs/crm",
    app: PbdModuleString.Crm,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "Dokumentenmanagement",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.DocumentManagement,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "Formulare",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.CustomForms,
  },
  {
    icon: <FaRegLightbulb size="5rem" />,
    title: "Ideenmanagement",
    description: "",
    url: "docs/idea-management",
    app: PbdModuleString.IdeaManagement,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "Instandhaltung",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.MaintenanceManagement,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "Mitarbeiter",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.Employees,
  },
  {
    icon: <FaTasks size="5rem" />,
    title: "Projekte & Maßanhmen",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.ProjectAndTaskManagement,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "Reklamationsmanagement",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.ClaimManagement,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "Risiken & Chance",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.OpportunityManagement,
  },

  {
    icon: <FaChalkboardTeacher size="5rem" />,
    title: "Talent Manager",
    description: "",
    url: "docs/talent-manager",
    app: PbdModuleString.TrainingManagement,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "WIKI",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.KnowledgeBase,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "Zielmanagement",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.GoalManagement,
  },
];
