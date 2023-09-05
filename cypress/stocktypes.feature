Feature: fill form

Scenario: Valid fill form

Given the user is on the "Stock Types" page
When the user click the "New stock type" button
And the user fill the "Create Stock Type" form
Then the user should be redirected to the "Stock Types" page



Feature: fill form

Scenario: Invalid fill form

Given the user is on the "Stock Types" page
When the user click the "New stock type" button
And the user fill the "Create Stock Type" form incorrectly
Then the user should stay at the "Create Stock Type" form