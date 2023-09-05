Feature: fill form

Scenario: Valid fill form

Given the user is on the "Users" page
When the user click the "New user" button
And the user fill the "Create User" form
Then the user should be redirected to the "Users" page



Feature: fill form

Scenario: Invalid fill form

Given the user is on the "Users" page
When the user click the "New user" button
And the user fill the "Create User" form incorrectly
Then the user should stay at the "Create User" form