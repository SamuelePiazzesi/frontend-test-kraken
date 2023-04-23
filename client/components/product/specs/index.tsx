import { Product } from "../../../api/products";

type ProductSpecsProps = Pick<
	Product,
	"brand" | "weight" | "height" | "width" | "length" | "model_code" | "colour"
>;

const ProductSpecs = ({
	brand,
	weight,
	height,
	width,
	length,
	model_code,
	colour,
}: ProductSpecsProps) => {
	return (
		<section className="mt-4">
			<h2 className="text-2xl font-medium">Specifications</h2>
			<table className="mt-4 w-full" cellSpacing={4}>
				<tbody className="table-fixed">
					<tr>
						<td className="py-2">Brand</td>
						<td>{brand}</td>
					</tr>
					<tr>
						<td className="py-2">Item weight (g)</td>
						<td>{weight}</td>
					</tr>
					<tr>
						<td className="py-2">Dimensions (cm)</td>
						<td>
							{height} x {width} x {length}
						</td>
					</tr>
					<tr>
						<td className="py-2">Item Model number</td>
						<td>{model_code}</td>
					</tr>
					<tr>
						<td className="py-2">Colour</td>
						<td>{colour}</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default ProductSpecs;
