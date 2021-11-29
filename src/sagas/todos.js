import { call, put, takeEvery } from "redux-saga/effects";
import { setTodos } from "../redux/actions/todos";
import { getTodos } from "../redux/api";

// export const getTodos = async () => {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
// 	const data = await response.json();
// 	return data;
// };

export function* handleTodosLoad(action) {
	try {
		const todos = yield call(getTodos);
		yield put(setTodos(todos));
		yield put({ type: "FETCH_TODOS_SUCCESS", payload: todos });
	} catch (err) {
		yield put({ type: "FETCH_TODOS_FAILED", payload: err.message });
	}
}

function* watchTodosLoad() {
	yield takeEvery("FETCH_TODOS", handleTodosLoad);
}

export default watchTodosLoad;
