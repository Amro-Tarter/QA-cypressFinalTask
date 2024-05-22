///<reference types="cypress"/>
import{Given, When , Then}from "cypress-cucumber-preprocessor/steps";
import Utils from "../../../../../pageObjects/dataUtils.cy";
import Actions from "../../../../../pageObjects/Actions.cy";
import Data from "../../../../../pageObjects/shared.cy"
import Assertions from "../../../../../pageObjects/Assertions.cy";
const assert=new Assertions
const shared =new Data
const util =new Utils
const actions =new Actions
before(()=>{
    cy.loginToTrello()
    util.createBoard(shared.boardName)
    actions.openBoard()

})

Given("a board should be existing",()=>{
    actions.makeACard(shared.cardName)
})



When("the user clicks on the card",()=>{
    actions.clickOnCard()
    cy.screenshot({capture:'fullPage'})
    cy.wait(2000)

})
When("the user clicks on the archive button",()=>{
    actions.clickOnArchive()
    cy.wait(2000)

})
When("the user clicks on the delete button",()=>{
    actions.clickOnDeleteButton() 
    cy.wait(2000) 

})
When("the user clicks on the insure delete button",()=>{
    
actions.insureTheDelete()
cy.wait(2000)
})
Then("the board should be deleted",()=>{
    assert.cardDeleted()
})
after(() => {
    cy.wait(5000)
    util.deleteBoard()
});
