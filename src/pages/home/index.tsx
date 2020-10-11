// 第三方
import React, { useEffect } from 'react';
import { Spin } from 'antd';

// 自定义
import Counter from '@/components/Counter';
import homeServices from '@/services/home';
import useAsyncFn from '@/hooks/useAsyncFn';

const Home = () => {
  const [state, fetchData] = useAsyncFn(homeServices.getConfigServer);
  const { value, loading } = state;
  console.log('value222', value?.name);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <>
          <span>{value?.name}</span>
          <Counter />
        </>
      )}
    </div>
  );
};

export default Home;

// https://github.com/uniquemo/react-netease-music/blob/b268cbd49528bee70a650d299613080d194fdb0d/src/hooks/useMountedState.ts#L3
