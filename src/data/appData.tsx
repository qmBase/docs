import React from "react";
import {
  FaChalkboardTeacher,
  FaChessRook,
  FaFingerprint,
  FaFireExtinguisher,
  FaFlagCheckered,
  FaRegAddressBook,
  FaRegAddressCard,
  FaRegFolder,
  FaRegLightbulb,
  FaRssSquare,
  FaTasks,
  FaUmbrellaBeach,
  FaWikipediaW,
  FaWrench,
} from "react-icons/fa";
import { AppInfo } from "../models/appInfo";
import { PbdModuleString } from "../models/pbdModuleString";

const enabledApps: PbdModuleString[] = [
  PbdModuleString.Admin,
  PbdModuleString.MaintenanceManagement,
  PbdModuleString.Employees,
  PbdModuleString.Crm,
  PbdModuleString.QualityMonitor,
];

export const isAppEnabled = (dto: AppInfo) => {
  if (enabledApps.length == 0) {
    return true;
  } else {
    return enabledApps.includes(dto.app);
  }
};

export const appData: AppInfo[] = [
  {
    icon: (
      <FaUmbrellaBeach
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Abwesenheitsplaner",
    description: "",
    url: "docs/apps/absence-planner",
    app: PbdModuleString.AbsencePlanner,
  },
  {
    icon: (
      <FaFingerprint
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Auditmanagement",
    description: "",
    url: "docs/apps/audit-management",
    app: PbdModuleString.AuditManagement,
  },

  {
    icon: (
      <FaRssSquare
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Blog",
    description: "",
    url: "docs/apps/blog",
    app: PbdModuleString.Blog,
  },
  {
    icon: (
      <FaRegAddressBook
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "CRM",
    description: "",
    url: "docs/apps/crm",
    app: PbdModuleString.Crm,
  },
  {
    icon: (
      <FaRegFolder
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Dokumentenmanagement",
    description: "",
    url: "docs/apps/document-management",
    app: PbdModuleString.DocumentManagement,
  },
  {
    icon: (
      <FaTasks
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Formulare",
    description: "",
    url: "docs/apps/forms",
    app: PbdModuleString.CustomForms,
  },
  {
    icon: (
      <FaRegLightbulb
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Ideenmanagement",
    description: "",
    url: "docs/apps/idea-management",
    app: PbdModuleString.IdeaManagement,
  },
  {
    icon: (
      <FaWrench
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Instandhaltung",
    description: "",
    url: "docs/apps/projects-and-tasks",
    app: PbdModuleString.MaintenanceManagement,
  },
  {
    icon: (
      <FaRegAddressCard
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Mitarbeiter",
    description: "",
    url: "docs/apps/employees",
    app: PbdModuleString.Employees,
  },
  {
    icon: (
      <FaTasks
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Projekte & Maßanhmen",
    description: "",
    url: "docs/apps/projects-and-tasks",
    app: PbdModuleString.ProjectAndTaskManagement,
  },
  {
    icon: (
      <FaFireExtinguisher
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Reklamationsmanagement",
    description: "",
    url: "docs/apps/claim-management",
    app: PbdModuleString.ClaimManagement,
  },
  {
    icon: (
      <FaChessRook
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Risiken & Chance",
    description: "",
    url: "docs/apps/opportunity-management",
    app: PbdModuleString.OpportunityManagement,
  },

  {
    icon: (
      <FaChalkboardTeacher
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Talent Manager",
    description: "",
    url: "docs/apps/talent-manager",
    app: PbdModuleString.TrainingManagement,
  },
  {
    icon: (
      <FaWikipediaW
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "WIKI",
    description: "",
    url: "docs/apps/wiki",
    app: PbdModuleString.KnowledgeBase,
  },
  {
    icon: (
      <FaFlagCheckered
        size="5rem"
        style={{ color: "var(--ifm-color-primary-darkest)" }}
      />
    ),
    title: "Zielmanagement",
    description: "",
    url: "docs/apps/goal-management",
    app: PbdModuleString.GoalManagement,
  },
];
