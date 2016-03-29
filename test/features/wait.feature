Feature: Wait for things to happen

  Scenario: Wait for element contain any text
    Given I am on "/wait"
    Then I press ".fillWaitContent"
    Then I wait 6 second for ".waitContent" to have content

  Scenario: Wait for element contain any text
    Given I am on "/wait"
    Then I press ".fillWaitContent"
    Then I wait for ".waitContent" to have content

  Scenario: Wait for element not contain any text
    Then I press ".cleanWaitContent"
    Then I wait for ".waitContent" to not have content

  Scenario: Wait for element to contain informed text
    Then I press ".fillWaitContent"
    Then I wait for ".waitContent" to contain "test"

  Scenario: Wait for element to contain informed text
    Then I press ".cleanWaitContent"
    Then I wait for ".waitContent" to not contain "test"

  Scenario: Wait for element to match regex
    Then I press ".fillWaitContent"
    Then I wait for ".waitContent" to match t\w{2}t

  Scenario: Wait for element to match regex
    Then I press ".cleanWaitContent"
    Then I wait for ".waitContent" to not match t\w{2}t

  Scenario: Wait for element to be checked
    Then I press ".checkElement"
    Then I wait for ".checkboxElement" to be checked
    Then I wait for ".checkboxElement" to be selected

  Scenario: Wait for element to be unchecked
    Then I press ".uncheckElement"
    Then I wait for ".checkboxElement" to be unchecked
    Then I wait for ".checkboxElement" to not be selected
    Then I wait for ".checkboxElement" to not be checked

  Scenario: Wait for element to exist
    Then I press ".createAnElement"
    Then I wait for "#createdElement" to exist

  Scenario: Wait for element to not exist
    Then I press ".deleteAnElement"
    Then I wait for "#createdElement" to not exist

  Scenario: Wait for element to be disabled
    Then I press ".disableElement"
    Then I wait for ".disabledElement" to be disabled
    Then I wait for ".disabledElement" to not be enabled

  Scenario: Wait for element to be enabled
    Then I press ".enableElement"
    Then I wait for ".disabledElement" to be enabled

  Scenario: Wait for element to have a value
    Then I press ".putValueElement"
    Then I wait for ".disabledElement" to have a value

  Scenario: Wait for element to have no value
    Then I press ".removeValueElement"
    Then I wait for ".disabledElement" to have no value

  Scenario: Wait for element to be invisible
    Given I am on "/wait"
    Then I press ".hideElement"
    Then I wait for ".disabledElement" to be invisible

  Scenario: Wait for element to be visible
    Then I press ".showElement"
    Then I wait for ".disabledElement" to be visible

  Scenario: Wait for element to be not visible
    Then I press ".hideElement"
    Then I wait for ".disabledElement" to not be visible

  Scenario: Wait for element to have an informed value
    Then I press ".putValueElement"
    Then I wait for ".disabledElement" to have the value "I have a value"

  Scenario: Wait for element to not have an informed value
    Then I press ".removeValueElement"
    Then I wait for ".disabledElement" to not have the value "I have a value"

  Scenario: Wait for element to match an informed regex value
    Then I press ".putValueElement"
    Then I wait for ".disabledElement" to match the value I [\w\s]+ value

  Scenario: Wait for element to not match an informed value
    Then I press ".removeValueElement"
    Then I wait for ".disabledElement" to not match the value I [\w\s]+ value
