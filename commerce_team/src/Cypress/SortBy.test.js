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
})

// describe('Sorts by functionality', () => {
//     it('sorts first name in acs order ', () => {
//         mount(<SortBy/>)
        
//     })
// })
