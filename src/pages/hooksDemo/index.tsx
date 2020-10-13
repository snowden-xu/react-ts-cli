import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import homeApis from '@/services/home';
import { message } from 'antd';

interface IResultData {
  name?: string;
}

const HooksDemo = () => {
  const [state, setState] = useState('');
  const { loading, run } = useRequest<IResultData>(homeApis.getConfigServer, {
    manual: true,
    onSuccess: (result, params) => {
      setState('');
      message.success(`The username was changed to "${params[0]}" !`);
    },
  });
  return (
    <div>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button disabled={loading} type="button" onClick={() => run(state)}>
        {loading ? 'loading' : 'Edit'}
      </button>
    </div>
  );
};

export default HooksDemo;
