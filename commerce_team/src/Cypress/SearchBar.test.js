import  React from 'react';
import { mount } from '@cypress/react';
import SearchBar from '../Components/SearchBar';

describe('Search Bar', () => {
  beforeEach('mounts component', () => {
    mount(<SearchBar />)
  })

  it('renders Search Bar', () => {
    cy.get("#searchBar").should('be.visible') 
  })

  it('searches for name and name pops up', () => {
    cy.contains('div','Customer Search').find('input#query').should('be.visible').type("Evelin Murillo", {force: true})
  })

})

