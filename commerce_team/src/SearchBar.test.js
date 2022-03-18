import  React from 'react';
import { mount } from '@cypress/react';
import SearchBar from './Components/SearchBar';

describe('SearchBar', () => {
    it('renders Search Bar', () => {
      mount(<SearchBar />)
      cy.get("#searchBar").should("exist") 
    })
})

describe('SearchBar functionality', ()=> {
    it('searches for name and name pops up', () => {
      mount(<SearchBar/>)
      cy.get('input#query')
      .type('Evel');
    })
})

