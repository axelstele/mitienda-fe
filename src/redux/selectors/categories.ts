import { RootState } from 'redux/store';
import { createSelector } from 'reselect';

export const selectCategories = (state: RootState) => state.categories;

export const selectCategoriesData = createSelector(
  selectCategories,
  (categories) => categories?.data,
);
