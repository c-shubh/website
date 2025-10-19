import type { Metadata } from "next";
import { BulkUrlOpener } from "./components/BulkUrlOpener";
import { PageTitleAndDescription } from "@/components/PageTitleAndDescription";

export const metadata: Metadata = {
  title: "Bulk URL Opener",
  description: "Paste a list of URLs to open them all in new tabs.",
};

export default function BulkUrlOpenerPage() {
  return (
    <>
      <PageTitleAndDescription
        title={metadata.title?.toString()}
        description={metadata.description?.toString()}
      />
      <BulkUrlOpener />
    </>
  );
}
