export default class Productpage {

    static verifyproduct(){
        cy.get('#tbodyid td').contains('Samsung galaxy s7').should('be.visible')
        cy.wait(3000)
        cy.get('#tbodyid td').contains('800').should('be.visible')
       
    }

    static clickPlaceOrder(){
        cy.contains('Place Order').click().screenshot('button')
    }

    static fillDetails(){
        cy.get('#name').type('John')
        cy.get('#country').type('USA')
        cy.get('#city').type('Ohio')
        cy.get('#card').type('888888888888')
        cy.get('#card').type('888888888888')
        cy.get('#month').type('January')
        cy.get('#year').type('2022')
       
    }

    static clickPurchase(){
        cy.contains('Purchase').click()
    }

    static verifyPurchase(){
        cy.contains('Thank you for your purchase!').should('be.visible')
        cy.screenshot({capture:'fullPage'})
        cy.get('.confirm').click()
        // cy.get('#cat').should('be.visible').screenshot({capture:'fullPage'})
    }
}