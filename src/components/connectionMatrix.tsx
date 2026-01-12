import Link from "@docusaurus/Link";
import { dataConnections } from "../data/connectionMatrix";
import { PbdModuleString } from "../models/pbdModuleString";

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
