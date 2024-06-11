import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
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

function Logo() {
  return (
    <>
      <Link href="/">
        <AllInclusiveIcon sx={{ display: "flex", mr: 1, color: "white" }} />
      </Link>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            mr: 2,
            display: {
              mobile: "none",
              tablet: "initial",
            },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          SHUBH
        </Typography>
      </Box>
    </>
  );
}

function NavLinks() {
  const router = useRouter();

  return (
    <Stack
      spacing={2}
      direction={"row"}
      sx={{
        display: {
          mobile: "none",
          laptop: "flex",
        },
      }}
    >
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
  );
}

function DrawerLinks() {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        sx={{
          display: {
            mobile: "flex",
            laptop: "none",
          },
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{}}
      >
        <Toolbar />
        <Divider />
        <Stack
          spacing={1}
          sx={{
            padding: 2,
          }}
        >
          {pages.map((page) => (
            <Button
              startIcon={page.icon}
              LinkComponent={Link}
              key={page.href}
              href={router.asPath === page.href ? undefined : page.href}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              {page.title}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                justifyContent: {
                  mobile: "space-between",
                  laptop: "flex-start",
                },
              }}
            >
              <Logo />
              <NavLinks />
              <DrawerLinks />
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
