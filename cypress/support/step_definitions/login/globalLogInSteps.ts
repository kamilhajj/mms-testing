import { routes } from "./routes";

export function visitLoginPage() {
  cy.visit(Cypress.env('BASE_URL') + routes.login);
  cy.url().should('include', routes.login);
}

export function fillLoginForm() {
  cy.url().should('include', routes.fillLoginForm);
  cy.get('[dusk="filament.forms.email"]').click().type(Cypress.env('EMAIL'));
  cy.get('[dusk="filament.forms.password"]').click().type(Cypress.env('PASSWORD'));
}

export function clickSignInButton() {
  cy.url().should('include', routes.clickSignin);
  cy.contains('Sign in').click();
}

export function validateAnalyticsPage() {
  cy.url().should('include', routes.validateAnalytics);
}

