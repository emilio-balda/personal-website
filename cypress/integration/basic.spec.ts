
context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('Emilio Balda')
      .should('exist')

    cy.get('button span:first')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/contact')
  })
})
