Feature: Add User Feature
  I want to use this template for add user feature file
  
  @Functional
  Scenario Outline: Add User Page Test Scenario
    Given Open browser and Enter URL
    When Enter username "kiran@gmail.com" and password "123456" 
    And Click on login button
    Then Dashboard page should be display
    Then Click on Users
    Then Click on Add Users
    Then Fill User data "<Username>" and "<Mobile>" and "<Email>" and "<Gender>"  and "<State>" and "<Password>"
    And Click on Submit
    Then User should be added
    And Close the Browser

    Examples: 
      | Username         | Mobile     | Email            | Gender  | State | Password  |
      | rajesh@gmail.com | 9975764251 | rajesh@gmail.com | Male    | HP    | 12345     |
      | john@gmail.com   | 8444564444 | john@gmail.com   | Male    | Punjab| 12575     |
