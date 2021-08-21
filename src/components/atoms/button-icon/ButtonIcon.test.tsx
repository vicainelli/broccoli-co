import { render, screen } from "@testing-library/react";
import ButtonIcon from "./";
import { Circle } from "react-feather";

it("renders the ButtonIcon correctly", () => {
  render(
    <ButtonIcon testId="button_primary">
      <Circle />
    </ButtonIcon>
  );
  const button = screen.getByTestId("button_primary");
  expect(button).toBeInTheDocument();
  expect(button.childElementCount).toEqual(1);
  expect(button.children[0].tagName).toEqual("svg");
});
