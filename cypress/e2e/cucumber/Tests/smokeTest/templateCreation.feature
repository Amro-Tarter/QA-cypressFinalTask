Feature: template creation testing

    Scenario: validate that the user can create a template
    Given a card should be existing
    When the user clicks on the card
    And the user clicks on the make template button
    Then the card should be marked as a template