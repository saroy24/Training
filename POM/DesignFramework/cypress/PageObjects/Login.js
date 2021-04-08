
export const usercss = '//input[@id="txtUsername"]'
export const passwordcss= '//input[@id="txtPassword"]'
export const clickSubmitcss='#btnLogin'


export default class Login {

static login () {
    cy.xpath(usercss).type('Admin')
    cy.xpath(passwordcss).type('admin123')
    
}

static submit(){
    cy.get(clickSubmitcss).click()


}

}