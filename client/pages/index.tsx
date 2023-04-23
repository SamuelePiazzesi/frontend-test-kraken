import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="flex flex-col justify-center items-center h-screen p-4">
				<figure>
					<img
						src="https://static.octopuscdn.com/logos/logo.svg"
						alt="Octopus Energy Logo"
					/>
				</figure>
				<h1>Welcome to the Octopus Energy Frontend code test!</h1>

				<Link href="/product/1">
					<p className="p-4 cursor-pointer bg-soholights mt-4 rounded-lg text-siphon">
						Get started by visiting the product page
					</p>
				</Link>
			</div>
		</main>
	);
}
