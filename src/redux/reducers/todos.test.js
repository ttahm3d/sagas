import todosReducer from "./todos";

describe("Todo Reducer", () => {
	it("should load the initial state", () => {
		expect(todosReducer({}, {})).toEqual({});
	});

	it("should load the todos on FETCH_TODOS Request", () => {
		const todosMockData = [
			{
				id: "1",
				text: "Some random text",
			},
		];

		const successAction = {
			type: "SET_TODOS",
			payload: todosMockData,
		};
		expect(todosReducer({ todos: [] }, successAction)).toEqual({
			todos: todosMockData,
		});
	});
});
