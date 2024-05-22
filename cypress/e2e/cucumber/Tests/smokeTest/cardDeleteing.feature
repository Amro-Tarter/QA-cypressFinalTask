Feature: card creation testing

    Scenario: validate that the user can delete an Existing card
    Given a board should be existing
    When the user clicks on the card
    And the user clicks on the archive button
    And the user clicks on the delete button
    And the user clicks on the insure delete button
    Then the board should be deleted
    
   
