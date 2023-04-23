import { useState } from "react";
import ProductPrice from "../price";
import { Product } from "../../../api/products";

type ProductQtySelectorProps = {
	product: Product;
	onSelect: (quantity: Product[]) => void;
};
const ProductQtySelector = ({ product, onSelect }: ProductQtySelectorProps) => {
	const [quantity, setQuantity] = useState(1);

	return (
		<>
			<div className="flex justify-between my-4 items-center">
				<ProductPrice price={product.price} />

				<div className="flex flex-col items-center">
					<span>QTY</span>
					<div className="flex items-center gap-1">
						<button
							disabled={quantity === 1}
							onClick={() => {
								setQuantity((prev) => prev - 1);
							}}
							className={`h-12 w-12 ${
								quantity > 1 ? "bg-soholights" : "bg-plum"
							} rounded-xl tex-2xl`}
						>
							-
						</button>

						<span
							title="Current quantity"
							className="text-2xl font-medium h-12 w-12 flex justify-center items-center"
						>
							{quantity}
						</span>

						<button
							className="h-12 w-12 bg-soholights rounded-xl tex-2xl"
							onClick={() => {
								setQuantity((prev) => prev + 1);
							}}
						>
							+
						</button>
					</div>
				</div>
			</div>
			<button
				className="bg-soholights text-pl text-siphon  p-4 rounded-xl w-full"
				onClick={() => {
					onSelect(Array(quantity).fill(product));
				}}
			>
				Add to cart
			</button>
		</>
	);
};

export default ProductQtySelector;
