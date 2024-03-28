import * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { WhiteLabelConfig } from "./src/models/whiteLabelConfig";

const whiteLabel: WhiteLabelConfig = {
  title: "qmBase - Hilfe",
  productId: "qmBase",
  vendorName: "qmBase",
  vendorUrl: "https://qmBase.com/",
  iconUrl:
    "https://qmbasesupport.blob.core.windows.net/public-icons/qmBase/navbarLogo.png",
  faviconUrl:
    "https://qmbasesupport.blob.core.windows.net/public-icons/qmBase/favicon.png",
  primaryColor: "#65ACE0",
  secondaryColor: "#29375F",
  imprintUrl: "https://qmbase.com/impressum/",
  dataPrivacyUrl: "https://qmbase.com/datenschutz/",
  productDisplayName: "qmBase",
  testAccountDurationAsDays: 14,
  domain: "qmbase.com",
  footerCommunity: {
    title: "Community",
    items: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/qmbase/",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/qmbase",
      },
      {
        label: "Twitter",
        href: "https://twitter.com/qmbase",
      },
      {
        label: "Linkedin",
        href: "https://www.linkedin.com/company/qmbase",
      },
    ],
  },
  thisUrl: "https://help.qmbase.com",
  accountBaseUrl: "https://app.qmbase.com",
};

const config: Config = {
  title: `${whiteLabel.productDisplayName} - Hilfe`,
  tagline: `Hier finden Sie die Anleitungen, Hilfestellungen und Fragen und Antworten für Einsteiger und Experten`,
  url: whiteLabel.thisUrl,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: whiteLabel.faviconUrl,
  organizationName: "qmBase", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "qmBase Logo",
        src: whiteLabel.iconUrl,
      },
      items: [
        { to: "tutorials", label: "Tutorials", position: "left" },
        {
          to: "docs/general",
          activeBasePath: "docs",
          label: "Dokumentation",
          position: "left",
        },
        { to: "blog", label: "Changelog", position: "left" },
        {
          to: "roadmap",
          label: "Roadmap",
          position: "left",
        },
        {
          href: `${whiteLabel.accountBaseUrl}/account/findworkspace`,
          label: "Login",
          position: "right",
          className: "button button--link navbarBtn",
        },
        {
          href: "https://www.qmbase.com/webinar-vereinbaren/",
          label: "Jetzt Demo vereinbaren",
          position: "right",
          className: "button button--success navbarBtn",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Allgemein",
              to: "docs/general",
            },
            {
              label: "FAQ",
              to: "docs/faqs/smart-views",
            },
          ],
        },

        {
          title: whiteLabel.productDisplayName,
          items: [
            {
              label: whiteLabel.domain,
              href: `https://${whiteLabel.domain}`,
            },
            {
              label: "Login",
              href: `${whiteLabel.accountBaseUrl}/account/findworkspace`,
            },
          ],
        },
        whiteLabel.footerCommunity,
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${
        whiteLabel.vendorName
      } Built with Docusaurus.<br/><a href="${
        whiteLabel.imprintUrl
      }">Impressum</a> | <a href="${
        whiteLabel.dataPrivacyUrl
      }">Datenschutz</a>`,
    },
    algolia: {
      // This is a read-only, search-only key served directly by the front-end, managed by Algolia via their
      // free DocSearch program. The key is not sensitive. See https://docsearch.algolia.com/ for more details.
      appId: "LELAAR7MEU",
      apiKey: "1912b503149b94f953f6d20d46614dbd",
      indexName: "qmbase",
      // searchParameters: {},
      contextualSearch: false,
    },
    // announcementBar: {
    //   id: "supportus",
    //   content:
    //     '⭐️ If you like qmBase, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/qmbase/docs">GitHub</a>! ⭐️',
    // },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/qmBase/docs/tree/master/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            description: `Stay up to date with the latest ${whiteLabel.productDisplayName} changes`,
            copyright: `Copyright © ${new Date().getFullYear()} ${
              whiteLabel.vendorName
            }`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          editUrl: "https://github.com/qmBase/docs/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-CJTF0L7XNF",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "roadmap",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "roadmap",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./roadmap",
      },
    ],
  ],
};

module.exports = config;
