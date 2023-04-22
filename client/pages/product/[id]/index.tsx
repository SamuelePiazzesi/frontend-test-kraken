import { GetServerSideProps } from "next";
import { Product, getProduct } from "../../../api/products";

export const getServerSideProps: GetServerSideProps<{
	product: Product;
}> = async (context) => {
	const { id } = context.query;

	try {
		const product = await getProduct(Number(id));
		return {
			props: {
				product,
			},
		};
	} catch (error) {
		return {
			props: {
				product: null,
				statusCode: 404,
			},
		};
	}
};

export default function ProductDetail({ product, statusCode }: ProductProps) {
	return <div>{statusCode}</div>;
}

type ProductProps = {
	product: Product;
	statusCode?: number;
};
