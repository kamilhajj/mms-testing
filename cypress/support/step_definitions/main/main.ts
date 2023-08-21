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


Then('I open the side bar and click on Countries', () =>{
    cy.get('button.filament-sidebar-open-button').click();
    cy.contains('Countries').click();
    });

 Then('I click on New country and fill the form', () =>{
    cy.contains('New country').click();
    cy.contains('Name').click().type('Zouk Mosbeh');
    cy.get('button[dusk="filament.forms.data.created_at.open"]')
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

  cy.get('button[dusk="filament.forms.data.updated_at.open"]')
    
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
   });


   Then('I open the side bar and click on Locations', () =>{
    cy.get('button.filament-sidebar-open-button').click();
    cy.contains('Locations').click();
    });

    Then('I click on New location and fill the form', () =>{
     cy.contains('New location').click();
     cy.contains('Name').click().type('Kamil');
    
     cy.get('#data\\.country_id')
     .as('countrySelect'); 
     cy.get('@countrySelect')
     .select('Albania');
     cy.get('@countrySelect')
     .should('have.value', '2');
      
     cy.get('#data\\.city_id')
    .as('citySelect');
     cy.get('@citySelect')
    .select('Aamriyeh'); 
      cy.get('@citySelect')
    .should('have.value', '9');

    cy.get('button[dusk="filament.forms.data.created_at.open"]')
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

  cy.get('button[dusk="filament.forms.data.updated_at.open"]')
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
   
 });

    // Then('I open the side bar and click on Service Types', () =>{

    //     cy.get('button.filament-sidebar-open-button').click();
    //     cy.contains('Analytics').click();
    //     });

    //  Then('I click on New service type and fill the form', () =>{
    //     cy.contains('New service type').click();
    //     cy.contains('Name').click().type('Service 5');
    //     cy.contains('button', 'Create').click();
    //  });

     Then('I open the side bar and click on Stock Brands', () =>{
        cy.get('button.filament-sidebar-open-button').click();
        cy.contains('Stock Brands').click();
        });

        Then('I click on New stock brand and fill the form', () =>{
            cy.contains('New stock brand').click();
            cy.contains('Name').click().type('Kamil 5');

            cy.get('button[dusk="filament.forms.data.created_at.open"]')
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

            cy.get('button[dusk="filament.forms.data.updated_at.open"]')
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
         });

         Then('I open the side bar and click on Stock Types', () =>{
            cy.get('button.filament-sidebar-open-button').click();
            cy.contains('Stock Types').click();
            });


         Then('I click on New stock type and fill the form', () =>{
            cy.contains('New stock type').click();
             cy.contains('Name').click().type('Kamil service 5');
    
            cy.get('button[dusk="filament.forms.data.created_at.open"]')
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
    
                cy.get('button[dusk="filament.forms.data.updated_at.open"]')
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
             });


             Then('I open the side bar and click on Permissions', () =>{
                cy.get('button.filament-sidebar-open-button').click();
                cy.contains('Permissions').click();
                });

             
             Then('I click on New permission and fill the form', () =>{
                 cy.contains('Name').type('kamil permisiion');
                 cy.contains('button', 'Create').click();
             });

             Then('I open the side bar and click on Roles', () =>{
                cy.get('button.filament-sidebar-open-button').click();
                cy.contains('Roles').click();
                });

                Then('I click on New role and fill the form', () =>{
                 cy.contains('New role').click();
                 cy.contains('Name').click().type('nurse');
                 cy.get('#data\\.permission_id')
                 .as('permissionSelect');             
                 cy.get('@permissionSelect')
                 .type('appointment.view'); 
                 cy.get('@permissionSelect')
                 .type('{enter}'); 
                 cy.get('@permissionSelect').should('contain', 'appointment.view');
                });