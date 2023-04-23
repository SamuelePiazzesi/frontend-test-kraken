import { GetServerSideProps } from "next";
import { Product, getProduct } from "../../../api/products";
import ProductImage from "../../../components/product/image";
import ProductDescription from "../../../components/product/description";
import ProductSpecs from "../../../components/product/specs";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ProductQtySelector from "../../../components/product/quantity-selector";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps<{
	product: Product;
}> = async (context) => {
	const { id } = context.query;

	const response = await getProduct(Number(id));

	return {
		props: {
			product: response.product,
			error: response.error || null,
		},
	};
};

export default function ProductDetail({ product, error }: ProductProps) {
	const [cartItems, setCartItems] = useState<Product[]>([]);
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div className="flex flex-col">
			<Header basketItems={cartItems.length} />
			<main className="p-4">
				<ProductImage img_url={product.img_url} name={product.name} />
				<h1 className="text-3xl leading-relaxed mt-4 font-medium">
					{product.name}
				</h1>
				<h5 className="mt-4 text-purplehaze">
					{product.power} // Packet of {product.quantity}
				</h5>
				<ProductQtySelector
					product={product}
					onSelect={(products) =>
						setCartItems((prev) => [...prev, ...products])
					}
				/>
				<ProductDescription description={product.description} />
				<ProductSpecs {...product} />
			</main>
			<Footer />
		</div>
	);
}

type ProductProps = {
	product: Product;
	error?: string;
};
