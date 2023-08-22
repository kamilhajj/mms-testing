import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"; 
 import {loginPage, emailField, passwordField, signInButton} from '../login.constants';
  

Given('the user is on the "Login" page', () => {
  cy.visit(loginPage);
});

When('the user fill the "loginForm" form', () => {
  cy.get(emailField).click().type('admin@admin.com');
  cy.get(passwordField).click().type('password');  
});

When('the user click on the "SignIn" button', () => {
  cy.contains(signInButton).click(); 
});

Then('the user should be redirected to the "Analytics" page', () => {
});