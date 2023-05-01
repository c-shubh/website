import Navbar from "@/components/Navbar";
import { title } from "@/utils";
import { Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>{title("Projects")}</title>
      </Head>
      <Flex direction="column">
        <Navbar />
        <Stack></Stack>
      </Flex>
    </>
  );
}
