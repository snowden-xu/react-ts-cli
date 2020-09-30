import request from '@/utils/request';
import { urls } from '@/utils';

// 获取基本配置
export async function getConfigServer() {
  let result = await request.get(urls.getConfig, {
    method: 'GET',
  });
  console.log(result, 'result');
}
