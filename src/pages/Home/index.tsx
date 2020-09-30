// 第三方
import React, { useEffect } from 'react';
import Counter from '@/components/Counter';

// 自定义
import { getConfigServer } from '@/services/home';

const Home = () => {
  useEffect(() => {
    getConfigServer();
  }, []);
  return <Counter />;
};

export default Home;
