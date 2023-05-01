import Navbar from "@/components/Navbar";
import { Project } from "@/types";
import { title } from "@/utils";
import { Card, CardBody, Container, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Head from "next/head";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>{title("Projects")}</title>
      </Head>
      <Flex direction="column">
        <Navbar />
        <Stack spacing={2} as={Container} maxWidth={'container.lg'}>
          {projects.map((p) => (
            <Card key={p.title}>
              <CardBody>
                <Stack spacing={4} direction={"row"} alignItems={"center"}>
                  <Text as={"h3"} fontSize={"md"} fontWeight={"bold"}>
                    {p.title}
                  </Text>
                  {p.liveUrl ? (
                    <Link href={p.liveUrl} title={"Preview"} display={'flex'} alignItems={'center'} isExternal>
                      <Icon as={FaExternalLinkAlt} />
                    </Link>
                  ) : null}
                  {p.srcUrl ? (
                    <Link href={p.srcUrl} title={"Source code"} display={'flex'} alignItems={'center'} isExternal>
                      <Icon as={FaCode} />
                    </Link>
                  ) : null}
                </Stack>
                <Text>{p.description}</Text>
              </CardBody>
            </Card>
          ))}
        </Stack>
      </Flex>
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
