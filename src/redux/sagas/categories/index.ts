import { all, fork } from 'redux-saga/effects';
import watchGet from './get';

export default function* categoriesSagas() {
  yield all([
    fork(watchGet),
  ]);
}
