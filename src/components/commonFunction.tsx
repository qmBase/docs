import Link from "@docusaurus/Link";
import { commonFunctionsData } from "../data/commonFunctions";
import { sharedFunctionsData } from "../data/sharedFunctionsData";
import { Entity } from "../models/entity";
import { PbdModuleString } from "../models/pbdModuleString";

interface IProps {
  app: PbdModuleString;
  entity?: Entity;
  entityTitle?: string;
}

export default function CommonFunction({ app, entity, entityTitle }: IProps) {
  const filteredData = commonFunctionsData.find(
    (x) => x.appName === app && x.appEntity === entity
  );
  return (
    <table>
      <thead>
        {entityTitle && (
          <tr>
            <th colSpan={2}>{entityTitle}</th>
          </tr>
        )}
        <tr>
          <th>Gemeinsame Funktionen</th>
          <th>Beschreibung</th>
        </tr>
      </thead>
      <tbody>
        {filteredData?.sharedFunctions.map((item) => (
          <tr key={item}>
            <td>
              <Link to={"/docs/gettingStarted/common-features"}>
                {sharedFunctionsData.find((x) => x.id == item)?.title}
              </Link>
            </td>
            <td>{sharedFunctionsData.find((x) => x.id == item)?.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
