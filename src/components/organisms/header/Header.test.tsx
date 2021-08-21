import { render, screen } from "@testing-library/react";
import Header from "./";

it("renders the Header correctly", () => {
  render(<Header />);
  const headerEl = screen.getByTestId("app_header");
  expect(headerEl).toBeInTheDocument();

  const appLogo = screen.getByTestId("app_logo");
  expect(appLogo).toBeInTheDocument();
  expect(appLogo.textContent).toEqual("Broccoli & Co");
});
