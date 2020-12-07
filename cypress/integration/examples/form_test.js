//Tests
describe('User-Onboarding App', () => {

    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsCheckbox = () => cy.get('input[name="agree"]')
    const submitBtn = () => cy.get('button')
    const roleInput = () => cy.get('select[name="role"]')

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

    it('checks to see if a user can check the terms of service', () => {
        termsCheckbox()
            .should('exist')
            .should('not.be.checked')
            .click()
            .should('be.checked')
    })

    it('checks to see if a user can submit the form data', () => {
        nameInput()
            .type('Daniel')
        emailInput()
            .type('davarg5@yahoo.com')
        passwordInput()
            .type('davarg16')
        termsCheckbox()
            .click()
        roleInput()
            .select('student')
        submitBtn()
            .should('not.be.disabled')
            .click()
    })

    it('checks for form validation', () => {
        nameInput()
            .type('Daniel')
        submitBtn()
            .should('be.disabled')

    })

})