// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Attorney Online',
  tagline: 'An off-the-cuff courtroom drama simulator.',
  url: 'https://attorneyonline.github.io',
  baseUrl: '/AODocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'attorneyonline', // Usually your GitHub org/user name.
  projectName: 'AODocs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AttorneyOnline/AODocs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Attorney Online',
        logo: {
          alt: 'Attorney Online Logo',
          src: 'img/favicon.ico',
        },
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         // label: 'Tutorial',
        //         // to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         // label: 'Stack Overflow',
        //         // href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         // label: 'Discord',
        //         // href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         // label: 'Twitter',
        //         // href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         // label: 'Blog',
        //         // to: '/blog',
        //       },
        //       {
        //         // label: 'GitHub',
        //         // href: 'https://github.com/AttorneyOnline/AODocs',
        //       },
        //     ],
        //   },
        // ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
