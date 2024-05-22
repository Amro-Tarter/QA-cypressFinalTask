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
    actions.makeACard(shared.cardName)
})
Given("the template should be existing",()=>{
    actions.clickOnCard()
    actions.makeATemplate()
    actions.closeTheEditingPage()
})
When("the user clicks on the template card",()=>{
    actions.clickOnCard()
})
When("the user changes the name of the template",()=>{
    actions.updateTemplateName(shared.updateTitle)
})
Then("the template name should be updated",()=>{
    assert.titleUpdated()
})
after(() => {
    cy.wait(5000)
    util.deleteBoard()
});
