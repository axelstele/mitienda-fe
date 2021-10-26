import { takeEvery, call, put } from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { logout } from 'endpoints/user';
import { push } from 'connected-react-router';
import { global } from 'redux/reducers/global';
import ACCESS_TOKEN from 'utils/constants/session-storage';

function* callLogout() {
  yield put(global.showBackdrop());
  try {
    yield call(logout);
    sessionStorage.removeItem(ACCESS_TOKEN);
    yield put(push('/'));
  } catch (error) {
    console.log(error);
  }
  yield put(global.hideBackdrop());
}

export default function* watchLogout() {
  yield takeEvery(user.logout, callLogout);
}
