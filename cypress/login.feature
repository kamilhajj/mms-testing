Feature: Login

Scenario: Valid Login

Given the user is on the "Login" page
When the user fill the "loginForm" form
And the user click on the "SignIn" button
Then the user should be redirected to the "Analytics" page


Scenario: Invalid Login

Given the user is on the "Login" page
When the user fill the "loginForm" form incorrectly
And the user clicks on the "SignIn" button
Then the user should remain on the "Login" page