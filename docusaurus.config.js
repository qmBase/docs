module.exports = {
  title: 'qmBase - Docs',
  tagline: 'Product Guide',
  url: 'https://qmbase.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://qmbasesupport.blob.core.windows.net/public-icons/qmBase/favicon.png',
  organizationName: 'qmBase', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} qmBase GmbH Built with Docusaurus.`,
    },
    gtag: {
      trackingID: 'UA-141789564-1',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/qmBase/docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
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
