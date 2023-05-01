import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

const pages = [
  { icon: <HomeIcon />, title: "Home", href: "/" },
  { icon: <BuildIcon />, title: "Projects", href: "/projects" },
  { icon: <RssFeedIcon />, title: "Blog", href: "/blog" },
  { icon: <BookmarksIcon />, title: "Bookmarks", href: "/bookmarks" },
  { icon: <AutoStoriesIcon />, title: "Reading", href: "/reading" },
  { icon: <PersonIcon />, title: "About", href: "/about" },
];

function ElevationScroll(props: { children: ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AllInclusiveIcon sx={{ display: "flex", mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href="/"
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                SHUBH
              </Typography>
              <Stack spacing={2} direction={"row"} sx={{ flexGrow: 1 }}>
                {pages.map((page) => (
                  <Button
                    startIcon={page.icon}
                    LinkComponent={Link}
                    key={page.href}
                    href={router.asPath === page.href ? undefined : page.href}
                    sx={{ color: "white", display: "flex" }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
