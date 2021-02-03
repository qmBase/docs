import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { FaRss } from "react-icons/fa";
import FeatureCard from "../components/featureCard";
import { appData } from "../data/appData";
import styles from "./styles.module.css";
const features = [
  {
    title: <Link to="/docs/getting-started">Tutorials - Einfach loslegen</Link>,
    imageUrl: "img/undraw_teaching.svg",
    description: (
      <>
        Finden Sie hier Tutorials, die Ihnen den Einstieg in die Software
        erleichtern. Starten Sie innerhalb von 5 Minuten.
      </>
    ),
  },
  {
    title: (
      <Link to="/faqs/smart-views">FAQ - Antworten auf häufige Fragen</Link>
    ),
    imageUrl: "img/undraw_Questions.svg",
    description: <>Finden Sie hier Antworten auf häufig gestellte Fragen. </>,
  },
  {
    title: (
      <>
        <Link to="/blog">Roadmap & Changelog</Link>
      </>
    ),
    imageUrl: "img/undraw_navigator.svg",
    description: (
      <>
        Ausblick auf unsere zukünftigen Entwicklungen und Veröffentlichung der
        neuesten Verbesserungen und Änderungen. Verpassen Sie keine Updates und
        abonnieren Sie unseren{" "}
        <a href={"/blog/atom.xml"}>
          <FaRss /> Feed
        </a>
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

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="container padding-vert--lg text--center">
        <div className="alert alert--info" role="alert">
          <p>🚧 🚨 🚧</p>
          Willkommen auf unserer neuen Dokumentationsseite. Diese Seite befindet
          sich noch im Aufbau.
        </div>
      </div>
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
              to={useBaseUrl("docs/getting-started")}
            >
              Los geht's
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
          <h1 className="text--primary">Tutorials für die einzelnen Apps</h1>
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
