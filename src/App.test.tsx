import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders the APP page", () => {
  render(<App />);
  const headerEl = screen.getByTestId("app_header");
  expect(headerEl).toBeInTheDocument();

  const footerEl = screen.getByTestId("app_footer");
  expect(footerEl).toBeInTheDocument();

  const pageTitleEl = screen.getByTestId("app_page_title");
  expect(pageTitleEl).toBeInTheDocument();
  expect(pageTitleEl.textContent).toBe("A better way to enjoy every day.");
  expect(footerEl).toBeInTheDocument();

  const buttonOpenSignupModal = screen.getByTestId("button_open_signup_modal");
  expect(buttonOpenSignupModal).toBeInTheDocument();
  expect(buttonOpenSignupModal.textContent).toBe("Request an invite");
});
