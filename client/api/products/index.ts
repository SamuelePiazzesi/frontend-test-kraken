export async function getProduct(
	productId: number
): Promise<Product | undefined> {
	const query = `
		query {
			Product(id: ${productId}) {
				id,
				name,
				price,
				description,
				img_url
			}
		}
	`;
	return fetch(`http://localhost:3001/?query=${query}`)
		.then((res) => res.json())
		.then((res) => {
			if (res.data.Product === null) {
				throw new Error("Product not found");
			}
			return res.data.Product;
		})
		.catch((err) => `Something went wrong: ${err.message}`);
}

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
