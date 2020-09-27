// 第三方
import React, { useState } from 'react';
import { Button } from 'antd';

// 项目首页
const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      count {count}
      <Button type="primary" onClick={() => setCount(pre => pre + 1)}>
        Button
      </Button>
    </div>
  );
};

export default Home;
