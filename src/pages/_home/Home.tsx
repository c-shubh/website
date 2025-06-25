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
        <Box
          component="header"
          sx={{
            [theme.breakpoints.up("md")]: { paddingY: "4rem" },
          }}
          className={clsx("hero hero--primary", styles.heroBanner)}
        >
          <Box className="container">
            <Box
              component={Heading}
              as="h1"
              sx={{
                [theme.breakpoints.down("sm")]: { fontSize: "2rem" },
                position: "relative",
              }}
            >
              I'm a techie who loves building things.
              <Box
                component="img"
                src="/img/hello.gif"
                alt="Hello bubble"
                sx={{
                  width: 100,
                  display: { xs: "none", md: "initial" },
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </Box>
            <Box component="p" sx={{ margin: 0, fontSize: "1.2rem" }}>
              Hacker • Software Engineer • Builder • Learner
            </Box>
          </Box>
        </Box>
        <main>
          {
            // TODO: add more content
          }
          <section className="container">
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
