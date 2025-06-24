import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./home.module.css";
import TechIUse from "./tech-i-use.mdx";

export default function Home(): JSX.Element {
  const theme = useTheme();

  return (
    // TODO: add description for social card
    <Layout>
      <Stack spacing={4}>
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <Box className="container">
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
              Software Engineer who loves building things.
            </p>
          </Box>
        </header>
        <main>
          {
            // TODO: add more content
          }
          <section className={"container"}>
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
        <div></div>
      </Stack>
    </Layout>
  );
}
