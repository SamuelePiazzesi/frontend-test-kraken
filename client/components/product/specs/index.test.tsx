import { render } from "@testing-library/react";
import ProductSpecs from ".";

describe("ProductSpecs", () => {
	it("should render correctly", () => {
		const { getByText } = render(
			<ProductSpecs
				brand={"fake brand"}
				weight={20}
				height={2}
				width={4}
				length={8}
				colour="black"
				model_code="#abc"
			/>
		);

		const brand = getByText("fake brand");
		const weight = getByText("20");
		const dimensions = getByText("2 x 4 x 8");
		const modelNUmber = getByText("#abc");
		const color = getByText("black");

		expect(brand).toBeInTheDocument();
		expect(weight).toBeInTheDocument();
		expect(dimensions).toBeInTheDocument();
		expect(modelNUmber).toBeInTheDocument();
		expect(color).toBeInTheDocument();
	});
});
