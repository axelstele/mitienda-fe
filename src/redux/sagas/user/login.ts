import { takeEvery, call, put } from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { login } from 'endpoints/user';
import { push } from 'connected-react-router';
import { global } from 'redux/reducers/global';
import ACCESS_TOKEN from 'utils/constants/session-storage';

function* callLogin(
  { payload: { email, password } }: { payload: { email: string, password: string} },
) {
  yield put(global.showBackdrop());
  try {
    const { data: { accessToken } } = yield call(login, { email, password });
    sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    yield put(push('/dashboard'));
  } catch (error) {
    console.log(error);
  }
  yield put(global.hideBackdrop());
}

export default function* watchLogin() {
  yield takeEvery(user.login, callLogin);
}
