///<reference types="cypress"/>
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import Actions from "../../../../../pageObjects/Actions.cy"
import Assertions from "../../../../../pageObjects/Assertions.cy"
import Utils from "../../../../../pageObjects/dataUtils.cy"
import Data from "../../../../../pageObjects/shared.cy"
const shared =new Data
const actions=new Actions
const util =new Utils
const assert =new Assertions
before(()=>{
    cy.loginToTrello()
    util.createBoard(shared.boardName)
    actions.openBoard() 
})


Given("a card should be existing",()=>{
    actions.makeACard(shared.cardName)
})
When("the user clicks on the card",()=>{
   // actions.clickOnCard()
    actions.clickOnCard()
    cy.wait(1500)
})

When("the user clicks on the make template button",()=>{
    actions.makeATemplate()
    actions.closeTheEditingPage()
})

Then("the card should be marked as a template",()=>{
  assert.isATemplateCard()  
})

after(() => {
    cy.wait(5000)
    util.deleteBoard()
});
