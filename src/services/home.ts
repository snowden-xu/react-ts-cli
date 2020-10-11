import request from '@/utils/request';

// 获取基本配置
async function getConfigServer() {
  return request('467463224ed153482bca7cf6b1602d82/demo');
}

export default {
  getConfigServer,
};
