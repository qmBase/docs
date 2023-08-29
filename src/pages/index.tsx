import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { FaRss } from "react-icons/fa";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";

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

function VideoContainer() {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            Sie wissen noch nicht was qmBase ist? Sehen Sie sich unser
            Vorstellungsvideo an!
          </Heading>
          <div className="video-container">
            <iframe
              width="50%"
              height="355"
              src="https://www.youtube.com/embed/Ghlm20iF31o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* <LiteYouTubeEmbed
              id="_An9EsKPhp0"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Explain Like I'm 5: Docusaurus"
              poster="maxresdefault"
              webp
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({
  imageUrl,
  title,
  description,
}: {
  title: React.ReactNode;
  imageUrl: string;
  description: React.ReactNode;
}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
}

function TopBanner({ title, tagline }: { title: string; tagline: string }) {
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

function Home() {
  const {
    siteConfig: { title, tagline },
  } = useDocusaurusContext();
  return (
    <Layout
      title={`Startseite`}
      description="Willkommen beim qmBase Support. ✔ Hier finden Sie Hilfe, Neuigkeiten und Tutorials rund um die Apps und Funktionen von qmBase. Abonnieren Sie unseren RSS Feed um immer auf dem neusten Stand zu bleiben und nutzen Sie unsere Tutorials bei Fragen zu einzelnen Apps."
    >
      <TopBanner tagline={tagline} title={title} />
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <VideoContainer />
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
