import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage, fillLoginForm, clickSignIn, validateAnalyticsPage } from './routes';

require('dotenv').config();
const EMAIL = process.env.EMAIL!; 
const PASSWORD = process.env.PASSWORD!;
const BASE_URL = process.env.BASE_URL;


Given('the user is on the {string} page', (page) => {
  if(page === 'Login') {
    cy.visit(`${BASE_URL}/login`);
  }
});

When('the user fill the {string} form', (form) => {
  if(form === 'loginForm') {
    cy.get('#email').type(EMAIL);
    cy.get('#password').type(PASSWORD);
  }
});
// When('the user click on the {string} button', (button) => {
//   if(button === 'SignIn') {
//     clickSignIn();
//   }
// });

// Then('the user should be redirected to the {string} page', (page) => {
//   if(page === 'Analytics') {
//     validateAnalyticsPage();
//   }
// });

