import { render, screen } from "@testing-library/react";
import Footer from "./";

it("renders the Header correctly", () => {
  render(<Footer />);
  const footerEl = screen.getByTestId("app_footer");
  expect(footerEl).toBeInTheDocument();
});
