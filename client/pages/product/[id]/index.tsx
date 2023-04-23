import { GetServerSideProps } from "next";
import { Product, getProduct } from "../../../api/products";
import ProductImage from "../../../components/product/image";
import ProductDescription from "../../../components/product/description";
import ProductSpecs from "../../../components/product/specs";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ProductQtySelector from "../../../components/product/quantity-selector";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
		return (
			<div className="flex flex-col h-screen justify-center items-center p-4">
				<Image alt="error" src="/constantine.png" width={200} height={200} />
				<h1 className="flex text-lg text-center ">{error}</h1>
				<Link href="/product/1">
					<h5 className="bg-soholights p-4 mt-4 text-siphon rounded-lg">
						Go to the available product
					</h5>
				</Link>
			</div>
		);
	}
	return (
		<div className="flex flex-col max-w-screen-md m-auto">
			<Header basketItems={cartItems.length} />
			<main className="p-4">
				<div className="flex flex-col md:flex-row gap-4">
					<ProductImage img_url={product.img_url} name={product.name} />
					<div className="flex-1">
						<h1 className="text-3xl leading-relaxed font-medium">
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
					</div>
				</div>

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
