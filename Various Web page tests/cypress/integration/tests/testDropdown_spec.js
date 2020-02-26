/* 
Tests are based on the practice page here:
http://the-internet.herokuapp.com
*/

/// <reference types="cypress" />


describe('Test dropdown selector', function() {
    before(() => {
        cy.visit('http://the-internet.herokuapp.com/dropdown');
    })

    it('Check default option', () => {
        cy.get('#dropdown').contains('Please select an option').should('have.attr', 'disabled', 'disabled').should('have.attr', 'selected', 'selected');
        
        cy.get('#dropdown').contains('Option 1').should('have.value', '1').should('not.have.attr', 'selected', 'selected');
        cy.get('#dropdown').contains('Option 2').should('have.value', '2').should('not.have.attr', 'selected', 'selected');
     })

     it('Select Option 1', () => {
        cy.get('#dropdown').select('Option 1').contains('Option 1').should('have.attr', 'selected', 'selected');
        
        cy.get('#dropdown').contains('Please select an option').should('not.have.attr', 'selected', 'selected');
        cy.get('#dropdown').contains('Option 2').should('not.have.attr', 'selected', 'selected');
     })

     it('Select Option 1', () => {
        cy.get('#dropdown').select('Option 2').contains('Option 2').should('have.attr', 'selected', 'selected');
        
        cy.get('#dropdown').contains('Please select an option').should('not.have.attr', 'selected', 'selected');
        cy.get('#dropdown').contains('Option 1').should('not.have.attr', 'selected', 'selected');
     })
})