import { PbdModuleString } from "./pbdModuleString";

export interface AppInfo {
  icon?: string | React.ReactNode;
  title: string;
  description: string;
  url: string;
  app: PbdModuleString;
  iconColor?: string;
}
