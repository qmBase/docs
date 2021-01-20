import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import React from "react";
import { FaWrench } from "react-icons/fa";
import { AppInfo } from "../models/appInfo";

export default function FeatureCard({
  icon,
  title,
  description,
  url,
}: AppInfo) {
  // const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4 padding-vert--md")}>
      <div className="card shadow--md">
        <div className="card__body text--center">
          {icon ?? <FaWrench size="5rem" className="text--secondary" />}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={useBaseUrl(url)}>
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
