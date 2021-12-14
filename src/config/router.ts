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
    title: '分享动态',
  },
  {
    path: '/mood-draw',
    component: '@/pages/moodDraw/moodDraw',
    title: '心情画像',
  },
  {
    path: '/mood-draw2',
    component: '@/pages/moodDraw/moodDraw2',
    title: '心情画像',
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
        path: '/guide',
        component: '@/pages/guide/guide',
        title: '心理指导',
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
      { redirect: '/home' },
    ],
  },
];
