Cypress._.times(5, ()=>{


    describe('empty spec', () => {
      it('passes', () => {
        cy.visit('http://tableau-2021.zenoptics.com/#/signin')
        cy.get('[data-tb-test-id="username-TextInput"]').type('hruser')
        cy.get('[data-tb-test-id="password-TextInput"]').type('password1234')
        cy.get('[tb-test-id="button-signin"]').click()
        
        cy.get('[data-tb-test-id="list-item-Test Site1"]').click()
        
      //   cy.get('[data-tb-test-id="nav-panel"] > ul >:nth-child(9)').click()
      //   cy.get('[data-tb-test-id="tb-list-view"]> div> :nth-child(2)>div>div>div').eq(0)
      //  .contains('001Test Auto').click()
    
      //  cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)>div')
      //  .contains('Test worksheet auto')
      //  .click()
    
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/StrategicEnterpriseAccountProfile')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/Territory?:iid=3',)
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/SubAccts?:iid=1')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/AccountHierarchy?:iid=4')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/Elite?:iid=2')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/OEM?:iid=5')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/CAP?:iid=3')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ELA?:iid=6')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/Escalated?:iid=7')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/VC?:iid=4')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/TeamChurn?:iid=1')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/AM?:iid=2')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ESAM?:iid=4')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/CSM?:iid=5')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/CAPSAM?:iid=1')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/EliteTAMs?:iid=6')
       cy.wait(5000)
       cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/OEMPSEs?:iid=7')
       cy.wait(5000)
    
    
    
       
       
       
    
       
    
    
       
       
       
      //  cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)>div>div>div>[data-tb-test-id="name-cell"]>div>span')
      //  .each(($el)=>{
      //   cy.wrap($el)
      //   .contains('a')
      //   .should('be.visible').click({force:true})
      //    cy.wait(20000)
         
      //    cy.go('back')
      //    cy.wait(500)
      
      //  })
       
    
        
        // cy.get('.Home_create-button_fkyjiuy > div > .f1odzkbq').click()
        // cy.get('[data-tb-test-id="create-project-button"]').click()
        // cy.get('[data-tb-test-id="text-field-project-name-TextInput"]').type('project automation')
        // cy.get('[data-tb-test-id="text-area-project-description-TextArea"]').type('descritption automation')
        // cy.get('[data-tb-test-id="confirm-action-dialog-confirm-Button"]').click()
       
      })
    })
    })
    