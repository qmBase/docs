import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import styles from "../../pages/styles.module.css";

interface TopBannerProps {
  title: string;
  tagline: string;
}

export default function TopBanner({ title, tagline }: TopBannerProps) {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--outline button--secondary button--lg",
              styles.getStarted
            )}
            to={useBaseUrl("docs/getting-started")}
          >
            Los geht's
          </Link>
        </div>
      </div>
    </header>
  );
}
