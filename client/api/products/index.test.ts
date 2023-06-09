import { Product, getProduct } from ".";
import fetchMock from "jest-fetch-mock";

describe("getProduct API", () => {
	it("should return the right Product", async () => {
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
		expect(product).toEqual({ product: fakeproduct, error: undefined });
	});

	it("should throw error message if request fails", async () => {
		fetchMock.mockRejectOnce(new Error("fake error message"));
		const badResponse = await getProduct(1);
		expect(badResponse).toEqual({
			product: null,
			error: "Something went wrong: fake error message",
		});
	});

	it("should throw NOT FOUND error message if Product is not found", async () => {
		fetchMock.mockResponseOnce(
			JSON.stringify({ data: { Product: null }, errors: [] })
		);
		const noFoundResponse = await getProduct(999);
		expect(noFoundResponse).toEqual({
			product: null,
			error: "Something went wrong: Product not found",
		});
	});
});
