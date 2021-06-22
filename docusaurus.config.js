const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "知天",
  tagline:
    "知天是一款优秀的数据可视化搭建体系，帮助非专业的工程师通过图形化的在线 Web 编辑器轻松搭建高质量的可视化应用，满足您的多种数据展示需求。",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "知天",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro/definition",
          position: "left",
          label: "教程",
        },
        { to: "/blog", label: "博客", position: "left" },
        {
          href: "https://github.com/luzhenqian/zhitian-web",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "教程",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "社区",
          // items: [
          //   {
          //     label: "Stack Overflow",
          //     href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //   },
          //   {
          //     label: "Discord",
          //     href: "https://discordapp.com/invite/docusaurus",
          //   },
          //   {
          //     label: "Twitter",
          //     href: "https://twitter.com/docusaurus",
          //   },
          // ],
        },
        {
          title: "更多",
          items: [
            {
              label: "博客",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 知天`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
