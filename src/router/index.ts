// 第三方
import React from 'react';

// 自定义
import { menuData } from './menu';
import { routerConfig } from './routerConfig';
interface IArrays {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}
interface IMenus {
  path: string;
  code: string;
  children?: IMenus[];
}

// 展平菜单
function getFlatMenuData(menus: IMenus[]) {
  let arrays: IArrays[] = [];
  menus.forEach((item) => {
    if (item.children) {
      arrays.push({
        path: item.path,
        component: routerConfig[item.code],
      });
      arrays = [...arrays, ...getFlatMenuData(item.children)];
    } else {
      arrays.push({
        path: item.path,
        component: routerConfig[item.code],
      });
    }
  });
  return arrays;
}

const routerData = getFlatMenuData(menuData);

export { menuData, routerConfig, routerData };
