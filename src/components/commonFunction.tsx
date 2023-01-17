import React from "react";
import { PbdModuleString } from "../models/pbdModuleString";

enum SharedFunction {
  Comments = "Comments",
  Files = "Files",
}

interface App {
  appName: PbdModuleString;
  sharedFunctions: SharedFunction[];
}

const data: App[] = [];

export default function CommonFunction({ appName }: App) {
  return (
    <table>
      <thead>
        <tr>
          <th>Function</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index}>
            <td>{data.sharedFunctions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
