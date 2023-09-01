Feature: fill form

Scenario: Valid Districts

Given the user is on the "Districts" page
When the user clicks on the "New district" button
And the user fill the "Create District" form
Then the user should be redirected to the "Districts" page



Scenario: Invalid Districts

Given the user is on the "Districts" page
When the user clicks on the "New district" button
And the user fill the "Create District" form incorrectly
Then the user should stay at the "Create District" form