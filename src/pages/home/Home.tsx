import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TechIUse from "./_tech-i-use.mdx";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./home.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Shubh A Chudasama
        </Heading>
        <p className="hero__subtitle">
          {
            // TODO: <Link href="http://catb.org/jargon/html/H/hacker.html">Hacker</Link>
          }
          I am a fullstack developer who enjoys writing and tinkering with
          software.
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {
          // TODO: add more content
        }
        <section className={clsx("container", styles.techIUseSection)}>
          {
            // TODO: make it look better:
            /* 
              - icons
              - different layout
            */
          }
          <TechIUse />
        </section>
      </main>
    </Layout>
  );
}
