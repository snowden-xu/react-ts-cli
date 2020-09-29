import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/models/counter';
// https://redux.js.org/tutorials/essentials/part-1-overview-concepts
export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
