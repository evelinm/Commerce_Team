import  React from 'react';
import { mount } from '@cypress/react';
import SearchBar from '../../src/Components/SearchBar';

describe('SearchBar', () => {
    it('renders the todo list', () => {
    // cy.visit('http://localhost:3001/?')
      mount(<SearchBar />)
      // cy.get('a').contains('Learn React')
      cy.get("#searchBars").should("exist") 
    })


})
