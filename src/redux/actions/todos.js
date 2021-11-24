import { FETCH_TODOS } from "../constants";

export const getTodos = () => {
	return {
		type: FETCH_TODOS,
	};
};

export const setTodos = (todos) => {
	return {
		type: "SET_TODOS",
		payload: todos,
	};
};
