/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'

const contentUrl = faker.system.commonFileType();
    const siteName = faker.company.companySuffix();
    const projectName = faker.company.name()
    const workbookName = faker.system.fileExt()
    const reportName = faker.commerce.product()
    import data from "../fixtures/tableauviews.json";
    
    
describe("login", () => {

  it('create ', () => {
    // Login to the Tableau Server UI
    cy.visit(data.url.tableau2021); //Login Url
    cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
    //cy.selectSite(data.testSite.Name)
    cy.wait(1000)
cy.visit('http://tableau-2021.zenoptics.com/t/application/authoring/Chemicals/Sheet1#3')

const numReports = 150; // set the number of reports to create

for (let i = 0; i < numReports; i++) {
  // create a duplicate report and rename it
  cy.get('.tabAuthTabNavTabContainer > span')
    .eq(0)
    .rightclick()
    .get('.tabMenuContent>:nth-child(5)')
    .click()
    .wait(2000)
    .get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
    .should('be.visible')
    .find('input')
    .dblclick({ force: true })
    .blur()
    .type(faker.company.catchPhraseDescriptor());
    cy.get('body').click();
}
cy.get('.fqcm03j').click()
    
})
});
