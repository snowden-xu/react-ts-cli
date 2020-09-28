// 第三方
import React, { FC, useState } from 'react';
import { Button } from 'antd';

// 自定义
import styles from './index.less';

// 项目首页
const Home: FC = () => {
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

Home.defaultProps = {};

export default Home;
