/** @type {import('./src/models/whiteLabelConfig').WhiteLabelConfig} */
const whiteLabel = {
  productId: "Kroschke",
  vendorName: "Kroschke sign-international GmbH",
  vendorUrl: "https://kroschke.com/",
  imprintUrl: "https://kroschke.com/impressum.html",
  dataPrivacyUrl: "https://kroschke.com/datenschutzerklaerung.html",
  domain: "guard.kroschke.com",
  primaryColor: "#00b7c6",
  productDisplayName: "Kroschke Guard",
  testAccountDurationAsDays: 28,
  iconUrl:
    "https://qmbasesupport.blob.core.windows.net/public-icons/kroschke/ksi_logo.png",
  faviconUrl:
    "https://qmbasesupport.blob.core.windows.net/public-icons/kroschke/favicon.png",
  footerCommunity: {},
  thisUrl: "https://help.kroschke.guard.com",
  accountBaseUrl: "https://app.kroschke.guard.com",
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: `${whiteLabel.productDisplayName} - Docs`,
  tagline: `Hier finden Sie die ${whiteLabel.productDisplayName}-Dokumentation und Tutorials für Einsteiger und Experten`,
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
        alt: "Navbar brand",
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
      }">Data Privacy</a>`,
    },
    gtag: {
      trackingID: "UA-75841800-1",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      // This is a read-only, search-only key served directly by the front-end, managed by Algolia via their
      // free DocSearch program. The key is not sensitive. See https://docsearch.algolia.com/ for more details.
      apiKey: "99381f4187b509ae47c20ddc7c68df91",
      indexName: "qmbase",
    },
    // announcementBar: {
    //   id: "supportus",
    //   content:
    //     '⭐️ If you like qmBase, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/qmbase/docs">GitHub</a>! ⭐️',
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
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
          },
          // Please change this to your repo.
          editUrl: "https://github.com/qmBase/docs/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
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
        routeBasePath: "Roadmap",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./roadmap",
      },
    ],
  ],
};

module.exports = config;
