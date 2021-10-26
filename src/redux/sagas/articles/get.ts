import { takeEvery, call, put } from 'redux-saga/effects';
import { articles } from 'redux/reducers/articles';
import get from 'endpoints/articles';
import { global } from 'redux/reducers/global';

function* callGet() {
  yield put(global.showBackdrop());
  try {
    const { data } = yield call(get);
    yield put(articles.getSuccess(data));
  } catch (error) {
    console.log(error);
  }
  yield put(global.hideBackdrop());
}

export default function* watchGet() {
  yield takeEvery(articles.get, callGet);
}
