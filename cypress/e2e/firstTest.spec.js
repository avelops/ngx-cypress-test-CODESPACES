/// <reference types="cypress" />

describe('First Test Suite', () => {

  it('first test', () => {


    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()


    // by tag name
    cy.get('input')

    // by id
    cy.get('#inputEmail1')

    // by class
    cy.get('.input-full-width')

    // by attribute
    cy.get('[fullwidth]')

    //by attribute and value
    cy.get('[placeholder="Email"]')

    // by entire class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    // by two attributes
    cy.get('[placeholder="Email"][fullwidth]')

    // by tag, attribute, id and class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

    // by cypress test ID
    cy.get('[data-cy="imputEmail1"]')

  })

  it('second test', () => {


    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.contains('Sign in')
    cy.contains('[status="warning"]', 'Sign in')
    cy.contains('nb-card', 'Horizontal form').find('button')
    cy.contains('nb-card', 'Horizontal form').contains('Sign in')
  })


  it.only('third test', () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.get('#exampleInputEmail1')
      .parents('form')
      .find('button')
      .should('contain','Submit')
      .parents('form')
      .find('.custom-checkbox')

  })
})
