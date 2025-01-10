// src/features/dataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface isAdmin {
  isAdmin: boolean | null;
}

const initialState: isAdmin = {
  isAdmin: null,
};

const isAdminSlice = createSlice({
  name: 'isAdmin',
  initialState,
  reducers: {
    setIsAdmin: (state:any, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setIsAdmin } = isAdminSlice.actions;
export default isAdminSlice.reducer;
