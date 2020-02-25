/// <reference types="cypress" />


describe('Test Google search page', function() {
    beforeEach(() => {
        cy.clearCookiesLocalStorage()
        cy.visit('https://www.google.co.uk')
    })

    it('Google search page shows a privacy reminder', () => {
        cy.get('.U2J5q').should('contain.text', 'A privacy reminder from Google')
     })

    it('Privacy "Remind me later" button can be selected', () => {
        cy.get('#cnsd').should('contain.text','Remind me later').click()
        cy.get('.U2J5q').should('not.be.visible')
    })

    it('Privacy "Review now" button can be selected', () => {
        cy.get('.APsr1').should('contain.text','Review now').click()
        cy.get('.U2J5q').should('be.hidden')
        cy.get('#cnsw > iframe').should('be.visible')
        cy.go(-2)   
        cy.url().should('eq', 'https://www.google.co.uk/')
    })

    it('"Google apps" button can be selected', () => {
        cy.get('.gb_D').should('have.attr', 'title', 'Google apps')
        cy.get('.gb_D').should('have.attr', 'href', 'https://www.google.co.uk/intl/en/about/products?tab=wh')
        cy.get('#gbwa').click()
    })

    it('Entering a search returns results', () => {
        cy.get('.gLFyf').type('cypress.io')
        cy.get('.erkvQe').should('have.attr', 'role', 'listbox')
        cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').should('have.attr', 'aria-label', 'Google Search').click()
        cy.url().should('include', 'www.google.co.uk/search')
        cy.get('.gLFyf').should('have.attr', 'value', 'cypress.io')
    })
}) 