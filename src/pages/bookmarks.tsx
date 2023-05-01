import Navbar from "@/components/Navbar";
import { title } from "@/utils";
import Stack from "@mui/material/Stack";
import Head from "next/head";

export default function Bookmarks() {
  return (
    <>
      <Head>
        <title>{title("Bookmarks")}</title>
      </Head>
      <Stack direction="column">
        <Navbar />
      </Stack>
    </>
  );
}
