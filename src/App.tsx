import React, { useState } from 'react';
import './global.less';
import img from '@/assets/images/wulei.jpeg';
import { demo } from '@/utils';

function App() {
  const name: string = 'snowden444';
  const [count, setCount] = useState(0);

  console.log('demo', demo());

  return (
    <div>
      <img src={img} alt="img" />
      <input value={count} />
      {name}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
