import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import React from "react";
import styles from "../../pages/styles.module.css";

export interface FeatureItemProps {
  title: React.ReactNode;
  imageUrl: string;
  description: React.ReactNode;
  className?: string;
}

export default function FeatureItem({
  imageUrl,
  title,
  description,
  className,
}: FeatureItemProps) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col", className)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title?.toString()} />
        </div>
      )}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
}
