import { GetServerSideProps } from "next";
import { Product, getProduct } from "../../../api/products";
import Image from "next/image";
import ProductImage from "../../../components/product/image";

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
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div className="h-screen flex flex-col items-center p-4">
			<ProductImage img_url={product.img_url} name={product.name} />
			<h1>{product.name}</h1>
		</div>
	);
}

type ProductProps = {
	product: Product;
	error?: string;
};
