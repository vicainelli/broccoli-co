import React from "react";
import { mount } from "@cypress/react";
import App from "./App";
import "index.css";

beforeEach(() => {
  mount(<App />);
});

it("should renders the App correctly", () => {
  cy.get("h1").contains("A better way to enjoy every day.");
  cy.get("button").contains("Request an invite");
});

it("should open / close the signup modal correctly", () => {
  cy.get('[data-testid="modal_signup_form"]').should("not.exist");
  cy.get("button").contains("Request an invite").click();

  cy.get('[data-testid="modal_signup_form"]').should("exist");

  cy.get('[data-testid="close_modal"]').click();
  cy.get('[data-testid="modal_signup_form"]').should("not.exist");
});

it("should return a warning message when try to sign up with an exist email", () => {
  cy.get('[data-testid="modal_signup_form"]').should("not.exist");
  cy.get("button").contains("Request an invite").click();

  cy.get('[data-testid="modal_signup_form"]').should("exist");

  // * Fill the form
  cy.get('[data-testid="name_input"]').clear().type("John Doe");
  cy.get('[data-testid="email_input"]').clear().type("usedemail@airwallex.com");
  cy.get('[data-testid="confirm_email_input"]')
    .clear()
    .type("usedemail@airwallex.com");

  // * Click on the button to send the sign up form
  cy.get('[data-testid="button_send_signup"]').click();

  cy.get('[data-testid="signup_warning_message"]', { timeout: 10000 }).contains(
    "Unfortunatelly was not possible to proccess your request. Please try again later."
  );
});

it("should return a success message when try to sign up with a fresh new email", () => {
  cy.get('[data-testid="modal_signup_form"]').should("not.exist");
  cy.get("button").contains("Request an invite").click();

  cy.get('[data-testid="modal_signup_form"]').should("exist");

  // * Fill the form
  cy.get('[data-testid="name_input"]').clear().type("John Doe");
  cy.get('[data-testid="email_input"]').clear().type("john.doe@broccoli.co");
  cy.get('[data-testid="confirm_email_input"]')
    .clear()
    .type("john.doe@broccoli.co");

  // * Click on the button to send the sign up form
  cy.get('[data-testid="button_send_signup"]').click();

  cy.get('[data-testid="signup_success_message"]', { timeout: 10000 }).contains(
    "You have successfully registered."
  );
});
