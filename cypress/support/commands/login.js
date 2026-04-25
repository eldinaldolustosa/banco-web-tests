Cypress.Commands.add('loginValidCredential', () => {
    cy.fixture('credentials').then(credential => {
        cy.get('#username').click().type(credential.valida.user)
        cy.get('#senha').click().type(credential.valida.password)
      })
      cy.contains('button', 'Entrar').click()
})
Cypress.Commands.add('loginInvalidCredential', () => {
    cy.fixture('credentials').then(credential => {
        cy.get('#username').click().type(credential.invalida.user)
        cy.get('#senha').click().type(credential.invalida.password)
      })
      cy.contains('button', 'Entrar').click()
})