import { Product, getProduct } from ".";
import fetchMock from "jest-fetch-mock";

describe("getProduct API", () => {
	it("should ", async () => {
		const fakeproduct: Product = {
			id: 1,
			name: "test",
			power: "test",
			description: "test",
			price: 1,
			quantity: 1,
			brand: "test",
			weight: 1,
			height: 1,
			width: 1,
			length: 1,
			model_code: "test",
			colour: "test",
			img_url: "test",
		};

		fetchMock.mockResponseOnce(
			JSON.stringify({
				data: {
					Product: fakeproduct,
				},
				errors: [],
			})
		);
		const product = await getProduct(1);
		expect(product).toEqual(fakeproduct);
	});

	it("should throw error if bad response", async () => {
		fetchMock.mockRejectOnce(new Error("fake error message"));
		const badResponse = await getProduct(1);
		expect(badResponse).toEqual("Something went wrong: fake error message");
	});

	it("should throw not found error message if product not found", async () => {
		fetchMock.mockResponseOnce(
			JSON.stringify({ data: { Product: null }, errors: [] })
		);
		const badResponse = await getProduct(999);
		expect(badResponse).toEqual("Something went wrong: Product not found");
	});
});
