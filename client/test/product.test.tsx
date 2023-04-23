import { render, fireEvent } from "@testing-library/react";

import { Product } from "../api/products";
import ProductDetail, { getServerSideProps } from "../pages/product/[id]";
import { GetServerSidePropsContext } from "next";

const fakeProduct: Product = {
	id: 1,
	name: "Energy saving light bulb",
	price: 2.5,
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

it("should render page without breaking", async () => {
	const { getByText } = render(<ProductDetail product={fakeProduct} />);

	const productTilte = getByText("Energy saving light bulb");

	expect(productTilte).toBeInTheDocument();
});

it("should not render product details is product is null", async () => {
	const { queryByText } = render(
		<ProductDetail product={null} error="some error" />
	);

	const productTitle = queryByText("Energy saving light bulb");

	expect(productTitle).not.toBeInTheDocument();
});

it("should show product power and quantity", async () => {
	const { getByText } = render(<ProductDetail product={fakeProduct} />);

	const productPowerAndQuantity = getByText("1W // Packet of 1");

	expect(productPowerAndQuantity).toBeInTheDocument();
});

it("should be able to increase and decrease product quantity", async () => {
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

it("should be able to add items to the basket", async () => {
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

describe("getServerSideProps", () => {
	it("should return product props if API response is good", async () => {
		fetchMock.mockResponseOnce(
			JSON.stringify({
				data: {
					Product: fakeProduct,
				},
				errors: [],
			})
		);
		const context: GetServerSidePropsContext = {
			query: { id: "1" },
			req: null,
			res: null,
			resolvedUrl: "",
		};
		const value = await getServerSideProps(context);
		expect(value).toEqual({
			props: { product: fakeProduct, error: null },
		});
	});

	it("should return error props if API response is bad", async () => {
		fetchMock.mockRejectOnce(new Error("fake error message"));
		const context: GetServerSidePropsContext = {
			query: { id: "1" },
			req: null,
			res: null,
			resolvedUrl: "",
		};
		const value = await getServerSideProps(context);
		expect(value).toEqual({
			props: {
				error: "Something went wrong: fake error message",
				product: null,
			},
		});
	});
});
