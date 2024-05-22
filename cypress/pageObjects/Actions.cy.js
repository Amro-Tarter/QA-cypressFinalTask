import Data from "./shared.cy"

const shared =new Data
class Actions{
openBoard(){
    
        cy.get(".boards-page-board-section-list-item").first().click({focus:true})

}
makeACard(cardName){

    cy.get('[data-testid="list-add-card-button"]').first().click({focus:true})
    cy.get('[data-testid="list-card-composer-textarea"]').type(cardName)   
    cy.get('[data-testid="list-card-composer-add-card-button"]').click({focus:true})
    cy.get('[data-testid="CloseIcon"]').click({focus:true})

}
clickOnCard(){
        cy.wait(1500)
        cy.get('[data-testid="list-cards"]').first().click()
}
clickOnArchive(){

        cy.get(".u-clearfix").contains("Archive").click()

}
clickOnDeleteButton(){

        cy.get(".u-clearfix").contains('Delete').click()
}
insureTheDelete(){

        cy.get('[value="Delete"]').click()
}
makeATemplate(){

        cy.get(".u-clearfix").contains("Make template").click({force:true})
        
}

closeTheEditingPage(){
    cy.get('[data-testid="CloseIcon"]').first().click()
} 

updateTemplateName(newName){
        cy.wait(1000)
        cy.get('[data-testid="card-back-title-input"]').clear().type(newName+"{enter}")

}

clickOnMoveTemplate(){

        cy.get('[data-testid="card-back-move-card-button"]').click({force:true})

}
movesTheTemplate(){
        cy.get('[data-testid="move-card-popover-move-button"]').click({force:true})
}


clickOnHideFromList(){

        cy.get('[data-testid="card-back-archive-button"]').click({force:true})
        


}
}export default Actions