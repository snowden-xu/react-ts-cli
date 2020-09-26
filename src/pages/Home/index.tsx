// 第三方
import React, { useState } from 'react';

// 项目首页
const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      count {count} <button onClick={() => setCount(pre => pre + 1)}>Button</button>
    </div>
  );
};

export default Home;
