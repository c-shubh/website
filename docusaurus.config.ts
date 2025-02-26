import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import path from "node:path";
import { themes as prismThemes } from "prism-react-renderer";

const siteTitle = "Shubh's Digital Garden";

const copyrightText = (() => {
  const yearName = `Copyright © ${new Date().getFullYear()} Shubh A Chudasama`;
  const gif = `<img src="/img/fire.gif" style="width: 1.5em; margin: 0 0 -0.1em -0.1em;" alt="Fire">`;
  const a = (href: string, text: string) =>
    `<a href="${href}" target="_blank" rel="license noopener noreferrer">${text}</a>`;
  const codeLicense = a(
    "https://spdx.org/licenses/AGPL-3.0-only.html",
    "AGPLv3"
  );
  const textLicense = a(
    "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "CC BY-NC-SA 4.0"
  );
  const license = `Code licensed under ${codeLicense}, content under ${textLicense}.`;
  return `${yearName} ${gif}<br>${license}`;
})();

const config: Config = {
  title: siteTitle,
  tagline: "Dinosaurs are cool",
  favicon: "favicon.ico",

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

  staticDirectories: ["static", "src/pages/gram/pics/"],
  markdown: {
    async parseFrontMatter(params) {
      const [rootDir] = path
        .relative(__dirname, params.filePath)
        .split(path.sep);
      const frontMatter = await params.defaultParseFrontMatter(params);
      if (rootDir === "blog") {
        const { authors } = frontMatter.frontMatter;
        // if there are no authors mentioned, shubh's the default author.
        if (authors === undefined) {
          frontMatter.frontMatter.authors = "shubh";
        }
      }
      return frontMatter;
    },
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
          {
            from: "/leetcode",
            to: "https://leetcode.com/u/c-shubh/",
          },
          {
            // This website used to have a /links page with list of links to interesting stuff.
            // Now it's merged into /library.
            from: "/links",
            to: "/library",
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
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/c-shubh/website/tree/main/",
          onInlineTags: "throw",
          blogSidebarCount: "ALL",
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
    // TODO: no dark mode until I fix theme syncing between docusaurus, antd and mui
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    image: "img/social-card.png",
    navbar: {
      title: siteTitle,
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg?v=1",
      },
      items: [
        { to: "/projects", label: "🛠️ Projects", position: "left" },
        { to: "/tools", label: "🔧 Tools", position: "left" },
        { to: "/blog", label: "✍️ Blog", position: "left" },
        { to: "/quotes", label: "🗨️ Quotes", position: "left" },
        { to: "/contact", label: "📧 Contact", position: "left" },
        {
          href: "https://github.com/c-shubh",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.linkedin.com/in/c-shubh/",
          label: "LinkedIn",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: copyrightText,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      /* generated using https://realfavicongenerator.net/ */
      { name: "msapplication-TileColor", content: "#2d89ef" },
    ],
  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "me",
        href: "https://mastodon.social/@cshubh",
      },
    },
    {
      tagName: "script",
      attributes: {
        src: "/puddle.js",
        defer: "true",
      },
    },
    /* generated using https://realfavicongenerator.net/ */
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png?v=1",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png?v=1",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png?v=1",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/site.webmanifest?v=1",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg?v=1",
        color: "#5bbad5",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "shortcut icon",
        href: "/favicon.ico?v=1",
      },
    },
  ],
};

type RedirectRule = {
  to: string;
  from: string | string[];
};

export default config;
