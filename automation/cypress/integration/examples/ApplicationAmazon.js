describe("My First TestCase  Amazon", () => {

    it("Validation of Amazon Page", () => {
    //cy.visit('www.amazon.com')
    amazon
    })
 

    it.skip("view Device 720px", () => {

        cy.viewport(1280,720)
        cy.visit('www.amazon.com')
        cy.screenshot()

        cy.wait(10000)
    })

    it.skip("view Device 1080px", () => {

        cy.viewport(1980,1080)
        cy.visit('www.amazon.com')

        cy.wait(10000)
    })

    it("view Device - iphone x", () => {

        cy.viewport('iphone-8')
        cy.visit('www.amazon.com')

        cy.wait(10000)



    })

    it("view Device - macbook-15", () => {

        cy.viewport('macbook-15')
        cy.visit('www.amazon.com')

        cy.wait(10000)

    })

    it("view Device - samsung-s10", () => {

        cy.viewport('samsung-s10')
        cy.visit('www.amazon.com')

        cy.wait(10000)
        cy.screenshot()
        cy.log('screenshort taken')


    })

    it("screllintoview application", () => {

        cy.visit('www.amazon.com')
        //cy.screenshot()
        cy.get('.navFooterCopyright > ul > .nav_first > .nav_a').scrollintoview()
        cy.wait(10000)
s


    })

})
