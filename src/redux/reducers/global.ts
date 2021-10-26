/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface GlobalState {
    isLoading: boolean
}

// Define the initial state using that type
const initialState: GlobalState = {
  isLoading: false,
};

const showBackdrop = createAction('global/showBackdrop');
const hideBackdrop = createAction('global/hideBackdrop');

export const global = {
  showBackdrop,
  hideBackdrop,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    showBackdrop: (state) => {
      state.isLoading = true;
    },
    hideBackdrop: (state) => {
      state.isLoading = false;
    },
  },
});

export default globalSlice.reducer;
