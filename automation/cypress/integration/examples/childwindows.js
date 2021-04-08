describe(" child window  Amazon", () => {

    it("Validation of Amazon Page", () => {
    cy.visit('www.amazon.com')
    cy.get('#nav-link-accountList-nav-line-1').click()
   // cy.get('[href="/help"]').invoke('attr', 'target').should('include', 'sa')
   // const options1 = cy.get('#createAccountSubmit').invoke('attr','text').should('include','www')

    //cy.log(options1)
    //href

    })



    it("open chidwindow", () => {

       // cy.get('[href="/help"]').click()

        cy.get('[href="/help"]').invoke('removeAttr','target').click({force : true})
        cy.get('#twotabsearchtextbox').type('mobiles')
        cy.get('#nav-search-submit-button').click()

        
    })



})