/* 
Tests are based on the practice page here:
http://the-internet.herokuapp.com
*/

/// <reference types="cypress" />


describe('Test drag and drop', function() {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/drag_and_drop');
    })

    it('Drag "A" to "B" position', () => {
    cy.get('#column-a').drag('#column-b');

    cy.get('#column-a').should('have.text', 'B');
    cy.get('#column-b').should('have.text', 'A');
    })

    it('Drag "B" to "A" position', () => {
        cy.get('#column-b').drag('#column-a');
    
        cy.get('#column-a').should('have.text', 'B');
        cy.get('#column-b').should('have.text', 'A');
    })
})