describe('Transferencias',() =>{
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credencials').then(credencials => {
            cy.get('#username').click().type(credencials.valida.user)
            cy.get('#senha').click().type(credencials.valida.password)
        })
        cy.contains('button', 'Entrar').click()
        cy.contains('H4','Realizar Transferência').should('be.visible')
    })
    it('Deve transferir quando informo dados e valor validos', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('Maria').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('Joao').click()

        cy.get('#valor').click().type('3000')
        cy.contains('button', 'Transferir').click()
        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})