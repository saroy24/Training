describe("TestCase Hooks", () => {

before(function(){
//Runs before all tests inside describedby
//setup data structure
// reset environment
cy.visit("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login")

})

after(function() {
// runs after all tests inside describe block are done
    //logout button verification 
   // test clean
   
    cy.get('#option-menu > :nth-child(3) > a').should('be.visible')
    //cy.get('#option-menu > :nth-child(3) > a').click()
    cy.log('after')


})


beforeEach(function(){

// runs before each it block in the describe

cy.log('before each')


})

afterEach(function(){

    // runs before each it block in the describe
    
    cy.log('after each')
    cy.get('#txtPassword').should('be.visible')

    
    
    })

    it('URL validation', () => {

    cy.url().should('includes','orangehrm')

    })


it('2nd case- enter username and password', () => {

    cy.get('#txtUsername').type('opensourcecms')
    cy.get('#txtPassword').should('be.visible')



})

it('3nd case- enter username and password', () => {

    cy.get('#txtPassword').should('be.visible')
    cy.get('#txtPassword').type('opensourcecms')
 

    cy.get('#btnLogin').click()



})

})