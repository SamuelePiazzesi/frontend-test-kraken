import { fireEvent, render } from "@testing-library/react";
import ProductQtySelector from ".";

describe("QuantitySelector", () => {
	it("should render correctly", () => {
		const fakeOnChange = jest.fn();
		const { getByText } = render(
			<ProductQtySelector onChange={fakeOnChange} />
		);
		const quantitySelector = getByText("1");
		expect(quantitySelector).toBeInTheDocument();
	});

	it("should increase quantity if click on +", () => {
		const fakeOnChange = jest.fn();
		const { getByText } = render(
			<ProductQtySelector onChange={fakeOnChange} />
		);
		const quantitySelector = getByText("1");

		const increaseButton = getByText("+");

		fireEvent.click(quantitySelector);
		expect(quantitySelector).toBeInTheDocument();
	});

	it("should decrease quantity if click on - ", () => {
		const fakeOnChange = jest.fn();
		const { getByText } = render(
			<ProductQtySelector onChange={fakeOnChange} />
		);
		const quantitySelector = getByText("1");
		expect(quantitySelector).toBeInTheDocument();
	});

	it("should fire onChange event if click on +", () => {
		const fakeOnChange = jest.fn();
		const { getByText } = render(
			<ProductQtySelector onChange={fakeOnChange} />
		);
		const quantitySelector = getByText("1");
		expect(quantitySelector).toBeInTheDocument();
	});

	it("should fire onChange event if click on - ", () => {
		const fakeOnChange = jest.fn();
		const { getByText } = render(
			<ProductQtySelector onChange={fakeOnChange} />
		);
		const quantitySelector = getByText("1");
		expect(quantitySelector).toBeInTheDocument();
	});
});
