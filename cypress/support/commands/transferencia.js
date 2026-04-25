Cypress.Commands.add('transferAmount', (originAccount, destinationAccount, amount) => {
    cy.selectComboBox('conta-origem', originAccount)
    cy.selectComboBox('conta-destino', destinationAccount)
    cy.get('#valor').click().type(amount)
    cy.contains('button', 'Transferir').click()
})