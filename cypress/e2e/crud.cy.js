// cypress/e2e/crud.cy.js

// cypress/e2e/crud.cy.js

import { faker } from '@faker-js/faker/locale/en'

describe('CRUD', () => {
  it('CRUDs a note', () => {
    const noteDescription = faker.lorem.words(4)

    cy.intercept('GET', '**/notes').as('getNotes')
    cy.sessionLogin()

    cy.createNote(noteDescription)
    cy.wait('@getNotes', {timeout: 15000})

    const updatedNoteDescription = faker.lorem.words(4)
    const attachFile = true

    cy.editNote(noteDescription, updatedNoteDescription, attachFile)
    cy.wait('@getNotes', {timeout: 15000})

    cy.deleteNote(updatedNoteDescription)
    cy.wait('@getNotes', {timeout: 15000})
  })
})