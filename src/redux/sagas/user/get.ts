import { takeEvery, call, put } from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { get } from 'endpoints/user';
import { push } from 'connected-react-router';

function* callGet(
  { payload: { company } }: { payload: { company: string }},
) {
  try {
    const { data } = yield call(get, { company });
    console.log('data', data);
  } catch (error) {
    yield put(push('/'));
  }
}

export default function* watchGet() {
  yield takeEvery(user.get, callGet);
}
