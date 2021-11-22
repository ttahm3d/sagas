import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./redux/index";
import todosSaga from "./redux/sagas/todos";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(todosSaga);

export default store;
