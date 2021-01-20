import React from "react";
import {
  FaChalkboardTeacher,
  FaRegLightbulb,
  FaTasks,
  FaUserMd,
} from "react-icons/fa";
import { AppInfo } from "../models/appInfo";
import { PbdModuleString } from "../models/pbdModuleString";

export const appData: AppInfo[] = [
  {
    icon: <FaUserMd size="5rem" />,
    title: "Admin",
    description: "",
    url: "docs/admin",
    app: PbdModuleString.Admin,
  },
  {
    icon: <FaRegLightbulb size="5rem" />,
    title: "Ideenmanagement",
    description: "",
    url: "docs/idea-management",
    app: PbdModuleString.IdeaManagement,
  },
  {
    icon: <FaChalkboardTeacher size="5rem" />,
    title: "Talent Manager",
    description: "",
    url: "docs/talent-manager",
    app: PbdModuleString.TrainingManagement,
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
    title: "Dokumentenmanagement",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.ProjectAndTaskManagement,
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
    title: "WIKI",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.KnowledgeBase,
  },
  {
    // icon: <FaFolder size="5rem" />,
    title: "Formulare",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.CustomForms,
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
    title: "Zielmanagement",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.GoalManagement,
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
    title: "Risiken & Chance",
    description: "",
    url: "docs/projects-and-tasks",
    app: PbdModuleString.OpportunityManagement,
  },
];
