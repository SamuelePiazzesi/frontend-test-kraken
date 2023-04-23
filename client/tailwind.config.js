/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				hemocyanin: "var(--hemocyanin)",
				ice: "var(--ice)",
				plum: "var(--plum)",
				purplehaze: "var(--purpleHaze)",
				siphon: "var(--siphon)",
				soholights: "var(--sohoLights)",
			},
		},
	},
	plugins: [],
};
