// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';
import dashboardReducer from '../features/dashboard';
import isAdminReducer from '../features/isAdmin';

const store = configureStore({
  reducer: {
    data: dataReducer,
    dashboard:dashboardReducer,
    isAdmin:isAdminReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
