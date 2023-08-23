import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { analyticsPage } from '../routes';
import dotenv from 'dotenv';
dotenv.config(); 

const EMAIL = process.env.EMAIL || 'default@email.com';
const PASSWORD = process.env.PASSWORD || 'defaultpassword';

When('the user fill the {string} form', (form) => {
  if(form === 'loginForm') {
    cy.get('#email').type(EMAIL);
    cy.get('#password').type(PASSWORD); 
  }
});
When('the user click on the {string} button', (button) => {
  if(button === 'SignIn') {
    cy.contains('Sign in').click();
  }
});

Then('the user should be redirected to the {string} page', (page) => {
  if(page === 'Analytics') {
    cy.url().should('include', analyticsPage);
  } 
});

// create a route file in which you store the path of each route
// put the global steps under a global file
// everything from mail password mail url should be placed in .env
// features put them in integration folder hint: you have to change something in the configuration