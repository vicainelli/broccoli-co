import React from "react";
import { mount } from "@cypress/react";
import Button from "./";
import "index.css";

it("should renders the primary button correctly", () => {
  mount(
    <Button
      testId="button_primary"
      type="button"
      isDisabled={false}
      isBlock={false}
      variant="primary-outline"
    >
      Button Primary
    </Button>
  );

  cy.get("button")
    .contains("Button Primary")
    .should("have.css", "background-color", "rgb(255, 255, 255)")
    .should("have.css", "border", "2px solid rgb(16, 185, 129)")
    .should("have.css", "font-size", "16px")
    .should("have.css", "color", "rgb(16, 185, 129)");
});

it("should renders the disabled button correctly", () => {
  mount(
    <Button
      testId="button_disabled"
      type="button"
      isDisabled={true}
      isBlock={false}
      variant="primary-outline"
    >
      Button Disabled
    </Button>
  );

  cy.get("button")
    .contains("Button Disabled")
    .should("have.css", "background-color", "rgb(229, 231, 235)")
    .should("have.css", "border", "2px solid rgba(0, 0, 0, 0)")
    .should("have.css", "font-size", "16px")
    .should("have.css", "color", "rgb(156, 163, 175)")
    .and("have.attr", "disabled");
});
