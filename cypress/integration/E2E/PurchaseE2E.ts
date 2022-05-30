import { url } from "../../../config"
import AddCartPage from "../../pages/AddCartPage"
import HomePage from "../../pages/Homepage"
import Loginpage from "../../Pages/LoginPage"
import Productpage from "../../pages/ProductPage"



describe("Purchase E2E suite", () => { 

    before(function (){
        cy.visit(url)
        cy.fixture('user').then(user =>{
            const username = user.username
            const password = user.password
            cy.login(username,password)
        //      cy.get('#login2').click()
        //     cy.get('#loginusername').type(username)
        //     cy.get('#loginpassword').type(password)
        //     cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        // Loginpage.login(username, password)

           })
    })

    it("should check Login & select Item", () => {
        HomePage.checkLogin()
        HomePage.selectitem()
    })

    it("should verify & click on Add cart", () => {
        AddCartPage.verifyItem()
        AddCartPage.clickAddCart()
        AddCartPage.clickOnCart()
    })

    it("should place the order successfully",() => {
        Productpage.verifyproduct()
        Productpage.clickPlaceOrder()
        Productpage.fillDetails()
        Productpage.clickPurchase()
        Productpage.verifyPurchase()
    })

    
})