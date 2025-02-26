import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import styles from "./home.module.css";
import TechIUse from "./tech-i-use.mdx";

function HomepageHeader() {
  const theme = useTheme();
  const puddleRef = useRef<HTMLDivElement>(null);
  const puddleInstance = useRef<Puddle | null>(null);

  useEffect(() => {
    if (puddleRef.current) {
      puddleInstance.current = new Puddle(puddleRef.current);
      puddleInstance.current.setNodeStyle("ascii");
      puddleInstance.current.setNodeSize(15);
    }

    return () => {
      if (puddleInstance.current) {
        clearInterval(puddleInstance.current.updateLoop);
        puddleInstance.current = null;
      }
    };
  }, [puddleRef]);

  return (
    <Box
      component={"header"}
      className="hero hero--primary"
      sx={{
        padding: 0,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        ref={puddleRef}
        sx={{
          userSelect: "none",
          color: "#000000a3",
          opacity: 0.6,
          position: "absolute",
          filter: "blur(1px)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></Box>
      <Box
        className="container"
        sx={{
          padding: "4rem 0",
          zIndex: 1,
          // this passes mouse events to puddle div
          pointerEvents: "none",
          textShadow: "0px 0px 6px #000000",
          "@media (max-width: 996px)": {
            padding: "2rem",
          },
        }}
      >
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
      </Box>
    </Box>
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
        <Box
          component={"section"}
          className="container"
          sx={{ padding: "2rem" }}
        >
          {
            // TODO: make it look better:
            /* 
              - icons
              - different layout
            */
          }
          <TechIUse />
        </Box>
      </main>
    </Layout>
  );
}
