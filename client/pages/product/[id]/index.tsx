import { GetServerSideProps } from "next";
import { Product, getProduct } from "../../../api/products";
import Image from "next/image";
import ProductImage from "../../../components/product/image";
import ProductDescription from "../../../components/product/description";
import ProductSpecs from "../../../components/product/specs";

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
	console.log(product);
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div className="flex flex-col p-4">
			<ProductImage img_url={product.img_url} name={product.name} />
			<h1 className="text-3xl leading-relaxed mt-4 font-medium">
				{product.name}
			</h1>
			<h5 className="mt-4 text-purplehaze">
				{product.power} // Packet of {product.quantity}
			</h5>
			<ProductDescription description={product.description} />
			<ProductSpecs {...product} />
		</div>
	);
}

type ProductProps = {
	product: Product;
	error?: string;
};
