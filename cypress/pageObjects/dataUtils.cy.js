import Data from "./shared.cy"
const shared=new Data
let boardID
let boardUrl

class Utils{
    createBoard(boardName){
       cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${shared.APIKey}&token=${shared.APIToken}`).then((response)=>{
        boardUrl=response.body.url
        boardID=response.body.id
        cy.log(boardID)
    }) 
        return 
    }
    deleteBoard(){
       cy.request("DELETE",`https://api.trello.com/1/boards/${boardID}?key=${shared.APIKey}&token=${shared.APIToken}`)
        return
    }
}export default Utils