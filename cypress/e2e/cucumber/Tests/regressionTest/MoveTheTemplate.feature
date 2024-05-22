Feature: Move a template to another list

    Scenario: validate that the user can move the template to another list in the board
    Given a template should be existed
    When the user clicks on the template
    And clicks on the move button
    And moves the template to another list
    Then the template should be moved to another list


    