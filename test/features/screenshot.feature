Feature: Take screenshot

  Scenario: Take screenshot
    Given I am on "/"
    Then I take a screenshot
    Then I take a screenshot "test.png"
    Then I take a screenshot
    Then I should see "error"


  Scenario: Take screenshot
    Given I am on "/"
    Then I take a screenshot
    Then I take a screenshot "test.png"
    Then I take a screenshot
    Then I should see "error"