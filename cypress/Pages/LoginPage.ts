

export default class Loginpage {

    static login(username, password){
        cy.fixture('user').then(({username, password}) =>{
            // const username = user.username
            // const password = user.password
            //  cy.get('#login2').click()
            //  cy.get('#loginusername').type(username)
            // cy.get('#loginpassword').type(password)
            // cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
            cy.login(username,password)
        })
            
    }

}