import { runSaga } from "redux-saga";
import { handleTodosLoad } from "./todos";
import { setTodos } from "../redux/actions/todos";
import * as api from "../redux/api";

it("should load todos", async () => {
	const dispatchedActions = [];
	const mockedTodos = [{ id: 1, text: "Done" }];
	api.getTodos = jest.fn(() => Promise.resolve(mockedTodos));

	const fakeStore = {
		dispatch: (action) => dispatchedActions.push(action),
	};

	await runSaga(fakeStore, handleTodosLoad).done;
	expect(api.getTodos.mock.calls.length).toBe(1);
	expect(dispatchedActions).toContainEqual(setTodos(mockedTodos));
});
