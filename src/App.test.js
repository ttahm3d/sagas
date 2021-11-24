import "@testing-library/jest-dom/extend-expect";
import App from "./App";

import { render, screen } from "./test-utils";

describe("Todos", () => {
	it("renders Todo in h1 heading", () => {
		render(<App />);
		const heading = screen.getByText(/Todos/i);
		expect(heading).toBeInTheDocument();
	});
});
