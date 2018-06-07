import { all, takeEvery, put, fork, call, select } from 'redux-saga/effects'
import actions from './actions'
import UIActions from '../UI/actions'
import {
  getCategories,
  getJoke,
} from '../../utils/api'

export function* fetchCategoriesWatcher() {
  yield takeEvery(actions.FETCH_CATEGORIES, function*() {  
    try {
      yield put(UIActions.setLoading(true))
      const req = yield call(getCategories)
      yield put(actions.setCategories(req.data))
      yield put(UIActions.setLoading(false))
    } catch(error) {
     
    }
  });
}

export function* fetchJokeWatcher() {
  yield takeEvery(actions.FETCH_JOKE, function*({category}) {  
    try {
      yield put(UIActions.setJokeLoading(true))
      const req = yield call(getJoke, category)
      yield put(actions.setJoke(req.data))
      yield put(UIActions.setJokeLoading(false))
    } catch(error) {
     
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchCategoriesWatcher),
    fork(fetchJokeWatcher)
  ]);
}