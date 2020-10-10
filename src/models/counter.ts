import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { getConfigServer } from '@/services/home';

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number) => async (dispatch: Dispatch) => {
  const res = await getConfigServer();
  console.log(res, 'res');

  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export default counterSlice.reducer;
