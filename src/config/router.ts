export interface Routes {
  path?: string;
  component?: string;
  redirect?: string;
  title?: string;
  routes?: Routes[];
}

export const routes: Routes[] = [
  {
    path: '/online-analysis',
    component: '@/pages/onlineAnalysis/onlineAnalysis',
    title: '在线分析',
  },
  {
    path: '/',
    component: '@/layout/globalLayout/globalLayout',
    routes: [
      {
        path: '/home',
        component: '@/pages/home/home',
        title: '首页',
      },
      {
        path: '/square',
        component: '@/pages/square/square',
        title: '心理广场',
      },
      {
        path: '/mine',
        component: '@/pages/Mine/Mine',
        title: '我的',
      },
    ],
  },
  { redirect: '/home' },
];
