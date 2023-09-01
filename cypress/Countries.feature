Feature: fill form

Scenario: Valid fill form

Given the user is on the "Countries" page
When the user click the "New country" button
And the user fill the "Create Country" form
Then the user should be redirected to the "Countries" page



Feature: fill form

Scenario: Invalid fill form

Given the user is on the "Countries" page
When the user click the "New country" button
And the user fill the "Create Country" form incorrectly
Then the user should stay at the "Create Country" form