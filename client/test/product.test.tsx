import { render, fireEvent } from "@testing-library/react";

import { Product } from "../api/products";
import ProductDetail from "../pages/product/[id]";

const fakeProduct: Product = {
	id: 1,
	name: "Energy saving light bulb",
	price: 2.5,
	img_url: "https://octopus.energy/static/images/products/light-bulb.png",
	description: "A 9W energy saving light bulb",
	quantity: 1,
	power: "1",
	brand: "test",
	weight: 1,
	height: 1,
	width: 1,
	length: 1,
	model_code: "test",
	colour: "test",
};

test("should render page without breaking", async () => {
	const { getByText } = render(<ProductDetail product={fakeProduct} />);

	const productTilte = getByText("Energy saving light bulb");

	expect(productTilte).toBeInTheDocument();
});

test("should not render product details is product is null", async () => {
	const { queryByText } = render(
		<ProductDetail product={null} statusCode={404} />
	);

	const productTilte = queryByText("Energy saving light bulb");

	expect(productTilte).not.toBeInTheDocument();
});

test("should be able to increase and decrease product quantity", async () => {
	const { getByText, getByTitle } = render(
		<ProductDetail product={fakeProduct} />
	);

	const increaseQuantity = getByText("+");

	const currentQuantity = getByTitle("Current quantity");
	expect(currentQuantity).toHaveTextContent("1");

	fireEvent.click(increaseQuantity);
	expect(currentQuantity).toHaveTextContent("2");

	const decreaseQuantity = getByText("-");

	fireEvent.click(decreaseQuantity);
	expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
	const { getByText, getByTitle } = render(
		<ProductDetail product={fakeProduct} />
	);

	const increaseQuantity = getByText("+");

	const currentQuantity = getByTitle("Current quantity");

	fireEvent.click(increaseQuantity);
	fireEvent.click(increaseQuantity);
	fireEvent.click(increaseQuantity);

	expect(currentQuantity).toHaveTextContent("4");

	const addToBasketElement = getByText("Add to cart");
	fireEvent.click(addToBasketElement);

	const basketItems = getByTitle("Basket items");
	expect(basketItems).toHaveTextContent("4");
});
