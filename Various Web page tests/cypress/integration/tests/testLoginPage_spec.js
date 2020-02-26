/* 
Tests are based on the practice page here:
http://the-internet.herokuapp.com
*/

/// <reference types="cypress" />


describe('Test Login page', function() {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/login');
    })

    it('Incorrect Username', () => {
        cy.get('#username').type('tomsmit');
        cy.get('#password').type('SuperSecretPassword!');
        
        cy.get('.radius').should('contain.text', 'Login').click();
        cy.get('#flash').should('contain.text', 'Your username is invalid!');
     })

    it('Incorrect password', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword');
        
        cy.get('.radius').should('contain.text', 'Login').click();
        cy.get('#flash').should('contain.text', 'Your password is invalid!');
     })

     it('Correct Login and Logout', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        
        cy.get('.radius').should('contain.text', 'Login').click();
        cy.get('#flash').should('contain.text', 'You logged into a secure area!');

        cy.get('.radius').should('contain.text', 'Logout').click();
        cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
     })

})