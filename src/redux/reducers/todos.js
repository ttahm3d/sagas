import { FETCH_TODOS } from "../constants";

const initialState = {
  todos: []
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
}
