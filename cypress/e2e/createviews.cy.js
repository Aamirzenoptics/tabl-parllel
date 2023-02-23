/// <reference types="Cypress" />
import data from "../fixtures/tableauviews.json";
describe('Create Tableau Server Views', () => {
    it('create ', () => {
      // Login to the Tableau Server UI
      cy.visit(data.url.tableau2021); //Login Url
      cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
      cy.selectSite(data.testSite.Name)
      cy.visit('http://tableau-2021.zenoptics.com/#/server/sites')
      //create Site
      cy.get('[data-tb-test-id="action-create-new-site-Button"]').click()
      //enter site name
      cy.get('[data-tb-test-id="site-name-TextInput"]').type('sitename7')
      //create site
      cy.get('[data-tb-test-id="confirm-action-dialog-confirm-Button"]').click()
      cy.wait(3000)
      //goto the newly created site
      cy.contains('sitename7').click()
      //create a project
      cy.get('[data-tb-test-id="explorer-create-content-MenuButton"]').click()
      cy.get('[data-tb-test-id="create-project-button"]').click()
      //Name of project.
      cy.get('[data-tb-test-id="text-field-project-name-TextInput"]').type('ProjectName2')
      //save the project.
      cy.get('[data-tb-test-id="confirm-action-dialog-confirm-Button"]').click()
      cy.wait(4000)

      //click one New button.
      cy.get('[data-tb-test-id="explorer-create-content-MenuButton"]')
      .click()
      //select upload workbook
      cy.get('[data-tb-test-id="create-workbookUpload-button"]').click()
      //choose a file.
      cy.get('[data-tb-test-id="upload-workbook-input-file-id"]').selectFile('C:/tab-automation/tabl-parllel/cypress/fixtures/Chapter 2 - Basic Visualizations.twbx', { force: true })
    //select the project
    cy.get('[data-tb-test-id="upload-workbook-dialog-project"]').click()
    cy.get('div[data-tb-test-id="DropdownOverlay-Root"]').contains('ProjectName2').click({force: true})
    
      //upload and publish the workbook.
    cy.get('[data-tb-test-id="upload-workbook-dialog-submit-Button"]').click()
    cy.wait(10000)
    cy.go('back')

      

  
      // Loop through the 12 sites
    //   const siteNames = [      'DataVision',      'InsightLab',      'AnalyticsHub',      'PerformanceHQ',      'VisualIQ',      'StrategyWorks',      'DecisionForge',      'ActionableInsight',      'OptimizeNation',      'OutcomeMastery',      'DataStrategyLab',      'VisionaryAnalytics'    ]
    //   siteNames.forEach((siteName) => {
    //     // Navigate to the site
    //     cy.get('#sitesListDropdown').click()
    //     cy.contains(siteName).click()
  
    //     // Loop through the 34 projects per site (total of 408 projects)
    //     for (let i = 1; i <= 34; i++) {
    //       // Loop through the 2 workbooks per project (total of 816 workbooks)
    //       for (let j = 1; j <= 2; j++) {
    //         // Create 5 views per workbook (total of 2000 views)
    //         for (let k = 1; k <= 5; k++) {
    //           const viewName = `${siteName}-Project${i}-Workbook${j}-View${k}`
    //           cy.get('.twb-add-worksheet').click()
    //           cy.get('.twb-sheet-header')
    //             .last()
    //             .dblclick()
    //           cy.get('.editable-title')
    //             .last()
    //             .type(viewName)
    //           cy.get('.viz-refresh')
    //             .last()
    //             .click()
    //         }
    //       }
    //     }
    //   })
    })
  })
  






  // <reference types="Cypress" />





