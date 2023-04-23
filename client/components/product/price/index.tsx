import { Product } from "../../../api/products";

type ProductPriceProps = Pick<Product, "price">;
const ProductPrice = ({ price }: ProductPriceProps) => {
	const formattedPrice = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	}).format(price / 100);

	return <h3 className="text-2xl mt-4 font-medium">{formattedPrice}</h3>;
};

export default ProductPrice;
