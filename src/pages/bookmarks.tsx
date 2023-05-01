import Navbar from "@/components/Navbar";
import { title } from "@/utils";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Bookmarks() {
  return (
    <>
      <Head>
        <title>{title("Bookmarks")}</title>
      </Head>
      <Flex direction="column">
        <Navbar />
      </Flex>
    </>
  );
}
