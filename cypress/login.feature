Feature: Login

  Scenario: Valid login
    Given I am on the login page
    When I enter the email address 
    And I enter the password 
    And I click the sign in button
    Then I should be redirected to the Analytics page
   