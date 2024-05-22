///<reference types="cypress"/>
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import Actions from "../../../../../pageObjects/Actions.cy"
import Assertions from "../../../../../pageObjects/Assertions.cy"
import Utils from "../../../../../pageObjects/dataUtils.cy"
import Data from "../../../../../pageObjects/shared.cy"
const shared=new Data
const actions=new Actions
const util =new Utils
const assert =new Assertions
before(()=>{
    cy.loginToTrello()
    util.createBoard(shared.boardName)
    actions.openBoard() 
    actions.makeACard(shared.cardName)
})
Given("a template should be existed",()=>{
    actions.clickOnCard()
    actions.makeATemplate()
    actions.closeTheEditingPage()
})
When("the user clicks on the template",()=>{
    actions.clickOnCard()
})

When("clicks on hide from list",()=>{
    actions.clickOnHideFromList()
    actions.closeTheEditingPage()
})

Then("the template should be hidden",()=>{
    assert.templateHidden()
})