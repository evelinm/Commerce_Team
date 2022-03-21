import React from 'react';
import { mount } from '@cypress/react';
import SortBy from '../Components/SortBy';

describe ('SortBy', () => {
   beforeEach('mounts component', () => {
       mount(<SortBy/>)
   })

   it('renders component', () => {
        cy.get("#sortBy").should('be.visible')
   })

   it('sorts first name in acs order', () => {
        cy.get('#sortBy').get('select').select('ascendingFirstName', {force: true}).should('have.value', 'ascendingFirstName')
    })
})