import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  sidebarWidth: number;
  mobileOpen: boolean;
  isClosing: boolean;
}

const initialState: SidebarState = {
  sidebarWidth: 260,
  mobileOpen: false,
  isClosing: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    closeDrawer: (state) => {
      state.isClosing = true;
      state.mobileOpen = false;
    },
    endDrawerTransition: (state) => {
      state.isClosing = false;
    },
    toggleDrawer: (state) => {
      if (!state.isClosing) {
        state.mobileOpen = !state.mobileOpen;
      }
    },
  },
});

export const { closeDrawer, endDrawerTransition, toggleDrawer } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
