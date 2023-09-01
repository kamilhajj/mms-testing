Feature: fill currencies form

Scenario: Valid currencies form

Given the user is on the "Currencies " page
When the user click on the "New currency" button
And the user fill the "Create Currency" form 
Then the user created a "Create Currency" form
And the user should be redirected to the "Currencies" page


Scenario: Invalid currencies form

Given the user is on the "Currencies " page
When the user click on the "New currency" button
And the user fill the "Create Currency" form incorrectly
Then the user should stay at the "Create Currency" form 

