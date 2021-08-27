module.exports = {
  title: 'Imcoco.top 官方文档',
  description: 'Imcoco.top，一个专业的建站神器，已有超过10万+网站使用 Imcoco.top 搭建',
  // base:'/docs/',
  markdown: {
    lineNumbers: true,
  },
  theme: 'vuepress-theme-reco',
  themeConfig: {
    // author
    author: 'jpress',
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // if your docs are in a different repo from your main project:
    docsRepo: 'singcl/vuepress-helper-docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: '编辑此页面',
    lastUpdated: '更新时间', // string | boolean
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    [
      'script',
      {},
      `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?13a39a1b1e7fb17e8f806d1fb6207796";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        `,
    ],
  ],
};
