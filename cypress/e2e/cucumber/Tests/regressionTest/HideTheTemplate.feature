Feature: Hide a template from a card

    Scenario: validate that the user can hide a template from a card
    Given a template should be existed
    When the user clicks on the template
    And clicks on hide from list
    Then the template should be hidden
