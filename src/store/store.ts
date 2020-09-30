import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '@/models/counter';
const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: process.env.NODE_ENV !== 'production' ? middleware : [],
  devTools: process.env.NODE_ENV !== 'production',
});

// https://redux.js.org/tutorials/essentials/part-1-overview-concepts
