Feature: fill form

Scenario: Valid fill form

Given the user is on the "Stock Brands" page
When the user click the "New stock brand" button
And the user fill the "Create Stock Brand" form
Then the user should be redirected to the "Stock Brands" page



Feature: fill form

Scenario: Invalid fill form

Given the user is on the "Stock Brands" page
When the user click the "New stock brand" button
And the user fill the "Create Stock Brand" form incorrectly
Then the user should stay at the "Create Stock Brand" form