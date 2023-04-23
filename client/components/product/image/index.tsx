import Image from "next/image";
import { Product } from "../../../api/products";

type ProductImageProps = Pick<Product, "name" | "img_url">;
const ProductImage = ({ name, img_url }: ProductImageProps) => {
	return (
		<div className="h-80 rounded-2xl relative w-full md:w-96">
			<Image
				alt={`Image of ${name}`}
				src={img_url}
				placeholder="blur"
				blurDataURL={img_url}
				layout="fill"
				className="object-fill rounded-2xl"
			/>
		</div>
	);
};

export default ProductImage;
