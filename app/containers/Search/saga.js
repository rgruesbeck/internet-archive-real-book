import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TUNES } from 'containers/Tune/constants';
import { tunesLoaded, tuneLoadingError } from 'containers/Tune/actions';

import { Tune } from 'utils/api';

export function* getTunes() {
  try {
    const tunes = yield call(Tune.list);
    yield put(tunesLoaded(tunes));
  } catch (err) {
    yield put(tuneLoadingError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield [
    takeLatest(LOAD_TUNES, getTunes)
  ]
}
