import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import FeatureCard from "../components/featureCard";
import { appData } from "../data/appData";
import styles from "./styles.module.css";

function Tutorials() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Tutorials</h1>
          <p className="hero__subtitle">
            Ihr Einstiegspunkt zu Anleitungen für die einzelnen Apps
          </p>
        </div>
      </header>
      <main>
        {appData && appData.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {appData
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((props, idx) => (
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

export default Tutorials;
