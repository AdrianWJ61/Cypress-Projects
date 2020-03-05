"use strict"

// Test snapshots using: https://github.com/palmerhq/cypress-image-snapshot
// Run Cypress with --env updateSnapshots=true in order to update the base image files for all of your tests.

/// <reference types="cypress" />

import {GoogleTrendsPage} from '../../pageObjects/googleTrendsPage.js'


describe('Test Google Trends', function() {
    const googleTrendsPage = new GoogleTrendsPage()
    const SEARCH_ONE = 'Selenium automation'
    const SEARCH_TWO = 'Cypress.io automation'
    const YEAR = '2019'


    before(() => {
        googleTrendsPage.navigate()
    })

    it('Compare two search trends for the year 2019', () => {
        // Open side navigation and check visible
        googleTrendsPage.openSideNavigation()
        googleTrendsPage.checkSideNavigatioOpen()

        // Select explore from side navigation 
        googleTrendsPage.selectExplore()

        // Check search field and example charts are visible
        googleTrendsPage.searchFieldVisible()
        googleTrendsPage.exampleChartsVisible()
        
        // Enter first search term and wait for sugestions to be visible then select enter
        googleTrendsPage.enterFirstSearchQuery(SEARCH_ONE)
        googleTrendsPage.firstSearchSuggestionsVisable()
        googleTrendsPage.selectEnterFirstSearch()

        // Chart should be visible
        googleTrendsPage.searchResultChartVisible()
                
        // Enter second search term and wait for sugestions to be visible then select enter
        googleTrendsPage.clickOnSecondSearch()
        googleTrendsPage.enterSecondSearchQuery(SEARCH_TWO)
        googleTrendsPage.secondSearchSuggestionsVisible()
        googleTrendsPage.selectEnterSecondSearch()
        
        // Chart should be visible
        googleTrendsPage.searchResultChartVisible()

        // Select the 'Custom time range' option and wait for it to be visible
        googleTrendsPage.selectCustomTimeRange()
        googleTrendsPage.customTimeRangeOptionsVisible()

        // Select year
        googleTrendsPage.selectFullYearOption()
        googleTrendsPage.selectYearChooser()
        googleTrendsPage.selectYearAndOk(YEAR)

        // check charts visible
        googleTrendsPage.checkYearChartsVisible()
                    
        // Check image snapshot of chart for 2019 with expected snapshot   
        googleTrendsPage.checkYearChartSnapshot()
        
        // Check for year selected
        googleTrendsPage.checkCorrectYearSelected(YEAR)
    })
})