Cypress._.times(1, () => {


    describe('empty spec', () => {
      it('passes', () => {
        cy.visit('http://tableau-2021.zenoptics.com/#/signin')
        cy.get('[data-tb-test-id="username-TextInput"]').type('hruser')
        cy.get('[data-tb-test-id="password-TextInput"]').type('password1234')
        cy.get('[tb-test-id="button-signin"]').click()
  
        cy.get('[data-tb-test-id="list-item-Test Site1"]').click()
  
          cy.get('[data-tb-test-id="nav-panel"] > ul >:nth-child(9)').click()
          cy.get('[data-tb-test-id="tb-list-view"]> div> :nth-child(2)>div>div>div').eq(0)
         .contains('001Test Auto').click()
  
         cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)>div')
         .contains('Test worksheet auto')
         .click()
  
         cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)')
         .scrollTo("center");

       cy.wait(2500)
         const texts = []

         cy.get('[data-tb-test-id="metrics-cell-bars"]').each(($el) => {
           cy.wrap($el)
             .invoke('text')
             .then((text) => {
               texts.push(text);
             });
         });
         
         const total = texts.reduce((accumulator, currentValue) => {
           return +accumulator + parseInt(+currentValue);
         }, 0);
         console.log(total)
         cy.log(total);
       
  
      
  
  
        
        
  
  
  
        })
  
        
    })
  })
  
