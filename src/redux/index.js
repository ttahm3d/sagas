import { combineReducers } from "redux";
import todos from "./reducers/todos";

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
