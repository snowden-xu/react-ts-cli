// 第三方
import React, { useState } from 'react';
import { Button } from 'antd';

// 自定义
import styles from './index.less';

// 项目首页
const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.test}>
      count {count}
      <Button type="primary" onClick={() => setCount(pre => pre + 1)}>
        Button
      </Button>
    </div>
  );
};

export default Home;
