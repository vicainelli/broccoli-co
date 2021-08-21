import { render, screen } from "@testing-library/react";
import Button from "./";

it("renders the primary button correctly", () => {
  render(
    <Button
      isDisabled={false}
      isBlock={false}
      testId="button_primary"
      type="button"
      variant="primary-outline"
    >
      Primary
    </Button>
  );
  const button = screen.getByTestId("button_primary");
  expect(button).toBeInTheDocument();
  expect(button.classList).toContain("bg-white");
  expect(button.classList).toContain("text-green-500");
  expect(button.classList).not.toContain("bg-grey-500");
  expect(button.textContent).toEqual("Primary");
});

it("renders the disabled button correctly", () => {
  render(
    <Button
      isDisabled={true}
      isBlock={false}
      testId="button_disabled"
      type="button"
      variant="primary-outline"
    >
      Disabled
    </Button>
  );
  const button = screen.getByTestId("button_disabled");
  expect(button.classList).toContain("bg-gray-200");
  expect(button.classList).toContain("text-gray-400");
  expect(button.classList).not.toContain("bg-green-500");
  expect(button.textContent).toEqual("Disabled");
});
