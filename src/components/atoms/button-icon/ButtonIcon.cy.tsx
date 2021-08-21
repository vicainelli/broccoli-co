import React from "react";
import { mount } from "@cypress/react";
import ButtonIcon from "./";
import { Circle } from "react-feather";
import "index.css";

it("should renders the primary button correctly", () => {
  mount(
    <ButtonIcon testId="button_primary">
      <Circle />
    </ButtonIcon>
  );

  cy.get("button")
    .children("svg")
    .should("have.attr", "stroke", "currentColor");
});
