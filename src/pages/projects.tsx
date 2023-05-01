import Navbar from "@/components/Navbar";
import { Project } from "@/types";
import { title } from "@/utils";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Tech, techIcons } from "../../data/tech";
// @ts-ignore
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import Head from "next/head";

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
    <Card>
      <CardHeader title={<ProjectTitle project={p} />} />
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography>{p.description}</Typography>
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

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>{title("Projects")}</title>
      </Head>
      <Stack direction="column" mt={4}>
        <Navbar />
        <Container>
          <Masonry columns={2} spacing={2}>
            {projects.map((p) => (
              // <Grid item xs={6} key={p.title}>
              <Project key={p.title} project={p} />
              // </Grid>
            ))}
          </Masonry>
        </Container>
      </Stack>
    </>
  );
}

import { projects } from "../../data/projects";
export async function getStaticProps() {
  return {
    props: {
      projects: projects.sort((a, b) =>
        dayjs(b.startDate).diff(dayjs(a.startDate))
      ),
    },
  };
}
