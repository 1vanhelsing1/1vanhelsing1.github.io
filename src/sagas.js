import { all } from 'redux-saga/effects';
//import UISagas from "./UI/sagas";
import chuckSagas from './redux/chuck/saga';

export default function* rootSaga(getState) {
  yield all([chuckSagas()]);
}
