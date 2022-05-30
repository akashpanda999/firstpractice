export default class AddCartPage {

    static verifyItem(){
        cy.wait(3000)
        cy.get('.name').contains('Samsung galaxy s7').should('be.visible')
        cy.get('.price-container').should('be.visible')
        cy.screenshot({capture:'fullPage'})
    }

    static clickAddCart(){
        cy.contains('Add to cart').click().screenshot('Add to Cart button')
        /* the Pop up alerts are by default accepted by cypress */
        // cy.on("window:confirm", (t) => {
        //     //verify text on pop-up
        //     expect(t).to.equal("Product added.");
        // })
    }


    static clickOnCart(){
        cy.contains('Cart').click()
        cy.wait(3000)
    }
}