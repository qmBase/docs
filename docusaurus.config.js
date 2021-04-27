module.exports = {
  title: "qmBase - Docs",
  tagline:
    "Hier finden Sie die qmBase-Dokumentation und Tutorials für Einsteiger und Experten",
  url: "https://help.qmbase.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon:
    "https://qmbasesupport.blob.core.windows.net/public-icons/qmBase/favicon.png",
  organizationName: "qmBase", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "qmBase Docs",
        src:
          "https://qmbasesupport.blob.core.windows.net/public-icons/qmBase/navbarLogo.png",
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
          to: "blog/2021/04/01/roadmap-update-2021-q2",
          label: "Roadmap",
          position: "left",
        },
        {
          href: "https://support.qmbase.com/account/findworkspace",
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
          title: "qmBase",
          items: [
            {
              label: "qmBase.com",
              href: "https://qmbase.com",
            },
            {
              label: "Login",
              href: "https://support.qmbase.com/account/findworkspace",
            },
          ],
        },
        {
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} qmBase GmbH Built with Docusaurus.<br/><a href="https://www.qmbase.com/impressum/">Impressum</a> | <a href="https://www.qmbase.com/datenschutz/">Data Privacy</a>`,
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
            description: "Stay up to date with the latest qmBase changes",
            copyright: `Copyright © ${new Date().getFullYear()} qmBase GmbH`,
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
};
