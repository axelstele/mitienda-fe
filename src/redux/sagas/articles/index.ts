import { all, fork } from 'redux-saga/effects';
import watchGet from './get';

export default function* articlesSagas() {
  yield all([
    fork(watchGet),
  ]);
}
