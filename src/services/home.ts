import request from '@/utils/request';
import { urls } from '@/utils';

// 获取基本配置
export async function getConfigServer() {
  return await request.get(urls.getConfig, {
    method: 'GET',
  });
}
