import { render } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
	it("should render correctly", () => {
		const { getByAltText } = render(<Header />);
		const header = getByAltText("header logo");
		expect(header).toBeInTheDocument();
	});

	it("should show number of basket items", () => {
		const { getByTitle } = render(<Header basketItems={4} />);
		const basketItems = getByTitle("Basket items");
		expect(basketItems).toBeInTheDocument();
	});
});
