/// <reference types="Cypress" />
import data from "../fixtures/tableauviews.json";
Cypress._.times(1, () => {
  describe("Tableau", () => {
    it("View Reports", () => {
      cy.visit("http://tableau-2021.zenoptics.com/#/signin"); //Login Url
      cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
      cy.selectSite(data.testSite.Name); //Select Site.
      cy.goToExplore(); //Goto Explore.
      cy.projectName(data.project.Name); //Provide name of the project
      cy.workbookName(data.workbook.Name); //Provide name of the workbook.
      cy.openReports(); //iterate through reports.
    });
  });
});
