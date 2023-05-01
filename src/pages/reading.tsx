import Navbar from "@/components/Navbar";
import { title } from "@/utils";
import Stack from "@mui/material/Stack";
import Head from "next/head";

export default function Reading() {
  return (
    <>
      <Head>
        <title>{title("Reading")}</title>
      </Head>
      <Stack direction="column">
        <Navbar />
      </Stack>
    </>
  );
}
