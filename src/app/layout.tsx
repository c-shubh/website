import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/constants";

export const metadata: Metadata = {
  // TODO: metadata
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  // <head>
  //   <!-- Global Metadata -->
  //   <meta charset="utf-8" />
  //   <meta name="viewport" content="width=device-width,initial-scale=1" />
  //   <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  //   <link rel="sitemap" href="/sitemap-index.xml" />
  //   <link
  //     rel="alternate"
  //     type="application/rss+xml"
  //     title={SITE_TITLE}
  //     href={new URL("rss.xml", Astro.site)}
  //   />
  //   <meta name="generator" content={Astro.generator} />

  //   <!-- Canonical URL -->
  //   <link rel="canonical" href={canonicalURL} />

  //   <!-- Primary Meta Tags -->
  //   <title>{title}</title>
  //   <meta name="title" content={title} />
  //   {description && <meta name="description" content={description} />}

  //   <!-- Open Graph / Facebook -->
  //   <meta property="og:type" content="website" />
  //   <meta property="og:url" content={Astro.url} />
  //   <meta property="og:title" content={title} />
  //   {description && <meta property="og:description" content={description} />}

  //   <!-- Twitter -->
  //   <meta property="twitter:card" content="summary_large_image" />
  //   <meta property="twitter:url" content={Astro.url} />
  //   <meta property="twitter:title" content={title} />
  //   {
  //     description && (
  //       <meta property="twitter:description" content={description} />
  //     )
  //   }
  // </head>
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body className="flex flex-col min-h-screen m-0 font-sans max-w-2xl px-4 mx-auto leading-relaxed">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
