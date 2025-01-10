// src/features/dataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  data: string | null;
}

const initialState: DataState = {
  data: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state:any, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
