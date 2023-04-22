import { Product } from "../../../api/products";

type ProductDescriptionProps = Pick<Product, "description">;

const ProductDescription = ({ description }: ProductDescriptionProps) => {
	return (
		<section className="mt-4">
			<h2 className="text-2xl font-medium">Description</h2>
			<p className="mt-4 font-light">{description}</p>
		</section>
	);
};

export default ProductDescription;
