import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

const getTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};

function* fetchTodos(action) {
  try {
    const todos = yield call(getTodos);
    yield put({ type: "FETCH_USERS_SUCCESS", payload: todos });
  } catch (err) {
    yield put({ type: "FETCH_USERS_FAILED", payload: err.message });
  }
}

function* todosSaga() {
  yield takeEvery("FETCH_TODOS_REQUEST", fetchTodos);
}

export default todosSaga;
