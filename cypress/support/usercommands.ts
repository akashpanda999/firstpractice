declare namespace Cypress {
    interface Chainable {
        /**
         * @param username - takes username or id
         * @param password - takes user password
         */
        login(username: string, password: string): Chainable<Element>
    }
}

Cypress.Commands.add('login', (username, password) => {
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.wait(3000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
   
})