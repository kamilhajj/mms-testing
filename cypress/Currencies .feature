Feature: fill currencies form

Scenario: Valid currencies form

Given the user is on the "Currencies " page
When the user click on the "New currency" button
And the user the user fill the "Create Currency" form 
Then the user should be redirected to the "Currencies" page

