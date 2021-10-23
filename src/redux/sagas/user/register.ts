import { takeEvery, call, put } from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { register } from 'endpoints/user';
import { push } from 'connected-react-router';

function* callRegister(
  { payload: { name, email, password } }
  : { payload: { name: string, email: string, password: string} },
) {
  try {
    const { data: { accessToken } } = yield call(register, { name, email, password });
    sessionStorage.setItem('accessToken', accessToken);
    yield put(push('/home'));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLogin() {
  yield takeEvery(user.register, callRegister);
}
