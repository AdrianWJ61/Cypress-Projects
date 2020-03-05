"use strict";

export class GoogleTrendsPage {
    navigate() {
        cy.visit('https://trends.google.com')
    }

    openSideNavigation() {
        cy.get('.sidenav-container > md-icon').click()
    }

    checkSideNavigatioOpen() {
        cy.get('md-sidenav', {timeout : 10000}).should('be.visible')
    }

    selectExplore() {
        cy.get('.side-nav-bar-item-content > .fe-sidenav-menu-item-link > .md-button').contains('Explore').click()
    }

    searchFieldVisible() {
        cy.get('.compare-term-container', {timeout : 10000}).should('be.visible')
    }

    exampleChartsVisible() {
        cy.get('.carousel-wrapper', {timeout : 10000}).should('be.visible')
    }

    enterFirstSearchQuery(searchFirst) {
        cy.get('input').first().focus()
        cy.get('input').first().type(searchFirst)
    }

    firstSearchSuggestionsVisable() {
        cy.get('md-virtual-repeat-container', {timeout : 10000}).should('be.visible')
    }

    selectEnterFirstSearch() {
        cy.get('input').first().focus().type('{enter}')
    }

    searchResultChartVisible() {
        cy.get('.fe-line-chart-content > .fe-atoms-generic-content-container', {timeout : 10000}).should('be.visible')
    }

    clickOnSecondSearch() {
        cy.get('.add-term-button').click()
    }

    enterSecondSearchQuery(searchSecond) {
        cy.get('input').first().next().focused().type(searchSecond)
    }

    secondSearchSuggestionsVisible() {
        cy.get('.md-autocomplete-suggestions', {timeout : 10000}).should('be.visible')
    }

    selectEnterSecondSearch() {
        cy.get('input').first().next().focused().type('{enter}')
    }
    
    selectCustomTimeRange() {
        cy.get('._md-text').contains('Custom time range').click({force: true})
    }

    customTimeRangeOptionsVisible() {
        cy.get('md-tabs-content-wrapper', {timeout : 10000}).should('be.visible')
    }

    selectFullYearOption() {
        cy.get('md-radio-button').first().next().click({force: true})
    }

    selectYearChooser(){
        cy.get('md-select').first().click({force: true})
    }

    selectYearAndOk(yearEntered) {
        cy.get('md-option').contains(yearEntered).click({force: true})
        cy.get('button').contains('OK').click({force: true})  
    }

    checkYearChartsVisible() {
        cy.get('.line-chart', {timeout : 10000}).should('be.visible')
        cy.get('.bar-chart-content', {timeout : 10000}).should('be.visible')
    }

    checkYearChartSnapshot() {
        cy.get('.fe-line-chart-content > .fe-atoms-generic-content-container', {timeout : 10000})
        .matchImageSnapshot({failureThreshold: 0.5, failureThresholdType: 'percent'})
    }

    checkCorrectYearSelected(yearSelected) {
        cy.get('custom-date-picker', {timeout : 10000}).first().should('include.text', yearSelected)
    }
}