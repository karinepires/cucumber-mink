Feature: Wait for things to happen

  Scenario: Wait for element contain any text
    Given I am on "/wait"
    Then I take a screenshot
    Then I press ".fillWaitContent"
    Then I wait for ".waitContent" to have content
    Then I take a screenshot

  Scenario: Wait for element not contain any text
    Then I take a screenshot
    Then I press ".cleanWaitContent"
    Then I wait for ".waitContent" to not have content
    Then I take a screenshot

  Scenario: Wait for element to contain informed text
    Then I take a screenshot
    Then I press ".fillWaitContent"
    Then I wait for ".waitContent" to contain "test"
    Then I take a screenshot

  Scenario: Wait for element to contain informed text
    Then I take a screenshot
    Then I press ".cleanWaitContent"
    Then I wait for ".waitContent" to not contain "test"
    Then I take a screenshot

  Scenario: Wait for element to match regex
    Then I take a screenshot
    Then I press ".fillWaitContent"
    Then I wait for ".waitContent" to match t\w{2}t
    Then I take a screenshot

  Scenario: Wait for element to match regex
    Then I take a screenshot
    Then I press ".cleanWaitContent"
    Then I wait for ".waitContent" to not match t\w{2}t
    Then I take a screenshot
