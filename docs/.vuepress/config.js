module.exports = {
  title: 'Imcoco.top 官方文档',
  description: 'Imcoco.top，一个专业的建站神器，已有超过10万+网站使用 Imcoco.top 搭建',
  // base:'/docs/',
  markdown: {
    lineNumbers: true,
  },
  theme: 'vuepress-theme-reco',
  themeConfig: {
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: 'auto',
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
