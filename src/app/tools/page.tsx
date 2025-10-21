import { BetterLink } from "@/components/BetterLink";
import { InlineCode } from "@/components/InlineCode";
import { PageTitleAndDescription } from "@/components/PageTitleAndDescription";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "My implementation of simple tools that I find myself looking up every time I need them.",
};

export default function Page() {
  return (
    <>
      <PageTitleAndDescription
        title={metadata.title?.toString()}
        description={metadata.description?.toString()}
      />
      <ul>
        <li>
          <BetterLink href="/tools/bulk-url-opener">Bulk URL Opener</BetterLink>{" "}
          - Paste a list of URLs to open them all in new tabs.
        </li>
        <li>
          <BetterLink href="/tools/qr-code-generator">
            QR Code Generator
          </BetterLink>{" "}
          - Quickly generate one or more QR codes.
        </li>
        <li>
          <BetterLink href="/tools/slugify">Slugify</BetterLink> - Create slug
          from text.
        </li>
        <li>
          <BetterLink href="/tools/word-count">Word Count</BetterLink> - Online
          version of the linux command <InlineCode>wc</InlineCode>.
        </li>
        <li>
          <BetterLink href="/tools/section-comment-generator">
            Section Comment Generator
          </BetterLink>{" "}
          - Generates code comment to be used to mark sections in code.
        </li>
      </ul>
    </>
  );
}
