import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CategoriesState {
    data: Array<{ id: number, title: string }> | null,
}

// Define the initial state using that type
const initialState: CategoriesState = {
  data: [],
};

const get = createAction('categories/get');
const getSuccess = createAction<CategoriesState>('categories/getSuccess');

export const categories = {
  get,
  getSuccess,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getSuccess: (state, { payload }: PayloadAction<any>) => {
      // eslint-disable-next-line no-param-reassign
      state.data = payload;
    },
  },
});

export default categoriesSlice.reducer;
