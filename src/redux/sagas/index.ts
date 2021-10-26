import { all, fork } from 'redux-saga/effects';
import userSagas from './user';
import articlesSagas from './articles';
import categoriesSagas from './categories';

export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(articlesSagas),
    fork(categoriesSagas),
  ]);
}
