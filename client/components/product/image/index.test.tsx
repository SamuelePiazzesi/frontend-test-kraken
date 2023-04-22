import { render } from "@testing-library/react";
import ProductImage from ".";

describe("ProductImage", () => {
	it("should render correctly", () => {
		const { getByAltText } = render(
			<ProductImage name="test image" img_url="https://test" />
		);
		const image = getByAltText("Image of test image");
		expect(image).toBeInTheDocument();
	});
});
