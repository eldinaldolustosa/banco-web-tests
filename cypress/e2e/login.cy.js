describe('Login', () => {
  beforeEach(() => {
    //Arrange
    //Add hoock to visit the page before each test  
    cy.visit('/')
    //cy.env('URL', Cypress.env('URL'))
    cy.screenshot('after-visit-page')
  })
    it('Login com dados validos devem permitir entrada no sistema', () => {
      //Act
      cy.loginValidCredential()
      //Assert
      cy.contains('H4','Realizar Transferência').should('be.visible') 
    })
    it('Login com dados invalidos devem apresentar mensagem de erro', () => {
      //Act
      cy.loginInvalidCredential()
      
      //Assert
      //cy.get('.toast').should('be.visible').and('have.text', 'Erro no login. Tente novamente.')
      cy.verifyToastMessage('Erro no login. Tente novamente.')
    })
})