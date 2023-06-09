import Image from "next/image";

type HeaderProps = {
	basketItems?: number;
};
const Header = ({ basketItems }: HeaderProps) => {
	return (
		<header className="flex px-4 justify-between items-center">
			<Image
				src="/octopus-logo.svg"
				alt="header logo"
				width={150}
				height={50}
			/>

			<div className="relative">
				<Image src="/basket.svg" alt="" width={25} height={25} />

				{basketItems ? (
					<span
						title="Basket items"
						className="absolute -top-2 -right-2 bg-soholights rounded-full w-5 h-5 flex items-center justify-center text-white text-xs"
					>
						{basketItems}
					</span>
				) : (
					<></>
				)}
			</div>
		</header>
	);
};

export default Header;
