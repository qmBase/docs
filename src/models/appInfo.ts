import { PbdModuleString } from "./pbdModuleString";

export class AppInfo {
  constructor() {
    this.iconColor = "grey";
  }
  icon?: string | React.ReactNode;
  title: string;
  description: string;
  url: string;
  app: PbdModuleString;
  iconColor?: string;
}
