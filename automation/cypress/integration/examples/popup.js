describe('Tutorialspoint Test', function () {
    // test case
    it('Test Case3', function (){
       // launch the url
       cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
       // click on submit button to produce the alert pop up

      const textval= cy.get('.f22').invoke('text')

      cy.log(textval)
       cy.get('input[type="submit"]').click();
       // firing window: alert event with on() method
       cy.on('window:alert',(txt)=>{
          //Mocha assertions
          expect(txt).to.contains('Your full name cannot be blank.');
       })
    });
 });
 