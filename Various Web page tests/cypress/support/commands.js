// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@4tw/cypress-drag-drop'

Cypress.Commands.add(
    'iframeLoaded',
    { prevSubject: 'element' },
    ($iframe) => {
      const contentWindow = $iframe.prop('contentWindow')
      return new Promise(resolve => {
        if (
          contentWindow &&
          contentWindow.document.readyState === 'complete'
        ) {
          resolve(contentWindow)
        } else {
          $iframe.on('load', () => {
            resolve(contentWindow)
          })
        }
      })
    })
  
  Cypress.Commands.add(
    'getInDocument',
    { prevSubject: 'document' },
    (document, selector) => Cypress.$(selector, document)
  )

  
// cypress/support/commands.js
// remove this when issue will be solved
// https://github.com/cypress-io/cypress/issues/781
// https://github.com/cypress-io/cypress/issues/408
  Cypress.Commands.add('clearCookiesLocalStorage', () => {
    cy.clearCookies({ domain: null });
    cy.clearLocalStorage();
  })