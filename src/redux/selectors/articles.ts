import { RootState } from 'redux/store';
import { createSelector } from 'reselect';

export const selectArticles = (state: RootState) => state.articles;

export const selectArticlesData = createSelector(
  selectArticles,
  (articles) => articles?.data,
);
