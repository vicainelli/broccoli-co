import React from "react";
import { mount } from "@cypress/react";
import FormSignUp from "./";
import "index.css";

beforeEach(() => {
  mount(<FormSignUp />);
});

it("should return the correct error messages", () => {
  cy.get('[data-testid="name_error_message"]').should("not.exist");
  cy.get('[data-testid="email_error_message"]').should("not.exist");
  cy.get('[data-testid="confirm_email_error_message"]').should("not.exist");

  // * Click on the button to send the sign up form
  cy.get('[data-testid="button_send_signup"]').click();

  // * check input name error messages
  cy.get('[data-testid="name_error_message"]').contains("Name is required");
  cy.get('[data-testid="name_input"]').type("Ab");
  cy.get('[data-testid="name_error_message"]').contains(
    "Name must be at least 3 characters long"
  );
  cy.get('[data-testid="name_input"]').type("Abc");
  cy.get('[data-testid="name_error_message"]').should("not.exist");

  // * check input email error messages
  cy.get('[data-testid="email_error_message"]').contains("Email is required");
  cy.get('[data-testid="email_input"]').type("Ab cd");
  cy.get('[data-testid="email_error_message"]').contains(
    "Email must be a valid email"
  );
  cy.get('[data-testid="email_input"]').clear().type("john.doe@broccoli.co");
  cy.get('[data-testid="email_error_message"]').should("not.exist");

  // * check input confirm email error messages
  cy.get('[data-testid="confirm_email_error_message"]').contains(
    "Email is required"
  );
  cy.get('[data-testid="confirm_email_input"]').type("john.doe@broccoli.com");
  cy.get('[data-testid="confirm_email_error_message"]').contains(
    "Email and Confirm Email do not match"
  );
  cy.get('[data-testid="confirm_email_input"]')
    .clear()
    .type("john.doe@broccoli.co");
  cy.get('[data-testid="confirm_email_error_message"]').should("not.exist");
});

it("should return a warning message when try to sign up with an exist email", () => {
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
