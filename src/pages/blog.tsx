import Navbar from "@/components/Navbar";
import { title } from "@/utils";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>{title("Blog")}</title>
      </Head>
      <Flex direction="column">
        <Navbar />
      </Flex>
    </>
  );
}
