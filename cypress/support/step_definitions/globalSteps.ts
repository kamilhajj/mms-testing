import { Given } from "@badeball/cypress-cucumber-preprocessor"; 
import { loginPage } from "./routes";  
import dotenv from 'dotenv';
dotenv.config();

 Given('the user is on the {string} page', (page) => {
  if(page === 'Login') {
    cy.visit(loginPage); 
  }
});


