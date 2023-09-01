Feature: fill form

Scenario: Valid cities form

Given the user is on the "Cities" page
When the user clicks the "New city" button
And the user fill the "Create City " form
Then the user should be redirected to the "Cities" page




Scenario: Invalid cities form

Given the user is on the "Cities" page
When the user clicks the "New city" button
And the user fill the "Create City" form incorrectly
Then the user stays at the "Create City" form 