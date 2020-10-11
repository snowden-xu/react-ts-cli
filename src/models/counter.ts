import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import homeServices from '@/services/home';

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
  try {
    const res = await homeServices.getConfigServer();
    console.log(res, 'res');
  } catch (error) {
    console.log('error', error);
  }
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export default counterSlice.reducer;
