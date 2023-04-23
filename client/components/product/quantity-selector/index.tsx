import { useEffect, useState } from "react";

type ProductQtySelectorProps = {
	onChange: (quantity: number) => void;
};
const ProductQtySelector = ({ onChange }: ProductQtySelectorProps) => {
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		onChange(quantity);
	}, [quantity]);

	return (
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
	);
};

export default ProductQtySelector;
