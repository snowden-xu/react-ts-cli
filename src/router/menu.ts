interface IMenuData {
  name: string;
  icon: string;
  path: string;
  code: string;
  children?: IMenuData[];
}

export const menuData: IMenuData[] = [
  {
    name: '首页',
    icon: 'home',
    path: '/',
    code: 'home',
  },
  {
    name: 'Hooks',
    icon: 'hooks',
    path: '/hooks',
    code: 'hooks',
  },
  {
    name: '企业报表',
    icon: 'companyReport',
    path: '/company-report',
    code: 'companyReport',
  },
  {
    name: '数据报表',
    icon: 'dataReport',
    path: '/data-report',
    code: 'dataReport',
  },
  {
    name: 'CRA排行榜',
    icon: 'CRAranking',
    path: '/cra-ranking',
    code: 'CRAranking',
  },
  {
    name: '周报',
    icon: 'weekly',
    path: '/weekly',
    code: 'weekly',
  },
  {
    name: '中心库',
    icon: 'siteLibrary',
    path: '/site-library',
    code: 'siteLibrary',
  },
  {
    name: '论坛',
    icon: 'forum',
    path: '/forum',
    code: 'forum',
  },
  {
    name: '项目',
    icon: 'project',
    path: '/project',
    code: 'project',
    children: [
      {
        name: '项目进展',
        icon: 'projectProgress',
        path: '/project/project-progress',
        code: 'projectProgress',
        children: [
          {
            name: '项目一览',
            icon: 'projectPreview',
            path: '/project/project-preview',
            code: 'projectPreview',
          },
          {
            name: '数据报表',
            icon: 'projectDataReport',
            path: '/project/projectDataReport',
            code: 'projectDataReport',
          },
        ],
      },
    ],
  },
  {
    name: '中心',
    icon: 'site',
    path: '/site',
    code: 'site',
    children: [
      {
        name: '中心一览',
        icon: 'sitePreview',
        path: '/site/site-preview',
        code: 'sitePreview',
      },
      {
        name: '中心风险',
        icon: 'siteRisk',
        path: '/site/site-risk',
        code: 'siteRisk',
      },
    ],
  },
];
