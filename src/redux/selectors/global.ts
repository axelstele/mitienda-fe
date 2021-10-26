import { RootState } from 'redux/store';
import { createSelector } from 'reselect';

export const selectGlobal = (state: RootState) => state.global;

export const selectIsLoading = createSelector(
  selectGlobal,
  (global) => global?.isLoading,
);
