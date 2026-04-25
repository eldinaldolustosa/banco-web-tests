describe('Login', () => {
  beforeEach(() => {
    //Arrange
    //Add hoock to visit the page before each test  
    cy.visit('http://localhost:4000/')
    cy.screenshot('after-visit-page')
  })
    it('Login com dados validos devem permitir entrada no sistema', () => {
      //Act
      cy.get('#username').click().type('julio.lima')
      cy.get('#senha').click().type('123456')
      cy.screenshot('after-type-credentials')
      cy.contains('button', 'Entrar').click()
      cy.screenshot('after-click-login')
      //Assert
      cy.contains('H4','Realizar Transferência').should('be.visible') 
    })
    it('Login com dados invalidos devem apresentar mensagem de erro', () => {
      //Act
      cy.get('#username').click().type('julio.lima')
      cy.get('#senha').click().type('654321')
      cy.contains('button', 'Entrar').click()
      //cy.get('#login-section > .btn').click()
      
      //Assert
      cy.get('.toast').should('be.visible').and('have.text', 'Erro no login. Tente novamente.')
    })
})