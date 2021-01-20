module.exports = {
  title: 'qmBase - Docs',
  tagline: 'Product Guide',
  url: 'https://qmbase.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://qmbasesupport.blob.core.windows.net/public-icons/qmBase/favicon.png',
  organizationName: 'qmBase', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'qmBase',
      logo: {
        alt: 'qmBase Docs',
        src: 'https://qmbasesupport.blob.core.windows.net/public-icons/qmBase/navbarLogo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Dokumentation',
          position: 'left',
        },
        {to: 'blog', label: 'Changelog', position: 'left'},
        {to: 'blog/2021/01/06/roadmap-update-2021-q1', label: 'Roadmap', position: 'left'},
        {
          href: 'https://support.qmbase.com/account/findworkspace',
          label: 'Login',
          position: 'right',
          className:"button button--warning navbarBtn"
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Allgemein',
              to: 'docs/general',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/qmbase/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/qmbase',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/qmbase',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Imprint',
              href: 'https://www.qmbase.com/impressum/',
            },
            {
              label: 'Data Privacy',
              href: 'https://www.qmbase.com/datenschutz/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} qmBase GmbH Built with Docusaurus.`,
    },
    gtag: {
      trackingID: 'UA-75841800-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like qmBase, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/qmbase/docs">GitHub</a>! ⭐️',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/qmBase/docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            description:"Stay up to date with the latest qmBase changes",
            copyright: `Copyright © ${new Date().getFullYear()} qmBase GmbH`,
          },
          // Please change this to your repo.
          editUrl:
            'https://github.com/qmBase/docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
