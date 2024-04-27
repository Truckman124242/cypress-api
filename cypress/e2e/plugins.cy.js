/// <reference types="cypress" />
describe('Plugins', () => {
    it('cy-api plugin', () => {

        cy.api({
            url: '/users'
        }).its('body[0].name').should('eq', 'Leanne Graham');

        cy.api({
            url: '/posts'
        })

        cy.api({
            url: '/comments'
        })

    })

})