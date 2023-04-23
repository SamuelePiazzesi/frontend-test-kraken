import { render } from "@testing-library/react";
import Footer from ".";

describe("Footer", () => {
	it("should render correctly", () => {
		const { getByText } = render(<Footer />);
		const footer = getByText(
			"Octopus Energy Ltd is a company registered in England and Wales."
		);
		expect(footer).toBeInTheDocument();
	});
});
