Feature: update the template name 

    Scenario: validate that the user can update the name of a template
    Given the template should be existing
    When the user clicks on the template card
    And the user changes the name of the template
    Then the template name should be updated