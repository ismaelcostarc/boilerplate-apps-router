import { render, screen } from "@testing-library/react";
import KellyGlaucie from ".";

describe("KellyGlaucie", () => {
  it("should render the component", () => {
    const { container } = render(<KellyGlaucie />);

    expect(screen.getByRole("heading", { name: /KellyGlaucie/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
