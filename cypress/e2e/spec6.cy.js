// Cypress._.times(2, () => {


//     describe('empty spec', () => {
//       it('passes', () => {
//         cy.visit('http://tableau-2021.zenoptics.com/#/signin')
//         cy.get('[data-tb-test-id="username-TextInput"]').type('hruser')
//         cy.get('[data-tb-test-id="password-TextInput"]').type('password1234')
//         cy.get('[tb-test-id="button-signin"]').click()
  
//         cy.get('[data-tb-test-id="list-item-Test Site1"]').click()
  
//         //   cy.get('[data-tb-test-id="nav-panel"] > ul >:nth-child(9)').click()
//         //   cy.get('[data-tb-test-id="tb-list-view"]> div> :nth-child(2)>div>div>div').eq(0)
//         //  .contains('001Test Auto').click()
  
//         //  cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)>div')
//         //  .contains('Test worksheet auto')
//         //  .click()
  
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ProspectEngagement?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-PreviousYear?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-AllTime?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionOverTime?:iid=3')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ClosedSupportCases?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/P1SupportCases?:iid=4')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/LearnMore?:iid=3')
//         cy.wait(5000)
  
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ProspectEngagement?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-PreviousYear?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-AllTime?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionOverTime?:iid=3')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ClosedSupportCases?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/P1SupportCases?:iid=4')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/LearnMore?:iid=3')
//         cy.wait(5000)
  
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ProspectEngagement?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-PreviousYear?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-AllTime?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionOverTime?:iid=3')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ClosedSupportCases?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/P1SupportCases?:iid=4')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/LearnMore?:iid=3')
//         cy.wait(5000)
  
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ProspectEngagement?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-PreviousYear?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-AllTime?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionOverTime?:iid=3')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ClosedSupportCases?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/P1SupportCases?:iid=4')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/LearnMore?:iid=3')
//         cy.wait(5000)
  
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ProspectEngagement?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-PreviousYear?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-AllTime?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionOverTime?:iid=3')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ClosedSupportCases?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/P1SupportCases?:iid=4')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/LearnMore?:iid=3')
//         cy.wait(5000)
        
        
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ProspectEngagement?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-PreviousYear?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-AllTime?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionOverTime?:iid=3')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ClosedSupportCases?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/P1SupportCases?:iid=4')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/LearnMore?:iid=3')
//         cy.wait(5000)
  
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ProspectEngagement?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-PreviousYear?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionRate-AllTime?:iid=1')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/RetentionOverTime?:iid=3')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/ClosedSupportCases?:iid=2')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/P1SupportCases?:iid=4')
//         cy.wait(5000)
//         cy.visit('http://tableau-2021.zenoptics.com/#/site/TestSite1/views/AccountManagement/LearnMore?:iid=3')
//         cy.wait(5000)
  
  
  
  
  
  
  
  
  
//         //  cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)>div>div>div>[data-tb-test-id="name-cell"]>div>span')
//         //  .each(($el)=>{
//         //   cy.wrap($el)
//         //   .contains('a')
//         //   .should('be.visible').click({force:true})
//         //    cy.wait(20000)
  
//         //    cy.go('back')
//         //    cy.wait(500)
  
//         //  })
  
  
  
//         // cy.get('.Home_create-button_fkyjiuy > div > .f1odzkbq').click()
//         // cy.get('[data-tb-test-id="create-project-button"]').click()
//         // cy.get('[data-tb-test-id="text-field-project-name-TextInput"]').type('project automation')
//         // cy.get('[data-tb-test-id="text-area-project-description-TextArea"]').type('descritption automation')
//         // cy.get('[data-tb-test-id="confirm-action-dialog-confirm-Button"]').click()
  
//       })
//     })
//   })
  