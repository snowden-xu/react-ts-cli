// 第三方
// https://www.youtube.com/watch?v=9lCmbth63k0
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// 自定义
import styles from './index.less';
import { decrement, increment, incrementByAmount, incrementAsync } from '@/models/counter';

interface State {
  counter: {
    value: number;
  };
}

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const dispatch = useDispatch();
  const count = useSelector((state: State) => state.counter.value);

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
