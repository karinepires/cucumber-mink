Feature: I can use cucumber.mink to fill in forms

  Background:
    Given I browse "http://localhost:3000/"

  Scenario: I can select a file
    Given I am on "/form"
    Then I should see "Form Page"
    Then I attach "API.md" to "input[name='file_field']"
    Then I take a screenshot "fileupload.png"
    Then the "input[name='file_field']" field should contain "API.md"
