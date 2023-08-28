import { When, Given,Then } from "@badeball/cypress-cucumber-preprocessor";
import { performAction } from './globalLogInSteps';

Given("the user is on the {string} page", (page) => {
  performAction('visitPage', page);
});

When("the user fill the {string} form", (form) => {
  performAction('fillForm', form);
});

When("the user click on the {string} button", (button) => {
  performAction('clickButton', button);  
});

Then("the user should be redirected to the {string} page", (page) => {
  performAction('validatePage', page);
});