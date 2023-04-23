import { render } from "@testing-library/react";
import ProductPrice from ".";

describe("ProductPrice", () => {
	it("should render correctly", () => {
		const { getByText } = render(<ProductPrice price={1000} />);
		const price = getByText("£10.00");
		expect(price).toBeInTheDocument();
	});

	it("should format price with GB localization", () => {
		const { getByText } = render(<ProductPrice price={1034} />);
		const price = getByText("£10.34");
		expect(price).toBeInTheDocument();
	});
});
