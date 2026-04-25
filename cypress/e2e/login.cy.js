describe('Login', () => {
  beforeEach(() => {
    //Arrange
    //Add hoock to visit the page before each test  
    cy.visit(Cypress.env('URL'))
    //cy.env('URL', Cypress.env('URL'))
    cy.screenshot('after-visit-page')
  })
    it('Login com dados validos devem permitir entrada no sistema', () => {
      //Act
      cy.fixture('credencials').then(credencials => {
        cy.get('#username').click().type(credencials.valida.user)
        cy.get('#senha').click().type(credencials.valida.password)
      })
      cy.screenshot('before-click-login')
      cy.contains('button', 'Entrar').click()
      //Assert
      cy.contains('H4','Realizar Transferência').should('be.visible') 
    })
    it('Login com dados invalidos devem apresentar mensagem de erro', () => {
      //Act
      cy.fixture('credencials').then(credencials => {
        cy.get('#username').click().type(credencials.invalida.user)
        cy.get('#senha').click().type(credencials.invalida.password)
      })
      cy.contains('button', 'Entrar').click()
      //cy.get('#login-section > .btn').click()
      
      //Assert
      cy.get('.toast').should('be.visible').and('have.text', 'Erro no login. Tente novamente.')
    })
})