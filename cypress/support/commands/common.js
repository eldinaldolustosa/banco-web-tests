Cypress.Commands.add('verifyToastMessage', messageCheck => {
    cy.get('.toast').should('have.text', messageCheck)
})

Cypress.Commands.add('selectComboBox', (labelField, option) => {
    cy.get(`label[for="${labelField}"]`).parent().as(`campo-${labelField}`)
    cy.get(`@campo-${labelField}`).click()
    cy.get(`@campo-${labelField}`).contains(option).click()
})