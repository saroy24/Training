
//<reference types="cypress-iframe" />

import LoginOMS from '../../ResuseFunction/LoginClassFile'

describe("TestCase Hooks", () => {

  before(function() {
    // runs once before all tests in the block
    cy.fixture('testdata').then(function(data)
    {
     this.data=data
    })
  })


    beforeEach(function(){
    //Runs before all tests inside describedby
    //setup data structure
    // reset environment
    cy.visit("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login")
    
    })



    //it('Home page validation', function() =>{
      it.skip('My FirstTest case',function() {

        cy.get('#txtUsername').type(this.data.userId)

        //1st method to get the text from web element
        //const textval= cy.get('#spanCopyright').text()
                cy.get('#spanCopyright > a').invoke('text')
        cy.get('#spanCopyright > a').invoke('text').then(paths => {
          // path = "/articles/234234234"

          expect(paths.trim()).equal(this.data.text);

        //  cy.wait(899999999999999999)

          const articleID = paths;
          cy.log(articleID)
          cy.wrap(articleID).as('articleID');
        });
      
// 2nd  way to get data from web element

        cy.get('#spanCopyright > a').should(($div) => {
          const text1 = $div.text()
          //cy.log(text1)
          //cy.wait(2000000000)
          expect(text1).to.match(/OrangeHRM/)
          expect(text1).to.include('HRM')
          expect(text1).not.to.include('test')
        })
        
       cy.get('#spanCopyright > a').invoke('text').then((text) => {
          expect(text.trim()).equal('OrangeHRM');
          
   });
 

        cy.get('#txtPassword').type(this.data.pwd)

        cy.get('#btnLogin').as ('buttons')
        


        cy.get('#btnLogin').click()
        cy.frameLoaded('#rightMenu')
        cy.iframe().find('#empsearch_employee_name_empName').eq(0).type('Pramila')

      cy.contains('General Information').click({force:true}) 
        
    })
    
    it.skip('Login Class import methods', () =>{
    
        LoginOMS.LoginOMS()

        LoginOMS.LoginOMSClickSignIn()

        LoginOMS.enterData('Pramila')

      //  cy.get('.companyinfo').contains('General Information').click() 
        
    })

    it('open child windows', () =>{

    //  cy.get('#nav-link-accountList-nav-line-1').click()
     // cy.get('[href="http://www.youtube.com/results?search_query=orangehrm&search_type="] > img').invoke('removeAttr','target').click()
//a[href="/help"]
     cy.get('#spanSocialMedia >a[href="http://www.linkedin.com/groups?home=&gid=891077"]').invoke('removeAttr','target').click({force : true})

    })

})    