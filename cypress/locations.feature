Feature: fill form

Scenario: Valid fill form

Given the user is on the " Locations" page
When the user click the "New location" button
And the user fill the "Create Location" form
Then the user should be redirected to the "Locations" page



Feature: fill form

Scenario: Invalid fill form

Given the user is on the " Locations" page
When the user click the "New location" button
And the user fill the "Create Location" form incorrectly
Then the user should stay at the "Create Location" form