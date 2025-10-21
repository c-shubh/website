import type { Metadata } from "next";
import { PlainTextQrCodeGenerator } from "./components/PlainTextQrCodeGenerator";
import { PageTitleAndDescription } from "@/components/PageTitleAndDescription";

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Quickly generate one or more QR codes.",
};

export default function QrCodeGenerator() {
  return (
    <>
      <PageTitleAndDescription
        title={metadata.title?.toString()}
        description={
          "Enter or paste text in the textbox below to generate QR code(s)."
        }
      />
      <PlainTextQrCodeGenerator />
    </>
  );
}
