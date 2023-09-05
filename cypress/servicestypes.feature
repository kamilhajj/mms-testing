Feature: fill form

Scenario: Valid fill form

Given the user is on the "Service Types" page
When the user click the "New service type" button
And the user fill the "Create Service Type" form
Then the user should be redirected to the "Service Types" page



Feature: fill form

Scenario: Invalid fill form

Given the user is on the "Service Types" page
When the user click the "New service type" button
And the user fill the "Create Service Type" form incorrectly
Then the user should stay at the "Create Service Type" form