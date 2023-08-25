
export const loginPage = () => {
    cy.visit('http://mms-filament.test/admin/login');
  }
  
  export const fillLoginForm = () => {
    cy.get('#email').type('admin@admin.com');
    cy.get('#password').type('password'); 
  }
  
  export const clickSignIn = () => {
    cy.get('button[type="submit"]').click();
  }
  
  export const validateAnalyticsPage = () => {
    cy.contains('Analytics').should('be.visible');
  }