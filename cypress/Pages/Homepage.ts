export default class HomePage {

    static checkLogin(){
        cy.get('#nameofuser').should('contain', 'Welcome admin')   
    }

    static selectitem(){
        cy.get('.card-title').contains('Samsung galaxy s7').click()
        cy.wait(2000)
    }

    
}