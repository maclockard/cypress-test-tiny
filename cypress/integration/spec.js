/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://microsoft.github.io/monaco-editor/')

    cy.get('.monaco-editor').should('include.text', 'Game')
    cy.get('.monaco-editor').should('include.text', 'Game of Life')
  })
})
