import Data from "./shared.cy"

const shared=new Data
class Assertions{

    isATemplateCard(){
    
           cy.get(".T8p0iZePEoaO1J").should('contain','This card is a template.')
    
    }
    titleUpdated(){
           cy.get('[data-testid="card-back-title-input"]').parent().should('contain',shared.updateTitle)
   
    }
    cardDeleted(){
        cy.get('[data-testid="list-cards"]').should('not.contain',shared.cardName)

    }
    templateHidden(){
        cy.get('[data-testid="list-cards"]').should('not.contain',shared.cardName)
    }
    templateMoved(){
        cy.get('[data-testid="list-cards"]').parent().get('[data-testid="list-header"]').get('[data-testid="list-name"]').should('contain','To Do')
    }
    
}export default Assertions