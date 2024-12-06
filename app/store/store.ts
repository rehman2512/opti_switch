import { configureStore } from '@reduxjs/toolkit';
import testReducer from './slices/testSlices';

const store = configureStore({
  reducer: {
    Test_Red: testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
