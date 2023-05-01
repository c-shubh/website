import Navbar from "@/components/Navbar";
import { title } from "@/utils";
import Stack from "@mui/material/Stack";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>{title("About")}</title>
      </Head>
      <Stack direction="column">
        <Navbar />
      </Stack>
    </>
  );
}
