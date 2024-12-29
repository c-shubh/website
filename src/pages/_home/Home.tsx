import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Oneko from "../../components/Oneko";
import styles from "./home.module.css";
import TechIUse from "./tech-i-use.mdx";

function HomepageHeader() {
  const theme = useTheme();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Box
          component={Heading}
          as="h1"
          className="hero__title"
          sx={{
            wordBreak: "keep-all",
            [theme.breakpoints.down("sm")]: { fontSize: "2.5rem" },
          }}
        >
          Shubh A Chudasama
          <Box
            component={"img"}
            src="/img/hello.gif"
            alt="Hello bubble"
            sx={{
              width: 100,
              display: { xs: "none", md: "initial" },
            }}
          />
        </Box>
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
    // TODO: add description for social card
    <Layout>
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
        <Oneko />
      </main>
    </Layout>
  );
}
