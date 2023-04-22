export async function getProduct(productId: number): Promise<ProductResponse> {
	const query = `
		query {
			Product(id: ${productId}) {
				id,
				name,
				price,
				description,
				img_url,
				power,
				quantity,
				brand,
				weight,
				height,
				width,
				length,
				model_code,
				colour,
			}
		}
	`;
	return fetch(`http://localhost:3001/?query=${query}`)
		.then((res) => res.json())
		.then((res) => {
			if (res.data.Product === null) {
				throw new Error("Product not found");
			}
			return {
				product: res.data.Product,
			};
		})
		.catch((err) => {
			return {
				product: null,
				error: `Something went wrong: ${err.message}`,
			};
		});
}

export type ProductResponse = {
	product: Product | null;
	error?: string;
};

export type Product = {
	id: number;
	name: string;
	power: string;
	description: string;
	price: number;
	quantity: number;
	brand: string;
	weight: number;
	height: number;
	width: number;
	length: number;
	model_code: string;
	colour: string;
	img_url: string;
};
