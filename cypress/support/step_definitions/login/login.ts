import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import {LoginPage, FillsLoginForm, ClicksSignInButton, AnalyticsPage} from "./globalLogInSteps";


Given('the user is on the "Login" page', LoginPage);
    
When('the user fill the "loginForm" form', FillsLoginForm);

When('the user click on the "SignIn" button', ClicksSignInButton);

Then('the user should be redirected to the "Analytics" page', AnalyticsPage);
