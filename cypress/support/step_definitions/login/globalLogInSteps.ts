import { ROUTES } from './routes';
require('dotenv').config();
const EMAIL = process.env.EMAIL!; 
const PASSWORD = process.env.PASSWORD!;
const BASE_URL = process.env.BASE_URL;


export function performAction(action, option) {

  switch(action) {

    case 'visitPage':
      if (option === 'Login') {
        cy.visit(ROUTES.login);
      }
      break;
    
    case 'fillForm':
      cy.visit(ROUTES.fillLoginForm);
    
      if (option === 'loginForm') {
        cy.get('#email').type(EMAIL);
        cy.get('#password').type(PASSWORD);
      }
      break;

    case 'clickButton':  
      cy.visit(ROUTES.clickSignin);

      if (option === 'SignIn') {
        cy.get('#signInButton').click();
      }
      break;

    case 'validatePage':
      cy.visit(ROUTES.validateAnalytics);
    
      if (option === 'Analytics') {
      }
      break;

  }

}


