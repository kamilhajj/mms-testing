import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import {LoginPage, FillsLoginForm, ClicksSignInButton, AnalyticsPage} from "./globalLogInSteps";


Given('the user is on the {string} page', (page) => {
    if(page === 'Login') {
        LoginPage();
    }
  });


When('the user fill the {string} form', (form) => {
    if(form === 'loginForm') {
        FillsLoginForm();
    }
  });


When('the user click on the {string} button', (button) => {
    if(button === 'SignIn') {
        ClicksSignInButton();
    }
  });


Then('the user should be redirected to the {string} page', (page) => {
    if(page === 'Analytics') {
        AnalyticsPage();
    }
  });
