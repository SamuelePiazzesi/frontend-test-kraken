import { GetServerSideProps } from "next";
import { Product, getProduct } from "../../../api/products";

export const getServerSideProps: GetServerSideProps<{
	product: Product;
}> = async (context) => {
	const { id } = context.query;

	const response = await getProduct(Number(id));

	return {
		props: {
			product: response.product,
			error: response.error,
		},
	};
};

export default function ProductDetail({ product, error }: ProductProps) {
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			{product.name}
		</div>
	);
}

type ProductProps = {
	product: Product;
	error?: string;
};
