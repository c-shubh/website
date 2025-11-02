import { PageTitleAndDescription } from "@/components/PageTitleAndDescription";
import type { Metadata } from "next";
import SectionCommentGenerator from "./components/SectionCommentGenerator";

export const metadata: Metadata = {
  title: "Section Comment Generator",
  description: "Generate code comment to be used to mark sections in code.",
};

export default function QrCodeGenerator() {
  return (
    <>
      <PageTitleAndDescription
        title={metadata.title?.toString()}
        description={"Enter text to generate a section comment."}
      />
      <SectionCommentGenerator />
    </>
  );
}
