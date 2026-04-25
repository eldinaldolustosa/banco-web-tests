describe('Transferencias',() =>{
    beforeEach(() => {
        cy.visit('/')
        cy.loginValidCredential()
        cy.contains('H4','Realizar Transferência').should('be.visible')
    })
    it('Deve transferir quando informo dados e valor validos', () => {
        //Act
        cy.transferAmount('Maria', 'Joao', '11.00')

        //Assert
        cy.verifyToastMessage('Transferência realizada!')
    })
    it('Deve apresentar mensagem de erro ao tentar transferir valor acima de 5 mil sem o token', () => {
        //Act
        cy.transferAmount('Maria', 'Joao', '6,000.00')
        //Assert
        cy.verifyToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})