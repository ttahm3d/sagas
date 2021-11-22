import { FETCH_TODOS } from "../constants";

export const getTodos = () => {
  return {
    type: FETCH_TODOS
  };
};
