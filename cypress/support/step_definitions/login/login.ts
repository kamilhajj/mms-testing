import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { visitLoginPage, fillLoginForm, clickSignInButton, validateAnalyticsPage } from "./globalLogInSteps";

Given('the user is on the {string} page', (page) => {
  if(page === 'Login') {
    visitLoginPage();
  }
});

When('the user fill the {string} form', (form) => {
  if(form === 'loginForm') {
    fillLoginForm();
  }
});

When('the user click on the {string} button', (button) => {
  if(button === 'SignIn') {
    clickSignInButton();
  }
});

Then('the user should be redirected to the {string} page', (page) => {
  if(page === 'Analytics') {
    validateAnalyticsPage();
  }
});
