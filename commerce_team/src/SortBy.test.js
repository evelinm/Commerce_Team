import React from 'react';
import { mount } from '@cypress/react';
import SortBy from '../src/Components/SortBy';

describe ('SortBy', () => {
    it('renders SortBy', () => {
        mount(<SortBy/>)
        cy.get("#sortBy").should("exisit")
    })
})