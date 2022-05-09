import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
//rootReducer

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
