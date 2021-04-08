describe("My First TestCase ", () => {


    it.skip('Lunching Web Application', () => {

    cy.visit("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login")

    cy.url().should('includes','orangehrm')

    })

it.skip('Enter UserName and Password', () =>{
    cy.visit("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login")

    //cy.intercept('https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login').as('getSettings')
// once a request to http://example.com/settings responds, this 'cy.wait' will resolve
//cy.wait('@getSettings')


    cy.waitUntil(() => cy.get('#frmLogin').invoke('attr','title').then((val) => val= 'username'), {
      // errorMsg: 'This is a custom error message', // overrides the default error message
        timeout: 100000, // waits up to 2000 ms, default to 5000
        interval: 500 // performs the check every 500 ms, default to 200
      })
      const checkFunction = () =>
      cy
        .get('#frmLogin')
        .then((cookieValue) => cookieValue && cookieValue.value === 'username')

      cy.waitUntil(checkFunction, {
        interval: 100,
        timeout: 900,
      })
  
      cy.get('#txtUsername').then(($el) => {
        Cypress.dom.isFocused($el)
      })
      
      cy.get('#txtUsername').type('opensourcecms')

      




    cy.get('#txtUsername').should('be.visible')

    cy.get('abc').should('be.visible')

    cy.get('#txtUsername').type('opensourcecms')
    cy.get('#txtPassword').should('be.visible')

    cy.get('#txtPassword').type('opensourcecms')
    cy.get('#btnLogin').should('be.visible')

    cy.get('#btnLogin').click()
    cy.wait(7000)

})

it.skip('check box and radio buttons', () =>{

cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html')
cy.wait(2000)

cy.get(':nth-child(4) > label > .cb1-element',{delay:1000}).scrollIntoView()
cy.wait(5000)


//cy.screenshot();

cy.title().should('include','demo')

cy.get('#isAgeSelected').click()

cy.get(':nth-child(3) > label > .cb1-element',{timeout:10000}).check()
cy.get(':nth-child(4) > label > .cb1-element',{delay:1000}).uncheck()





})
it.skip('Home page validation', () =>{
    cy.visit("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login")
cy.reload()
    cy.get('#txtUsername').type('opensourcecms')
    cy.get('#txtUsername').type('{selectall}')
    cy.wait(9000)
    cy.get('#txtUsername').type('{del}')
    cy.wait(9000)


    cy.get('#txtUsername').clear()
    cy.get('#txtUsername').type('opensourcecms')

    cy.get('#txtPassword').type('opensourcecms')
    cy.get('#btnLogin').click()
    cy.log('before reload')
    cy.log('Clicked Login button')
    cy.log('after reload')

   // cy.wait(7000)
    //cy.pause();
    cy.get('.drop').should('be.visible')
    cy.get('.drop:visible').should('have.length',5)
cy.log('------Length found-------')
    cy.get('#admin > .l1_link > .drop').contains('Admin')
    //cy.get('#leave > .l1_link > span').contains('Leave')
    cy.get('#pim > .l1_link > .drop').contains('PIM')
    cy.get('#leave > .l1_link > span').contains('Leave')


    
})


it('write data in JSON file', () =>{


  cy.writeFile('example.json', 'hiiiiiiiiiiiiiiiiiiiii HOW ARE YOU')
  cy.writeFile('TestCase1.json', {name:'Pramila',age: 25,collage:'ADY'})

  })
  it('Read data from JSON file', () =>{
  cy.readFile('TestCase1.json').its('age')
  cy.readFile('TestCase1.json').its('age').should('eq',25)
  })


})
