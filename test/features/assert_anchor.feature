Feature: I can use cucumber.mink to navigate through anchors

  Background:
    Given I browse "http://localhost:3000/"

  Scenario: Homepage and navigate to anchor
    Given I am on the homepage
    Then  I follow ".btanchor"
      And I should be on "/"
      And the url hash should match ^\#myanchor
