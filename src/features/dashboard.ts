// src/features/dataSlice.ts
import { DashboardProps } from '@/Components/dashboard/initUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface dashboardState {
  dashboard: DashboardProps | null;
}

const initialState: dashboardState = {
  dashboard: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboard: (state:any, action: PayloadAction<DashboardProps>) => {
      state.dashboard = action.payload;
    },
  },
});

export const { setDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
