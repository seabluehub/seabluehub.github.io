export const site = {
  title: '留给时间一点空间',
  author: 'YG',
  motto: '心得、感悟、科技、文化',
  description: '网站主要内容为2008年至今多年的知识沉淀、工作心得、个人感悟等。留给时间一点空间。',
  keywords: 'YG, 知识沉淀, 工作心得, 个人感悟',
  email: 'whluoyi@gmail.com',
  startTime: '2008-01-01',
  github: 'https://github.com/TheFlushedBlue',
  x: 'https://x.com/TheFlushedBlue',
  facebook: 'https://www.facebook.com/TheFlushedBlue',
};

export const navItems = [
  { href: '/', label: '首页 (Home)', shortLabel: '首页' },
  { href: '/knowledge/', label: '知识沉淀 (Knowledge)', shortLabel: '知识沉淀' },
  { href: '/work-insights/', label: '工作心得 (Insights)', shortLabel: '工作心得' },
  { href: '/reflections/', label: '个人感悟 (Reflections)', shortLabel: '个人感悟' },
  { href: '/archives/', label: '时间轴 (Archives)', shortLabel: '时间轴' },
  { href: '/about/', label: '关于作者 (About)', shortLabel: '关于作者' },
];

export const adConfig = {
  leancloud: {
    appid: 'Hyq9wkH495DgNHWhDQCOfQSp-gzGzoHsz',
    appkey: 'WaR7nrzhliHj9aVwdQzkdlGd',
    comment: true,
    count: true,
  },
  welcome: { enable: false, interval: 30 },
  start_time: site.startTime,
  passwords: ['efe07af7441da2b69c4a41e42e73be4db47f66010a56900788a458354a7373ec'],
  author: site.author,
  share: { twitter: true, facebook: true, weibo: false, qq: false, wechat: false },
  mathjax: true,
  root: '/',
};
