//Tests
describe('User-Onboarding App', () => {

    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')

    it('types a name in the name input', () => {
        nameInput()
            .should('exist')
            .type('Daniel')
            .should('have.value', 'Daniel')
    })

    it('types an email in the email input', () => {
        emailInput()
            .should('exist') 
            .type('davarg5@yahoo.com')
            .should('have.value', 'davarg5@yahoo.com')
    })

    it('types a password in the password input', () => {
        passwordInput()
            .should('exist')
            .type('pass1234')
            .should('have.value', 'pass1234')
    })

})