import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { getTodos } from "./redux/actions/todos";
import { useEffect } from "react";

export default function App() {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	return (
		<div className="App">
			<h1>Todos</h1>

			{todos.map((todo) => (
				<div key={todo.id}>
					<p>{todo.title}</p>
				</div>
			))}
		</div>
	);
}
