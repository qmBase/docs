import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { appData } from "../data/appData";
import { AppInfo } from "../models/appInfo";
import styles from "./styles.module.css";
const features = [
  {
    title: "Tutorials - Einfach loslegen",
    imageUrl: "img/undraw_teaching.svg",
    description: (
      <>
        Finden Sie hier Tutorials, die Ihnen den Einstieg in die Software
        erleichtern. <Link to="/docs">Link</Link>
      </>
    ),
  },
  {
    title: "FAQ - Antworten auf häufige Fragen",
    imageUrl: "img/undraw_Questions.svg",
    description: (
      <>
        Finden Sie hier antworten auf häufig gestellte Fragen.{" "}
        <Link to="/docs">Link</Link>
      </>
    ),
  },
  {
    title: "Roadmap & Changelog",
    imageUrl: "img/undraw_navigator.svg",
    description: (
      <>
        Ausblick auf unsere zukünftigen Entwicklungen und Veröffentlichung der
        neuesten Verbesserungen und Änderungen. <Link to="/blog">Link</Link>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description, url }: AppInfo) {
  // const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4")}>
      <div className="card shadow--md">
        <div className="card__body text--center">
          {icon}
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

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="text--center">
          <h2>Apps</h2>
        </div>
        {appData && appData.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {appData.map((props, idx) => (
                  <FeatureCard key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
