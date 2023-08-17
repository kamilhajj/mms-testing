import { Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

Given('I open mms-filament log in page', () => {
  cy.visit('http://mms-filament.test/admin/login');
});

Then('I log in to the page', () =>{
  cy.get('input[id="email"]').click().type('admin@admin.com');
  cy.get('input[id="password"]').click().type('password');
  cy.contains('Sign in').click();
});

Then('I open the side bar and click on currencies', () =>{
cy.contains('Currencies').click();
});

Then('I click on New currency and fill the form', ()=> {
cy.contains('New currency').click();

cy.get('select#data\\.currency').as('currencySelect')
cy.get('@currencySelect').select('USD')
cy.get('@currencySelect').should('have.value', 'USD')

cy.get('#data\\.symbol').as('dropdown');
cy.get('@dropdown').select('$').should('have.value', '$');

cy.get('select#data\\.name').as('currencySelect'); 
cy.get('@currencySelect').select('United State Dollars'); 
cy.get('@currencySelect').should('have.value', 'United State Dollars');

cy.get('select#data\\.default_rate_usd').as('rateSelect');
cy.get('@rateSelect').select('1.00');
cy.get('@rateSelect').should('have.value','1.00');


 cy.get('button[dusk="filament.forms.data.created_at.open"]').click();
cy.window().then(win => {

  const expectedDate = new win.Date('August 16, 2023 05:02:09');
  const month = expectedDate.toLocaleString('default', { month: 'long' });
  const day = expectedDate.getDate();
  const year = expectedDate.getFullYear();
  const hours = expectedDate.getHours();
  const minutes = expectedDate.getMinutes();
  const seconds = expectedDate.getSeconds();
  const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
  expect(formattedDate).to.eq('August 16, 2023 5:2:9');
});

cy.get('button[dusk="filament.forms.data.updated_at.open"]').click();
cy.window().then(win => {

  const expectedDate = new win.Date('August 16, 2023 05:02:09');
  const month = expectedDate.toLocaleString('default', { month: 'long' });
  const day = expectedDate.getDate();
  const year = expectedDate.getFullYear();
  const hours = expectedDate.getHours();
  const minutes = expectedDate.getMinutes();
  const seconds = expectedDate.getSeconds();
  const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
  expect(formattedDate).to.eq('August 16, 2023 5:2:9');
});

cy.contains('button', 'Create').click();

cy.get('button.filament-sidebar-open-button').click();
});

Then('i open cities', ()=> {
 cy.contains('Cities').click();
});

Then('I click on create city and fill the form', () => {
 cy.contains('New city').click();
 cy.get('#data\\.name')
  .type('Zouk Mosbeh')

  cy.get('select#data\\.district_id')
  .select('Kesrouane')
  .should('have.value', '14')


  cy.get('button[dusk="filament.forms.data.created_at.open"]').click();
  cy.window().then(win => {

    const expectedDate = new win.Date('August 16, 2023 05:02:09');
    const month = expectedDate.toLocaleString('default', { month: 'long' });
    const day = expectedDate.getDate();
    const year = expectedDate.getFullYear();
    const hours = expectedDate.getHours();
    const minutes = expectedDate.getMinutes();
    const seconds = expectedDate.getSeconds();
    const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
    expect(formattedDate).to.eq('August 16, 2023 5:2:9');
  });

  cy.get('button[dusk="filament.forms.data.updated_at.open"]').click();
    
  cy.window().then(win => {

    const expectedDate = new win.Date('August 16, 2023 05:02:09');
    const month = expectedDate.toLocaleString('default', { month: 'long' });
    const day = expectedDate.getDate();
    const year = expectedDate.getFullYear();
    const hours = expectedDate.getHours();
    const minutes = expectedDate.getMinutes();
    const seconds = expectedDate.getSeconds();
    const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
    expect(formattedDate).to.eq('August 16, 2023 5:2:9');
  });
  cy.contains('button', 'Create').click();
})