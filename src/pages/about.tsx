import Navbar from "@/components/Navbar";
import { title } from "@/utils";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>{title('About')}</title>
      </Head>
      <Flex direction="column">
        <Navbar />
      </Flex>
    </>
  );
}

