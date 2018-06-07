import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import {responsiveStoreEnhancer} from 'redux-responsive'
import reducers from "./reducers";
import rootSaga from "./sagas";

//const history = createHistory()
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]; //other middlewares can be inserted here

let store = createStore(
  combineReducers({
    ...reducers
  }),
  composeWithDevTools(responsiveStoreEnhancer, applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export { store }; //and possibly history if we add routes
