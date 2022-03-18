

describe('Main component', function(){
    it('renders search bar ', function(){
       cy.visit('http://localhost:3001/?')
       cy.get("#searchBar").should("exist")

   
})
})
