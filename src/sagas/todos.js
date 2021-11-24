import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { setTodos } from "../redux/actions/todos";

const getTodos = async () => {
	// console.log("function is being called");
	// return fetch("https://jsonplaceholder.typicode.com/todos", {
	// 	method: "GET",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// })
	// 	.then((res) => res.json())
	// 	.catch((err) => {
	// 		throw err;
	// 	});

	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await response.json();
	return data;
};

function* handleImagesLoad(action) {
	console.log("inside handler");
	try {
		const todos = yield call(getTodos);
		yield put(setTodos(todos));
		yield put({ type: "FETCH_USERS_SUCCESS", payload: todos });
	} catch (err) {
		yield put({ type: "FETCH_USERS_FAILED", payload: err.message });
	}
}

function* watchTodosLoad() {
	console.log("getting todos");
	yield takeEvery("FETCH_TODOS", handleImagesLoad);
}

export default watchTodosLoad;
