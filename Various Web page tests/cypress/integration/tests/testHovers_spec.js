/* 
Tests are based on the practice page here:
http://the-internet.herokuapp.com
*/

/// <reference types="cypress" />


describe('Test Cursor Hover', function() {
    before(() => {
        cy.visit('http://the-internet.herokuapp.com/hovers');
    })

    it('Hover reveals content captions', () => {
        cy.get('#page-footer').get('.figcaption').should('be.hidden');
        cy.get('#page-footer').get('.figcaption').invoke('show').should('not.be.hidden');
     })

     it('Captions have user profile links', () => {
        cy.get(':nth-child(3) > .figcaption > a').should('have.attr', 'href', '/users/1').should('have.text', 'View profile');
        cy.get(':nth-child(4) > .figcaption > a').should('have.attr', 'href', '/users/2').should('have.text', 'View profile');
        cy.get(':nth-child(5) > .figcaption > a').should('have.attr', 'href', '/users/3').should('have.text', 'View profile');
     })
})