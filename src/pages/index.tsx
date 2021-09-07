import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { FaRss } from "react-icons/fa";
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
      <Link to="/docs/faqs/smart-views">
        FAQ - Antworten auf häufige Fragen
      </Link>
    ),
    imageUrl: "img/undraw_Questions.svg",
    description: <>Finden Sie hier Antworten auf häufig gestellte Fragen. </>,
  },
  {
    title: (
      <>
        <Link to="/blog">Changelog</Link>
      </>
    ),
    imageUrl: "img/undraw_navigator.svg",
    description: (
      <>
        Veröffentlichung der neuesten Verbesserungen und Änderungen. Verpassen
        Sie keine Updates und abonnieren Sie unseren{" "}
        <a href={"/blog/atom.xml"}>
          <FaRss /> Feed
        </a>
        .
      </>
    ),
  },
  {
    title: (
      <>
        <Link to="/roadmap">Roadmap</Link>
      </>
    ),
    imageUrl: "img/undraw_right_direction.svg",
    description: (
      <>
        Ausblick auf unsere zukünftigen Entwicklungen und Planungen. Unsere
        Roadmap wird laufend aktualisiert und an aktuelle Anforderungen
        angepasst.
      </>
    ),
  },
  {
    title: <>qmBase als White Label Lösung</>,
    imageUrl: "img/undraw_font.svg",
    description: (
      <>
        qmBase ist auch der Motor einiger White Label Lösungen. Die
        Informationen auf dieser Seite sind auch für die White Label Lösungen
        gültig. Zu den Lösungen gehören unter anderem:
        <ul>
          <li>
            <Link to="https://jowecon.de/docupro/">DocuPro</Link>
          </li>
          <li>
            <a href="https://carenavigator.de/">DSGVO protect</a>
          </li>
          <li>
            <a href="https://imsbase.de">imsBase</a>
          </li>
        </ul>
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
      title={`Startseite`}
      description="Willkommen beim qmBase Support. ✔ Hier finden Sie Hilfe, Neuigkeiten und Tutorials rund um die Apps und Funktionen von qmBase. Abonnieren Sie unseren RSS Feed um immer auf dem neusten Stand zu bleiben und nutzen Sie unsere Tutorials bei Fragen zu einzelnen Apps."
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
      </main>
    </Layout>
  );
}

export default Home;
