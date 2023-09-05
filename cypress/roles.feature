Feature: fill form

Scenario: Valid fill form

Given the user is on the "Roles" page
When the user click the "New role" button
And the user fill the "Create Role" form
Then the user should be redirected to the "Roles" page



Feature: fill form

Scenario: Invalid fill form

Given the user is on the "Roles" page
When the user click the "New role" button
And the user fill the "Create Role" form incorrectly
Then the user should stay at the "Create Role" form