import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sidebar: false,
  },
  reducers: {
    enable: (state) => {
      state.sidebar = true;
    },
    disable: (state) => {
      state.sidebar = false;
    },
  },
});

export const { enable, disable } = sidebarSlice.actions;

export const selectSidebar = (state) => state.sidebar.sidebar;

export default sidebarSlice.reducer;