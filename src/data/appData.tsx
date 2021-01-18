import React from "react";
import { FaChalkboardTeacher, FaRegLightbulb, FaUserMd } from "react-icons/fa";
import { AppInfo } from "../models/appInfo";

export const appData: AppInfo[] = [
  {
    icon: <FaUserMd size="5rem" />,
    title: "Admin",
    description: "",
    url: "docs/admin",
  },
  {
    icon: <FaRegLightbulb size="5rem" />,
    title: "Ideenmanagement",
    description: "",
    url: "docs/idea-management",
  },
  {
    icon: <FaChalkboardTeacher size="5rem" />,
    title: "Talent Manager",
    description: "",
    url: "docs/talent-manager",
  },
];
