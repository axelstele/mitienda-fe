import { all, fork } from 'redux-saga/effects';
import watchLogin from './login';
import watchGet from './get';
import watchRegister from './register';

export default function* userSagas() {
  yield all([
    fork(watchLogin),
    fork(watchGet),
    fork(watchRegister),
  ]);
}
