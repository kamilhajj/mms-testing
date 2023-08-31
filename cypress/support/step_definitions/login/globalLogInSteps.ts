import { routes } from "./routes";

export function LoginPage() {
  cy.visit(Cypress.env('BASE_URL') + routes.login);
  cy.url().should('include', routes.login);
}

export function FillsLoginForm() {
  cy.url().should('include', routes.fillLoginForm);
  cy.get('[dusk="filament.forms.email"]').click().type(Cypress.env('EMAIL'));
  cy.get('[dusk="filament.forms.password"]').click().type(Cypress.env('PASSWORD'));
}

export function ClicksSignInButton() {
  cy.url().should('include', routes.clickSignin);
  cy.contains('Sign in').click();
}

export function AnalyticsPage() {
  cy.url().should('include', routes.validateAnalytics);
}

