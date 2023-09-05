Feature: fill form

Scenario: Valid fill form

Given the user is on the "Permissions" page
When the user click the "New permission" button
And the user fill the "Create Permission" form
Then the user should be redirected to the "Permissions" page



Feature: fill form

Scenario: Invalid fill form

Given the user is on the "Permissions" page
When the user click the "New permission" button
And the user fill the "Create Permission" form incorrectly
Then the user should stay at the "Create Permission" form