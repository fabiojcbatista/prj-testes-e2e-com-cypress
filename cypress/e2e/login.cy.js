// cypress/e2e/login.cy.js
describe('Login', () => {
  it('successfully signs with email', () => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.guiLogin()
    cy.wait('@getNotes', {timeout: 15000})
    cy.contains('h1', 'Your Notes').should('be.visible')
  })
})