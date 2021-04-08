
import Login from '../PageObjects/Login'
import Home from '../PageObjects/Home'



describe("My First TestCase  for xpath", () => {

    it.only('Lunching Web Application', () => {

       

        cy.visit(Cypress.config().baseUrl)
        cy.url().should('includes','orangehrm')
                //cy.get('#txtUsername').type('opensourcecms')
                Login.login()
                Login.submit()
                Home.homepage()
                Home.enterdataUser()
                Home.logOut()
        //cy.xpath('//input[@id="txtUsername"]').type('Admin')
       // cy.xpath('//input[@id="txtPassword"]').type('admin123')
        //cy.get('#btnLogin').click()
        // cy.get('#menu_admin_viewAdminModule > b').click()
        // cy.contains('User').click({force: true})
        // cy.get('#searchSystemUser_userName').type('Cecil.Bonaparte')
        // cy.get('#searchBtn').click()
        // cy.get('.odd > :nth-child(2) > a').click()
        // cy.get('#btnSave').click()
        // cy.get('#systemUser_userType').select('Admin')
        // cy.get('#btnCancel').click()
        // cy.get('#resetBtn').click()
        // cy.get('#welcome').click()
        // cy.contains('Logout').click({force: true})

       // cy.frameLoaded('#rightMenu')
        //cy.iframe().find('#empsearch_employee_name_empName').eq(0).type('Pramila')
       // cy.contains('General Information').click({force:true}) 



    })

})