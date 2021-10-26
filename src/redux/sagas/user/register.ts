import { takeEvery, call, put } from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { register } from 'endpoints/user';
import { push } from 'connected-react-router';
import ACCESS_TOKEN from 'utils/constants/session-storage';

function* callRegister(
  {
    payload: {
      name, email, url, password,
    },
  }
  : { payload: { name: string, email: string, url: string, password: string} },
) {
  try {
    const { data: { accessToken } } = yield call(register, {
      name, email, url, password,
    });
    sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    yield put(push('/dashboard'));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLogin() {
  yield takeEvery(user.register, callRegister);
}
