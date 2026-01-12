import Heading from "@theme/Heading";
import clsx from "clsx";
import FeatureItem, { FeatureItemProps } from "./featureItem";

interface FeaturesContainerProps {
  features: FeatureItemProps[];
}

export default function FeaturesContainer({ features }: FeaturesContainerProps) {
  const firstRow = features.slice(0, 3);
  const secondRow = features.slice(3);

  return (
    <div className="container text--center">
      <Heading as="h2">Was Sie auf dieser Seite finden</Heading>
      <div className="row margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <FeatureItem {...feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <FeatureItem
            {...feature}
            key={idx}
            className={clsx("col--4", idx === 0 && "col--offset-2")}
          />
        ))}
      </div>
    </div>
  );
}
