import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./redux/index";
import todosSaga from "./sagas/todos";
import watcherSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);
// store.dispatch({ type: "FETCH_TODOS" });

export default store;
