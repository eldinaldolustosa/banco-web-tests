describe('Login', () => {
  it('Login com dados validos devem permitir entrada no sistema', () => {
    //Arrange
    cy.visit('http://localhost:4000/')
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()
    //Assert
    cy.contains('H4','Realizar Transferência').should('be.visible') 
  })
  it('Login com dados invalidos devem apresentar mensagem de erro', () => {
    //Arrange
    cy.visit('http://localhost:4000/')
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()
    //cy.get('#login-section > .btn').click()
    
    //Assert
    cy.get('.toast').should('be.visible').and('have.text', 'Erro no login. Tente novamente.')
  })
})