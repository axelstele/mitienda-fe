import { takeEvery, call, put } from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { login } from 'endpoints/user';
import { push } from 'connected-react-router';

function* callLogin(
  { payload: { email, password } }: { payload: { email: string, password: string} },
) {
  try {
    const { data: { accessToken } } = yield call(login, { email, password });
    sessionStorage.setItem('accessToken', accessToken);
    yield put(push('/home'));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLogin() {
  yield takeEvery(user.login, callLogin);
}
