import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ArticlesState {
    // eslint-disable-next-line camelcase
    data: Array<{ id: number, title: string, category_id: number,
        images: Array<{ id: number, url: string }> }> | null,
}

// Define the initial state using that type
const initialState: ArticlesState = {
  data: [],
};

const get = createAction('articles/get');
const getSuccess = createAction<ArticlesState>('articles/getSuccess');

export const articles = {
  get,
  getSuccess,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getSuccess: (state, { payload }: PayloadAction<any>) => {
      // eslint-disable-next-line no-param-reassign
      state.data = payload;
    },
  },
});

export default articlesSlice.reducer;
