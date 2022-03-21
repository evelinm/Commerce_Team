import React from 'react';
import { mount } from '@cypress/react';
import DropDownMenu from '../Components/DropDownMenu';

describe('Comapny DropDownMenu', () => {
    beforeEach('mounts component', () => {
        mount(<DropDownMenu/>)
    })
  
    it('renders dropdown bar', () => {
        cy.get('#companyDropDown').should('be.visible')
    })

    it('shows all companys', () => {
        cy.get('#companyDropDown').click({force: true}).get('#dropDownSelector').should('be.visible')
    })
   
  })
