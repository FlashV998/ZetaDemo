import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";



const reduxLogger = createLogger({});
const sagaMiddleware = createSagaMiddleware();

const isDevelopment = true
  // process.env.REACT_APP_ENVIRONMENT_VARIABLE === "development";


const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;   // this is used to disable redux-devtools in PROD & available only in dev

const middlewares = [reduxLogger, sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const finalCreateStore = compose(enhancer)(createStore);
const store = finalCreateStore(rootReducer);


sagaMiddleware.run(rootSaga);

export default store;