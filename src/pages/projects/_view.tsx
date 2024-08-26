import ReactMarkdown from "react-markdown";
import type { Project } from "./_projects";
import { projects } from "./_projects";
import { techIcons, type Tech } from "./_tech";
// @ts-ignore
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Masonry from "@mui/lab/Masonry";
import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

/* ---------------------------- IconExternalLink ---------------------------- */

interface IconExternalLinkProps {
  href: string;
  Icon: any;
  title?: string;
}

function IconExternalLink({ href, Icon, title }: IconExternalLinkProps) {
  return (
    <IconButton href={href} title={title} target="_blank">
      <Icon />
    </IconButton>
  );
}

/* -------------------------------- TechChip -------------------------------- */

interface TechChipProps {
  tech: Tech;
}

function TechChip({ tech }: TechChipProps) {
  const label = (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      {techIcons[tech]?.icon !== undefined
        ? techIcons[tech]?.icon!({
            size: 18,
            color: techIcons[tech]?.color,
          })
        : null}{" "}
      {tech}
    </Stack>
  );

  return <Chip label={label} />;
}

/* ------------------------------ ProjectTitle ------------------------------ */

interface ProjectTitleProps {
  project: Project;
}

function ProjectTitle({ project: p }: ProjectTitleProps) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography variant={"h5"} component={"h3"} fontWeight={"bold"}>
        {p.title}
      </Typography>
      <Stack direction={"row"}>
        {p.liveUrl ? (
          <IconExternalLink
            href={p.liveUrl}
            Icon={OpenInNewIcon}
            title="Preview"
          />
        ) : null}
        {p.srcUrl ? (
          <IconExternalLink
            href={p.srcUrl}
            Icon={CodeIcon}
            title="Source code"
          />
        ) : null}
      </Stack>
    </Stack>
  );
}

/* -------------------------------- Project --------------------------------- */

interface ProjectProps {
  project: Project;
}

function Project({ project: p }: ProjectProps) {
  return (
    <Card elevation={2}>
      <CardHeader title={<ProjectTitle project={p} />} />
      <CardContent sx={{ paddingTop: 0 }}>
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => {
              return <Typography component="p" {...props} />;
            },
          }}
        >
          {p.description}
        </ReactMarkdown>
        <Box
          display={"flex"}
          gap={1}
          mt={1}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Typography fontSize={18} fontWeight={"medium"}>
            Built with
          </Typography>

          {p.builtWith.map((tech) => (
            <TechChip tech={tech} key={tech} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

/* -------------------------------- Projects -------------------------------- */

interface ProjectsProps {
  projects: Project[];
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const defaultTheme = createTheme();
export const theme = createTheme({
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      mobile: 320,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },
});

export default function Projects({ projects }: ProjectsProps) {
  // TODO: card dark theme https://webreaper.dev/posts/material-ui-theme-with-docusaurus/
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={"laptop"}
        sx={{
          [theme.breakpoints.only("mobile")]: { paddingX: 0 },
          pt: {
            mobile: 1,
            tablet: 2,
          },
        }}
      >
        <Masonry
          columns={{
            mobile: 1,
            tablet: 2,
            // laptop: 3,
          }}
          spacing={2}
          sx={{
            marginX: 0,
          }}
        >
          {projects.map((p) => (
            <Project key={p.title} project={p} />
          ))}
        </Masonry>
      </Container>
    </ThemeProvider>
  );
}

export function getProjects(): Project[] {
  return projects;
}
