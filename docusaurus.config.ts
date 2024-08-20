import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const siteTitle = "Shubh's Digital Garden 🌱";

const config: Config = {
  title: siteTitle,
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://cshubh.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "c-shubh", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        // Client side redirects
        redirects: [
          {
            from: "/github",
            to: "https://github.com/c-shubh/",
          },
          {
            from: "/linkedin",
            to: "https://www.linkedin.com/in/c-shubh/",
          },
        ] satisfies RedirectRule[],
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          // TODO: Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/c-shubh/website/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-J52XN60HFW",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // TODO: add social card image
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: siteTitle,
      logo: {
        alt: "My Site Logo",
        // TODO: design and set a logo
        src: "img/logo.svg",
      },
      items: [
        { to: "/projects", label: "Projects", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/contact", label: "Contact", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Shubh A Chudasama. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

type RedirectRule = {
  to: string;
  from: string | string[];
};

export default config;
