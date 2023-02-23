// <reference types="Cypress" />
import data from "../fixtures/tableauviews.json";

// Array of site names
const siteNames = [
    "Acuity Analytics",
    "Precision Insights",
    "Agile Solutions",
    "Global Strategies",
    "InnovateWorks",
    "Ascend Enterprises",
    "Pinnacle Partners",
    "Insightful Intelligence",
    "Horizon Ventures",
    "Nimble Innovations",
    "Echelon Solutions",
    "Zenith Group",
    ]

// Loop through each site and create 3 projects with 3 workbooks each
siteNames.forEach((siteName) => {
  describe(`Create Tableau Server views for ${siteName}`, () => {
    it("should create projects and workbooks", () => {
      // Login to the Tableau Server UI
      cy.visit(data.url.tableau2021); // Login Url
      cy.loginToTableau(data.credentials.username,data.credentials.password); // Credentials.
      
      // Create site
      cy.get('[data-tb-test-id="action-create-new-site-Button"]').click();
      cy.get('[data-tb-test-id="site-name-TextInput"]').type(siteName);
      cy.get(
        '[data-tb-test-id="confirm-action-dialog-confirm-Button"]'
      ).click();
      cy.wait(3000);
      
      // Go to the newly created site
      cy.contains(siteName).click();
      
      // Loop through each project and create 3 workbooks
      for (let i = 1; i <= 3; i++) {
        const projectName = `${siteName} ${i}th Quarter`;
        
        // Create project
        cy.get('[data-tb-test-id="explorer-create-content-MenuButton"]').click();
        cy.get('[data-tb-test-id="create-project-button"]').click();
        cy.get('[data-tb-test-id="text-field-project-name-TextInput"]').type(projectName);
        cy.get('[data-tb-test-id="confirm-action-dialog-confirm-Button"]').click();
        cy.wait(4000);
        
        // Loop through each workbook and upload it to the project
        for (let j = 1; j <= 3; j++) {
          const fileName = `workbook${((i - 1) * 3) + j}.twbx`;
          const filePath = `C:/tab-automation/tabl-parllel/cypress/fixtures/${fileName}`;
          
          // Click New button
          cy.get('[data-tb-test-id="explorer-create-content-MenuButton"]').click();
          cy.get('[data-tb-test-id="create-workbookUpload-button"]').click();
          
          // Choose a file
          cy.get('[data-tb-test-id="upload-workbook-input-file-id"]').selectFile(filePath, { force: true });
          
          // Select the project
          cy.get('[data-tb-test-id="upload-workbook-dialog-project"]').click();
          cy.get('div[data-tb-test-id="DropdownOverlay-Root"]').contains(projectName).click({ force: true });
          
          // Upload and publish the workbook
          cy.get('[data-tb-test-id="upload-workbook-dialog-submit-Button"]').click();
          cy.wait(10000);
        }
      }
    });
  });
});
