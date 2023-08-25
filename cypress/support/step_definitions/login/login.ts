import './globalSteps'; 
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {clickSignIn, validateAnalyticsPage} from './routes';




When('the user click on the {string} button', (button) => {
    if(button === 'SignIn') {
      clickSignIn();
    }
  });
  
  Then('the user should be redirected to the {string} page', (page) => {
    if(page === 'Analytics') {
      validateAnalyticsPage();
    }
  });

// create a route file in which you store the path of each route
// put the global steps under a global file
// everything from mail password mail url should be placed in .env
// features put them in integration folder hint: you have to change something in the configuration
