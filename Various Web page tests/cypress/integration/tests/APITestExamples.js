"use strict"
/// <reference types="cypress" />

// Using the following URL to test simple HTTP Request & Response : httpbin.org/


describe('API Tests', function() {

    it('GET request', () => {
        cy.request('http://httpbin.org/get')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('origin')
            expect(response.body).to.have.property('url', 'http://httpbin.org/get')
        })
     })

     it('POST request', () => {
        cy.request({
            method : 'POST',
            url :  'http://httpbin.org/post',
            headers : {
                'content-type' : 'applicatio/json'
            },
            body : {
                'age' : 27,
                'name' : 'Test'
            }
        })    
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('json')
            expect(response.body.json).to.have.property('name')
            expect(response.body.json).to.deep.equal({'age' : 27, 'name' : 'Test'})
        })
     })
})