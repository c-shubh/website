import Navbar from "@/components/Navbar";
import { Project } from "@/types";
import { title } from "@/utils";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import Head from "next/head";

interface IconExternalLinkProps {
  url: string;
  icon: any;
  title?: string;
}

function IconExternalLink({ url, icon: Icon, title }: IconExternalLinkProps) {
  return (
    <Link
      href={url}
      title={title}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      target="_blank"
    >
      <Icon />
    </Link>
  );
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>{title("Projects")}</title>
      </Head>
      <Stack direction="column">
        <Navbar />
        <Stack spacing={2} component={Container} maxWidth={"container.lg"}>
          {projects.map((p) => (
            <Card key={p.title}>
              {/* <CardBody> */}
              <Stack spacing={4} direction={"row"} alignItems={"center"}>
                <Typography
                  component={"h3"}
                  fontSize={"md"}
                  fontWeight={"bold"}
                >
                  {p.title}
                </Typography>
                {p.liveUrl ? (
                  <IconExternalLink
                    url={p.liveUrl}
                    icon={OpenInNewIcon}
                    title="Preview"
                  />
                ) : null}
                {p.srcUrl ? (
                  <Link
                    href={p.srcUrl}
                    title={"Source code"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    target="_blank"
                  >
                    <CodeIcon />
                  </Link>
                ) : null}
              </Stack>
              <Typography>{p.description}</Typography>
              {/* </CardBody> */}
            </Card>
          ))}
        </Stack>
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
