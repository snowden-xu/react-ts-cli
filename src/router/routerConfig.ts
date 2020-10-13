// 第三方
import React, { lazy } from 'react';

// 自定义
interface IRouterConfig {
  [propName: string]: React.LazyExoticComponent<() => JSX.Element>;
}

// 路由和组件的映射关系
export const routerConfig: IRouterConfig = {
  home: lazy(() => import('@/pages/home')), // 首页
  hooks: lazy(() => import('@/pages/hooksDemo')), // hooksDemo
  companyReport: lazy(() => import('@/pages/companyReport')), // 企业报表
  dataReport: lazy(() => import('@/pages/dataReport')), // 数据报表
  CRAranking: lazy(() => import('@/pages/craRanking')), // CRA排行榜
  weekly: lazy(() => import('@/pages/weekly')), // 周报
  siteLibrary: lazy(() => import('@/pages/siteLibrary')), // 中心库
  forum: lazy(() => import('@/pages/forum')), // 论坛
  project: lazy(() => import('@/pages/project')), // 项目
  projectProgress: lazy(() => import('@/pages/projectProgress')), // 项目进展
  projectPreview: lazy(() => import('@/pages/projectPreview')), // 项目一览
  projectDataReport: lazy(() => import('@/pages/projectDataReport')), // 数据报表
  site: lazy(() => import('@/pages/site')), // 中心
  sitePreview: lazy(() => import('@/pages/sitePreview')), // 中心一览
  siteRisk: lazy(() => import('@/pages/siteRisk')), // 中心风险
};
