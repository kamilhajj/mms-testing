Feature: Login

Scenario: Valid Login

Given I am on the "Login" page
When I fill the "loginForm" form
And I click the "SignIn" button
Then I should be redirected to the "Analytics" page