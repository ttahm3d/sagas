import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { getTodos } from "./redux/actions/todos";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  console.log(todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
