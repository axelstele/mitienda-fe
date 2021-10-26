import { takeEvery, call, put } from 'redux-saga/effects';
import { categories } from 'redux/reducers/categories';
import get from 'endpoints/categories';
import { global } from 'redux/reducers/global';

function* callGet() {
  yield put(global.showBackdrop());
  try {
    const { data } = yield call(get);
    yield put(categories.getSuccess(data));
  } catch (error) {
    yield console.log(error);
  }
  yield put(global.hideBackdrop());
}

export default function* watchGet() {
  yield takeEvery(categories.get, callGet);
}
