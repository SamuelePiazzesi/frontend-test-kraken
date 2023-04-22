import { render } from "@testing-library/react";
import ProductDescription from ".";

describe("ProductDescription", () => {
	it("should render correctly", () => {
		const { getByText } = render(
			<ProductDescription description="test description" />
		);
		const description = getByText("test description");
		expect(description).toBeInTheDocument();
	});
});
