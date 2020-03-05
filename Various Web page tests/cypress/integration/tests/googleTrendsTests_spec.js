// Test snapshots using: https://github.com/palmerhq/cypress-image-snapshot
// Run Cypress with --env updateSnapshots=true in order to update the base image files for all of your tests.

/// <reference types="cypress" />



describe('Test Google Trends', function() {
    before(() => {
        //cy.clearCookiesLocalStorage();
        cy.visit('https://trends.google.com');       
    })

    it('Compare two search trends for the year 2019', () => {
        // Open side navigation and check visible
        cy.get('.sidenav-container > md-icon').click()
        cy.get('md-sidenav', {timeout : 10000}).should('be.visible')

        // Select explore from side navigation        
        cy.get('.side-nav-bar-item-content > .fe-sidenav-menu-item-link > .md-button').contains('Explore').click()

        // Check search field and example charts are visible
        cy.get('.compare-term-container', {timeout : 10000}).should('be.visible')        
        cy.get('.carousel-wrapper', {timeout : 10000}).should('be.visible')    
        
        // Enter first search term and wait for sugestions to be visible then select enter
        cy.get('input').first().focus()
        cy.get('input').first().type('Selenium automation')
        cy.get('md-virtual-repeat-container', {timeout : 10000}).should('be.visible')
        cy.get('input').first().focus().type('{enter}')

        // Chart should be visible
        cy.get('.fe-line-chart-content > .fe-atoms-generic-content-container', {timeout : 10000}).should('be.visible')
                
        // Enter second search term and wait for sugestions to be visible then select enter
        cy.get('.add-term-button').click()

        cy.get('input').first().next().focused().type('Cypress.io automation')
        cy.get('.md-autocomplete-suggestions', {timeout : 10000}).should('be.visible')
        cy.get('input').first().next().focused().type('{enter}')
        
        // Chart should be visible
        cy.get('.fe-line-chart-content > .fe-atoms-generic-content-container', {timeout : 10000}).should('be.visible')

        // Select the 'Custom time range' option and wait for it to be visible
        cy.get('._md-text').contains('Custom time range').click({force: true})
        cy.get('md-tabs-content-wrapper', {timeout : 10000}).should('be.visible')

        // Select 'Full year' radio button
        cy.get('md-radio-button').first().next().click({force: true})

        // Select year option
        cy.get('md-select').first().click({force: true})
        cy.get('md-option').contains('2019').click({force: true})
        cy.get('button').contains('OK').click({force: true})

        // check charts visible
        cy.get('.line-chart', {timeout : 10000}).should('be.visible')
        cy.get('.bar-chart-content', {timeout : 10000}).should('be.visible')
                    
        // Check image snapshot of chart for 2019 with expected snapshot   
        cy.get('.fe-line-chart-content > .fe-atoms-generic-content-container', {timeout : 10000})
        .matchImageSnapshot({failureThreshold: 0.5, failureThresholdType: 'percent'})
        
        // Check for year selected
        cy.get('custom-date-picker', {timeout : 10000}).first().should('include.text', '2019')        
    })
})