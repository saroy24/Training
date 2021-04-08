const clickAdmin ='#menu_admin_viewAdminModule > b'
const userChild='User'
const clickSearch ='#searchSystemUser_userName'

export default class Home{


static homepage(){
    cy.get(clickAdmin).click()
        cy.contains(userChild).click({force: true})

}

static enterdataUser(){
    cy.get(clickSearch).type('Cecil.Bonaparte')
    cy.get('#searchBtn').click()
    cy.get('.odd > :nth-child(2) > a').click()
    cy.get('#btnSave').click()
    cy.get('#systemUser_userType').select('Admin')
    cy.get('#btnCancel').click()
    cy.get('#resetBtn').click()

}


static logOut(){
    cy.get('#welcome').click()
    cy.contains('Logout').click({force: true})
}
  
       



}