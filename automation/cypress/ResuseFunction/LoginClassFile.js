class login {

    static LoginOMS(){
        cy.get('#txtUsername').type('opensourcecms')
        cy.get('#txtPassword').type('opensourcecms')
    }


     static LoginOMSClickSignIn(){
        cy.get('#btnLogin').click()

    }
     static enterData(Empoyeename){
        cy.iframe().find('#empsearch_employee_name_empName').eq(0).type(Empoyeename)

    }

    
}

export default login