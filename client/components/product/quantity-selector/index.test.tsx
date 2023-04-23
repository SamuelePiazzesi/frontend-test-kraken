import { fireEvent, render } from "@testing-library/react";
import ProductQtySelector from ".";
import { Product } from "../../../api/products";

const fakeProduct: Product = {
	id: 1,
	name: "Energy saving light bulb",
	price: 2500,
	img_url: "https://octopus.energy/static/images/products/light-bulb.png",
	description: "A 9W energy saving light bulb",
	quantity: 1,
	power: "1W",
	brand: "test",
	weight: 1,
	height: 1,
	width: 1,
	length: 1,
	model_code: "test",
	colour: "test",
};

describe("QuantitySelector", () => {
	it("should render correctly", () => {
		const fakeOnSelect = jest.fn();
		const { getByText } = render(
			<ProductQtySelector onSelect={fakeOnSelect} product={fakeProduct} />
		);
		const quantitySelector = getByText("1");
		expect(quantitySelector).toBeInTheDocument();
	});

	it("should render product price", () => {
		const fakeOnSelect = jest.fn();
		const { getByText } = render(
			<ProductQtySelector onSelect={fakeOnSelect} product={fakeProduct} />
		);
		const label = getByText("£25.00");
		expect(label).toBeInTheDocument();
	});

	it("should increase quantity if click on +", () => {
		const fakeOnSelect = jest.fn();
		const { getByText } = render(
			<ProductQtySelector onSelect={fakeOnSelect} product={fakeProduct} />
		);

		const increaseButton = getByText("+");

		fireEvent.click(increaseButton);
		const quantitySelector = getByText("2");
		expect(quantitySelector).toBeInTheDocument();
	});

	it("should decrease quantity if click on - ", () => {
		const fakeOnSelect = jest.fn();
		const { getByText } = render(
			<ProductQtySelector onSelect={fakeOnSelect} product={fakeProduct} />
		);

		fireEvent.click(getByText("+"));
		const initialQuantity = getByText("2");
		expect(initialQuantity).toBeInTheDocument();

		fireEvent.click(getByText("-"));
		const finalQuantity = getByText("1");
		expect(finalQuantity).toBeInTheDocument();
	});

	it("should fire onSelect event if click on button", () => {
		const fakeOnSelect = jest.fn();
		const { getByRole } = render(
			<ProductQtySelector onSelect={fakeOnSelect} product={fakeProduct} />
		);
		const addToCartButton = getByRole("button", { name: "Add to cart" });
		fireEvent.click(addToCartButton);
		expect(fakeOnSelect).toBeCalled();
	});

	it("should fire onSelect event with exact product quantity", () => {
		const fakeOnSelect = jest.fn();
		const { getByRole, getByText } = render(
			<ProductQtySelector onSelect={fakeOnSelect} product={fakeProduct} />
		);

		const increaseButton = getByText("+");

		fireEvent.click(increaseButton);

		const addToCartButton = getByRole("button", { name: "Add to cart" });
		fireEvent.click(addToCartButton);
		expect(fakeOnSelect).toHaveBeenCalledWith([fakeProduct, fakeProduct]);
	});
});
