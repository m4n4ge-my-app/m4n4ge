import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  sidebarWidth: number;
}

const initialState: SidebarState = {
  sidebarWidth: 240,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {},
});

export default sidebarSlice.reducer;
