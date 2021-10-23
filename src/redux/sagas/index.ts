import { all, fork } from 'redux-saga/effects';
import userSagas from './user';

export default function* rootSaga() {
  yield all([
    fork(userSagas),
  ]);
}
