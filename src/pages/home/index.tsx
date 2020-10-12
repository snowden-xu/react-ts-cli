// 第三方
import React from 'react';
// import { Spin } from 'antd';
import { useRequest } from 'ahooks';

// 自定义
// import Counter from '@/components/Counter';
import homeServices from '@/services/home';
// import useAsyncFn from '@/hooks/useAsyncFn';

const Home = () => {
  const { data, error, loading } = useRequest(homeServices.getConfigServer);
  console.log('data', data);
  // const { value, loading } = state;
  // console.log('value222', value?.name);
  //
  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  // const [state, { toggle }] = useToggle();
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Username: {data?.name}</div>;
  // return (
  //   <>
  //     <div>
  //       <p>Current Boolean: {String(state)}</p>
  //       <p>
  //         <button onClick={() => toggle()}>Toggle</button>
  //       </p>
  //     </div>
  //     <Counter />
  //   </>
  // );
};

export default Home;

// https://github.com/uniquemo/react-netease-music/blob/b268cbd49528bee70a650d299613080d194fdb0d/src/hooks/useMountedState.ts#L3
